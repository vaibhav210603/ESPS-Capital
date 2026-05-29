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
      <Hero />
      <Marquee />
      <About />
      <Offering />
      <WhyDifferent />
      <EpathShala />
      <Contact />
      <Footer />
    </main>
  );
}
