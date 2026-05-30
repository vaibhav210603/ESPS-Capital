'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  Banknote,
  Building2,
  Briefcase,
  Landmark,
  Plus,
  X,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { Reveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

type Offering = {
  id: string;
  icon: LucideIcon;
  image: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
};

// NOTE: Placeholder copy — refine with the firm's verified descriptions.
const offerings: Offering[] = [
  {
    id: 'debt-syndication',
    icon: Banknote,
    image: '/images/offer_debt.svg',
    title: 'Debt Syndication',
    tagline: 'Capital, structured.',
    description:
      'We structure and arrange debt across banks, NBFCs, and institutional lenders — securing competitive terms and the right capital mix to fund growth, refinancing, and working-capital needs.',
    points: [
      'Term loans & working capital facilities',
      'Structured & mezzanine debt',
      'Refinancing & balance-sheet optimisation',
    ],
  },
  {
    id: 'real-estate-infra',
    icon: Building2,
    image: '/images/offer_realestate.svg',
    title: 'Real Estate & Infra Advisory',
    tagline: 'Building the future.',
    description:
      'End-to-end advisory for real estate and infrastructure projects — from capital structuring and feasibility through to the investor partnerships that bring large-scale developments to life.',
    points: [
      'Project finance structuring',
      'Feasibility studies & valuation',
      'Investor & joint-venture partnerships',
    ],
  },
  {
    id: 'corporate-advisory',
    icon: Briefcase,
    image: '/images/offer_corporate.svg',
    title: 'Corporate Advisory',
    tagline: 'Strategy that compounds.',
    description:
      'Strategic guidance for companies at every stage — capital strategy, restructuring, and growth planning designed to strengthen your financial foundation and unlock long-term value.',
    points: [
      'Capital strategy & planning',
      'Restructuring & turnaround',
      'Growth & expansion advisory',
    ],
  },
  {
    id: 'merchant-banking',
    icon: Landmark,
    image: '/images/offer_merchant.svg',
    title: 'Merchant Banking',
    tagline: 'Institutional precision.',
    description:
      'Full-spectrum merchant banking — from equity issuances and private placements to transaction and regulatory advisory, delivered with institutional rigour and care.',
    points: [
      'IPOs, QIPs & rights issues',
      'Private placements',
      'Transaction & regulatory advisory',
    ],
  },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener('change', onChange);
    return () => m.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

export default function Offering() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = offerings.find((o) => o.id === activeId) ?? null;
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const toggle = (id: string) => setActiveId((cur) => (cur === id ? null : id));

  // Mobile only: lock body scroll while the popup is open. Close on Escape (both modes).
  useEffect(() => {
    if (!active) return;
    const lock = !isDesktop;
    const prev = document.body.style.overflow;
    if (lock) document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActiveId(null);
    window.addEventListener('keydown', onKey);
    return () => {
      if (lock) document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [active, isDesktop]);

  return (
    <SectionWrapper id="offering" className="bg-bg relative px-6 md:px-12 py-[12vh] overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        {/* Section Head Split */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 md:mb-20 items-end">
          <div>
            <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mb-6">
              <span className="text-brand-red mr-2">●</span>
              Our Offering
            </Reveal>
            <Reveal as="h2" delay={0.1} className="text-4xl md:text-6xl font-serif text-ink tracking-tight leading-[0.95]">
              The <span className="bg-brand-red text-white px-3.5 py-1 font-serif font-bold inline-block mx-1.5">BEST </span> in the market for
            </Reveal>
          </div>
          <Reveal as="p" delay={0.2} className="text-lg text-ink-soft leading-relaxed font-sans max-w-md md:justify-self-end">
            Four core capabilities, each built around your goals. Tap any
            offering to explore how we put it to work.
          </Reveal>
        </div>

        {/* Offerings Grid — 2×2 on mobile, 1×4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {offerings.map((o, i) => (
            <OfferingCard
              key={o.id}
              offering={o}
              index={i}
              isActive={activeId === o.id}
              onClick={() => toggle(o.id)}
            />
          ))}
        </div>
      </div>

      {/* Desktop: full-width dropdown that expands downward beneath the row */}
      {isDesktop && (
        <DesktopDropdown active={active} onClose={() => setActiveId(null)} />
      )}

      {/* Mobile/tablet: centered popup */}
      {!isDesktop && (
        <AnimatePresence>
          {active && (
            <ExpandedCard
              offering={active}
              index={offerings.findIndex((o) => o.id === active.id)}
              onClose={() => setActiveId(null)}
            />
          )}
        </AnimatePresence>
      )}
    </SectionWrapper>
  );
}

function OfferingCard({
  offering,
  index,
  isActive,
  onClick,
}: {
  offering: Offering;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -6 }}
      data-cursor="view"
      data-cursor-text="EXPLORE"
      className={`group relative text-left rounded-3xl border bg-bg-deep/60 backdrop-blur-sm h-full flex flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/60 transition-colors duration-500 ${isActive ? 'border-brand-red' : 'border-rule'
        }`}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[5/4] bg-white overflow-hidden">
        {/* Soft red radial wash behind the illustration */}
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(211,34,56,0.12),transparent_68%)] transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
            }`}
        />

        {/* Index */}
        <span className="absolute top-4 left-4 z-10 font-mono text-xs text-brand-red">0{index + 1}</span>

        {/* Toggle affordance */}
        <span
          className={`absolute top-4 right-4 z-10 grid place-items-center w-7 h-7 rounded-full border bg-white/70 backdrop-blur-sm transition-all duration-500 ${isActive
              ? 'border-brand-red text-brand-red rotate-[135deg]'
              : 'border-rule text-muted group-hover:border-brand-red group-hover:text-brand-red group-hover:rotate-90'
            }`}
        >
          <Plus className="w-3.5 h-3.5" strokeWidth={1.75} />
        </span>

        {/* Illustration */}
        <img
          src={offering.image}
          alt=""
          aria-hidden="true"
          className="relative z-0 w-full h-full object-contain p-8 md:p-9 transition-transform duration-500 group-hover:scale-[1.07]"
        />
      </div>

      {/* Label */}
      <div className="flex-1 flex flex-col justify-start p-5 md:p-6 border-t border-rule">
        <h3 className="text-base md:text-xl font-serif text-ink leading-tight">{offering.title}</h3>
        <p className="mt-1.5 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.08em] text-muted">
          {offering.tagline}
        </p>
      </div>
    </motion.button>
  );
}

/* ── Desktop: full-bleed dropdown that drops downward ────────────────────── */
function DesktopDropdown({
  active,
  onClose,
}: {
  active: Offering | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Smoothly bring the dropdown into view when it opens / switches.
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      const el = panelRef.current;
      if (!el) return;
      const lenis = (window as unknown as { lenis?: { scrollTo: (t: HTMLElement, o?: { offset?: number; duration?: number }) => void } }).lenis;
      if (lenis?.scrollTo) lenis.scrollTo(el, { offset: -200, duration: 1.1 });
      else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="dropdown"
          ref={panelRef}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ height: { duration: 0.55, ease: EASE }, opacity: { duration: 0.3 } }}
          className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden bg-ink text-bg mt-8"
        >
          {/* Top hairline that draws across the full width */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent origin-center"
          />
          {/* Ambient glow */}
          <div className="absolute -right-40 -top-20 w-[40rem] h-[40rem] rounded-full bg-brand-red/10 blur-[120px] pointer-events-none" />

          <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-14 lg:py-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start"
              >
                {/* Left: index + icon + title */}
                <div className="lg:col-span-5">
                  <DropdownInner active={active} />
                </div>

                {/* Right: description + points */}
                <div className="lg:col-span-7 lg:pt-3">
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.5, ease: EASE }}
                    className="text-xl lg:text-2xl font-serif text-bg/90 leading-snug max-w-2xl"
                  >
                    {active.description}
                  </motion.p>

                  <ul className="mt-10 grid sm:grid-cols-1 gap-px max-w-2xl">
                    {active.points.map((p, i) => (
                      <motion.li
                        key={p}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.24 + i * 0.08, duration: 0.45, ease: EASE }}
                        className="group flex items-center gap-4 py-4 border-t border-white/10 last:border-b"
                      >
                        <ArrowUpRight className="w-5 h-5 text-brand-red shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2} />
                        <span className="font-sans text-base lg:text-lg text-bg/75">{p}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-6 right-6 md:top-8 md:right-12 grid place-items-center w-10 h-10 rounded-full border border-white/20 text-bg/70 hover:text-bg hover:border-brand-red hover:bg-brand-red/20 hover:rotate-90 transition-all duration-300"
          >
            <X className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DropdownInner({ active }: { active: Offering }) {
  const Icon = active.icon;
  const idx = offerings.findIndex((o) => o.id === active.id);
  return (
    <div className="flex flex-col">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.5 }}
        className="font-mono text-sm text-brand-red mb-6"
      >
        0{idx + 1} / 04
      </motion.span>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.08, duration: 0.5, ease: EASE }}
        className="mb-7 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-red text-bg"
      >
        <Icon className="w-8 h-8" strokeWidth={1.5} />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
        className="text-4xl lg:text-6xl font-serif text-bg leading-[0.95] tracking-tight"
      >
        {active.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.5, ease: EASE }}
        className="mt-4 font-mono text-xs uppercase tracking-[0.12em] text-bg/45"
      >
        {active.tagline}
      </motion.p>
    </div>
  );
}

/* ── Mobile/tablet: centered popup ───────────────────────────────────────── */
function ExpandedCard({
  offering,
  index,
  onClose,
}: {
  offering: Offering;
  index: number;
  onClose: () => void;
}) {
  const Icon = offering.icon;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-md"
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="relative z-10 w-full max-w-xl rounded-3xl border border-rule bg-bg overflow-hidden shadow-[0_40px_120px_-20px_rgba(22,17,15,0.45)]"
      >
        {/* Ambient glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-brand-red/10 blur-3xl pointer-events-none" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute z-20 top-5 right-5 grid place-items-center w-9 h-9 rounded-full border border-rule text-muted hover:text-brand-red hover:border-brand-red hover:rotate-90 transition-all duration-300"
        >
          <X className="w-4 h-4" strokeWidth={1.75} />
        </button>

        <div className="relative p-8 md:p-12">
          <div className="font-mono text-xs text-brand-red mb-8">0{index + 1}</div>

          <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-red text-bg">
            <Icon className="w-7 h-7" strokeWidth={1.5} />
          </div>

          <h3 className="text-3xl md:text-4xl font-serif text-ink leading-tight">{offering.title}</h3>

          <p className="mt-5 text-base md:text-lg text-ink-soft leading-relaxed font-sans">
            {offering.description}
          </p>

          <ul className="mt-8 space-y-3 border-t border-rule pt-8">
            {offering.points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 + i * 0.07, duration: 0.4, ease: EASE }}
                className="flex gap-3 items-start font-sans text-sm md:text-base text-ink-soft"
              >
                <ArrowUpRight className="w-4 h-4 text-brand-red mt-1 shrink-0" strokeWidth={2} />
                <span className="leading-relaxed">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
