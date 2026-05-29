'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Target, Compass } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { Reveal } from './Reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

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
    <SectionWrapper id="about" className="bg-white relative">
      {/* eyebrow + heading */}
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
        <Reveal as="span" className="text-brand-600 font-semibold tracking-wide uppercase text-sm">
          About ESPS Capital
        </Reveal>
        <Reveal
          as="h2"
          delay={0.1}
          className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-dark"
        >
          Redefining financial distribution{' '}
          <span className="text-gradient">in India</span>.
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative rounded-3xl overflow-hidden shadow-xl shadow-brand-900/10"
        >
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80"
            alt="ESPS Capital advisory team in discussion"
            className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
          {/* floating badge */}
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 backdrop-blur-md p-5 border border-white/40 shadow-lg">
            <div className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-1">
              Our Vision
            </div>
            <p className="text-brand-900 font-medium leading-snug">
              To become one of the best leading financial distribution houses in
              India.
            </p>
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-6"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex gap-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center">
                <Compass className="w-5 h-5 text-brand-700" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Our Mission</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                  At the heart of our vision lies a mission to redefine financial
                  distribution in India. We are dedicated to setting new
                  benchmarks in service, reliability, and customer satisfaction,
                  ensuring every client achieves their financial goals seamlessly.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex gap-4"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-gold-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Our Promise</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                  Together, we aspire to make financial growth accessible,
                  sustainable, and impactful.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 mt-12 pt-10 border-t border-gray-100">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="text-3xl md:text-4xl font-bold text-brand-700">
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
