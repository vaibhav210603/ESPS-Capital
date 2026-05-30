'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LogoMark } from './Logo';
import { Reveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

const pillars = [
  { 
    title: 'Long-term partners', 
    text: 'Not just advisors — committed to your success.',
    image: '/images/diff_partnership.png'
  },
  { 
    title: 'Client-first philosophy', 
    text: 'Focused on delivering actionable, value-driven results.',
    image: '/images/diff_client_first.png'
  },
  { 
    title: 'Vast network', 
    text: 'Strong industry relationships that open doors.',
    image: '/images/diff_network.png'
  },
  { 
    title: 'Forward-thinking', 
    text: 'Strategies built for an ever-changing landscape.',
    image: '/images/diff_visionary.png'
  },
];

export default function WhyDifferent() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Parallax offsets for grid cards
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -15]);
  
  const transforms = [y1, y2, y3, y4];

  // Parallax offset for the mesh background drift
  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={ref} className="relative py-24 md:py-36 overflow-hidden bg-bg-deep text-ink">
      
      {/* Dynamic Parallax Background Pattern */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-[url(/images/cta_bg.png)] bg-cover bg-center opacity-[0.08] pointer-events-none mix-blend-multiply" 
      />

      {/* Decorative organic color washes in background */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-red/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-red/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* Asymmetric Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24 relative z-10">
          
          <div className="lg:col-span-6 flex flex-col text-left">
            <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted mb-4 flex items-center gap-2">
              <span className="text-brand-red animate-pulse">●</span> The ESPS Difference
            </Reveal>
            <Reveal as="h2" delay={0.1} className="text-5xl md:text-7xl font-serif text-ink tracking-tight leading-[0.9] max-w-lg">
              Why ESPS Capital is <span className="italic text-brand-red font-serif">Different</span>
            </Reveal>

            {/* Glowing Logo Watermark in background */}
            <div className="relative mt-8 select-none pointer-events-none hidden lg:block">
              <motion.div
                animate={{ y: [-6, 6, -6], rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="opacity-15"
              >
                <LogoMark size={130} className="text-brand-red" />
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-end text-left h-full lg:pt-8">
            <Reveal as="div" delay={0.2} className="space-y-6 text-base md:text-lg text-ink-soft leading-relaxed font-sans max-w-xl">
              <p>
                At ESPS Capital, we are not just advisors — we are long-term partners committed to your success. We take the time to understand your business, your challenges, and your objectives, crafting solutions that go beyond traditional advisory services. Our client-first philosophy means we are always focused on delivering actionable, value-driven results.
              </p>
              <p>
                In today&rsquo;s ever-changing financial landscape, agility and insight are essential. With our vast network, forward-thinking strategies, and commitment to excellence, we ensure that your business is well-equipped to navigate challenges and seize new opportunities.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 4-Card Grid with Parallax */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {pillars.map((p, i) => (
            <PillarCard
              key={p.title}
              p={p}
              index={i}
              yTransform={transforms[i]}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function PillarCard({ p, index, yTransform }: { p: typeof pillars[0]; index: number; yTransform: any }) {
  return (
    <motion.div
      style={{ y: yTransform }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: EASE }}
      data-cursor="brand"
      className="group relative border border-rule bg-bg/80 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-between min-h-[300px] overflow-hidden cursor-pointer hover:border-brand-red transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm hover:shadow-lg"
    >
      {/* Abstract Background Image with transition */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
        <motion.img
          src={p.image}
          alt=""
          className="w-full h-full object-cover opacity-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
        {/* Ambient overlay to protect text contrast on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-bg/40 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content Layers */}
      <div className="relative z-10 flex flex-col justify-between h-full flex-1">
        <div className="flex justify-between items-start mb-10">
          <span className="font-mono text-xs text-brand-red font-semibold bg-brand-red/5 px-2.5 py-1 rounded-full border border-brand-red/10 group-hover:bg-brand-red group-hover:text-bg transition-colors duration-500">
            0{index + 1}
          </span>
          {/* Small subtle visual motif */}
          <div className="w-1.5 h-1.5 rounded-full bg-rule group-hover:bg-brand-red transition-colors duration-500" />
        </div>

        <div>
          <h3 className="text-2xl font-serif text-ink tracking-tight mb-3 group-hover:text-ink transition-colors duration-500">
            {p.title}
          </h3>
          <div className="w-6 h-[1.5px] bg-brand-red mb-4 group-hover:w-16 transition-all duration-500" />
          <p className="text-sm font-sans text-ink-soft leading-relaxed group-hover:text-ink transition-colors duration-500">
            {p.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
