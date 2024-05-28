'use client';

import Link from 'next/link';
import './Navbar.scss';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import FocusTrap from 'focus-trap-react';
import Logo from './Logos/Logo';
import MobileLogo from './Logos/MobileLogo';
import Hamburger from './Hamburger/Hamburger';

type NavbarProps = {
  color?: string;
  bgColor?: string;
};

export default function Navbar({
  color = 'black',
  bgColor = 'white'
}: NavbarProps) {
  const pathname = usePathname();
  const hamburgerInnerRef = React.useRef<HTMLSpanElement>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const links = [
    { href: '/about', text: 'About' },
    { href: '/events', text: 'Events' },
    { href: '/community', text: 'Community' },
    { href: '/shop', text: 'Shop' },
    { href: '/contact', text: 'Contact' }
  ];
  let isOverlaying = false;
  let localColor = color;
  let localBgColor = bgColor;

  if (pathname === '/') {
    isOverlaying = true;
  } else {
    localColor = 'black';
    localBgColor = 'white';
  }

  if (pathname === '/community') {
    localColor = 'white';
    localBgColor = 'var(--community-bg-color)';
  }

  if (pathname === '/shop') {
    localColor = 'white';
    localBgColor = 'transparent';
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
      if (hamburgerInnerRef.current) {
        hamburgerInnerRef.current.style.transition =
          'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0.3s';
        hamburgerInnerRef.current.addEventListener('animationend', () => {
          hamburgerInnerRef.current!.style.transition =
            'transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)';
        });
      }
    }
  };

  return (
    <FocusTrap active={isHamburgerOpen}>
      <nav
        className={pathname === '/' ? 'home' : ''}
        role="navigation"
        style={
          isOverlaying
            ? ({
                '--color': localColor,
                '--bg-color': localBgColor,
                position: 'absolute',
                zIndex: 1
              } as React.CSSProperties)
            : ({
                '--color': localColor,
                '--bg-color': localBgColor
              } as React.CSSProperties)
        }
      >
        <Link href="/" passHref legacyBehavior>
          <a
            href="/"
            className="logo_container"
            style={{ color }}
            tabIndex={isHamburgerOpen ? -1 : 0}
            aria-hidden={isHamburgerOpen ? 'true' : 'false'}
          >
            <Logo />
            <MobileLogo />
          </a>
        </Link>
        <Hamburger
          isHamburgerOpen={isHamburgerOpen}
          toggleHamburger={toggleHamburger}
          hamburgerInnerRef={hamburgerInnerRef}
          bgColor={bgColor}
          color={color}
        />
        <ul
          className={isHamburgerOpen ? 'panel-open is-active' : 'panel-close'}
        >
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} passHref legacyBehavior>
                <a
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={() => {
                    if (isHamburgerOpen) {
                      toggleHamburger();
                    }
                  }}
                >
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </FocusTrap>
  );
}
