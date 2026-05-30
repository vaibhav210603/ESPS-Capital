import type { Metadata } from 'next';
import { Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument',
  display: 'swap',
});

const geist = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ESPS Capital — Your Trusted Partner in Strategic Financial Advisory',
  description:
    'At ESPS Capital, we provide innovative capital advisory solutions to help businesses, entrepreneurs, and investors achieve sustainable success with excellence and independence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrument.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <Preloader />
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
