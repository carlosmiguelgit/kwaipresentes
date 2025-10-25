import React, { useState } from 'react';
import { MadeWithDyad } from "@/components/made-with-dyad";
import KwaiGiftCard from '@/components/KwaiGiftCard';
import { gifts, Gift } from '@/data/gifts';
import GiftOverlay from '@/components/GiftOverlay';
import LinkPrefetcher from '@/components/LinkPrefetcher';

const Index = () => {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  const handleSelectGift = (gift: Gift) => {
    setSelectedGift(gift);
  };

  const handleCloseOverlay = () => {
    setSelectedGift(null);
  };
  
  // Extrai todas as URLs de compra para pré-carregamento
  const purchaseUrls = gifts.map(gift => gift.purchaseUrl);

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-4">
      
      {/* Pré-carregamento dos links de pagamento */}
      <LinkPrefetcher urls={purchaseUrls} />

      {/* Contêiner principal que cresce para centralizar o conteúdo */}
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        
        {/* Título */}
        <div className="title-line flex items-center justify-center gap-2.5 my-5">
          <img src="https://i.ibb.co/chxvqKc3/asd.png" alt="Kwai Logo" className="w-[45px] h-[45px] object-contain" />
          <h1 
            className="
              text-2xl font-extrabold uppercase text-[#fc4d07] 
              tracking-wider
            "
          >
            KWAI PRESENTES
          </h1>
        </div>

        {/* Lista de Presentes: Grid 2x2 com espaçamento apertado */}
        <div 
          className="
            gifts grid grid-cols-2 gap-2 justify-items-center w-full max-w-[450px] 
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