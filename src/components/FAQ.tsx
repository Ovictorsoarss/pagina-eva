import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "📩 Quando recebo o acesso?",
      answer: "Imediatamente após o pagamento, você recebe um e-mail com seu acesso à plataforma do curso."
    },
    {
      question: "👩‍🎨 Preciso ter experiência?",
      answer: "Não! O curso é do básico ao avançado, pensado especialmente para quem está começando."
    },
    {
      question: "⏱️ O acesso é vitalício?",
      answer: "Sim! Você pode assistir quando e quantas vezes quiser, sem limite de tempo."
    },
    {
      question: "📱 Por onde vou acessar as aulas?",
      answer: "Você acessa tudo em um portal exclusivo, com login e senha pessoal. Seguro, rápido e fácil de usar."
    },
    {
      question: "🎓 As aulas são fáceis de entender?",
      answer: "Sim! As vídeo aulas são didáticas, objetivas e pensadas para iniciantes. Qualquer pessoa consegue acompanhar."
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
