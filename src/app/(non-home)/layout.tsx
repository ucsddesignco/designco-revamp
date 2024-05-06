import '../styles/global.scss';
import Footer from '@/components/Footer/Footer';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';

export default function NonHomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
