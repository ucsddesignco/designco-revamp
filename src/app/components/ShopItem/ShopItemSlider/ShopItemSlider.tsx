import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance
} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './ShopItemSlider.scss';

import type { MyImage } from '../ShopItem';
import SliderArrow from './SliderArrow/SliderArrow';
import { useState, MutableRefObject } from 'react';

type SliderImages = { SliderImages: Array<MyImage> };

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return slider => {
    function removeActive() {
      slider.slides.forEach(slide => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', main => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}
/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/
export default function ShopItemSlider(_SliderImages: SliderImages) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    drag: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1
    }
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10
      },
      vertical: true
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="shop-item-slider-root">
      <div className="nav-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>

        <SliderArrow
          left
          onClick={e => {
            e.stopPropagation();
            instanceRef.current?.prev();
          }}
          disabled={currentSlide === 0}
        />
        <SliderArrow
          onClick={e => {
            e.stopPropagation();
            instanceRef.current?.next();
          }}
          disabled={currentSlide === 5}
        />
      </div>
      <div className="thumbnail-container">
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
      </div>
    </div>
  );
}
