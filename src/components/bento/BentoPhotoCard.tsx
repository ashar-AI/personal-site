import { CardStack } from '@/components/ui/CardStack';
import { cn } from '@/lib/utils';
import type { Photo } from '@/types/photo';

// Ensure all photos have required fields with optional description
type PhotoInput = Omit<Photo, 'description'> & { description?: string };

interface BentoPhotoCardProps {
  title: string;
  description?: string;
  photos: PhotoInput[];
  className?: string;
}

export function BentoPhotoCard({
  title,
  description,
  photos,
  className,
}: BentoPhotoCardProps) {
  return (
    <div className={cn('group relative overflow-hidden rounded-xl border bg-card p-4 shadow', className)}>
      <div className="pb-2">
        <h3 className="text-lg font-medium">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="relative h-full min-h-[200px] w-full">
        <CardStack 
          photos={photos.map(photo => ({
            ...photo,
            description: photo.description || '' // Ensure description is always a string
          }))} 
          className="h-full" 
        />
      </div>
    </div>
  );
}
