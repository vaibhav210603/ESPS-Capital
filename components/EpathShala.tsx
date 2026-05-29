'use client';

import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, GraduationCap, Layers } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { Reveal } from './Reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

const features = [
  { icon: BookOpen, label: 'In-depth resources' },
  { icon: PlayCircle, label: 'Educational videos' },
  { icon: Layers, label: 'Series & modules' },
  { icon: GraduationCap, label: 'Free for all investors' },
];

export default function EpathShala() {
  return (
    <SectionWrapper id="epathshala" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <Reveal as="span" className="text-brand-600 font-semibold tracking-wide uppercase text-sm">
            E-पाठ Shala
          </Reveal>
          <Reveal as="h2" delay={0.1} className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight text-dark">
            <span className="text-gradient">E-पाठ Shala</span> — an online learning platform
          </Reveal>
          <Reveal as="p" delay={0.15} className="text-base md:text-lg text-gray-600 leading-relaxed font-light mb-5">
            Learn about the financial markets with in-depth resources and videos
            created by ESPS Capital.
          </Reveal>
          <Reveal as="p" delay={0.2} className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
            E-पाठ Shala is an online learning platform comprising extensive
            information about the financial market. Created by ESPS Capital, it
            offers free access to a wealth of knowledge that benefits both
            beginner and expert investors. The platform includes a variety of
            series and modules designed to guide individuals through the Indian
            economy and enhance their understanding of daily investing
            activities.
          </Reveal>

          <div className="grid grid-cols-2 gap-4 mt-9">
            {features.map((f, i) => (
              <Reveal key={f.label} delay={0.25 + i * 0.08}>
                <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 hover:border-brand-100 hover:bg-white hover:shadow-sm transition-all duration-300">
                  <f.icon className="w-5 h-5 text-brand-700 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{f.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-brand-900/10 group">
            <img
              src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1400&q=80"
              alt="E-पाठ Shala learning platform"
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/70 via-brand-950/20 to-transparent" />
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
            >
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-gold-400/40 animate-ping" />
                <span className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/95 backdrop-blur shadow-xl">
                  <PlayCircle className="w-10 h-10 text-brand-800" />
                </span>
              </div>
            </motion.div>
          </div>
          {/* floating tag */}
          <div className="absolute -bottom-5 -left-3 md:-left-6 rounded-2xl bg-brand-900 text-white px-5 py-4 shadow-glow">
            <div className="text-2xl font-bold text-gold-400">Free</div>
            <div className="text-[11px] uppercase tracking-wider text-white/70">Access for all</div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
