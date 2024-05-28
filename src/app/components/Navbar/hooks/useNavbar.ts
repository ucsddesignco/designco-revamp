import { usePathname } from 'next/navigation';
import { useState } from 'react';

type UseNavbarProps = {
  color: string;
  bgColor: string;
};

export const useNavbar = ({ color, bgColor }: UseNavbarProps) => {
  const pathname = usePathname();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  let isOverlaying = false;
  let navColor = color;
  let navBgColor = bgColor;
  let mobileBgColor; // Used for shop page mobile nav menu

  if (pathname === '/') {
    isOverlaying = true;
  } else {
    navColor = 'black';
    navBgColor = 'white';
  }

  if (pathname === '/community') {
    navColor = 'white';
    navBgColor = 'var(--community-bg-color)';
  }

  if (pathname === '/shop') {
    navColor = 'white';
    navBgColor = 'transparent';
    mobileBgColor = 'black';
    isOverlaying = true;
  }

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);

    if (!isHamburgerOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsHamburgerOpen(false);
          document.body.style.overflow = 'auto';
          document.removeEventListener('keydown', handleKeyDown);
        }
      };
      document.querySelector('main')?.setAttribute('aria-hidden', 'true');
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.querySelector('main')?.removeAttribute('aria-hidden');
      // Add transition to hamburger menu background color when closing navbar
      const hamburgerInner = document.querySelector(
        '.hamburger-inner'
      ) as HTMLSpanElement;
      if (hamburgerInner) {
        hamburgerInner.style.transition =
          'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0.3s';
        hamburgerInner.addEventListener('animationend', () => {
          hamburgerInner.style.transition =
            'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)';
        });
      }
    }
  };

  return {
    pathname,
    isHamburgerOpen,
    toggleHamburger,
    isOverlaying,
    navColor,
    navBgColor,
    mobileBgColor
  };
};
