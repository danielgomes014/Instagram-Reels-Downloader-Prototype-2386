import React from 'react';
import SafeIcon from '../common/SafeIcon';
import SEOHelmet from '../components/SEOHelmet';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiEye, FiLock, FiDatabase } = FiIcons;

const Privacy = () => {
  return (
    <>
      <SEOHelmet 
        title="Política de Privacidade - ReelsDown"
        description="Conheça nossa política de privacidade e como protegemos seus dados ao usar o ReelsDown."
        keywords="política de privacidade, proteção de dados, segurança, LGPD"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <SafeIcon icon={FiShield} className="text-green-600 text-2xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-gray-600 text-lg">
              Última atualização: Janeiro de 2024
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiEye} className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">1. Informações que Coletamos</h2>
              </div>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  O ReelsDown coleta apenas as informações mínimas necessárias 
                  para fornecer nosso serviço de download:
                </p>
                
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Dados Coletados:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>URLs de vídeos do Instagram (processados temporariamente)</li>
                  <li>Informações técnicas básicas (endereço IP, navegador)</li>
                  <li>Dados de uso anônimos para melhorias do serviço</li>
                  <li>Cookies técnicos essenciais para funcionamento</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiDatabase} className="text-purple-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">2. Como Usamos as Informações</h2>
              </div>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  Usamos suas informações exclusivamente para:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Processar solicitações de download de vídeos</li>
                  <li>Manter a segurança e estabilidade do serviço</li>
                  <li>Melhorar a experiência do usuário</li>
                  <li>Prevenir abuso e uso indevido da plataforma</li>
                  <li>Cumprir obrigações legais quando necessário</li>
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <p className="text-green-800 text-sm">
                    <strong>Importante:</strong> Não armazenamos os vídeos baixados 
                    nem compartilhamos suas informações com terceiros.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiLock} className="text-red-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">3. Proteção de Dados</h2>
              </div>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  Implementamos medidas rigorosas de segurança:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Criptografia SSL/TLS para todas as transmissões</li>
                  <li>Processamento temporário de URLs (não armazenamento)</li>
                  <li>Rate limiting para prevenir abuso</li>
                  <li>Monitoramento de segurança contínuo</li>
                  <li>Conformidade com LGPD e regulamentações internacionais</li>
                  <li>Exclusão automática de dados temporários</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Seus Direitos (LGPD)</h2>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  Em conformidade com a Lei Geral de Proteção de Dados, você tem direito a:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Confirmação da existência de tratamento de dados</li>
                  <li>Acesso aos seus dados pessoais</li>
                  <li>Correção de dados incompletos ou incorretos</li>
                  <li>Exclusão de dados desnecessários ou tratados irregularmente</li>
                  <li>Portabilidade dos dados quando aplicável</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies e Tecnologias</h2>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  Utilizamos cookies essenciais para:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Funcionalidade básica do site</li>
                  <li>Preferências de idioma e tema</li>
                  <li>Segurança e prevenção de fraudes</li>
                  <li>Análise de performance (dados anônimos)</li>
                </ul>

                <p className="text-sm bg-gray-100 p-3 rounded-lg mt-4">
                  Você pode gerenciar cookies através das configurações do seu navegador. 
                  Desabilitar cookies pode afetar a funcionalidade do site.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Compartilhamento de Dados</h2>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  <strong>Não compartilhamos</strong> seus dados pessoais com terceiros, 
                  exceto nas seguintes situações limitadas:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>Quando exigido por lei ou ordem judicial</li>
                  <li>Para proteger nossos direitos legais</li>
                  <li>Em caso de emergência para proteger a segurança</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Retenção de Dados</h2>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  Mantemos seus dados apenas pelo tempo necessário:
                </p>
                
                <ul className="list-disc list-inside space-y-2">
                  <li>URLs processadas: excluídas imediatamente após o download</li>
                  <li>Logs de acesso: mantidos por 30 dias para segurança</li>
                  <li>Dados de contato: mantidos enquanto necessário para comunicação</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Alterações na Política</h2>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  Esta política pode ser atualizada ocasionalmente. 
                  Mudanças significativas serão comunicadas através do site 
                  com pelo menos 30 dias de antecedência.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Contato</h2>
              
              <div className="text-gray-600 space-y-4">
                <p>
                  Para questões sobre privacidade ou exercer seus direitos:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p><strong>E-mail:</strong> privacidade@reelsdown.com</p>
                  <p><strong>Assunto:</strong> Solicitação LGPD - [Seu pedido]</p>
                  <p><strong>Prazo de resposta:</strong> Até 15 dias úteis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-3">📞 Dúvidas sobre Privacidade?</h3>
            <p className="text-blue-800 text-sm">
              Nossa equipe está disponível para esclarecer qualquer dúvida sobre 
              como tratamos seus dados. Entre em contato conosco!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;