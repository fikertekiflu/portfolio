import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh' }}>
      <ScrollObserver />
      <Navbar />
      <Hero />
      <StatsStrip />
      <Projects />
      <Skills />
      <InteractiveTerminal />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
