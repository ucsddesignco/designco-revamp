'use client';

import './ImageCarousel.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import React, { useState } from 'react';

type ImageCarouselProps = {
  imageList: {
    id: string;
    img: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

export default function ImageCarousel({ imageList }: ImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>({
    loop: false,
    mode: 'snap',
    slides: { perView: 'auto' },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <section className="image-carousel">
      <ul ref={sliderRef} className="keen-slider">
        {imageList.map(image => (
          <li key={image.id}>
            <Image
              alt={image.alt}
              className="keen-slider__slide"
              src={image.img}
              width={image.width}
              height={image.height}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 35vw"
              priority
            />
          </li>
        ))}
      </ul>
      <ul className="dot-container">
        {loaded &&
          instanceRef.current &&
          [...Array(instanceRef.current.track.details.maxIdx + 1).keys()].map(
            idx => (
              <li
                key={idx}
                style={
                  { '--stagger-index': `${idx * 0.06}s` } as React.CSSProperties
                }
              >
                <button
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`dot ${currentSlide === idx ? 'active' : ''}`}
                />
              </li>
            )
          )}
      </ul>
    </section>
  );
}
