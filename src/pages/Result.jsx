import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SafeIcon from '../common/SafeIcon';
import SEOHelmet from '../components/SEOHelmet';
import { downloadVideo } from '../services/api';
import * as FiIcons from 'react-icons/fi';

const { FiDownload, FiArrowLeft, FiCheck, FiShare2, FiEye, FiClock } = FiIcons;

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const mediaData = location.state?.mediaData;
  const originalUrl = location.state?.originalUrl;

  useEffect(() => {
    if (!mediaData) {
      toast.error('Dados do vídeo não encontrados');
      navigate('/');
    }
  }, [mediaData, navigate]);

  if (!mediaData) {
    return null;
  }

  const handleDownload = async () => {
    if (!mediaData.downloadToken) {
      toast.error('Token de download não encontrado');
      return;
    }

    setIsDownloading(true);
    
    try {
      await downloadVideo(mediaData.downloadToken);
      setIsDownloaded(true);
      toast.success('Download iniciado com sucesso!');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsDownloaded(false);
      }, 5000);
    } catch (error) {
      console.error('Download error:', error);
      toast.error(error.message || 'Erro ao fazer download do vídeo');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ReelsDown - Baixar Instagram Reels',
          text: 'Baixei este Reels usando o ReelsDown!',
          url: window.location.origin
        });
      } catch (error) {
        // User cancelled sharing
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.origin);
        toast.success('Link copiado para a área de transferência!');
      } catch (error) {
        toast.error('Não foi possível compartilhar');
      }
    }
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatViewCount = (count) => {
    if (!count) return '0';
    if (count < 1000) return count.toString();
    if (count < 1000000) return `${(count / 1000).toFixed(1)}K`;
    return `${(count / 1000000).toFixed(1)}M`;
  };

  return (
    <>
      <SEOHelmet 
        title="Download Pronto - ReelsDown"
        description="Seu vídeo do Instagram está pronto para download. Baixe agora em alta qualidade."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="mr-2" />
            Voltar para início
          </Link>

          {/* Result Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Video Preview */}
            <div className="relative">
              <img
                src={mediaData.thumbnailUrl}
                alt="Preview do Reels"
                className="w-full h-80 object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-4">
                  <SafeIcon icon={FiDownload} className="text-purple-500 text-3xl" />
                </div>
              </div>
              
              {/* Duration overlay */}
              {mediaData.duration > 0 && (
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center">
                  <SafeIcon icon={FiClock} className="mr-1 text-xs" />
                  {formatDuration(mediaData.duration)}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {mediaData.title} - @{mediaData.username}
              </h2>
              
              {/* Stats */}
              {mediaData.viewCount > 0 && (
                <div className="flex items-center text-gray-500 mb-4">
                  <SafeIcon icon={FiEye} className="mr-2" />
                  <span className="text-sm">{formatViewCount(mediaData.viewCount)} visualizações</span>
                </div>
              )}
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Formato:</span>
                  <span className="font-medium">MP4</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Qualidade:</span>
                  <span className="font-medium">HD (Original)</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Duração:</span>
                  <span className="font-medium">{formatDuration(mediaData.duration)}</span>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-semibold py-4 px-8 rounded-xl hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 flex items-center justify-center space-x-2 mb-4"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Baixando...</span>
                  </>
                ) : isDownloaded ? (
                  <>
                    <SafeIcon icon={FiCheck} className="text-xl" />
                    <span>Download Iniciado!</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiDownload} className="text-xl" />
                    <span>Baixar MP4</span>
                  </>
                )}
              </button>

              {/* Share Button */}
              <button 
                onClick={handleShare}
                className="w-full bg-gray-100 text-gray-700 text-lg font-semibold py-3 px-8 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiShare2} className="text-xl" />
                <span>Compartilhar ReelsDown</span>
              </button>
            </div>
          </div>

          {/* Success Message */}
          {isDownloaded && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center text-green-800">
                <SafeIcon icon={FiCheck} className="text-xl mr-2" />
                <div>
                  <span className="font-medium block">Download iniciado com sucesso!</span>
                  <span className="text-sm text-green-600">O arquivo deve aparecer na sua pasta de downloads.</span>
                </div>
              </div>
            </div>
          )}

          {/* Legal Notice */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="text-center">
              <h3 className="font-semibold text-blue-800 mb-2">📋 Aviso Legal</h3>
              <p className="text-blue-700 text-sm mb-2">
                <strong>Respeite os direitos autorais</strong>
              </p>
              <p className="text-blue-600 text-sm">
                Use apenas para conteúdo próprio ou com permissão do criador. 
                O ReelsDown não se responsabiliza pelo uso indevido do conteúdo baixado.
              </p>
            </div>
          </div>

          {/* Try Another */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center bg-purple-100 text-purple-700 px-6 py-3 rounded-xl hover:bg-purple-200 transition-colors"
            >
              Baixar outro Reels
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;