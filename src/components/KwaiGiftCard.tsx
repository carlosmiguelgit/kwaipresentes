import React from 'react';
import { Gift } from '@/data/gifts';
import { cn } from '@/lib/utils';

interface KwaiGiftCardProps {
  gift: Gift;
  onSelect: (gift: Gift) => void;
}

const KwaiGiftCard: React.FC<KwaiGiftCardProps> = ({ gift, onSelect }) => {
  // Mapeamento de classes de escala específicas para replicar o CSS original
  // Ajustando as margens negativas para subir as imagens
  const imageScaleClasses: Record<string, string> = {
    'arara': 'scale-[2.0] -mt-2',
    'second': 'scale-[1.0] -mt-2',
    'alce': 'scale-[1.4] -mt-6',
    'baleia': 'scale-[2.0] -mt-2', // Alterado de mt-0 para -mt-2
  };

  const imageClasses = imageScaleClasses[gift.className] || 'scale-100 -mt-2';

  return (
    <div
      className="
        bg-[#111] rounded-xl p-2 text-center w-[100px] h-[190px] 
        flex flex-col justify-end items-center cursor-pointer 
        transition-transform duration-300 hover:scale-[1.03]
        relative overflow-visible z-10
      "
      onClick={() => onSelect(gift)}
    >
      {/* Contêiner da Imagem */}
      <div className="flex-grow flex items-center justify-center w-full">
        <img 
          src={gift.imageUrl} 
          alt={gift.name} 
          className={cn("w-[60px] h-[60px] object-contain transition-all duration-300", imageClasses)}
        />
      </div>
      
      {/* Texto do presente */}
      <div className="gift-name font-semibold text-sm mb-1 whitespace-nowrap overflow-hidden text-ellipsis">{gift.name}</div>
      <div className="gift-diamonds text-xs mb-1 text-[#0dfcfc]">💎 {gift.diamonds}</div>
      
      <div className="gift-price flex flex-col items-center gap-1">
        <span className="old-price text-sm font-semibold text-[#aaa]">
          De R${gift.oldPrice.toFixed(2).replace('.', ',')}
        </span>
        <span 
          className="
            new-price text-lg font-extrabold text-[#fc4d07] 
            shadow-[0_0_8px_rgba(252,77,7,0.8)] 
            animate-pulse
          "
        >
          Por R${gift.newPrice.toFixed(2).replace('.', ',')}
        </span>
      </div>
    </div>
  );
};

export default KwaiGiftCard;