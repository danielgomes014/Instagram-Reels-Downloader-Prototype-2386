import React, { useState } from 'react';
import SafeIcon from '../common/SafeIcon';
import SEOHelmet from '../components/SEOHelmet';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiMessageCircle, FiSend, FiCheck } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <>
      <SEOHelmet 
        title="Contato - ReelsDown"
        description="Entre em contato conosco para dúvidas, sugestões ou suporte técnico. Estamos aqui para ajudar!"
        keywords="contato reelsdown, suporte, ajuda, dúvidas"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <SafeIcon icon={FiMail} className="text-blue-600 text-2xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Entre em Contato
            </h1>
            <p className="text-gray-600 text-lg">
              Tem alguma dúvida ou sugestão? Adoraríamos ouvir você!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiMessageCircle} className="text-purple-500 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Envie uma Mensagem</h2>
              </div>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center text-green-800">
                    <SafeIcon icon={FiCheck} className="text-xl mr-2" />
                    <span className="font-medium">Mensagem enviada com sucesso!</span>
                  </div>
                  <p className="text-green-600 text-sm mt-1">
                    Obrigado pelo contato. Responderemos em breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Assunto da mensagem"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSend} className="text-lg" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <SafeIcon icon={FiMail} className="text-purple-500 text-xl mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">E-mail</h4>
                      <p className="text-gray-600">contato@reelsdown.com</p>
                      <p className="text-gray-500 text-sm">Respondemos em até 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-900 mb-3">💡 Dica</h4>
                <p className="text-blue-800 text-sm">
                  Para suporte técnico, inclua detalhes sobre o problema: 
                  navegador usado, link que tentou baixar e mensagem de erro (se houver).
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-3">🚀 Sugestões</h4>
                <p className="text-green-800 text-sm">
                  Suas sugestões são muito importantes! Ajude-nos a melhorar 
                  o ReelsDown compartilhando suas ideias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;