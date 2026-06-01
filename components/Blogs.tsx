'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import SectionWrapper from './SectionWrapper';
import { Reveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Abstract SVG visuals — no people ───────────────────────────── */

function ForexChart() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="200" fill="#0a0a14"/>
      <defs>
        <linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* Grid */}
      {[40,80,120,160].map(y => (
        <line key={y} x1="30" y1={y} x2="390" y2={y} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1"/>
      ))}
      {/* Y labels */}
      {['513','480','450','420','390'].map((v,i) => (
        <text key={v} x="28" y={20+i*40} fontSize="9" fill="#ffffff" fillOpacity="0.3" textAnchor="end" fontFamily="monospace">{v}B</text>
      ))}
      {/* Rising bar chart */}
      {[
        {x:50, h:30, c:'#22c55e'},
        {x:100, h:50, c:'#22c55e'},
        {x:150, h:60, c:'#22c55e'},
        {x:200, h:75, c:'#22c55e'},
        {x:250, h:95, c:'#22c55e'},
        {x:300, h:115, c:'#22c55e'},
        {x:350, h:145, c:'#22c55e'},
      ].map((b,i) => (
        <rect key={i} x={b.x} y={175-b.h} width="28" height={b.h} rx="3" fill={b.c} fillOpacity="0.75"/>
      ))}
      {/* Trend line */}
      <polyline points="64,145 114,125 164,115 214,100 264,80 314,60 364,30"
        stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* ATH label */}
      <rect x="290" y="18" width="92" height="20" rx="4" fill="#22c55e" fillOpacity="0.15"/>
      <text x="300" y="31" fontSize="9" fill="#22c55e" fontFamily="monospace" fontWeight="bold">▲ ALL-TIME HIGH</text>
    </svg>
  );
}

function GoldBullChart() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="200" fill="#0a0a14"/>
      <defs>
        <linearGradient id="gg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[40,80,120,160].map(y => (
        <line key={y} x1="30" y1={y} x2="390" y2={y} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1"/>
      ))}
      {['$1820','$1800','$1780','$1760'].map((v,i) => (
        <text key={v} x="28" y={25+i*45} fontSize="9" fill="#ffffff" fillOpacity="0.3" textAnchor="end" fontFamily="monospace">{v}</text>
      ))}
      {/* Candlesticks */}
      {[
        {x:55, o:155, c:130, h:120, l:160, bull:true},
        {x:100, o:130, c:118, h:110, l:135, bull:true},
        {x:145, o:118, c:125, h:115, l:130, bull:false},
        {x:190, o:125, c:105, h:98, l:130, bull:true},
        {x:235, o:105, c:90, h:82, l:110, bull:true},
        {x:280, o:90, c:75, h:68, l:95, bull:true},
        {x:325, o:75, c:60, h:52, l:80, bull:true},
      ].map((c,i) => (
        <g key={i}>
          <line x1={c.x+12} y1={c.h} x2={c.x+12} y2={c.l} stroke={c.bull ? '#f59e0b' : '#C8203E'} strokeWidth="1.5"/>
          <rect x={c.x} y={Math.min(c.o,c.c)} width="24" height={Math.abs(c.o-c.c)||2} rx="2" fill={c.bull ? '#f59e0b' : '#C8203E'} fillOpacity="0.9"/>
        </g>
      ))}
      {/* Area under price */}
      <polygon points="55,155 100,130 145,118 190,105 235,90 280,75 325,60 370,48 370,180 55,180"
        fill="url(#gg1)"/>
      <polyline points="55,155 100,130 145,118 190,105 235,90 280,75 325,60 370,48"
        stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="298" y="38" width="86" height="18" rx="4" fill="#f59e0b" fillOpacity="0.15"/>
      <text x="306" y="50" fontSize="9" fill="#f59e0b" fontFamily="monospace" fontWeight="bold">$1802 ▲ RALLY</text>
    </svg>
  );
}

function StockOutlookChart() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="200" fill="#0a0a14"/>
      <defs>
        <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8203E" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#C8203E" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[40,80,120,160].map(y => (
        <line key={y} x1="30" y1={y} x2="390" y2={y} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1"/>
      ))}
      {['₹514','₹440','₹360','₹280'].map((v,i) => (
        <text key={v} x="28" y={25+i*45} fontSize="9" fill="#ffffff" fillOpacity="0.3" textAnchor="end" fontFamily="monospace">{v}</text>
      ))}
      {/* Recovery curve */}
      <polygon points="40,170 80,175 120,165 160,150 200,130 240,105 280,80 320,58 360,38 360,180 40,180"
        fill="url(#sg1)"/>
      <polyline points="40,170 80,175 120,165 160,150 200,130 240,105 280,80 320,58 360,38"
        stroke="#C8203E" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Low marker */}
      <circle cx="80" cy="175" r="5" fill="#C8203E" fillOpacity="0.8"/>
      <text x="88" y="172" fontSize="9" fill="#C8203E" fontFamily="monospace">LOW ₹245</text>
      {/* Current marker */}
      <circle cx="360" cy="38" r="5" fill="#22c55e" fillOpacity="0.9"/>
      <text x="310" y="28" fontSize="9" fill="#22c55e" fontFamily="monospace">+109% ▲</text>
    </svg>
  );
}

