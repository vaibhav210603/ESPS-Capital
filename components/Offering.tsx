'use client';

import { motion } from 'framer-motion';
import { TrendingUp, GitMerge, RefreshCw, Handshake, ArrowUpRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { Reveal } from './Reveal';

const EASE = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    icon: TrendingUp,
    title: 'Capital Raising',
    description:
      "Whether you're a startup or an established business, we help secure the funding necessary for growth, expansion, or innovation. Our network of investors and financial institutions gives us the leverage to connect you with the right partners.",
    points: ['Main Board IPOs', 'QIPs and Rights Issues', 'Debt Offering'],
    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    span: true,
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
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    span: true,
  },
  {
    icon: RefreshCw,
    title: 'Corporate Restructuring',
    description:
      'In times of financial stress or strategic pivoting, our restructuring services help businesses realign their operations, optimize capital structures, and navigate the complexities of turnaround strategies.',
    points: [],
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    span: false,
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description:
      'We assist businesses in forging strong, strategic partnerships that fuel growth, expand market reach, and enhance operational efficiencies.',
    points: [],
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    span: false,
  },
];

export default function Offering() {
  return (
    <SectionWrapper id="offering" className="bg-gray-50 relative">
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-40 pointer-events-none" />
      <div className="relative">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <Reveal as="span" className="text-brand-600 font-semibold tracking-wide uppercase text-sm">
            Our Offering
          </Reveal>
          <Reveal as="h2" delay={0.1} className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-dark">
            Comprehensive services, <span className="text-gradient">tailored expertise</span>.
          </Reveal>
          <Reveal as="p" delay={0.2} className="text-base md:text-lg text-gray-600 leading-relaxed font-light mt-6">
            Discover the comprehensive range of services we provide to help you
            achieve your financial and strategic goals with efficiency and
            expertise.
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: EASE }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 hover:border-brand-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* image header */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/40 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur flex items-center justify-center shadow-lg">
                  <s.icon className="w-6 h-6 text-brand-700" />
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 text-xl md:text-2xl font-bold text-white">
                  {s.title}
                </h3>
              </div>

              {/* body */}
              <div className="p-7">
                <p className="text-gray-600 leading-relaxed font-light">
                  {s.description}
                </p>

                {s.points.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-gray-700">
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
