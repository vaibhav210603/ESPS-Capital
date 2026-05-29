import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Offering from '@/components/Offering';
import WhyDifferent from '@/components/WhyDifferent';
import EpathShala from '@/components/EpathShala';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/*
       * ── STICKY BACKGROUND WRAPPER ──────────────────────────────────────
       * The newspaper image is pinned (sticky top-0) inside this wrapper.
       * Hero + Marquee content scrolls on top of it.
       * Once the wrapper scrolls out of view, the sticky bg goes with it
       * and all subsequent solid-background sections cover it naturally.
       * ────────────────────────────────────────────────────────────────── */}
      <div className="relative">
        {/* Sticky background — stays fixed while Hero + Marquee scroll */}
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden -z-10">
          <img
            src="/images/hero.png"
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.28]"
          />
          {/* Cream tint so text stays readable */}
          <div className="absolute inset-0 bg-bg/50" />
          {/* Subtle vignette at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/80" />
        </div>

        {/* Hero — transparent bg, sits over sticky */}
        <div className="-mt-[100svh] relative z-10">
          <Hero />
        </div>

        {/* Marquee — dark strip floats on top of sticky bg */}
        <div className="relative z-10">
          <Marquee />
        </div>
      </div>

      {/* ── Everything below has solid backgrounds ── */}
      <About />
      <Offering />
      <WhyDifferent />
      <EpathShala />
      <Contact />
      <Footer />
    </main>
  );
}
