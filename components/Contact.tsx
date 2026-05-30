'use client';

import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { useState, FormEvent, useRef } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  { id: 'debt-syndication',   label: 'Debt Syndication' },
  { id: 'real-estate-infra',  label: 'Real Estate & Infra' },
  { id: 'corporate-advisory', label: 'Corporate Advisory' },
  { id: 'merchant-banking',   label: 'Merchant Banking' },
  { id: 'general',            label: 'General Inquiry' },
];

/* ── mouse-tracked glow on the card ─────────────────────────────────────── */
function GlowCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 30 });
  const sy = useSpring(my, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };
  const handleMouseLeave = () => { mx.set(50); my.set(50); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative rounded-[2rem] overflow-hidden"
    >
      {/* Mouse-tracked inner glow */}
      <motion.div
        style={{ left: typeof sx.get === 'function' ? undefined : '50%', top: typeof sy.get === 'function' ? undefined : '50%' }}
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 hover:opacity-100 transition-opacity duration-500"
      />
      <motion.div
        style={{
          background: `radial-gradient(320px circle at ${sx}% ${sy}%, rgba(211,34,56,0.18) 0%, transparent 65%)`,
        }}
        className="pointer-events-none absolute inset-0 rounded-[2rem] z-0"
      />
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [service, setService]     = useState('debt-syndication');
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [company, setCompany]     = useState('');
  const [phone, setPhone]         = useState('');
  const [message, setMessage]     = useState('');
  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) e.name = 'Please enter your full name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Valid email required';
    if (!message.trim() || message.trim().length < 10) e.message = 'Please describe your goals (min 10 chars)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1800);
  };

  const resetForm = () => {
    setName(''); setEmail(''); setCompany(''); setPhone(''); setMessage('');
    setService('debt-syndication'); setErrors({}); setIsSubmitted(false);
  };

  const field = (err: boolean) =>
    [
      'w-full h-12 bg-white/[0.04] border rounded-xl px-4 text-sm text-white/90 placeholder-white/20',
      'focus:outline-none focus:ring-2 transition-all duration-300 font-sans block backdrop-blur-sm',
      err
        ? 'border-brand-red/70 focus:ring-brand-red/15 focus:border-brand-red'
        : 'border-white/[0.08] focus:border-white/30 focus:ring-white/[0.06] hover:border-white/[0.14]',
    ].join(' ');

  const textarea = (err: boolean) =>
    [
      'w-full min-h-[130px] bg-white/[0.04] border rounded-xl px-4 py-3.5 text-sm text-white/90 placeholder-white/20',
      'focus:outline-none focus:ring-2 transition-all duration-300 font-sans block resize-none backdrop-blur-sm',
      err
        ? 'border-brand-red/70 focus:ring-brand-red/15 focus:border-brand-red'
        : 'border-white/[0.08] focus:border-white/30 focus:ring-white/[0.06] hover:border-white/[0.14]',
    ].join(' ');

  return (
    <section
      id="contact"
      className="relative bg-[#070709] px-6 md:px-12 py-[14vh] overflow-hidden"
    >
      {/* ── Aurora orbs ─────────────────────────────────────────────────── */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], x: [-30, 30, -30], y: [-20, 20, -20] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-40 top-0 w-[600px] h-[600px] rounded-full bg-brand-red/[0.14] blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 0.88, 1.1], x: [25, -25, 25], y: [20, -20, 20] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -right-40 bottom-0 w-[700px] h-[700px] rounded-full bg-[#3d0010]/40 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [0.9, 1.2, 0.9], y: [-30, 30, -30] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute left-1/2 -translate-x-1/2 top-1/3 w-[400px] h-[400px] rounded-full bg-brand-red/[0.07] blur-[100px] pointer-events-none"
      />

      {/* ── Dot-grid texture overlay ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* ── Horizontal rule that draws in on scroll ──────────────────────── */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent origin-center"
      />

      <div className="max-w-[90rem] mx-auto relative z-10">

        {/* ── Section label + mega heading ────────────────────────────────── */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.18em] text-white/40 mb-5 flex items-center gap-2"
          >
            <span className="inline-block w-1 h-1 rounded-full bg-brand-red" />
            Get in touch with us
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05, ease: EASE }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white tracking-tight leading-[0.92]"
            >
              Ready to empower your{' '}
              <span className="font-serif italic text-brand-red">financial growth?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              className="text-base md:text-lg text-white/50 leading-relaxed font-sans max-w-lg lg:pb-2"
            >
              We drive client growth through expert financial advisory and strong
              industry relationships. Tell us about your goals and let's explore
              how we can support your journey.
            </motion.p>
          </div>
        </div>

        {/* ── Main grid: contact chips (left) + form card (right) ─────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left: contact info chips */}
          <div className="lg:col-span-4 flex flex-col gap-5">

            {/* Animated rule */}
            <div className="w-full h-px bg-white/[0.07] relative mb-2 overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '400%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 left-0 w-28 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent"
              />
            </div>

            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'info@espscapital.com',
                href: 'mailto:info@espscapital.com',
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 22 4015 6765',
                href: 'tel:+912240156765',
              },
              {
                icon: MapPin,
                label: 'Office',
                value: 'The Summit Business Bay, Andheri East, Mumbai',
                href: 'https://maps.google.com/?q=The+Summit+Business+Bay+Omkar+Andheri+East',
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm hover:border-brand-red/40 hover:bg-brand-red/[0.04] transition-all duration-400"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl border border-white/10 bg-white/[0.05] flex items-center justify-center text-white/50 group-hover:border-brand-red/50 group-hover:text-brand-red transition-all duration-300">
                  <item.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-white/35 mb-1">
                    {item.label}
                  </span>
                  <span className="block font-sans text-sm text-white/75 group-hover:text-white transition-colors duration-300 leading-snug">
                    {item.value}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-brand-red shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}

            {/* Location map — small, grayscale */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="rounded-2xl overflow-hidden border border-white/[0.07] h-52 relative"
            >
              <iframe
                title="Office Map"
                src="https://maps.google.com/maps?q=The%20Summit%20Business%20Bay%20Omkar%20Andheri%20East&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) contrast(88%) brightness(0.55) saturate(0)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>

          {/* Right: jaw-dropping glass form card */}
          <div className="lg:col-span-8 relative">

            {/* Extra glow blob behind the card */}
            <div className="absolute -inset-8 bg-gradient-to-br from-brand-red/[0.12] via-transparent to-transparent rounded-[3rem] blur-2xl pointer-events-none" />

            <GlowCard>
              {/* Layered glass border */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/[0.1] pointer-events-none z-20" />
              <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/[0.04] pointer-events-none z-20" />

              {/* Top bevel — draws in */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: EASE, delay: 0.2 }}
                className="absolute top-0 left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center pointer-events-none z-20 rounded-full"
              />
              {/* Brand-red top accent hairline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
                className="absolute top-0 left-[30%] right-[30%] h-px bg-brand-red/70 origin-center pointer-events-none z-20"
              />

              {/* Inner glass surface */}
              <div className="relative z-10 bg-white/[0.035] backdrop-blur-2xl rounded-[2rem] p-7 md:p-10">

                {/* Card header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="font-serif text-2xl md:text-3xl text-white leading-tight"
                    >
                      Start a conversation
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35"
                    >
                      Advisory Inquiry Desk
                    </motion.p>
                  </div>
                  {/* Pulsing status dot */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/30">
                      Accepting inquiries
                    </span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      noValidate
                    >
                      {/* Service selector */}
                      <div className="mb-7">
                        <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-white/35 mb-3">
                          Advisory Area
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {SERVICES.map((s) => (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => setService(s.id)}
                              className={[
                                'relative px-4 py-2 rounded-full text-xs font-mono border transition-all duration-300',
                                service === s.id
                                  ? 'border-brand-red text-brand-red bg-brand-red/10'
                                  : 'border-white/[0.08] text-white/45 hover:border-white/20 hover:text-white/70',
                              ].join(' ')}
                            >
                              {service === s.id && (
                                <motion.span
                                  layoutId="activePill"
                                  className="absolute inset-0 rounded-full border border-brand-red/60 bg-brand-red/10"
                                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                                />
                              )}
                              <span className="relative z-10">{s.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name + Email */}
                      <div className="grid md:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block font-mono text-[9px] uppercase tracking-wider text-white/35 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: '' })); }}
                            placeholder="Amit Sharma"
                            className={field(!!errors.name)}
                          />
                          <AnimatePresence>
                            {errors.name && (
                              <motion.span
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-brand-red text-[10px] font-mono mt-1.5 block"
                              >
                                {errors.name}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                        <div>
                          <label className="block font-mono text-[9px] uppercase tracking-wider text-white/35 mb-2">
                            Corporate Email *
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: '' })); }}
                            placeholder="amit@company.com"
                            className={field(!!errors.email)}
                          />
                          <AnimatePresence>
                            {errors.email && (
                              <motion.span
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-brand-red text-[10px] font-mono mt-1.5 block"
                              >
                                {errors.email}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Company + Phone */}
                      <div className="grid md:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block font-mono text-[9px] uppercase tracking-wider text-white/35 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Sharma Group"
                            className={field(false)}
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[9px] uppercase tracking-wider text-white/35 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className={field(false)}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="mb-8">
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-white/35 mb-2">
                          Describe your goals *
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors(p => ({ ...p, message: '' })); }}
                          rows={4}
                          placeholder="e.g. Seeking structuring and advisory for a capital syndication round…"
                          className={textarea(!!errors.message)}
                        />
                        <AnimatePresence>
                          {errors.message && (
                            <motion.span
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-brand-red text-[10px] font-mono mt-1.5 block"
                            >
                              {errors.message}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full rounded-xl overflow-hidden py-4 px-6 flex items-center justify-center gap-2.5 font-sans font-semibold text-sm transition-all duration-500 disabled:opacity-50"
                      >
                        {/* Button background layers */}
                        <span className="absolute inset-0 bg-brand-red transition-all duration-500 group-hover:opacity-90" />
                        <span className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/[0.06]" />
                        {/* Bottom glow */}
                        <span className="absolute -bottom-4 left-1/4 right-1/4 h-8 bg-brand-red/60 blur-xl transition-all duration-500 group-hover:bottom-0 group-hover:blur-2xl" />

                        <span className="relative z-10 flex items-center gap-2 text-white">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              <span className="font-mono text-[11px] uppercase tracking-widest">Securing transmission…</span>
                            </>
                          ) : (
                            <>
                              Submit Advisory Request
                              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                            </>
                          )}
                        </span>
                      </button>

                      <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-wider text-white/20">
                        We respond within 24 business hours · Confidential
                      </p>
                    </motion.form>
                  ) : (
                    /* Success state */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="flex flex-col items-center py-14 text-center"
                    >
                      <div className="relative mb-8">
                        {[1, 2].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.8, opacity: 0.6 }}
                            animate={{ scale: 1.6 * i, opacity: 0 }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: i * 0.3 }}
                            className="absolute inset-0 rounded-full bg-brand-red/25"
                          />
                        ))}
                        <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-brand-red/20 to-brand-red/5 border border-brand-red/30 flex items-center justify-center text-brand-red">
                          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <motion.path
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.6, delay: 0.15 }}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-serif text-3xl text-white mb-3">Transmission Secured</h3>
                      <p className="text-sm text-white/55 max-w-md mx-auto mb-8 font-sans leading-relaxed">
                        Thank you, <strong className="text-white">{name}</strong>. Your advisory request for{' '}
                        <strong className="text-brand-red">{SERVICES.find(s => s.id === service)?.label}</strong> has
                        been logged. Our partnership desk will reach out within 24 business hours.
                      </p>
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-brand-red/50 hover:text-brand-red text-white/40 font-sans text-xs px-7 py-3 transition-colors duration-300"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
