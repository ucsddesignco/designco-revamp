import Image from 'next/image';
import './GalleryImage.scss';
import { ComponentProps } from 'react';

type GalleryImageProps = ComponentProps<typeof Image>;

export default function GalleryImage({
  src,
  className,
  alt = '',
  ...props
}: GalleryImageProps) {
  const handleImageClick = () => {
    if (typeof src === 'string') {
      window.open(src, '_blank');
    }
  };

  return (
    <Image
      onClick={handleImageClick}
      className={className ? `${className} gallery-image` : 'gallery-image'}
      src={src}
      alt={alt}
      {...props}
    />
  );
}
