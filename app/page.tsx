import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer'; // On le ré-importe ici

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-8 bg-[#0b1120]"> 
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> {/* Le footer est de retour à sa place */}
    </main>
  );
}