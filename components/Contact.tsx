'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative bg-bg px-6 md:px-12 py-[16vh] overflow-hidden">
      <div className="max-w-[90rem] mx-auto flex flex-col items-center text-center">
        
        <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mb-8">
          <span className="text-brand-red mr-2">●</span>
          Get in touch with us!
        </Reveal>

        <Reveal as="h2" delay={0.1} className="text-6xl md:text-8xl font-serif text-ink tracking-tight leading-[0.9] max-w-4xl mb-12 relative">
          Ready to empower your <span className="italic text-brand-red">financial growth?</span>
          <motion.a
            href="mailto:info@espscapital.com"
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="hidden md:inline-flex absolute -right-20 top-1/2 -translate-y-1/2 items-center justify-center w-24 h-24 rounded-full border border-rule hover:bg-ink hover:text-bg transition-colors duration-500"
          >
            <ArrowUpRight className="w-8 h-8 stroke-1" />
          </motion.a>
        </Reveal>

        <Reveal as="p" delay={0.2} className="text-lg md:text-xl text-ink-soft leading-relaxed font-sans max-w-xl mx-auto mb-16">
          We drive client growth through expert financial advisory and strong industry relationships. Let&rsquo;s start the conversation.
        </Reveal>

        <Reveal as="div" delay={0.3} className="md:hidden mb-16">
          <a
            href="mailto:info@espscapital.com"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red text-white px-8 py-4 text-sm font-sans font-medium"
          >
            Contact Us! <ArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>

        {/* Animated Rule */}
        <div className="w-full max-w-3xl h-[1px] bg-rule relative mb-16 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-32 h-[1px] bg-brand-red"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-red" />
          </motion.div>
        </div>

        {/* Contact Columns */}
        <div className="flex flex-wrap justify-center gap-12 text-center">
          <div className="flex flex-col items-center gap-2 group">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Email</span>
            <a href="mailto:info@espscapital.com" className="font-serif text-xl md:text-2xl text-ink group-hover:text-brand-red transition-colors">
              info@espscapital.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 group">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Phone</span>
            <a href="tel:+912240156765" className="font-serif text-xl md:text-2xl text-ink group-hover:text-brand-red transition-colors">
              +91 22 4015 6765
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
