"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, ExternalLink, FileText } from 'lucide-react';

export default function About() {
  const experiences = [
    { date: "Jan 2025 - Feb 2025", title: "Cyber Threat Analyst (Intern)", org: "HSBC Continental Europe", desc: "Threat modeling and vulnerability analysis." },
    { date: "Jun 2024 - Jul 2024", title: "SOC Analyst (Intern)", org: "SELENCIA Assurances", desc: "Security monitoring and incident detection." },
    { date: "Jul 2023", title: "IT Security Risk (Intern)", org: "HSBC Continental Europe", desc: "Evaluating and mitigating digital risks." },
    { date: "2023 - 2028", title: "Engineering Master's Degree", org: "ECE Paris", desc: "Software & Systems Security specialization." }
  ];

  const certifications = [
    { 
      title: "Data Analysis", 
      org: "DataScientest", 
      icon: <ShieldCheck className="text-red-400" size={20} />, 
      href: "/certs/cert-cyber.pdf" // Chemin vers ton fichier local
    },
    { 
      title: "Programming for Data Science", 
      org: "DataScientest", 
      icon: <BookOpen className="text-blue-400" size={20} />, 
      href: "/certs/cert-ciso.pdf" // Chemin vers ton fichier local
    }
  ];

  return (
    <div id="about" className="py-24 space-y-24">
      <motion.section 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        <div className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-4 text-white">
            <span className="text-blue-500 font-mono text-2xl">01.</span> About Me
          </h2>
          <div className="text-slate-400 text-lg leading-relaxed space-y-6 font-light">
            <p>
              Passionate about cybersecurity for <span className="text-white font-bold">5 years</span>, 
              I am currently at <strong className="text-white">ECE Paris</strong> focusing on 
              <span className="text-blue-400 font-bold"> Blue Team operations</span>.
            </p>
            <p>
              My background at <span className="text-white">HSBC</span> and <span className="text-white">Selencia</span> 
              has shaped my vision: build resilient infrastructures and hunt threats before they strike.
            </p>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-blue-500/10"
            >
              <FileText size={18} /> View Resume (PDF)
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {certifications.map((cert, idx) => (
              <a 
                key={idx} 
                href={cert.href} 
                target="_blank" 
                className="bg-slate-900/40 p-5 rounded-xl border border-slate-800 flex items-start gap-4 transition-all hover:border-blue-500 group shadow-xl"
              >
                <div className="p-2.5 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="text-slate-200 font-bold text-xs">{cert.title}</h4>
                    <ExternalLink size={12} className="text-slate-500 group-hover:text-blue-400" />
                  </div>
                  <p className="text-blue-500 text-[10px] font-mono font-bold">{cert.org}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Timeline Expériences */}
        <div className="border-l border-slate-800 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-[#0b1120]"></div>
              <span className="text-xs font-mono text-blue-500 uppercase tracking-[0.2em] font-bold">{exp.date}</span>
              <h4 className="text-xl font-bold text-white mt-1">{exp.title}</h4>
              <p className="text-slate-500 text-sm font-bold">{exp.org}</p>
              <p className="text-xs text-slate-400 leading-relaxed italic">{exp.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}