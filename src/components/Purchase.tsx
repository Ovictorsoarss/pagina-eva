import React from 'react';
import { Check, Crown, ShieldCheck } from 'lucide-react';

const Purchase = () => {
  const premiumBenefits = [
    'Mini Curso Completo: Montando os Moldes Do Zero ao Perfeito!',
    'Pack + 60 Moldes de Natal 🎅',
    'Pack + 60 Moldes Bíblicos 🙏',
    'Pack + 60 Moldes Escolares 📚',
    'Pack + 60 Moldes Premium ⭐ (Os mais vendidos e desejados!)',
    'Acesso Completo a Todos os Bônus 🎁',
    'Acesso Imediato e Vitalício ♾️ – Pague uma única vez, acesso para sempre!',
    '7 Dias de Garantia Incondicional 🔒 – Teste sem risco!',
  ];

  return (
    <>
      {/* CSS da animação */}
      <style>
        {`
          @keyframes pulseButton {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.07); }
          }
          .pulsate {
            animation: pulseButton 1.5s infinite;
          }
        `}
      </style>

      <div id="purchase-section" className="relative py-24 bg-gradient-to-br from-purple-900 to-indigo-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-pink-600/10 rounded-full filter blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">ESCOLHA A MELHOR OFERTA PARA VOCÊ!</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* Basic Plan */}
            <div id="basic-plan" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
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
                <div className="text-3xl font-bold text-white mb-8">R$10,99</div>
                <a 
                  href="https://pay.kirvano.com/045cf706-1856-4f34-a1fd-21d744c7c901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gray-500 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
                >
                  COMPRAR AGORA
                </a>
                <p className="text-indigo-200 text-sm mt-4">
                  Mas antes de comprar... temos uma oferta AINDA MAIS vantajosa para você! Veja logo abaixo ⬇️
                </p>
              </div>
            </div>

            {/* Premium Plan */}
            <div id="premium-plan" className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative backdrop-blur-md border border-amber-500/30 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                  MAIS VENDIDO
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <Crown className="w-6 h-6 text-amber-400" />
                  <h3 className="text-2xl font-bold text-white">PLANO PREMIUM</h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-amber-400" />
                    <span className="text-white">+1500 Moldes prontos de E.V.A</span>
                  </div>
                  {premiumBenefits.map((item, index) => (
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
                <a 
                  href="https://pay.kirvano.com/1d290f3b-2a59-4460-8756-df203c9e4f28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 pulsate"
                >
                  COMPRAR AGORA
                </a>
              </div>
            </div>
          </div>

          {/* Guarantee Card */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl"></div>
              <div className="relative backdrop-blur-md border border-green-500/30 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="w-12 h-12 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Garantia de 7 Dias</h3>
                </div>
                <p className="text-green-100">
                  Se por qualquer motivo você não ficar satisfeita com o curso, basta solicitar o reembolso em até 7 dias e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
