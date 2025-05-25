import React from 'react';

const Certificate = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-violet-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">📜 CERTIFICADO DE CONCLUSÃO</h3>
          <p className="text-indigo-200 mb-8">
            Você recebe um certificado digital ao final do curso, reconhecendo seu aprendizado e validando suas novas habilidades.
          </p>
          
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded-xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
              <img 
                src="https://i.imgur.com/yeT9TYv.jpeg"
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