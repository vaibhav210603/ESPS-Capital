'use client';

const items = [
  'Capital Raising',
  'Mergers & Acquisitions',
  'Corporate Restructuring',
  'Strategic Partnerships',
  'Main Board IPOs',
  'QIPs & Rights Issues',
  'Debt Offering',
  'M&A Advisory',
];

export default function Marquee() {
  return (
    <div className="relative bg-brand-900 py-5 overflow-hidden border-y border-white/5">
      <div className="flex w-max animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-white/90 text-sm md:text-base font-medium tracking-wide whitespace-nowrap px-8">
              {item}
            </span>
            <span className="text-gold-500 text-lg">✦</span>
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-900 to-transparent" />
    </div>
  );
}
