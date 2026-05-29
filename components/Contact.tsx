'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative rounded-[2rem] overflow-hidden bg-brand-950 px-8 py-14 md:p-16"
        >
          {/* decorative */}
          <div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-brand-600/25 blur-[120px]" />
          <div className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-gold-500/15 blur-[120px]" />
          <div className="absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-[0.07]" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal as="span" className="text-gold-400 font-semibold tracking-wide uppercase text-sm">
                Get in touch with us!
              </Reveal>
              <Reveal as="h2" delay={0.1} className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-white">
                Ready to empower your{' '}
                <span className="text-gradient-gold">financial growth</span>?
              </Reveal>
              <Reveal as="p" delay={0.2} className="text-base md:text-lg text-white/70 leading-relaxed font-light mt-6 max-w-lg">
                We drive client growth through expert financial advisory and
                strong industry relationships. Let&rsquo;s start the conversation.
              </Reveal>

              <motion.a
                href="mailto:info@espscapital.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-9 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 text-base font-medium shadow-gold hover:from-gold-500 hover:to-gold-700 transition-all duration-300"
              >
                Contact Us! <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* contact details card */}
            <div className="lg:justify-self-end w-full max-w-md">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <a
                    href="mailto:info@espscapital.com"
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-gold-400" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/50">Email</span>
                      <span className="block text-white font-medium group-hover:text-gold-400 transition-colors">
                        info@espscapital.com
                      </span>
                    </span>
                  </a>
                  <a
                    href="tel:+912240156765"
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                      <Phone className="w-5 h-5 text-gold-400" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/50">Phone</span>
                      <span className="block text-white font-medium group-hover:text-gold-400 transition-colors">
                        +91 22 4015 6765
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
