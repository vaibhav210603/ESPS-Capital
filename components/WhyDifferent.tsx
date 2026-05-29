'use client';

import { motion } from 'framer-motion';
import { Users, Network, Sparkles, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

const pillars = [
  { icon: Users, title: 'Long-term partners', text: 'Not just advisors — committed to your success.' },
  { icon: ShieldCheck, title: 'Client-first philosophy', text: 'Focused on delivering actionable, value-driven results.' },
  { icon: Network, title: 'Vast network', text: 'Strong industry relationships that open doors.' },
  { icon: Sparkles, title: 'Forward-thinking', text: 'Strategies built for an ever-changing landscape.' },
];

export default function WhyDifferent() {
  return (
    <section className="relative py-20 md:py-36 overflow-hidden bg-brand-950 text-white">
      {/* bg image + overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-950/95 to-brand-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.18),_transparent_65%)]" />
      </div>
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal as="span" className="text-gold-400 font-semibold tracking-wide uppercase text-sm">
            The ESPS Difference
          </Reveal>
          <Reveal as="h2" delay={0.1} className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            Why ESPS Capital is{' '}
            <span className="text-gradient-gold">Different</span>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* statements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-7"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-white/80 leading-relaxed font-light"
            >
              At ESPS Capital, we are not just advisors—we are long-term partners
              committed to your success. We take the time to understand your
              business, your challenges, and your objectives, crafting solutions
              that go beyond traditional advisory services. Our client-first
              philosophy means we are always focused on delivering actionable,
              value-driven results.
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-white/80 leading-relaxed font-light"
            >
              In today&rsquo;s ever-changing financial landscape, agility and
              insight are essential. With our vast network, forward-thinking
              strategies, and commitment to excellence, we ensure that your
              business is well-equipped to navigate challenges and seize new
              opportunities.
            </motion.p>
          </motion.div>

          {/* pillars grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-gold-500/30 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold-500/15 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-lg font-bold mb-1.5">{p.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed font-light">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
