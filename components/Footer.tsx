'use client';

import { Linkedin, Twitter, Facebook, Mail, Phone } from 'lucide-react';
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
    <footer className="bg-brand-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <LogoMark size={44} className="shrink-0" />
              <div className="text-2xl font-bold tracking-tight">
                ESPS<span className="text-gold-500"> Capital</span>
              </div>
            </div>
            <p className="text-white/60 font-light leading-relaxed mt-4 max-w-sm">
              Your trusted partner in strategic financial advisory. We drive
              client growth through expert financial advisory and strong industry
              relationships.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/75 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Get in touch
            </h4>
            <a href="mailto:info@espscapital.com" className="flex items-center gap-3 text-white/75 hover:text-gold-400 transition-colors mb-3">
              <Mail className="w-4 h-4" /> info@espscapital.com
            </a>
            <a href="tel:+912240156765" className="flex items-center gap-3 text-white/75 hover:text-gold-400 transition-colors">
              <Phone className="w-4 h-4" /> +91 22 4015 6765
            </a>
          </div>
        </div>

        {/* legal row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            {legal.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} ESPS Capital. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
