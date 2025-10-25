import React from 'react';
import { Gift } from '@/data/gifts';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GiftOverlayProps {
  selectedGift: Gift | null;
  onClose: () => void;
}

const GiftOverlay: React.FC<GiftOverlayProps> = ({ selectedGift, onClose }) => {
  if (!selectedGift) return null;

  // Mapeamento de classes de escala específicas para replicar o CSS original
  // Ajustando as margens negativas para subir as imagens
  const imageScaleClasses: Record<string, string> = {
    'arara': 'scale-[2.0] -mt-2', // Subindo um pouco
    'second': 'scale-[1.0] -mt-2', // Subindo um pouco
    'alce': 'scale-[1.4] -mt-6', // Subindo mais o Alce
    'baleia': 'scale-[2.0] -mt-2', // Alterado de mt-0 para -mt-2
  };

  const imageClasses = imageScaleClasses[selectedGift.className] || 'scale-100 -mt-2';

  const handlePurchase = () => {
    if (selectedGift?.purchaseUrl) {
      // Redireciona o usuário na mesma aba/tela
      window.location.href = selectedGift.purchaseUrl;
    }
  };

  return (
    <Dialog open={!!selectedGift} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-transparent border-none p-0">
        
        <div className="flex flex-col items-center gap-4">
          
          {/* O Card Principal */}
          <div 
            className="
              selected-copy 
              w-[200px] h-[360px] 
              flex flex-col justify-end items-center 
              bg-[#111] rounded-xl p-2 text-center 
              mx-auto
            "
          >
            <div className="flex-grow flex items-center justify-center w-full">
              <img 
                src={selectedGift.imageUrl} 
                alt={selectedGift.name} 
                className={cn("w-[120px] h-[120px] object-contain transition-all duration-300", imageClasses)}
              />
            </div>

            {/* Adicionando text-white aqui */}
            <div className="gift-name font-semibold text-lg mb-0.5 text-white">{selectedGift.name}</div>
            <div className="gift-diamonds text-base mb-1 text-[#0dfcfc]">💎 {selectedGift.diamonds}</div>
            
            <div className="gift-price flex flex-col items-center gap-0.5 mb-4">
              <span className="old-price text-base font-semibold text-[#aaa]">
                De R${selectedGift.oldPrice.toFixed(2).replace('.', ',')}
              </span>
              <span 
                className="
                  new-price text-2xl font-extrabold text-[#fc4d07] 
                  shadow-[0_0_8px_rgba(252,77,7,0.8)] 
                  animate-pulse
                "
              >
                Por R${selectedGift.newPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <Button 
              className="
                mt-4 px-5 py-1 bg-[#ff9800] text-black font-bold 
                hover:bg-[#ff9800]/90 transition-transform duration-200 
                hover:scale-[1.05]
              "
              onClick={handlePurchase}
            >
              COMPRAR
            </Button>

            <Button 
              variant="secondary"
              className="
                mt-2 mb-2 px-4 py-1 bg-[#333] text-white font-bold 
                hover:bg-[#444] transition-transform duration-200 
                hover:scale-[1.05]
              "
              onClick={onClose}
            >
              ESCOLHER OUTRO
            </Button>
          </div>
          
          {/* Mensagem de Recompensa Destacada (fora do card) */}
          <div 
            className="
              gift-message text-xl font-extrabold text-center 
              text-[#0dfcfc] 
              p-2 rounded-lg 
              shadow-[0_0_15px_rgba(13,252,252,0.8)] 
              w-full max-w-[250px]
            "
          >
            {selectedGift.message}
          </div>
          
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GiftOverlay;