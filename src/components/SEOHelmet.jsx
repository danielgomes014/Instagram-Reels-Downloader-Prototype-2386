import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ 
  title = "ReelsDown - Baixar Instagram Reels Grátis", 
  description = "Baixe Instagram Reels rapidamente e gratuitamente. Ferramenta online segura para download de vídeos do Instagram em HD.",
  keywords = "instagram, reels, download, baixar, vídeo, grátis, online",
  canonicalUrl = "",
  ogImage = "/og-image.jpg"
}) => {
  const fullTitle = title.includes('ReelsDown') ? title : `${title} | ReelsDown`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      <meta name="author" content="ReelsDown" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="ReelsDown" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional SEO tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=no" />
    </Helmet>
  );
};

export default SEOHelmet;