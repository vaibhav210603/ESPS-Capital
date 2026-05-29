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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Main nav */}
      <div
        className={`transition-all duration-500 ${scrolled
            ? 'bg-bg/80 backdrop-blur-xl hairline-b'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <LogoMark size={48} className="shrink-0" />
            <span className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-serif text-ink group-hover:text-ink/80 transition-colors">
                ESPS Capital
              </span>
              <span className="font-sans italic text-[11px] md:text-xs text-muted mt-1">
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
                className="text-sm font-medium font-sans text-ink/80 hover:text-ink transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-ink text-bg px-6 py-2.5 text-sm font-sans font-medium hover:bg-ink-soft transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-ink p-2"
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
              className="lg:hidden overflow-hidden bg-ink text-bg"
            >
              <div className="px-6 py-8 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 text-3xl font-serif text-bg hover:text-bg-deep transition-colors"
                  >
                    <span className="font-mono text-xs text-brand-red">0{i + 1}</span>
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-bg/20 text-bg px-6 py-3 text-sm font-sans font-medium"
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
