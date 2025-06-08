import type { LocalImageProps, RemoteImageProps } from 'astro:assets'
import type { ImgHTMLAttributes } from 'react';

export interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement> & {
    'data-testid'?: string;
  };
  onError?: () => void;
}

export const alignClass = {
  top: {
    wrapper: 'bg-top',
    image: 'object-top'
  },
  center: {
    wrapper: 'bg-center',
    image: 'object-center'
  }
}

export type CustomImageProps = {
  wrapperProps?: astroHTML.JSX.HTMLAttributes
  ambientMode?: boolean
  align?: keyof typeof alignClass
} & (LocalImageProps | RemoteImageProps)

export type { IImageProps as ImageProps }
