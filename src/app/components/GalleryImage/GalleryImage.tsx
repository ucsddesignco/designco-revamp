import React from 'react';
import Image from 'next/image';
import './GalleryImage.scss';

type GalleryImageProps = React.ComponentProps<typeof Image>;

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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
