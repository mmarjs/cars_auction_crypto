import { FC } from 'react';
import { default as NextImage } from 'next/image';

interface ImageProps {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
  alt?: string;
  layout?: 'fixed' | 'responsive' | 'fill' | 'intrinsic' | 'raw';
  objectFit?: 'fill' | 'contain' | 'cover' | 'scale-down' | 'initial' | 'inherit' | 'none';
}

const Image: FC<ImageProps> = ({
  src,
  width,
  height,
  quality = 100,
  className = '',
  alt = ':( Not Found',
  layout,
  objectFit
}) => {
  return (
    <div className={`flex flex-shrink-0 ${className}`}>
      <NextImage
        src={src}
        width={width}
        height={height}
        layout={layout}
        objectFit={objectFit}
        alt={alt}
        quality={quality}
      />
    </div>
  );
};

export default Image;
