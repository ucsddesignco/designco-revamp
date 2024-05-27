'use client';

import * as Dialog from '@radix-ui/react-dialog';
import './ShopItem.scss';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import ShopItemSlider from './ShopItemSlider/ShopItemSlider';

export type MyImage = {
  image: StaticImageData;
  alt: string;
};

type ShopItemContent = {
  name: string;
  price: number;
  description: string;
  sizesAvailable?: {
    small: boolean;
    medium: boolean;
    large: boolean;
    xlarge: boolean;
  };
  images: Array<MyImage>;
};

export default function ShopItem({
  name,
  price,
  description,
  sizesAvailable,
  images
}: ShopItemContent) {
  console.log(images);
  return (
    <Dialog.Root>
      <Dialog.Trigger className="DialogTrigger">
        <Image src={images[0].image} alt={images[0].alt} />
        <div>{name}</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <ShopItemSlider SliderImages={images}></ShopItemSlider>

          <Dialog.Title>{name}</Dialog.Title>
          <Dialog.Description></Dialog.Description>
          <p>${price}</p>

          {/* TODO: Make a sizes component */}

          <span>{sizesAvailable?.small}</span>

          <p>{description}</p>
          <Dialog.Close className="IconButton">x</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
