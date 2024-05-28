'use client';

import { usePathname } from 'next/navigation';
import './Footer.scss';

export default function Footer() {
  const pathname = usePathname();
  let color = 'black';
  let bgColor = 'white';
  const links = [
    { href: 'https://www.facebook.com/ucsddesignco', text: 'Facebook' },
    { href: 'https://www.instagram.com/ucsddesignco/', text: 'Instagram' },
    {
      href: 'https://www.linkedin.com/company/ucsddesignco/',
      text: 'LinkedIn'
    },
    { href: 'https://medium.com/ucsddesignco', text: 'Medium' },
    { href: 'https://discord.com/invite/ZZEp4WNWK3', text: 'Discord' },
    { href: 'mailto:designatucsd@gmail.com', text: 'Email' }
  ];

  if (pathname === '/community') {
    color = 'white';
    bgColor = 'var(--community-bg-color)';
  }

  return (
    <footer style={{ color, backgroundColor: bgColor }}>
      <h3>Design Co © 2024</h3>
      <ul>
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Design Co's ${link.text}`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
