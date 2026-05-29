'use client';

import { motion } from 'framer-motion';
import { TrendingUp, GitMerge, RefreshCw, Handshake, ArrowUpRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { Reveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    icon: TrendingUp,
    title: 'Capital Raising',
    description:
      "Whether you're a startup or an established business, we help secure the funding necessary for growth, expansion, or innovation. Our network of investors and financial institutions gives us the leverage to connect you with the right partners.",
    points: ['Main Board IPOs', 'QIPs and Rights Issues', 'Debt Offering'],
    image: '/images/service_capital_formal_1780048874556.png',
  },
  {
    icon: GitMerge,
    title: 'Mergers & Acquisitions (M&A)',
    description:
      'Our experienced team advises on every stage of the M&A process, from identifying strategic targets to negotiating and executing successful deals. We work closely with you to ensure that each transaction aligns with your business strategy and long-term goals.',
    points: [
      'Advisory for follow-on offers for recurrent capital needs and M&A advisory, including target screening globally',
      'Advisory for Takeover/Open Offers during M&A pursuits',
      'Capability enhancement through synergistic acquisitions',
    ],
    image: '/images/service_ma_formal_1780048889525.png',
  },
  {
    icon: RefreshCw,
    title: 'Corporate Restructuring',
    description:
      'In times of financial stress or strategic pivoting, our restructuring services help businesses realign their operations, optimize capital structures, and navigate the complexities of turnaround strategies.',
    points: [],
    image: '/images/service_restructure_formal_1780048916481.png',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description:
      'We assist businesses in forging strong, strategic partnerships that fuel growth, expand market reach, and enhance operational efficiencies.',
    points: [],
    image: '/images/service_partner_formal_1780048932418.png',
  },
];

export default function Offering() {
  return (
    <SectionWrapper id="offering" className="bg-bg relative px-6 md:px-12 py-[12vh] overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        
        {/* Section Head Split */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mb-6">
              <span className="text-brand-red mr-2">●</span>
              Our Offering
            </Reveal>
            <Reveal as="h2" delay={0.1} className="text-4xl md:text-6xl font-serif text-ink tracking-tight leading-[0.95]">
              Comprehensive services, <span className="font-serif italic text-brand-red">tailored expertise.</span>
            </Reveal>
          </div>
          <Reveal as="p" delay={0.2} className="text-lg text-ink-soft leading-relaxed font-sans max-w-md md:justify-self-end">
            Discover the comprehensive range of services we provide to help you
            achieve your financial and strategic goals with efficiency and
            expertise. (Swipe to explore)
          </Reveal>
        </div>
      </div>

      {/* Services Slider */}
      <div className="w-full relative">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] border border-rule group overflow-hidden bg-bg"
            >
              {/* Image Block */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-rule bg-bg-deep group-hover:scale-[1.02] transition-all duration-700">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 font-mono text-xs text-brand-red bg-bg px-3 py-1 border border-rule">
                  0{i + 1}
                </div>
              </div>

              {/* Content Block */}
              <div className="p-8 group-hover:bg-ink group-hover:text-bg transition-colors duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <s.icon className="w-8 h-8 text-ink group-hover:text-bg transition-colors duration-500 stroke-1" />
                  <h3 className="text-2xl md:text-3xl font-serif text-ink group-hover:text-bg transition-colors duration-500">
                    {s.title.replace(' (M&A)', '')}
                    {s.title.includes('(M&A)') && <span className="italic text-brand-red"> (M&A)</span>}
                  </h3>
                </div>
                
                <p className="text-ink-soft group-hover:text-bg/80 transition-colors duration-500 leading-relaxed font-sans mb-6">
                  {s.description}
                </p>
                
                {s.points.length > 0 && (
                  <ul className="space-y-3 font-sans text-sm text-ink-soft group-hover:text-bg/70 transition-colors duration-500">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 items-start">
                        <span className="text-brand-red mt-1 text-[10px]">●</span>
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
