'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-brand-950"
    >
      {/* Parallax background image */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
          alt="Financial district skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-950/85 to-brand-950/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.25),_transparent_60%)]" />
      </motion.div>

      {/* Animated mesh blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-brand-600/20 blur-[120px] animate-float" />
        <div
          className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-gold-500/15 blur-[120px] animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Faint grid */}
      <div className="absolute inset-0 z-0 bg-grid-faint [background-size:60px_60px] opacity-[0.15]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-28 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-4 py-1.5 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_10px_2px_rgba(251,191,36,0.6)]" />
          <span className="text-xs md:text-sm tracking-wide text-white/80 font-light">
            Innovative Capital Advisory Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.05] max-w-5xl"
        >
          Empowering Your{' '}
          <span className="relative inline-block">
            <span className="text-gradient-gold">Financial Growth</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1, ease: EASE }}
              className="absolute -bottom-1 left-0 w-full h-1 origin-left bg-gradient-to-r from-gold-400 to-gold-600 rounded-full"
            />
          </span>{' '}
          with Strategic Expertise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: EASE }}
          className="text-base md:text-xl text-white/80 mt-8 max-w-2xl font-light leading-relaxed"
        >
          At <span className="text-white font-medium">ESPS Capital</span>, we
          provide innovative capital advisory solutions to help businesses,
          entrepreneurs, and investors achieve sustainable success with
          excellence and independence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: EASE }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 text-base font-medium shadow-gold hover:from-gold-500 hover:to-gold-700 transition-all duration-300"
          >
            Get Started <ArrowUpRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#offering"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-md text-white px-8 py-4 text-base font-medium hover:bg-white/10 transition-all duration-300"
          >
            Explore Our Offering
          </motion.a>
        </motion.div>

        {/* Tagline strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: EASE }}
          className="mt-16 flex items-center gap-3 text-white/60"
        >
          <TrendingUp className="w-4 h-4 text-gold-400" />
          <span className="text-sm font-light tracking-wide">
            We drive client growth through expert financial advisory and strong
            industry relationships.
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border border-white/25 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-gold-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
