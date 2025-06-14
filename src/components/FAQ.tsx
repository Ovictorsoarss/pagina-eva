import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "📩 Após concluir o pagamento, onde receberei as informações para acessar a Comunidade?",
      answer: "Após a confirmação do pagamento, você receberá através do e-mail cadastrado todas as informações sobre o acesso a Comunidade. Caso não encontre o e-mail com as orientações, procure na sua caixa de spam ou lixo eletrônico. Se mesmo assim não encontrar, entre em contato com o suporte através do WhatsApp +55 33 998608924"
    },
    {
      question: "👩‍🎨 Quando terei acesso aos conteúdos da Comunidade?",
      answer: "A partir da confirmação do seu pagamento você receberá automaticamente o link de acesso para a Comunidade no e-mail cadastrado no ato da compra."
    },
    {
      question: "💳 Quais são as formas de pagamento disponíveis?",
      answer: "O pagamento poderá ser feito através do PIX. Caso deseja efetuar o pagamento no cartão, entre em contato no WhatsApp +55 33 998608924"
    },
    {
      question: "📱 Haverá grupo de alunos?",
      answer: "Sim, nós temos um grupo exclusivo para alunos no WhatsApp. O link está disponível na plataforma da Comunidade.."
    },
    {
      question: "🎓 O que irei encontrar na Comunidade?",
      answer: "Moldes, videoaulas, encontros ao vivo, grupo exclusivo no WhatsApp e muito mais."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToPurchase = () => {
    const purchaseSection = document.querySelector('#purchase-section');
    purchaseSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-24 bg-gradient-to-b from-indigo-900 to-violet-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">❓ Perguntas Frequentes</h3>
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <h4 className="text-lg font-semibold text-white">{faq.question}</h4>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 pt-0 text-indigo-200">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 p-[2px] rounded-full mb-8">
              <button 
                onClick={scrollToPurchase}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
              >
                QUERO APROVEITAR ESSA OPORTUNIDADE
              </button>
            </div>
            
            <p className="text-indigo-200 max-w-2xl mx-auto mb-8">
              Junte-se a <span className="text-white font-bold">4.380 alunas</span> que já estão transformando sua paixão por artesanato em uma fonte de renda!
            </p>

            <a 
              href="https://wa.me/5533998608924?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20adquirir%20os%20moldes%20de%20E.V.A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Fale com Suporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
