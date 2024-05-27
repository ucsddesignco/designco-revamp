'use client';

import './ImageCarousel.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ABOUT_IMAGES_LIST } from './constants';
import React from 'react';

export default function ImageCarousel() {
  const [sliderRef] = useKeenSlider<HTMLUListElement>({
    loop: false,
    mode: 'snap',
    slides: { perView: 'auto' }
  });

  return (
    <section className="image-carousel">
      <ul ref={sliderRef} className="keen-slider">
        {ABOUT_IMAGES_LIST.map((image, index) => (
          <li key={'about-image' + index}>
            <Image
              alt={image.alt}
              className={`keen-slider__slide`}
              src={image.img}
              priority={true}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
