'use client';

import './ShopSlideshow.scss';
import { SLIDESHOW_IMAGES } from '@/(non-home)/shop/constants';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ShopSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % SLIDESHOW_IMAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shop_slideshow">
      {SLIDESHOW_IMAGES.map((image, i) => (
        <div key={i} className={`slide ${index === i ? 'active' : ''}`}>
          <Image src={image} alt={`Slide ${i}`} fill />
        </div>
      ))}
    </div>
  );
}
