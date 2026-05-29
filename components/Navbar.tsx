'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { LogoMark } from './Logo';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Offering', href: '#offering' },
  { label: 'E-पाठ Shala', href: '#epathshala' },
  { label: 'Blogs', href: '#blogs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top bar */}
      <div className="bg-brand-900 text-white py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span className="tracking-widest uppercase text-[10px] sm:text-xs text-white/70">
            Your Trusted Partner in Strategic Financial Advisory
          </span>
          <div className="flex items-center gap-4">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-white/70 hover:text-gold-400 transition-colors"
                aria-label="social"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-500 ${scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-brand-100/40 shadow-sm'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-2.5">
            <LogoMark size={56} className="shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-extrabold tracking-[0.14em] text-brand-900 group-hover:text-brand-700 transition-colors">
                ESPS CAPITAL
              </span>
              <span className="font-serif italic text-[11px] md:text-xs text-gray-500 mt-0.5">
                Knowledge Creates Wealth
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-brand-900/80 hover:text-brand-900 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-brand-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-brand-900 p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-brand-100"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-semibold text-brand-900 border-l-2 border-brand-200 ml-1 pl-4 py-2.5 hover:text-brand-700 hover:border-gold-500 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-brand-900 text-white px-6 py-3 text-sm font-medium"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
