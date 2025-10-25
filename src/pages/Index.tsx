import React, { useState } from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import KwaiGiftCard from '@/components/KwaiGiftCard';
import GiftOverlay from '@/components/GiftOverlay';
import { gifts, Gift } from '@/data/gifts';

const Index = () => {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  const handleSelectGift = (gift: Gift) => {
    setSelectedGift(gift);
  };

  const handleCloseOverlay = () => {
    setSelectedGift(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-4">
      
      {/* Contêiner principal que cresce para centralizar o conteúdo */}
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        
        {/* Título */}
        <div className="title-line flex items-center justify-center gap-2.5 my-5">
          <img src="https://i.ibb.co/chxvqKc3/asd.png" alt="Kwai Logo" className="w-[45px] h-[45px] object-contain" />
          <h1 
            className="
              text-2xl font-extrabold uppercase text-[#fc4d07] 
              shadow-[0_0_10px_rgba(252,77,7,0.6)] tracking-wider
            "
          >
            KWAI PRESENTES
          </h1>
        </div>

        {/* Lista de Presentes */}
        <div 
          className="
            gifts flex gap-3 justify-center flex-wrap w-full max-w-[600px] 
            my-2.5 mb-4 relative
          "
          id="giftList"
        >
          {gifts.map((gift) => (
            <KwaiGiftCard 
              key={gift.id} 
              gift={gift} 
              onSelect={handleSelectGift} 
            />
          ))}
        </div>
      </div>

      {/* Overlay/Modal */}
      <GiftOverlay 
        selectedGift={selectedGift} 
        onClose={handleCloseOverlay} 
      />
      
      {/* Footer */}
      <footer className="text-xs text-[#777] text-center p-2.5">
        © 2025 KWAI PRESENTES | TODOS OS DIREITOS RESERVADOS
      </footer>

      <MadeWithDyad />
    </div>
  );
};

export default Index;