import React, { useEffect, useState } from 'react';
import { Check, Crown, ShieldCheck } from 'lucide-react';
import ModalOferta from './ModalOferta';
import ModalExit from './ModalExit';

const Purchase = () => {
  const [showModal, setShowModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  const getUTMs = () => {
    const utm_source = localStorage.getItem('utm_source') || '';
    const utm_medium = localStorage.getItem('utm_medium') || '';
    const utm_campaign = localStorage.getItem('utm_campaign') || '';
    const utm_content = localStorage.getItem('utm_content') || '';
    const utm_term = localStorage.getItem('utm_term') || '';
    return `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_content=${utm_content}&utm_term=${utm_term}`;
  };

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    const handlePopState = () => {
      setShowExitModal(true);
      window.history.pushState(null, '', window.location.href);
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitModal(true);
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handlePlanoPremium = () => {
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/LAEpj9VSZ9BU4Z6RjHcu' + getUTMs();
  };

  const handlePlanoBasico = () => {
    setShowModal(true);
  };

  const handleUpgrade = () => {
    window.location.href = 'https://pay.kirvano.com/594e2891-3594-415d-a80b-aa9d7284a97a' + getUTMs();
  };

  const handleContinuarBasico = () => {
    setShowModal(false);
    window.location.href = 'https://www.ggcheckout.com/checkout/v2/6XWHgNEoNVqpnu3LB0kH' + getUTMs();
  };

  const handleDownsell = () => {
    window.location.href = 'https://pay.kirvano.com/251277ba-935c-4588-b645-a6ff3291f605' + getUTMs();
  };

  const handleCloseExit = () => {
    setShowExitModal(false);
  };

  return (
    <>
      <div id="purchase-section" className="relative py-24 bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">ESCOLHA A MELHOR OFERTA PARA VOCÊ!</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">

            {/* Plano Básico */}
            <div className="relative group">
              <div className="relative backdrop-blur-md border border-white/20 rounded-xl p-8 hover:border-white/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6">PLANO BÁSICO</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white">500 Moldes prontos de E.V.A</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span className="text-white">Acesso 3 meses</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-8">R$10,90</div>
                <button
                  onClick={handlePlanoBasico}
                  className="block w-full text-center bg-gray-500 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
                >
                  COMPRAR AGORA
                </button>
                <p className="text-indigo-200 text-sm mt-4">
                  Mas antes de comprar... temos uma oferta AINDA MAIS vantajosa para você! Veja logo abaixo ⬇️
                </p>
              </div>
            </div>

            {/* Plano Premium */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative backdrop-blur-md border border-amber-500/30 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                  MAIS VENDIDO
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <Crown className="w-6 h-6 text-amber-400" />
                  <h3 className="text-2xl font-bold text-white">PLANO PREMIUM</h3>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    '+1500 Moldes prontos de E.V.A',
                    'Mini Curso Completo: Montando os Moldes Do Zero ao Perfeito!',
                    'Pack + 60 Moldes de Natal 🎅',
                    'Pack + 60 Moldes Bíblicos 🙏',
                    'Pack + 60 Moldes Escolares 📚',
                    'Pack + 60 Moldes Premium ⭐ (Os mais vendidos e desejados!)',
                    'Acesso Completo a Todos os Bônus 🎁',
                    'Acesso Imediato e Vitalício ♾️ – Pague uma única vez!',
                    '7 Dias de Garantia Incondicional 🔒 – Teste sem risco!'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-amber-400" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-2">
                  <span className="text-gray-400 line-through">DE R$127,99</span>
                </div>
                <div className="text-3xl font-bold text-white mb-8">R$19,90</div>
                <button
                  onClick={handlePlanoPremium}
                  className="block w-full text-center bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
                >
                  COMPRAR AGORA
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative backdrop-blur-md border border-green-500/30 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="w-12 h-12 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Garantia de 30 Dias</h3>
              </div>
              <p className="text-green-100">
                Se por qualquer motivo você não ficar satisfeita com o curso, basta solicitar o reembolso em até 30 dias e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia!
              </p>
            </div>
          </div>
        </div>
      </div>

      <ModalOferta
        isOpen={showModal}
        onClose={handleContinuarBasico}
        onUpgrade={handleUpgrade}
      />

      <ModalExit
        isOpen={showExitModal}
        onClose={handleCloseExit}
        onDownsell={handleDownsell}
      />
    </>
  );
};

export default Purchase;
