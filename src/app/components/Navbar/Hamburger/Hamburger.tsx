import React from 'react';
import './Hamburger.scss';

type HamburgerProps = {
  isHamburgerOpen: boolean;
  toggleHamburger: () => void;
  hamburgerInnerRef: React.RefObject<HTMLSpanElement>;
  bgColor: string;
  color: string;
};

export default function Hamburger({
  isHamburgerOpen,
  toggleHamburger,
  hamburgerInnerRef,
  bgColor,
  color
}: HamburgerProps) {
  return (
    <>
      <button
        className={`hamburger hamburger--spin ${
          isHamburgerOpen ? 'is-active' : ''
        }`}
        onClick={() => {
          toggleHamburger();
        }}
        aria-label={isHamburgerOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isHamburgerOpen}
      >
        <span className="hamburger-box">
          <span
            ref={hamburgerInnerRef}
            className="hamburger-inner"
            style={{ backgroundColor: isHamburgerOpen ? bgColor : color }}
          ></span>
        </span>
      </button>
      <div
        className={`dark_overlay ${isHamburgerOpen ? 'is-active' : ''}`}
        onClick={() => {
          toggleHamburger();
        }}
      ></div>
    </>
  );
}
