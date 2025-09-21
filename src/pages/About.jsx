import React from 'react';
import SafeIcon from '../common/SafeIcon';
import SEOHelmet from '../components/SEOHelmet';
import * as FiIcons from 'react-icons/fi';

const { FiInfo, FiShield, FiCode, FiDownload, FiCheck } = FiIcons;

const About = () => {
  return (
    <>
      <SEOHelmet 
        title="Sobre o ReelsDown - Baixador de Instagram Reels"
        description="Conheça o ReelsDown, a ferramenta mais confiável para baixar Instagram Reels gratuitamente. Seguro, rápido e fácil de usar."
        keywords="sobre reelsdown, instagram downloader, como funciona, seguro, confiável"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <SafeIcon icon={FiInfo} className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sobre o ReelsDown
            </h1>
            <p className="text-gray-600 text-lg">
              A ferramenta mais confiável para baixar Instagram Reels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiShield} className="text-green-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Seguro e Confiável</h3>
              </div>
              <p className="text-gray-600">
                Utilizamos tecnologia avançada para garantir downloads seguros. 
                Sem vírus, malware ou software malicioso.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiDownload} className="text-purple-500 text-2xl mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Alta Qualidade</h3>
              </div>
              <p className="text-gray-600">
                Baixe vídeos na qualidade original, mantendo toda a nitidez 
                e definição do conteúdo do Instagram.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">O que é o ReelsDown?</h2>
            
            <div className="space-y-6 text-gray-600">
              <p>
                O ReelsDown é uma ferramenta online gratuita que permite baixar vídeos 
                do Instagram Reels de forma rápida e segura. Nossa plataforma foi 
                desenvolvida para oferecer a melhor experiência possível aos usuários.
              </p>

              <p>
                <strong>Nossa missão:</strong> Facilitar o acesso ao conteúdo do Instagram 
                de forma legal e respeitosa, sempre considerando os direitos autorais 
                e a privacidade dos criadores.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                Por que escolher o ReelsDown?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="text-green-500 mr-2 mt-1" />
                  <span>100% gratuito, sem taxas ocultas</span>
                </div>
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="text-green-500 mr-2 mt-1" />
                  <span>Interface moderna e responsiva</span>
                </div>
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="text-green-500 mr-2 mt-1" />
                  <span>Downloads em alta qualidade</span>
                </div>
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="text-green-500 mr-2 mt-1" />
                  <span>Processo rápido e simples</span>
                </div>
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="text-green-500 mr-2 mt-1" />
                  <span>Sem necessidade de cadastro</span>
                </div>
                <div className="flex items-start">
                  <SafeIcon icon={FiCheck} className="text-green-500 mr-2 mt-1" />
                  <span>Compatível com todos os dispositivos</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                Tecnologias Utilizadas:
              </h3>
              
              <ul className="list-disc list-inside space-y-2">
                <li>React.js para interface do usuário moderna</li>
                <li>Node.js e Express para backend robusto</li>
                <li>Tailwind CSS para design responsivo</li>
                <li>APIs seguras para processamento de vídeos</li>
                <li>Criptografia para proteção de dados</li>
                <li>CDN para downloads rápidos</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                Como Funciona:
              </h3>
              
              <ol className="list-decimal list-inside space-y-2">
                <li>Você cola o link do Instagram Reels no campo de entrada</li>
                <li>Nosso sistema analisa o link e extrai as informações do vídeo</li>
                <li>Processamos o vídeo mantendo a qualidade original</li>
                <li>Disponibilizamos o download seguro do arquivo MP4</li>
              </ol>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-yellow-800 mb-3">⚠️ Uso Responsável</h3>
            <div className="text-yellow-700 text-sm space-y-2">
              <p>• Respeite sempre os direitos autorais dos criadores</p>
              <p>• Use apenas para conteúdo próprio ou com permissão</p>
              <p>• Não redistribua conteúdo sem autorização</p>
              <p>• Siga os termos de uso do Instagram</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-semibold text-green-800 mb-3">🎯 Estatísticas</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">100K+</div>
                <div className="text-sm text-green-700">Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-green-700">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{'< 30s'}</div>
                <div className="text-sm text-green-700">Tempo médio</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-green-700">Disponível</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;