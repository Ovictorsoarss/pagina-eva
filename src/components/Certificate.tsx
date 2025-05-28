import React from 'react';

const Certificate = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-violet-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">📜 CERTIFICADO DE CONCLUSÃO</h3>
          <p className="text-indigo-200 mb-8">
            Ao finalizar seu treinamento, você garante um <span className="text-yellow-400 font-semibold">certificado digital</span> que reconhece suas habilidades no artesanato com E.V.A, agregando valor ao seu trabalho e mais credibilidade para suas clientes!
          </p>
          
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:scale-105 transform transition-all duration-500">
              <img 
                loading="lazy"
                src="/assets/testimonials/certificado.webp"
                alt="Certificado do Curso"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
