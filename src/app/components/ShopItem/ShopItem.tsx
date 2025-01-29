'use client';

import * as Dialog from '@radix-ui/react-dialog';
import './ShopItem.scss';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import ShopItemSlider from './ShopItemSlider/ShopItemSlider';

// import { CldImage } from 'next-cloudinary';

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
        {/* <CldImage
          src="cld-sample-5" // Use this sample image or upload your own via the Media Explorer
          alt={images[0].alt}
          width="500" // Transform the image: auto-crop to square aspect_ratio
          height="500"
          crop={{
            type: 'auto',
            source: tr
          height */}

        <div className="thumbnail-container">
          <Image
            className="item-image"
            src={images[0].image}
            alt={images[0].alt}
            height={275}
            width={275}
          />
          <Image
            className="item-image hover"
            src={images[1].image}
            alt={images[1].alt}
            height={275}
            width={275}
          />
        </div>

        <p className="item-name">{name}</p>
        <p className="price">${price}</p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <div>
            <ShopItemSlider SliderImages={images}></ShopItemSlider>
          </div>

          <div>
            <Dialog.Title className="DialogTitle">{name}</Dialog.Title>
            <Dialog.Description></Dialog.Description>
            <p>${price}</p>

            {/* TODO: Make a sizes component */}

            <span>{sizesAvailable?.small}</span>

            <p>{description}</p>
          </div>

          <Dialog.Close className="IconButton">x</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
