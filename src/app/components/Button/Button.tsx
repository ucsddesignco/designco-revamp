import Link from 'next/link';
import './Button.scss';
import { CSSProperties } from 'react';

type ButtonProps = {
  onClick?: () => void;
  text: string;
  link: string;
  color?: string;
  bgColor?: string;
  hasShadow?: boolean;
  borderColor?: string;
  ariaLabel?: string;
  newTab?: boolean;
  style?: CSSProperties;
};

export default function Button({
  onClick,
  text,
  link,
  color = 'white',
  bgColor = 'black',
  hasShadow = false,
  borderColor = bgColor,
  ariaLabel,
  newTab,
  style
}: ButtonProps) {
  return (
    <Link
      onClick={onClick}
      href={link}
      passHref
      className={hasShadow ? 'link-button' : 'link-button--no-shadow'}
      target={newTab ? '_blank' : ''}
      aria-label={ariaLabel}
      style={
        {
          ...style,
          '--color': color,
          '--background-color': bgColor,
          '--border-color': borderColor
        } as CSSProperties
      }
    >
      {text}
    </Link>
  );
}
