import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ModalOfertaProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgrade: () => void;
}

const ModalOferta: React.FC<ModalOfertaProps> = ({ isOpen, onClose, onUpgrade }) => {
  const [timer, setTimer] = useState(180); // 3 minutos

  useEffect(() => {
    if (!isOpen) return;
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [isOpen]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .pulsate {
            animation: pulse 1.5s infinite;
          }
        `}
      </style>

      <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
        <div className="relative bg-purple-700 border-4 border-yellow-400 rounded-2xl p-6 w-[90%] max-w-md text-center shadow-xl">

          {/* Botão de Fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-red-500"
          >
            <X size={24} />
          </button>

          {/* Cabeçalho */}
          <div className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-3">
            🔥 OFERTA EXCLUSIVA
          </div>

          {/* Timer */}
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm font-bold mb-4">
            ⏳ Oferta disponível por: {formatTime(timer)}
          </div>

          {/* Texto Principal */}
          <h2 className="text-xl font-bold text-white mb-3">
            Faça upgrade para o{' '}
            <span className="text-yellow-300">Plano Premium com desconto</span>{' '}
            por apenas <span className="text-yellow-300">R$14,90!</span>
          </h2>

          <p className="text-white mb-6">
            Desbloqueie <span className="font-bold">+1500 moldes</span>, treinamento em vídeo aulas e bônus exclusivos!
          </p>

          {/* Botão de Aceitar */}
          <button
            onClick={onUpgrade}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full w-full mb-3 pulsate"
          >
            ✅ Quero o Premium com Desconto
          </button>

          {/* Botão de Recusar */}
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-600 font-bold px-4 py-2 rounded-full w-[80%] text-sm hover:bg-gray-400"
          >
            ❌ Não, continuar com o Básico
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalOferta;
