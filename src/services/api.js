import axios from 'axios';

const API_BASE_URL = import.meta.env.PROD 
  ? '/api' 
  : 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 429) {
      throw new Error('Muitas tentativas. Aguarde alguns minutos antes de tentar novamente.');
    }
    
    if (error.response?.status >= 500) {
      throw new Error('Erro interno do servidor. Tente novamente mais tarde.');
    }
    
    if (error.code === 'ECONNABORTED') {
      throw new Error('Tempo limite excedido. Tente novamente.');
    }
    
    throw error;
  }
);

export const processInstagramUrl = async (url) => {
  try {
    const response = await api.post('/process-url', { url });
    return response.data;
  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};

export const downloadVideo = async (token) => {
  try {
    const response = await api.get(`/download/${token}`, {
      responseType: 'blob'
    });
    
    // Create download link
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.download = `instagram_reel_${Date.now()}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Erro ao fazer download do vídeo');
  }
};

export const checkHealth = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    throw new Error('Serviço indisponível');
  }
};