import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { Camera } from '@/components/icons/Camera'
import { Tooltip } from '@/components/ui/tooltip'

interface Photo {
  src: string
  alt: string
  title: string
  description: string
}

interface BentoItemPhotographyContentProps {
  photos: Photo[]
  className?: string
}

export default function BentoItemPhotographyContent({
  photos,
  className,
}: BentoItemPhotographyContentProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotate photos every 5 seconds if hovered
  useEffect(() => {
    if (!isHovered) return undefined
    
    const interval = window.setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [isHovered, photos.length])

  const currentPhoto = photos[currentPhotoIndex]

  return (
    <div 
      className={cn(
        'relative aspect-square rounded-3xl overflow-hidden bg-slate-900/50',
        'transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main photo display */}
      <div className="relative h-full w-full">
        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="w-full h-full object-cover transition-opacity duration-500"
          loading="lazy"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-80" />
        
        {/* Photo info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{currentPhoto.title}</h3>
          <p className="text-sm text-slate-300">{currentPhoto.description}</p>
        </div>
        
        {/* Photo counter */}
        <div className="absolute top-4 right-4 bg-slate-900/70 text-white text-xs px-2 py-1 rounded-full">
          {currentPhotoIndex + 1}/{photos.length}
        </div>
        
        {/* Camera icon badge */}
        <div className="absolute top-4 left-4">
          <Tooltip content="Photography" side="right">
            <div className="p-2 bg-slate-900/70 rounded-full">
              <Camera className="w-5 h-5 text-white" />
            </div>
          </Tooltip>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhotoIndex(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all',
              index === currentPhotoIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/70'
            )}
            aria-label={`View photo ${index + 1}`}
          />
        ))}
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
  )
}
