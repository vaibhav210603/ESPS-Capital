'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Full-screen branded loading screen.
 *
 * Preloads the site's heaviest assets (hero background, section imagery,
 * textures, logo, video poster) and waits for web fonts before revealing
 * the page. Displays real download progress and fades out once everything
 * is ready — with a hard timeout fallback so it can never hang.
 */

// Assets that visibly matter on first paint. Kept in sync with the
// references in page.tsx / globals.css / the section components.
const CRITICAL_ASSETS = [
  '/images/hero_new.png',
  '/images/paper_texture.webp',
  '/images/service_capital_raising.webp',
  '/images/service_restructuring.webp',
  '/images/academy_formal.webp',
  '/about_video_poster.webp',
  '/esps_logo.png',
];

const MAX_WAIT_MS = 7000; // safety net — never block the page longer than this

export default function Preloader() {
  const [progress, setProgress] = useState(0); // displayed %, smoothed
  const [done, setDone] = useState(false); // assets ready -> begin fade
  const [hidden, setHidden] = useState(false); // fully removed from DOM
  const targetRef = useRef(0); // real % target driven by loaded count

  // Kick off asset preloading + font readiness.
  useEffect(() => {
    let cancelled = false;
    let loaded = 0;

    const total = CRITICAL_ASSETS.length + 1; // +1 for fonts
    const bump = () => {
      loaded += 1;
      targetRef.current = Math.min(100, Math.round((loaded / total) * 100));
    };

    CRITICAL_ASSETS.forEach((src) => {
      const img = new Image();
      img.onload = bump;
      img.onerror = bump; // a failed asset shouldn't trap the loader
      img.src = src;
    });

    const fontsReady =
      typeof document !== 'undefined' && 'fonts' in document
        ? (document as Document & { fonts: FontFaceSet }).fonts.ready
        : Promise.resolve();
    fontsReady.then(bump).catch(bump);

    const finish = () => {
      if (cancelled) return;
      targetRef.current = 100;
      setDone(true);
    };

    // Resolve when everything is loaded, or after the hard timeout.
    const poll = window.setInterval(() => {
      if (loaded >= total) {
        window.clearInterval(poll);
        finish();
      }
    }, 80);
    const failsafe = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      cancelled = true;
      window.clearInterval(poll);
      window.clearTimeout(failsafe);
    };
  }, []);

  // Smoothly animate the displayed percentage toward the real target.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setProgress((p) => {
        const target = targetRef.current;
        if (p >= target) return p;
        // ease toward target; always crawl forward at least a little
        const next = p + Math.max(0.5, (target - p) * 0.08);
        return next >= target ? target : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Lock scroll while the loader is visible.
  useEffect(() => {
    if (hidden) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [hidden]);

  // Once assets are ready AND the bar has visually reached 100, fade + unmount.
  useEffect(() => {
    if (done && progress >= 100) {
      const t = setTimeout(() => setHidden(true), 650);
      return () => clearTimeout(t);
    }
  }, [done, progress]);

  if (hidden) return null;

  const pct = Math.round(progress);
  const ready = done && progress >= 100;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg transition-opacity duration-[650ms] ease-out ${
        ready ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* paper-texture vibe via subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-deep/40 pointer-events-none" />

      <div className="relative flex flex-col items-center px-8">
        {/* Wordmark */}
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted mb-5">
          <span className="text-brand-red mr-2">●</span>
          Knowledge Creates Wealth
        </div>
        <div className="font-serif text-4xl md:text-6xl text-ink tracking-tight mb-12 text-center">
          ESPS <span className="italic text-brand-red">Capital</span>
        </div>

        {/* Progress bar */}
        <div className="w-[220px] md:w-[300px] h-[2px] bg-rule overflow-hidden">
          <div
            className="h-full bg-ink"
            style={{ width: `${pct}%`, transition: 'width 120ms linear' }}
          />
        </div>

        {/* Numeric readout */}
        <div className="mt-4 flex w-[220px] md:w-[300px] justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <span>Loading</span>
          <span className="tabular-nums">{String(pct).padStart(3, '0')}%</span>
        </div>
      </div>
    </div>
  );
}
