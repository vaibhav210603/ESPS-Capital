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
    <div className="relative bg-bg py-8 overflow-hidden border-y border-rule">
      <div className="flex w-max animate-marquee">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-ink text-4xl md:text-5xl font-serif tracking-tight whitespace-nowrap px-8">
              {item}
            </span>
            <span className="text-brand-red text-2xl">●</span>
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
