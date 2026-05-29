'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-900 text-white hover:bg-brand-800 shadow-lg hover:shadow-xl border border-transparent',
  secondary:
    'bg-brand-100 text-brand-900 hover:bg-brand-200 border border-transparent',
  outline:
    'bg-transparent text-brand-900 border border-brand-900 hover:bg-brand-50',
  ghost: 'bg-transparent text-brand-900 hover:bg-brand-50 border border-transparent',
  gold: 'bg-gradient-to-r from-gold-400 to-gold-600 text-white hover:from-gold-500 hover:to-gold-700 border-none shadow-gold',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.a>
  );
}
