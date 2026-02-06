"use client";
import { motion } from 'framer-motion';
import { Award, User, ShieldCheck } from 'lucide-react';

export default function About() {
  const certifications = [
    { 
      name: "CISO - Chief Information Security Officer", 
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:edc7e80a-72e1-4b08-9b48-ca76fc9cfe3b",
      status: "Verified"
    },
    { 
      name: "CompTIA Security+", 
      link: "#",
      status: "In Progress"
    },
    { 
      name: "CEH - Certified Ethical Hacker", 
      link: "#",
      status: "In Progress"
    }
  ];

  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
        <span className="text-blue-500 font-mono text-2xl">01.</span> About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Colonne Texte : Présentation complète */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-slate-400 leading-relaxed text-lg"
        >
          <p>
            Currently an engineering student at <span className="text-white font-medium">ECE Paris</span>, 
            I am deeply passionate about cybersecurity and defensive operations[cite: 52, 57]. 
            My technical journey is driven by a proactive mindset to anticipate threats and harden digital infrastructures.
          </p>
          <p>
            Through my experiences at <span className="text-white font-medium">HSBC</span> and 
            <span className="text-white font-medium">Selencia</span>, I have developed strong skills in 
            SOC monitoring, threat detection via <span className="text-blue-400">Azure Sentinel</span>, 
            and automated vulnerability management[cite: 65, 66].
          </p>
          <p>
            I enjoy bridging the gap between complex security challenges and efficient, automated solutions. 
            My ultimate goal is to evolve into a <span className="text-white font-medium">CISO</span> role, 
            ensuring organizational resilience in an ever-evolving threat landscape[cite: 66].
          </p>
        </motion.div>

        {/* Colonne Certifications : Les 3 certifs avec le style d'origine */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="text-blue-500" /> Professional Certifications
          </h3>
          
          <div className="grid gap-4">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="bg-slate-900/50 border border-slate-800 p-5 rounded-xl flex items-center justify-between group hover:border-blue-500/50 transition-all"
              >
                <div className="flex flex-col">
                  <span className="text-slate-200 font-semibold">{cert.name}</span>
                  <span className={`text-[10px] font-mono mt-1 ${cert.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {cert.status}
                  </span>
                </div>
                
                {cert.link !== "#" && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-bold hover:bg-blue-500 hover:text-white transition-all uppercase tracking-wider"
                  >
                    Verify
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}