import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Camera } from '@/components/icons/Camera';
import { CardStack } from '@/components/ui/CardStack';
import type { Photo } from '@/types/photo';

interface BentoItemPhotographyContentProps {
  photos: Photo[];
  className?: string;
}

export default function BentoItemPhotographyContent({
  photos,
  className,
}: BentoItemPhotographyContentProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImagesLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className={cn(
        'relative aspect-square rounded-3xl overflow-hidden',
        'transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 z-10">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        {hasError ? (
          <div className="h-full flex items-center justify-center bg-red-50 rounded-2xl">
            <p className="text-red-500">Failed to load photos</p>
          </div>
        ) : (
          <CardStack 
            photos={photos} 
            className="h-full" 
            onImagesLoaded={handleImagesLoaded}
          />
        )}
        
        {/* Overlay with camera icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/30 pointer-events-none">
          <div className="flex items-center gap-2 p-3 rounded-full bg-black/50 backdrop-blur-sm">
            <Camera className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white">Drag to view</span>
          </div>
        </div>
        
        {/* View Gallery button */}
        <a
          href="/photography"
          className="absolute bottom-4 right-4 bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-full font-medium text-sm transition-colors flex items-center gap-2"
        >
          View Gallery
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
