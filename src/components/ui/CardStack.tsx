import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CARD_OFFSET = 4;
const ROTATION_FACTOR = 6;

interface Card {
  id: number;
  src: string;
  alt: string;
  rotation: number;
}

interface CardStackProps {
  photos: Array<{ src: string; alt: string; }>;
  className?: string;
  onImagesLoaded?: () => void;
}

export function CardStack({ photos, className = '', onImagesLoaded }: CardStackProps) {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (photos.length > 0) {
      const initialCards = photos.map((photo, index) => ({
        id: Date.now() + index,
        src: photo.src,
        alt: photo.alt || `Image ${index + 1}`,
        rotation: (index % 2 === 0 ? 1 : -1) * ROTATION_FACTOR * Math.random(),
      }));
      setCards(initialCards);
      onImagesLoaded?.();
    }
  }, [photos]);

  const moveCardToEnd = () => {
    console.log('Moving card to end'); // Debug log
    setCards(prev => {
      if (prev.length <= 1) return prev;
      const [first, ...rest] = prev;
      return [...rest, { ...first, rotation: (Math.random() - 0.5) * ROTATION_FACTOR * 2 }];
    });
  };

  if (photos.length === 0) return null;

  return (
    <div className={`relative h-full w-full flex justify-center items-center ${className}`}>
      {cards.map((card, index) => {
        const isTopCard = index === 0;
        return (
          <motion.div
            key={card.id} // Use stable card ID
            animate={{
              y: index * -CARD_OFFSET,
              rotate: card.rotation,
            }}
            className="absolute cursor-grab rounded-lg"
            drag={isTopCard ? "y" : false} // Only top card is draggable
            dragConstraints={{ top: 0, bottom: 0 }}
            initial={false}
            style={{ zIndex: cards.length - index }}
            transition={{ type: "spring", stiffness: 50 }}
            onDragEnd={() => {
              if (isTopCard) {
                moveCardToEnd();
              }
            }}
            layoutId={`card-${card.id}`} // Add layout ID for smooth transitions
          >
            <img
              src={card.src}
              alt={card.alt}
              width={355}
              height={200}
              className="object-cover w-[355px] h-[200px] rounded-2xl select-none"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
}