'use client';

import './ImageCarousel.scss';
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import React, { useState } from 'react';

const WheelControls = (slider: KeenSliderInstance) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: { x: number; y: number };
  let wheelActive = false;

  function dispatch(e: WheelEvent, name: string) {
    // For trackpad: use deltaX directly
    // For mouse wheel + shift: convert deltaY to horizontal movement
    const { deltaX: originalDeltaX, deltaY, shiftKey } = e;
    let deltaX = originalDeltaX;
    if (deltaX === 0 && shiftKey) {
      deltaX = deltaY;
    }

    position.x -= deltaX;
    position.y -= deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y
        }
      })
    );
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY
    };
    dispatch(e, 'ksDragStart');
  }

  function wheel(e: WheelEvent) {
    dispatch(e, 'ksDrag');
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, 'ksDragEnd');
  }

  function eventWheel(e: WheelEvent) {
    // Only handle horizontal scrolling (trackpad) or shift + vertical scroll (mouse wheel)
    const shouldHandle = e.deltaX !== 0 || (e.shiftKey && e.deltaY !== 0);

    if (!shouldHandle) {
      return; // Let normal page scrolling happen for regular vertical scroll
    }

    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on('created', () => {
    slider.container.addEventListener('wheel', eventWheel, {
      passive: false
    });
  });
};

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
  const [sliderRef, instanceRef] = useKeenSlider<HTMLUListElement>(
    {
      loop: false,
      mode: 'snap',
      slides: { perView: 'auto' },
      rubberband: false,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      }
    },
    [WheelControls]
  );

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
