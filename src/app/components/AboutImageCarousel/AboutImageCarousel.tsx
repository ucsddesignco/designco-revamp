'use client';

import './AboutImageCarousel.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import React from 'react';
import { ABOUT_IMAGES_LIST } from './constants';

export default function AboutImageCarousel() {
  const [sliderRef] = useKeenSlider<HTMLUListElement>({
    loop: false,
    mode: 'snap',
    slides: { perView: 'auto' }
  });

  return (
    <section className="image-carousel">
      <ul ref={sliderRef} className="keen-slider">
        {ABOUT_IMAGES_LIST.map(image => (
          <li key={image.id}>
            <Image
              alt={image.alt}
              className="keen-slider__slide"
              src={image.img}
              width={image.width}
              height={image.height}
              priority
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
