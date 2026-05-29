'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LogoMark } from './Logo';
import { Reveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

const pillars = [
  { title: 'Long-term partners', text: 'Not just advisors — committed to your success.' },
  { title: 'Client-first philosophy', text: 'Focused on delivering actionable, value-driven results.' },
  { title: 'Vast network', text: 'Strong industry relationships that open doors.' },
  { title: 'Forward-thinking', text: 'Strategies built for an ever-changing landscape.' },
];

export default function WhyDifferent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  
  const transforms = [y1, y2, y3, y4];

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden bg-bg-deep text-ink">
      <div className="relative max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* Animated Logo Centerpiece */}
        <div className="flex flex-col items-center mb-24">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-red/5 blur-3xl rounded-full scale-150" />
            <LogoMark size={96} className="text-brand-red opacity-80" />
          </motion.div>
          <div className="text-center mt-12 max-w-2xl">
            <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mb-4">
              The ESPS Difference
            </Reveal>
            <Reveal as="h2" delay={0.1} className="text-4xl md:text-5xl font-serif text-ink tracking-tight leading-[0.95]">
              Why ESPS Capital is <span className="italic text-brand-red">Different</span>
            </Reveal>
            <Reveal as="div" delay={0.2} className="mt-8 space-y-6 text-lg text-ink-soft leading-relaxed font-sans">
              <p className="text-justify">
                At ESPS Capital, we are not just advisors—we are long-term partners committed to your success. We take the time to understand your business, your challenges, and your objectives, crafting solutions that go beyond traditional advisory services. Our client-first philosophy means we are always focused on delivering actionable, value-driven results.
              </p>
              <p className="text-justify">
                In today&rsquo;s ever-changing financial landscape, agility and insight are essential. With our vast network, forward-thinking strategies, and commitment to excellence, we ensure that your business is well-equipped to navigate challenges and seize new opportunities.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 4-Card Grid with Parallax */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              style={{ y: transforms[i] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
              className="group border border-rule bg-bg p-8 flex flex-col justify-between min-h-[240px] hover:bg-ink hover:text-bg transition-colors duration-500"
            >
              <div>
                <div className="font-mono text-[10px] uppercase text-muted group-hover:text-bg/50 transition-colors mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-serif text-ink group-hover:text-bg transition-colors mb-4">{p.title}</h3>
              </div>
              <div>
                <div className="w-8 h-[1px] bg-brand-red mb-4" />
                <p className="text-sm font-sans text-ink-soft group-hover:text-bg/80 transition-colors leading-relaxed">
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
