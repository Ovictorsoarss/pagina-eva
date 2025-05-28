import React from 'react';
import { X } from 'lucide-react';

interface ModalExitProps {
  isOpen: boolean;
  onClose: () => void;
  onDownsell: () => void;
}

const ModalExit: React.FC<ModalExitProps> = ({ isOpen, onClose, onDownsell }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
        <div className="relative bg-purple-700 border-4 border-yellow-400 rounded-2xl p-8 max-w-md w-full text-center">

          {/* Botão de Fechar */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white hover:text-red-500"
          >
            <X size={24} />
          </button>

          {/* Badge topo */}
          <div className="bg-orange-500 text-white px-4 py-1 rounded-full inline-block font-bold mb-4">
            🔥 ÚLTIMA CHANCE
          </div>

          {/* Título */}
          <h2 className="text-white text-2xl font-bold mb-4">
            💸 Desconto Exclusivo pra Você!
          </h2>

          {/* Texto */}
          <p className="text-white mb-6">
            Antes de sair... Garanta <span className="font-bold">500 moldes de E.V.A</span> 
            por apenas <span className="font-bold text-yellow-300">R$5,00</span>! 😱
          </p>

          {/* Botão de Aceitar */}
          <button
            onClick={onDownsell}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold mb-3 animate-pulse"
          >
            ✅ Quero por R$5
          </button>

          {/* Botão de Recusar */}
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full text-sm"
          >
            ❌ Não, obrigado
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalExit;
