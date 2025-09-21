import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Rate limiting
const rateLimiter = new RateLimiterMemory({
  keyGenerator: (req) => req.ip,
  points: 10, // Number of requests
  duration: 60, // Per 60 seconds
});

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.static(join(__dirname, '../dist')));

// Rate limiting middleware
const rateLimitMiddleware = async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (rejRes) {
    res.status(429).json({
      error: 'Muitas tentativas. Tente novamente em alguns minutos.',
      retryAfter: Math.round(rejRes.msBeforeNext / 1000) || 1,
    });
  }
};

// Validate Instagram URL
const validateInstagramUrl = (url) => {
  const patterns = [
    /^https?:\/\/(www\.)?instagram\.com\/reel\/[A-Za-z0-9_-]+/,
    /^https?:\/\/(www\.)?instagram\.com\/p\/[A-Za-z0-9_-]+/,
    /^https?:\/\/(www\.)?instagram\.com\/tv\/[A-Za-z0-9_-]+/
  ];
  
  return patterns.some(pattern => pattern.test(url));
};

// Extract Instagram media info
const getInstagramMediaInfo = async (url) => {
  try {
    // Clean URL
    const cleanUrl = url.split('?')[0];
    
    // Add embed suffix to get JSON data
    const embedUrl = `${cleanUrl}embed/captioned/`;
    
    const response = await fetch(embedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram data');
    }

    const html = await response.text();
    
    // Extract JSON data from script tag
    const scriptMatch = html.match(/window\.__additionalDataLoaded\('extra',({.*?})\);/);
    if (!scriptMatch) {
      throw new Error('Could not extract media data');
    }

    const data = JSON.parse(scriptMatch[1]);
    const mediaData = data.graphql?.shortcode_media;

    if (!mediaData) {
      throw new Error('Media not found');
    }

    // Extract video URL
    let videoUrl = null;
    let thumbnailUrl = mediaData.display_url;
    let title = mediaData.edge_media_to_caption?.edges?.[0]?.node?.text || 'Instagram Reel';
    let username = mediaData.owner?.username || 'unknown';

    if (mediaData.is_video && mediaData.video_url) {
      videoUrl = mediaData.video_url;
    } else if (mediaData.edge_sidecar_to_children?.edges) {
      // Handle carousel posts
      const videoChild = mediaData.edge_sidecar_to_children.edges.find(
        edge => edge.node.is_video
      );
      if (videoChild) {
        videoUrl = videoChild.node.video_url;
        thumbnailUrl = videoChild.node.display_url;
      }
    }

    if (!videoUrl) {
      throw new Error('No video found in this post');
    }

    return {
      videoUrl,
      thumbnailUrl,
      title: title.substring(0, 100) + (title.length > 100 ? '...' : ''),
      username,
      duration: mediaData.video_duration || 0,
      viewCount: mediaData.video_view_count || 0
    };

  } catch (error) {
    console.error('Error extracting Instagram media:', error);
    throw new Error('Falha ao processar o link do Instagram. Verifique se o link está correto e se o post é público.');
  }
};

// API Routes
app.post('/api/process-url', rateLimitMiddleware, async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        error: 'URL é obrigatória'
      });
    }

    if (!validateInstagramUrl(url)) {
      return res.status(400).json({
        error: 'URL do Instagram inválida. Use links de Reels, posts ou IGTV.'
      });
    }

    const mediaInfo = await getInstagramMediaInfo(url);
    
    // Generate download token for security
    const downloadToken = Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
    
    // Store media info temporarily (in production, use Redis or database)
    global.mediaCache = global.mediaCache || new Map();
    global.mediaCache.set(downloadToken, {
      ...mediaInfo,
      timestamp: Date.now()
    });

    // Clean old entries (older than 1 hour)
    const oneHour = 60 * 60 * 1000;
    for (const [key, value] of global.mediaCache.entries()) {
      if (Date.now() - value.timestamp > oneHour) {
        global.mediaCache.delete(key);
      }
    }

    res.json({
      success: true,
      data: {
        title: mediaInfo.title,
        username: mediaInfo.username,
        thumbnailUrl: mediaInfo.thumbnailUrl,
        duration: mediaInfo.duration,
        viewCount: mediaInfo.viewCount,
        downloadToken
      }
    });

  } catch (error) {
    console.error('Process URL error:', error);
    res.status(500).json({
      error: error.message || 'Erro interno do servidor'
    });
  }
});

app.get('/api/download/:token', rateLimitMiddleware, async (req, res) => {
  try {
    const { token } = req.params;
    
    if (!global.mediaCache || !global.mediaCache.has(token)) {
      return res.status(404).json({
        error: 'Token de download inválido ou expirado'
      });
    }

    const mediaInfo = global.mediaCache.get(token);
    
    // Fetch video
    const videoResponse = await fetch(mediaInfo.videoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.instagram.com/'
      }
    });

    if (!videoResponse.ok) {
      throw new Error('Failed to fetch video');
    }

    // Set headers for download
    const filename = `instagram_reel_${mediaInfo.username}_${Date.now()}.mp4`;
    
    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Cache-Control', 'no-cache');
    
    // Stream video to response
    videoResponse.body.pipe(res);
    
    // Clean up token after use
    global.mediaCache.delete(token);

  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({
      error: 'Erro ao fazer download do vídeo'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});