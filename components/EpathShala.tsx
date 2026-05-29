'use client';

import { motion } from 'framer-motion';
import { PlayCircle, BookOpen, GraduationCap, Layers } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { Reveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  { icon: BookOpen, label: 'In-depth resources' },
  { icon: PlayCircle, label: 'Educational videos' },
  { icon: Layers, label: 'Series & modules' },
  { icon: GraduationCap, label: 'Free for all investors' },
];

export default function EpathShala() {
  return (
    <SectionWrapper id="epathshala" className="bg-ink text-bg relative px-6 md:px-12 py-[12vh]">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="text-left">
            <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mb-6">
              E-पाठ Shala
            </Reveal>
            <Reveal as="h2" delay={0.1} className="text-5xl md:text-7xl font-serif tracking-tight leading-[0.95] mb-8">
              An online <span className="italic text-brand-red">learning</span> platform
            </Reveal>
            <Reveal as="div" delay={0.15} className="text-lg text-bg/80 leading-relaxed font-sans space-y-6">
              <p>
                Learn about the financial markets with in-depth resources and videos created by ESPS Capital.
              </p>
              <p>
                E-पाठ Shala is an online learning platform comprising extensive information about the financial market. Created by ESPS Capital, it offers free access to a wealth of knowledge that benefits both beginner and expert investors. The platform includes a variety of series and modules designed to guide individuals through the Indian economy and enhance their understanding of daily investing activities.
              </p>
            </Reveal>
            
            <Reveal as="div" delay={0.2} className="mt-10 mb-16">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bg text-ink px-8 py-4 text-sm font-sans font-medium hover:bg-bg-deep transition-all duration-300"
              >
                Start Learning
              </a>
            </Reveal>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: EASE }}
                  className="group border border-white/10 bg-white/5 p-6 hover:border-brand-red transition-colors duration-500 flex flex-col items-start gap-4"
                >
                  <f.icon className="w-6 h-6 text-brand-red" />
                  <div>
                    <div className="font-mono text-[10px] uppercase text-muted mb-2">Feature</div>
                    <div className="font-serif text-xl text-bg">{f.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="relative w-full aspect-[3/4] border border-white/10 overflow-hidden rounded-xl"
          >
            <img
              src="/images/academy_formal_1780048950628.png"
              alt="Modern financial academy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
}