function GoldDropChart() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="200" fill="#0a0a14"/>
      <defs>
        <linearGradient id="dg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {[40,80,120,160].map(y => (
        <line key={y} x1="30" y1={y} x2="390" y2={y} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1"/>
      ))}
      {['$1920','$1880','$1840','$1800'].map((v,i) => (
        <text key={v} x="28" y={25+i*45} fontSize="9" fill="#ffffff" fillOpacity="0.3" textAnchor="end" fontFamily="monospace">{v}</text>
      ))}
      {/* Rising then drop */}
      <polygon points="40,140 90,120 140,95 190,75 240,55 280,65 320,95 360,140 360,180 40,180"
        fill="url(#dg1)"/>
      <polyline points="40,140 90,120 140,95 190,75 240,55 280,65 320,95 360,140"
        stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Drop arrow */}
      <line x1="240" y1="55" x2="360" y2="140" stroke="#C8203E" strokeWidth="2" strokeDasharray="6 3" strokeLinecap="round"/>
      <circle cx="240" cy="55" r="5" fill="#f59e0b"/>
      <circle cx="360" cy="140" r="5" fill="#C8203E"/>
      <text x="268" y="80" fontSize="9" fill="#C8203E" fontFamily="monospace">▼ -1.50%</text>
      {/* Dollar up indicator */}
      <rect x="30" y="15" width="90" height="18" rx="4" fill="#3b5bdb" fillOpacity="0.2"/>
      <text x="38" y="27" fontSize="9" fill="#3b5bdb" fontFamily="monospace">USD INDEX ▲</text>
    </svg>
  );
}

/* ── Blog data ───────────────────────────────────────────────────── */

const blogs = [
  {
    id: 1,
    slug: 'india-forex-reserves-all-time-high',
    category: 'ESPS Academy',
    title: "Wow Moment...India's Forex Reserves rose to USD 513.25B for the first time",
    date: 'July 11, 2020',
    excerpt:
      "As per the data released by Reserve Bank of India on 10th July 2020, India's Forex Reserves reaches an all-time high at USD 513.25B. International reserves are used to settle balance of payments deficits between countries.",
    visual: ForexChart,
    accent: '#22c55e',
  },
  {
    id: 2,
    slug: 'gold-heading-towards-lifetime-high',
    category: 'Market Insights',
    title: 'Is GOLD Heading Towards Life Time High?',
    date: 'June 30, 2020',
    excerpt:
      'Gold Prices are trading higher on Tuesday reaching $1802 levels. This rally in Gold prices is mainly attributed to rising cases of COVID-19 and cross-border tensions between India and China.',
    visual: GoldBullChart,
    accent: '#f59e0b',
  },
  {
    id: 3,
    slug: 'mahindra-mahindra-quarterly-outlook',
    category: 'Stock Analysis',
    title: 'Mahindra & Mahindra Quarterly Outlook',
    date: 'June 23, 2020',
    excerpt:
      'Mahindra & Mahindra, from its recent fall till 245.40, has gained a whopping 109% upside and is trading at 514 today. This upward movement is mainly driven by the tractor segment.',
    visual: StockOutlookChart,
    accent: '#C8203E',
  },
  {
    id: 4,
    slug: 'gold-slips-as-dollar-gains',
    category: 'Commodity Watch',
    title: 'Gold Slips as Dollar Gains',
    date: 'October 28, 2020',
    excerpt:
      'Gold slips more than 1.50% and breaks a 4-week low on Wednesday due to increased uncertainty about rising COVID-19 cases in Europe and U.S. presidential elections. Concerns about renewed lockdowns weigh on sentiment.',
    visual: GoldDropChart,
    accent: '#f59e0b',
  },
];

/* ── Component ───────────────────────────────────────────────────── */

export default function Blogs() {
  return (
    <SectionWrapper id="blogs" className="bg-bg relative px-6 md:px-12 py-[12vh] overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto relative z-10">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 md:mb-20 items-end">
          <div>
            <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mb-6">
              <span className="text-brand-red mr-2">●</span>
              Insights & Research
            </Reveal>
            <Reveal as="h2" delay={0.1} className="text-4xl md:text-6xl font-serif text-ink tracking-tight leading-[0.95]">
              Blogs &amp; <span className="font-serif italic text-brand-red">Market Views</span>
            </Reveal>
          </div>
          <Reveal as="p" delay={0.2} className="text-lg text-ink-soft leading-relaxed font-sans max-w-md md:justify-self-end">
            Stay updated with the latest insights on finance, markets, and more.
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((post, i) => {
            const Visual = post.visual;
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
              >
              <Link href={`/blogs/${post.slug}`} className="group flex flex-col rounded-3xl border border-rule bg-bg-deep/60 overflow-hidden hover:border-brand-red/50 hover:shadow-[0_20px_60px_-12px_rgba(200,32,62,0.15)] transition-all duration-500 h-full"
              >
                {/* Chart visual */}
                <div className="relative w-full h-44 overflow-hidden bg-[#0a0a14] shrink-0">
                  <Visual />
                  {/* Top-left category chip */}
                  <span
                    className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border"
                    style={{
                      color: post.accent,
                      borderColor: post.accent + '40',
                      background: post.accent + '18',
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                    <Calendar className="w-3 h-3" strokeWidth={1.5} />
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg text-ink leading-snug group-hover:text-brand-red transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-6 h-[1.5px] bg-brand-red group-hover:w-12 transition-all duration-500" />

                  {/* Excerpt */}
                  <p className="font-sans text-sm text-ink-soft leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-red mt-auto pt-2 border-t border-rule group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                  </div>
                </div>
              </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
