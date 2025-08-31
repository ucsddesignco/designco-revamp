'use client';

import Link from 'next/link';
import './Navbar.scss';
import React from 'react';
import FocusTrap from 'focus-trap-react';
import Logo from './Logos/Logo';
import MobileLogo from './Logos/MobileLogo';
import Hamburger from './Hamburger/Hamburger';
import { useNavbar } from './hooks/useNavbar';

type NavbarProps = {
  color?: string;
  bgColor?: string;
};

const NAV_LINKS = [
  { href: '/about', text: 'About' },
  { href: '/events', text: 'Events' },
  { href: '/community', text: 'Community' },
  { href: '/shop', text: 'Shop' },
  { href: '/contact', text: 'Contact' }
];

export default function Navbar({
  color = 'black',
  bgColor = 'white'
}: NavbarProps) {
  const {
    pathname,
    isOverlaying,
    navColor,
    navBgColor,
    mobileBgColor,
    isHamburgerOpen,
    toggleHamburger
  } = useNavbar({ color, bgColor });

  const navStyles = {
    '--color': navColor,
    '--bg-color': navBgColor,
    '--mobile-bg-color': mobileBgColor || navBgColor,
    position: isOverlaying ? 'absolute' : 'initial',
    zIndex: isOverlaying ? 1 : 0
  } as React.CSSProperties;

  return (
    <FocusTrap active={isHamburgerOpen}>
      <nav
        className={pathname === '/' ? 'home' : ''}
        role="navigation"
        style={navStyles}
      >
        <div
          id="nav-container"
          style={isOverlaying ? { position: 'absolute', zIndex: 1 } : {}}
        >
          <Link
            href="/"
            className="logo_container"
            style={{ color: navColor }}
            tabIndex={isHamburgerOpen ? -1 : 0}
            aria-hidden={isHamburgerOpen ? 'true' : 'false'}
          >
            <Logo />
            <MobileLogo />
          </Link>
          <Hamburger
            isHamburgerOpen={isHamburgerOpen}
            toggleHamburger={toggleHamburger}
            bgColor={mobileBgColor || navBgColor}
            color={navColor}
          />
          <ul
            className={isHamburgerOpen ? 'panel-open is-active' : 'panel-close'}
          >
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  passHref
                  href={link.href}
                  onClick={() => {
                    if (isHamburgerOpen) {
                      toggleHamburger();
                    }
                  }}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </FocusTrap>
  );
}
