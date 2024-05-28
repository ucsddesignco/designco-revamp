import React from 'react';
import './Hamburger.scss';

type HamburgerProps = {
  isHamburgerOpen: boolean;
  toggleHamburger: () => void;
  bgColor: string;
  color: string;
};

export default function Hamburger({
  isHamburgerOpen,
  toggleHamburger,
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
            className="hamburger-inner"
            style={{ backgroundColor: isHamburgerOpen ? bgColor : color }}
          />
        </span>
      </button>
      <div
        className={`dark_overlay ${isHamburgerOpen ? 'is-active' : ''}`}
        onClick={() => {
          toggleHamburger();
        }}
        role="presentation"
      />
    </>
  );
}
