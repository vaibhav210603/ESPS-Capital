'use client';

import Image from 'next/image';
import espsLogo from '../public/esps_logo.png';

const RED = '#C8203E';

/**
 * ESPS Capital logo component which renders the custom esps_logo.png
 */
export function LogoMark({
  className = '',
  color, // kept for backward compatibility/types
  size,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const style = size ? { width: size, height: size } : {};
  return (
    <div 
      className={`${className} relative flex items-center justify-center`} 
      style={style}
    >
      <Image
        src={espsLogo}
        alt="ESPS Capital Logo"
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
}

/** Full lockup: emblem + wordmark + script tagline. */
export function LogoFull({
  className = '',
  wordColor = '#3f3f46',
  taglineColor = '#1f2937',
  markColor = RED,
}: {
  className?: string;
  wordColor?: string;
  taglineColor?: string;
  markColor?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <LogoMark className="w-20 h-20" color={markColor} />
      <div
        className="mt-2 text-2xl md:text-3xl font-extrabold tracking-[0.18em]"
        style={{ color: wordColor }}
      >
        ESPS CAPITAL
      </div>
      <div
        className="font-serif italic text-base md:text-lg mt-0.5"
        style={{ color: taglineColor }}
      >
        Knowledge Creates Wealth
      </div>
    </div>
  );
}
