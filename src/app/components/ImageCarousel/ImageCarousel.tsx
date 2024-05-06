'use client';
import Image from 'next/image';
import './ImageCoursel.scss';

import { ABOUT_IMAGES_LIST } from './constants';

export default function ImageCarousel() {
  return (
    <section className="image_carousel">
      <ul className="image_carousel__container">
        {ABOUT_IMAGES_LIST.map((image, index) => {
          return (
            <li key={index}>
              <Image src={image.img} alt={image.name} className="slide" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
