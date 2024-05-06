import Link from 'next/link';
import './Button.scss';
import { CSSProperties } from 'react';

type ButtonProps = {
  text: string;
  link: string;
  color?: string;
  bgColor?: string;
  noShadow?: boolean;
  borderColor?: string;
  ariaLabel?: string;
  style?: CSSProperties;
};

export default function Button({
  text,
  link,
  color = 'white',
  bgColor = 'black',
  noShadow = false,
  borderColor = bgColor,
  ariaLabel,
  style
}: ButtonProps) {
  return (
    <Link href={link} passHref legacyBehavior>
      <a
        className={noShadow ? 'link-button--no-shadow' : 'link-button'}
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
      </a>
    </Link>
  );
}
