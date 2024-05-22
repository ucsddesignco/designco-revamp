'use client';

import * as Dialog from '@radix-ui/react-dialog';
import './ShopItem.scss';

type ShopItemContent = {
  name: string;
  price: number;
  description: string;
  sizesAvailable: {
    small: boolean;
    medium: boolean;
    large: boolean;
    xlarge: boolean;
  };
  images: Array<string>;
};

export default function ShopItem({
  name,
  price,
  description,
  sizesAvailable,
  images
}: ShopItemContent) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="DialogTrigger">
        <div
          style={{ width: '50px', height: '50px', backgroundColor: 'red' }}
        ></div>
        <div>{name}</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          {/* TODO: Make product preview slideer component */}
          {images}
          <div style={{ backgroundColor: 'green' }}>slideshow</div>
          <Dialog.Title>{name}</Dialog.Title>
          <Dialog.Description></Dialog.Description>
          <p>${price}</p>
          {/* TODO: Make a sizes component */}
          <span>{sizesAvailable.small}</span>

          <p>{description}</p>
          <Dialog.Close className="IconButton">x</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
