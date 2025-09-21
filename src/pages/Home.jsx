import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SafeIcon from '../common/SafeIcon';
import SEOHelmet from '../components/SEOHelmet';
import { processInstagramUrl } from '../services/api';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiPlay, FiClock, FiCheckCircle, FiAlertCircle } = FiIcons;

const Home = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateUrl = (url) => {
    const patterns = [
      /^https?:\/\/(www\.)?instagram\.com\/reel\/[A-Za-z0-9_-]+/,
      /^https?:\/\/(www\.)?instagram\.com\/p\/[A-Za-z0-9_-]+/,
      /^https?:\/\/(www\.)?instagram\.com\/tv\/[A-Za-z0-9_-]+/
    ];
    
    return patterns.some(pattern => pattern.test(url));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast.error('Por favor, cole o link do Instagram');
      return;
    }

    if (!validateUrl(url)) {
      toast.error('Link do Instagram inválido. Use links de Reels, posts ou IGTV.');
      return;
    }

    setIsLoading(true);
    
    try {
      const result = await processInstagramUrl(url);
      
      if (result.success) {
        toast.success('Vídeo processado com sucesso!');
        navigate('/result', { 
          state: { 
            mediaData: result.data,
            originalUrl: url 
          } 
        });
      } else {
        throw new Error('Falha ao processar o vídeo');
      }
    } catch (error) {
      console.error('Error processing URL:', error);
      toast.error(error.message || 'Erro ao processar o link. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const recentReels = [
    {
      id: 1,
      title: 'Receita de Brigadeiro Gourmet',
      user: '@chefmariana',
      thumbnail: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Treino de 5 minutos em casa',
      user: '@fitnessbrasil',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Dicas de maquiagem natural',
      user: '@belezanatural',
      thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Paisagem incrível do Brasil',
      user: '@viagembrasil',
      thumbnail: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&h=300&fit=crop'
    }
  ];

  return (
    <>
      <SEOHelmet 
        title="ReelsDown - Baixar Instagram Reels Grátis"
        description="Baixe Instagram Reels rapidamente e gratuitamente. Ferramenta online segura para download de vídeos do Instagram em HD."
        keywords="instagram reels download, baixar reels, download instagram video, reels downloader"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <SafeIcon icon={FiDownload} className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Baixar Instagram Reels
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Cole o link do seu Reels favorito e baixe instantaneamente. 
            Rápido, fácil e gratuito!
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <SafeIcon icon={FiCheckCircle} className="text-green-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">100% Gratuito</h3>
            <p className="text-gray-600 text-sm">Sem taxas ou assinaturas</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <SafeIcon icon={FiDownload} className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Alta Qualidade</h3>
            <p className="text-gray-600 text-sm">Downloads em HD</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <SafeIcon icon={FiAlertCircle} className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Seguro</h3>
            <p className="text-gray-600 text-sm">Sem vírus ou malware</p>
          </div>
        </div>

        {/* Download Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                  Cole o link do Instagram Reels aqui:
                </label>
                <input
                  type="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://www.instagram.com/reel/..."
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !url.trim()}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold py-4 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Processando...</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiDownload} className="text-xl" />
                    <span>Baixar Reels</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3">Como usar:</h3>
            <ol className="text-blue-800 space-y-2 text-sm">
              <li>1. Abra o Instagram e encontre o Reels que deseja baixar</li>
              <li>2. Toque nos três pontos (...) e selecione "Copiar link"</li>
              <li>3. Cole o link no campo acima</li>
              <li>4. Clique em "Baixar Reels" e aguarde o processamento</li>
            </ol>
          </div>
        </div>

        {/* Recent Reels Section */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <SafeIcon icon={FiClock} className="text-purple-500 text-xl mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Exemplos de Reels</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentReels.map((reel) => (
              <div key={reel.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <SafeIcon icon={FiPlay} className="text-white text-3xl" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">
                    {reel.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{reel.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-4xl mx-auto mt-16 bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="text-center">
            <h3 className="font-semibold text-green-800 mb-2">✅ Ferramenta Confiável</h3>
            <p className="text-green-700 text-sm mb-2">
              <strong>Mais de 100.000 downloads realizados com segurança</strong>
            </p>
            <p className="text-green-600 text-sm">
              Respeitamos os direitos autorais. Use apenas para conteúdo próprio ou com permissão.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;