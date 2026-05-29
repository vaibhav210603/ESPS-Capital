'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LogoMark } from './Logo';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  
  // Faint parallax logo watermark
  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-bg pt-28 pb-12"
    >
      {/* Hero Parallax Background Image */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }} 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
      >
        <img
          src="/images/hero_bg_1780043969448.png"
          alt="Vintage stock exchange"
          className="w-full h-full object-cover object-center mix-blend-multiply grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
      </motion.div>

      {/* Top Meta Row */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-start font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted">
        <div>ESPS Capital<br/>Mumbai, India</div>
        <div className="text-right max-w-[200px] leading-relaxed">
          Your Trusted Partner in Strategic Financial Advisory
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 mt-16 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
          className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-ink mb-6"
        >
          <span className="text-brand-red mr-2">●</span>
          Innovative Capital Advisory Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: EASE }}
          className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-serif text-ink tracking-[-0.03em] leading-[0.9] max-w-[95%]"
        >
          Empowering Your <span className="font-serif italic text-brand-red">Financial Growth</span> with Strategic Expertise.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mt-12 mb-12 flex flex-wrap gap-4"
        >
          <span>Online trading</span>
          <span className="text-rule">/</span>
          <span>Mutual funds</span>
          <span className="text-rule">/</span>
          <span>Insurance</span>
          <span className="text-rule">/</span>
          <span>Loans</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="text-lg md:text-xl text-ink-soft max-w-lg font-sans leading-relaxed"
          >
            At ESPS Capital, we provide innovative capital advisory solutions to help businesses, entrepreneurs, and investors achieve sustainable success with excellence and independence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="flex flex-col sm:flex-row gap-4 md:justify-end"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-white px-8 py-4 text-sm font-sans font-medium hover:bg-brand-deep transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#offering"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-rule text-ink px-8 py-4 text-sm font-sans font-medium hover:bg-rule transition-all duration-300"
            >
              Explore Our Offering
            </a>
          </motion.div>
        </div>
      </div>

      {/* Foot Row */}
      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-end border-t border-rule pt-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="text-sm font-sans text-muted max-w-xs"
        >
          We drive client growth through expert financial advisory and strong industry relationships.
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: EASE }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Scroll</span>
          <div className="w-[1px] h-12 bg-rule overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="w-full h-full bg-ink"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
