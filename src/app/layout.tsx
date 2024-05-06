import { Metadata } from 'next';
import './styles/global.scss';
import localFont from 'next/font/local';
import React from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://ucsddesign.co/'),
  title: 'Design Co',
  description: `We're a strong and scrappy design community at UC San Diego, bridging the gap between young designers and industry. Previously known as Design at UCSD.`,
  keywords: 'Design Co, Design at UCSD, UCSD, UC San Diego, design, HCI, HCD',
  openGraph: {
    title: 'Design Co',
    description: `We're a strong and scrappy design community at UC San Diego, bridging the gap between young designers and industry. Previously known as Design at UCSD.`,
    images: '/opengraph-image.png',
    url: 'https://ucsddesign.co/',
    siteName: 'UCSD Design Co',
    locale: 'en_US',
    type: 'website'
  }
};

const NeuePlak = localFont({
  src: '../../public/fonts/Neue-Plak-Extended-Bold.ttf',
  variable: '--font-neueplak',
  display: 'swap'
});

const NBInternational = localFont({
  src: '../../public/fonts/NB-International-Pro-Light.otf',
  variable: '--font-nbinternational',
  display: 'swap'
});

const NBInternationalMono = localFont({
  src: '../../public/fonts/NB-International-Mono.ttf',
  variable: '--font-nbinternational-mono',
  display: 'swap'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${NeuePlak.variable} ${NBInternational.variable} ${NBInternationalMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
