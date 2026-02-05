import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer'; 

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-8 bg-[#0b1120]"> 
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> 
    </main>
  );
}