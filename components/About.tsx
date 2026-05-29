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

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-bg relative px-6 md:px-12 py-[12vh]">
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

            {/* Editorial Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-rule filter grayscale contrast-125"
            >
              <img
                src="/images/about_editorial_1780043985004.png"
                alt="Editorial collage of financial advisors"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </motion.div>
          </div>

          {/* Right: Scrolling Content Panels */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="bg-bg-deep rounded-2xl p-10 md:p-14"
            >
              <h3 className="text-2xl font-serif italic text-ink mb-4">Our Vision</h3>
              <p className="text-lg text-ink-soft leading-relaxed font-sans">
                To become one of the best leading financial distribution houses in India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="bg-ink rounded-2xl p-10 md:p-14"
            >
              <h3 className="text-2xl font-serif italic text-bg mb-4">Our Mission</h3>
              <p className="text-lg text-bg/80 leading-relaxed font-sans mb-6">
                At the heart of our vision lies a mission to redefine financial distribution in India. We are dedicated to setting new benchmarks in service, reliability, and customer satisfaction, ensuring every client achieves their financial goals seamlessly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, ease: EASE }}
              className="bg-bg-deep rounded-2xl p-10 md:p-14"
            >
              <h3 className="text-2xl font-serif italic text-ink mb-4">Our Promise</h3>
              <p className="text-lg text-ink-soft leading-relaxed font-sans">
                Together, we aspire to make financial growth accessible, sustainable, and impactful.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
