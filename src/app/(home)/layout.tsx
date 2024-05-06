import '../styles/global.scss';
import Footer from '@/components/Footer/Footer';
import React from 'react';

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
