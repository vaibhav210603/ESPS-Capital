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
       * Hero, Marquee strip, and About section all scroll over the same
       * fixed background. Once the wrapper ends, solid sections cover it.
       * ────────────────────────────────────────────────────────────────── */}
      <div className="relative">
        {/* Sticky background — stays pinned while 3 sections scroll over it */}
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden -z-10">
          <img
            src="/images/hero.webp"
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.28]"
          />
          {/* Cream tint for readability */}
          <div className="absolute inset-0 bg-bg/55" />
          {/* Soft vignette at the bottom edge */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />
        </div>

        {/* 1. Hero — transparent, floats over sticky */}
        <div className="-mt-[100svh] relative z-10">
          <Hero />
        </div>

        {/* 2. Marquee strip — scrolls over sticky bg */}
        <div className="relative z-10">
          <Marquee />
        </div>

        {/* 3. About — transparent bg, newspaper still shows through */}
        <div className="relative z-10">
          <About transparent />
        </div>
      </div>

      {/* ── Everything below: solid backgrounds cover the newspaper ── */}
      <Offering />
      <WhyDifferent />
      <EpathShala />
      <Contact />
      <Footer />
    </main>
  );
}
