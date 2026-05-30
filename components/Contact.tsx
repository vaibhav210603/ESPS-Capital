'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { useState, FormEvent } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  { id: 'debt-syndication', label: 'Debt Syndication' },
  { id: 'real-estate-infra', label: 'Real Estate & Infra' },
  { id: 'corporate-advisory', label: 'Corporate Advisory' },
  { id: 'merchant-banking', label: 'Merchant Banking' },
  { id: 'general', label: 'General Inquiry' },
];

export default function Contact() {
  const [service, setService] = useState('debt-syndication');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation and states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail (min 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate premium transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1800);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setMessage('');
    setService('debt-syndication');
    setErrors({});
    setIsSubmitted(false);
  };

  const inputClasses = (hasError: boolean) => `
    w-full h-12 bg-white/95 backdrop-blur-sm border rounded-xl px-4 text-sm text-ink placeholder-muted/60 
    focus:outline-none focus:ring-2 transition-all duration-300 font-sans block
    \${hasError 
      ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/10' 
      : 'border-rule focus:border-ink focus:ring-ink/10 hover:border-muted'
    }
  `;

  const textareaClasses = (hasError: boolean) => `
    w-full min-h-[120px] bg-white/95 backdrop-blur-sm border rounded-xl px-4 py-3.5 text-sm text-ink placeholder-muted/60 
    focus:outline-none focus:ring-2 transition-all duration-300 font-sans block resize-none
    \${hasError 
      ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/10' 
      : 'border-rule focus:border-ink focus:ring-ink/10 hover:border-muted'
    }
  `;

  return (
    <section id="contact" className="relative bg-bg px-6 md:px-12 py-[16vh] overflow-hidden">
      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.22] pointer-events-none mix-blend-multiply" 
        style={{ backgroundImage: 'url(/images/cta_bg.png)' }} 
      />

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal as="div" className="font-mono text-[10px] md:text-xs uppercase tracking-[0.1em] text-muted mb-6">
              <span className="text-brand-red mr-2">●</span>
              Get in touch with us
            </Reveal>

            <Reveal as="h2" delay={0.1} className="text-5xl md:text-7xl font-serif text-ink tracking-tight leading-[0.95] mb-8">
              <span data-cursor="blend">Ready to empower your <span className="italic text-brand-red">financial growth?</span></span>
            </Reveal>

            <Reveal as="p" delay={0.2} className="text-base md:text-lg text-ink-soft leading-relaxed font-sans mb-12 max-w-lg">
              We drive client growth through expert financial advisory and strong industry relationships. Tell us about your goals, and let's explore how we can support your growth.
            </Reveal>

            {/* Animated Rule */}
            <div className="w-full max-w-md h-[1px] bg-rule relative mb-12 overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '300%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 left-0 w-32 h-[1px] bg-brand-red"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-red" />
              </motion.div>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-6 mt-10">
              {/* Direct Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border border-rule rounded-3xl bg-bg-deep/20 backdrop-blur-sm p-6 flex flex-col gap-5 text-left"
              >
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-rule flex items-center justify-center text-muted group-hover:border-brand-red group-hover:text-brand-red transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted">Email</span>
                    <a href="mailto:info@espscapital.com" className="font-serif text-lg text-ink hover:text-brand-red transition-colors">
                      info@espscapital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-rule flex items-center justify-center text-muted group-hover:border-brand-red group-hover:text-brand-red transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-muted">Phone</span>
                    <a href="tel:+912240156765" className="font-serif text-lg text-ink hover:text-brand-red transition-colors">
                      +91 22 4015 6765
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Desk Card */}
          <div className="lg:col-span-7 w-full relative">
            
            {/* Jaw-dropping ambient glow circles behind the card */}
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                x: [-15, 15, -15],
                y: [-10, 10, -10]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-brand-red/10 blur-[80px] pointer-events-none z-0"
            />
            <motion.div
              animate={{ 
                scale: [1.1, 0.9, 1.1],
                x: [20, -20, 20],
                y: [15, -15, 15]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-yellow-600/5 blur-[90px] pointer-events-none z-0"
            />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              whileHover={{ y: -4 }}
              className="relative z-10 bg-bg-deep/40 backdrop-blur-xl border border-rule hover:border-brand-red/40 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-[0_20px_50px_-10px_rgba(211,34,56,0.12)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
            >
              {/* Premium Top Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent pointer-events-none" />

              {/* Light glow pattern inside card */}
              <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-brand-red/5 blur-3xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="inquiry-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    noValidate
                  >
                    <div className="mb-8">
                      <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-muted mb-3 text-left">
                        Select Advisory Area
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES.map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setService(s.id)}
                            className={`relative px-4 py-2 rounded-full text-xs font-mono border transition-all duration-300 \${
                              service === s.id
                                ? 'border-brand-red text-brand-red bg-brand-red/5'
                                : 'border-rule text-ink-soft hover:border-ink hover:text-ink'
                            }`}
                          >
                            {service === s.id && (
                              <motion.span
                                layoutId="activeServiceGlow"
                                className="absolute inset-0 rounded-full border border-brand-red bg-brand-red/5"
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                              />
                            )}
                            <span className="relative z-10">{s.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-muted mb-2 text-left">Your Name *</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                          }}
                          placeholder="e.g. Amit Sharma"
                          className={inputClasses(!!errors.name)}
                        />
                        <AnimatePresence>
                          {errors.name && (
                            <motion.span
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-brand-red text-[10px] font-mono mt-1 block text-left"
                            >
                              {errors.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-muted mb-2 text-left">Corporate Email *</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                          }}
                          placeholder="e.g. amit@company.com"
                          className={inputClasses(!!errors.email)}
                        />
                        <AnimatePresence>
                          {errors.email && (
                            <motion.span
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-brand-red text-[10px] font-mono mt-1 block text-left"
                            >
                              {errors.email}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-muted mb-2 text-left">Company Name</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Sharma Group"
                          className={inputClasses(false)}
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-muted mb-2 text-left">Phone Number</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 98765 43210"
                          className={inputClasses(false)}
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block font-mono text-[9px] uppercase tracking-wider text-muted mb-2 text-left">Briefly describe your goals *</label>
                      <textarea
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                        }}
                        rows={4}
                        placeholder="e.g. Seeking structuring and advisory for a capital syndication round..."
                        className={textareaClasses(!!errors.message)}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-brand-red text-[10px] font-mono mt-1 block text-left"
                          >
                            {errors.message}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative flex items-center justify-center gap-2 rounded-xl bg-ink text-bg font-sans font-medium text-sm py-4 px-6 overflow-hidden group hover:bg-brand-red transition-colors duration-500 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-wider">
                          <svg className="animate-spin h-4 w-4 text-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Securing Connection...
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center gap-2">
                          Submit Advisory Request
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="inquiry-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center py-10 text-center"
                  >
                    <div className="relative mb-6">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                        className="absolute inset-0 rounded-full bg-brand-red/20"
                      />
                      <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center relative z-10 text-brand-red">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-ink mb-3">Transmission Secured</h3>
                    <p className="text-sm text-ink-soft max-w-md mx-auto mb-8 font-sans leading-relaxed">
                      Thank you, <strong className="text-ink">{name}</strong>. Your advisory request for <strong className="text-ink">{SERVICES.find(s => s.id === service)?.label}</strong> has been logged. Our partnership desk will reach out within 24 business hours.
                    </p>
                    
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 rounded-full border border-rule hover:border-ink hover:text-ink text-muted font-sans text-xs px-6 py-3 transition-colors duration-300"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

        {/* Full-Width Office Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          className="border border-rule rounded-3xl bg-bg-deep/20 backdrop-blur-sm p-6 md:p-8 flex flex-col gap-6 text-left mt-12 w-full"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-wider text-muted mb-1">Corporate Office</span>
              <h4 className="font-serif text-2xl text-ink font-semibold leading-tight mb-2">
                THE SUMMIT BUSINESS BAY (OMKAR)
              </h4>
              <p className="font-sans text-sm text-ink-soft leading-relaxed max-w-xl">
                1028, 10th Floor, Near Western Express Highway, Andheri East, Mumbai, Maharashtra 400069
              </p>
            </div>
            
            <a 
              href="https://maps.google.com/?q=The%20Summit%20Business%20Bay%20Omkar%20Andheri%20East"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rule hover:border-brand-red hover:text-brand-red text-muted font-sans text-xs px-5 py-3 transition-colors duration-300 shrink-0 self-start md:self-end"
            >
              Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
          
          {/* Embed Map spanning full width */}
          <div className="w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-rule relative">
            <iframe
              title="Office Location Map"
              src="https://maps.google.com/maps?q=The%20Summit%20Business%20Bay%20Omkar%20Andheri%20East&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(92%) opacity(88%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
