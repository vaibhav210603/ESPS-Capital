'use client';

import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { LogoMark } from './Logo';

const legal = [
  { label: 'Disclaimer', href: '#' },
  { label: 'Research Disclaimer', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms and Condition', href: '#' },
  { label: 'Policy and Procedure', href: '#' },
  { label: 'RMS Policy', href: '#' },
];

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Offering', href: '#offering' },
  { label: 'E-पाठ Shala', href: '#epathshala' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bg px-6 md:px-12 pt-20 pb-12">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 pb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6">
              <LogoMark size={64} className="text-bg opacity-90" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif tracking-tight">ESPS Capital</span>
                <span className="font-sans italic text-[11px] text-muted">Knowledge Creates Wealth</span>
              </div>
            </div>
            <p className="text-bg/70 font-sans text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Your trusted partner in strategic financial advisory. We drive client growth through expert financial advisory and strong industry relationships.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="text-muted hover:text-brand-red transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links Col */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {nav.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-serif text-xl md:text-2xl text-bg hover:text-brand-red transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted mb-6">
              Contact
            </h4>
            <div className="space-y-6">
              <div>
                <div className="font-mono text-[10px] uppercase text-muted mb-1">Email</div>
                <a href="mailto:info@espscapital.com" className="font-serif text-lg md:text-xl text-bg hover:text-brand-red transition-colors">
                  info@espscapital.com
                </a>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-muted mb-1">Phone</div>
                <a href="tel:+912240156765" className="font-serif text-lg md:text-xl text-bg hover:text-brand-red transition-colors">
                  +91 22 4015 6765
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Base Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-bg transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div>
            © {new Date().getFullYear()} ESPS Capital. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
