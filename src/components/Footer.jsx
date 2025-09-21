import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ReelsDown</h3>
            <p className="text-gray-300 text-sm">
              Ferramenta profissional para download de Instagram Reels. 
              Rápido, seguro e gratuito para todos os usuários.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <div className="space-y-2">
              <Link to="/sobre" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Sobre
              </Link>
              <Link to="/contato" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contato
              </Link>
              <Link to="/privacidade" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informações</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p>• 100% Gratuito</p>
              <p>• Downloads em HD</p>
              <p>• Seguro e confiável</p>
              <p>• Sem cadastro necessário</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 ReelsDown. Todos os direitos reservados. Use com responsabilidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;