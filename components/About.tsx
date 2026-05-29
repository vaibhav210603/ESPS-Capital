'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Reveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

function CountUp({ to, suffix = '', duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 4, suffix: '+', label: 'Core Service Lines' },
  { value: 100, suffix: '%', label: 'Client-First Focus' },
  { value: 360, suffix: '°', label: 'Advisory Coverage' },
];

export default function About({ transparent = false }: { transparent?: boolean }) {
  return (
    <SectionWrapper id="about" className={`${transparent ? 'bg-transparent' : 'bg-bg'} relative px-6 md:px-12 py-[12vh]`}>
      <div className="max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left: Sticky Text Content */}
          <div className="md:sticky md:top-[20vh] self-start space-y-12">
            <div>
              <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mb-6">
                <span className="text-brand-red mr-2">●</span>
                About ESPS Capital
              </Reveal>
              <Reveal
                as="h2"
                delay={0.1}
                className="text-5xl md:text-7xl font-serif text-ink tracking-tight leading-[0.95]"
              >
                Redefining financial distribution <span className="font-serif italic text-brand-red">in India.</span>
              </Reveal>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-rule mb-12">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="text-3xl md:text-5xl font-serif text-ink mb-2">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.1em] text-muted">
                    {s.label}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Editorial Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-rule bg-bg-deep"
            >
              <video
                src="/Screen_Recording_2026-05-29_at_43813PM_202605291651.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Scrolling Content Panels */}
          <div className="space-y-16 relative">
            {/* Apple-style colorful glowing background gradient blobs */}
            <div className="absolute -top-12 -left-16 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 -right-16 w-96 h-96 rounded-full bg-brand-red/10 blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-16 left-12 w-80 h-80 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

            {/* Our Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative overflow-hidden bg-gradient-to-br from-[#0c0d12]/95 via-[#14151f]/90 to-[#0a0a0f]/95 backdrop-blur-3xl border border-white/[0.07] border-b-white/[0.02] border-r-white/[0.02] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] rounded-3xl p-10 md:p-14 group hover:border-brand-red/30 hover:shadow-[0_30px_60px_-15px_rgba(185,28,28,0.15)] transition-all duration-500"
            >
              {/* Dynamic Corner Ambient Glows */}
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-brand-red/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-blue-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Apple Gloss/Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
              
              {/* Left edge neon-bevel highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <h3 className="relative z-10 text-2xl font-serif italic text-white mb-4 transition-transform duration-500 group-hover:translate-x-1">Our Vision</h3>
              <p className="relative z-10 text-lg text-white/80 leading-relaxed font-sans transition-transform duration-500 group-hover:translate-x-1">
                To become one of the best leading financial distribution houses in India.
              </p>
            </motion.div>

            {/* Our Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative overflow-hidden bg-gradient-to-br from-[#0c0d12]/95 via-[#14151f]/90 to-[#0a0a0f]/95 backdrop-blur-3xl border border-white/[0.07] border-b-white/[0.02] border-r-white/[0.02] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] rounded-3xl p-10 md:p-14 group hover:border-brand-red/30 hover:shadow-[0_30px_60px_-15px_rgba(185,28,28,0.15)] transition-all duration-500"
            >
              {/* Dynamic Corner Ambient Glows */}
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-brand-red/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-blue-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Apple Gloss/Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
              
              {/* Left edge neon-bevel highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <h3 className="relative z-10 text-2xl font-serif italic text-white mb-4 transition-transform duration-500 group-hover:translate-x-1">Our Mission</h3>
              <p className="relative z-10 text-lg text-white/80 leading-relaxed font-sans transition-transform duration-500 group-hover:translate-x-1">
                At the heart of our vision lies a mission to redefine financial distribution in India. We are dedicated to setting new benchmarks in service, reliability, and customer satisfaction, ensuring every client achieves their financial goals seamlessly.
              </p>
            </motion.div>

            {/* Our Promise Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative overflow-hidden bg-gradient-to-br from-[#0c0d12]/95 via-[#14151f]/90 to-[#0a0a0f]/95 backdrop-blur-3xl border border-white/[0.07] border-b-white/[0.02] border-r-white/[0.02] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] rounded-3xl p-10 md:p-14 group hover:border-brand-red/30 hover:shadow-[0_30px_60px_-15px_rgba(185,28,28,0.15)] transition-all duration-500"
            >
              {/* Dynamic Corner Ambient Glows */}
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-brand-red/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-blue-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Apple Gloss/Sheen Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none" />
              
              {/* Left edge neon-bevel highlight */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-red via-brand-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <h3 className="relative z-10 text-2xl font-serif italic text-white mb-4 transition-transform duration-500 group-hover:translate-x-1">Our Promise</h3>
              <p className="relative z-10 text-lg text-white/80 leading-relaxed font-sans transition-transform duration-500 group-hover:translate-x-1">
                Together, we aspire to make financial growth accessible, sustainable, and impactful.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
