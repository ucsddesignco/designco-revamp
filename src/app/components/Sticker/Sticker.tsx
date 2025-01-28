'use client';

import {
  cloneElement,
  CSSProperties,
  isValidElement,
  ReactElement,
  ReactNode,
  useRef
} from 'react';
import Draggable from 'react-draggable';
import './Sticker.scss';
import Image from 'next/image';

type StickerProps = {
  onStart?: () => void;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function Sticker({
  onStart,
  children,
  className,
  style
}: StickerProps) {
  const draggableRef = useRef<HTMLImageElement>(null);

  // Adds fields if it knows it's an image
  const renderChildren = () => {
    if (isValidElement(children) && children.type === Image) {
      return cloneElement(children as ReactElement, {
        draggable: false,
        'aria-hidden': true
      });
    }

    return children;
  };

  return (
    <Draggable onStart={onStart} nodeRef={draggableRef}>
      <div
        ref={draggableRef}
        className={`draggable ${className}`}
        style={style}
      >
        {renderChildren()}
      </div>
    </Draggable>
  );
}
