"use client";
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function About() {
  const certifications = [
    { name: "CISO - Chief Information Security Officer", link: "https://acrobat.adobe.com/id/urn:aaid:sc:EU:edc7e80a-72e1-4b08-9b48-ca76fc9cfe3b" },
    { name: "CompTIA Security+ (In Progress)", link: "#" },
    { name: "CEH - Certified Ethical Hacker (In Progress)", link: "#" }
  ];

  return (
    <section id="about" className="py-24">
      {/* ... (Reste de ton code About Me) ... */}
      
      <div className="mt-12">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Award className="text-blue-500" /> Certifications
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <li key={i} className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl flex items-center justify-between group hover:border-blue-500/50 transition-colors">
              <span className="text-slate-300 font-medium">{cert.name}</span>
              {cert.link !== "#" && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  className="text-xs font-mono text-blue-400 hover:text-white underline underline-offset-4"
                >
                  Verify
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}