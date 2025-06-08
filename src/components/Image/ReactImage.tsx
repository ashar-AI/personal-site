interface SimpleImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function SimpleImage({ src, alt, width, height, className = '' }: SimpleImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}