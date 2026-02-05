"use client";
import { ChevronDown, Mail, Github, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#0b1120]">
      {/* Glow effect discret en arrière-plan */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)] -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-center space-y-10 px-6 w-full max-w-4xl"
      >
        <div className="space-y-6">
          {/* Petit surtitre */}
          <p className="text-blue-500 font-mono tracking-[0.3em] text-xs uppercase font-black">
            Engineering Student @ ECE Paris
          </p>
          
          {/* Titre Principal : Mi-Blanc / Mi-Bleu */}
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight">
            Maxime <span className="text-blue-500">Brucale</span>
          </h1>

          {/* Ton texte : Présentation des Skills & Projets */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Welcome to my portfolio, dedicated to presenting my skills and projects in Cybersecurity.
            </h2>
            <p className="text-sm text-slate-500 font-mono uppercase tracking-widest font-bold">
              Experience: HSBC — Selencia - IRSN
            </p>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
          <a href="#projects" className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-xl shadow-white/5">
            View My Projects
          </a>
          <a href="#contact" className="px-10 py-4 bg-transparent text-white border border-slate-700 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-slate-800 transition-all">
            <Mail size={16} /> Contact Me
          </a>
        </div>

        {/* Badges de profil Cyber */}
        <div className="flex justify-center items-center gap-10 pt-8 opacity-40 hover:opacity-100 transition-all duration-500">
            <a href="https://github.com/Akaonii" target="_blank" className="hover:text-blue-500 transition-colors">
              <Github size={26} />
            </a>
            <a href="https://www.root-me.org/Zeruel734" target="_blank">
                <img src="/logos/rootme.png" alt="Root-Me" className="h-6 grayscale hover:grayscale-0 transition-all" />
            </a>
            <a href="https://app.letsdefend.io/user/zeruel734" target="_blank" className="flex items-center gap-2 hover:text-blue-500 transition-all">
                <ShieldCheck size={26} />
                <span className="text-[10px] font-mono font-bold uppercase tracking-tighter">LetsDefend</span>
            </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-600 hover:text-blue-400 transition-colors group">
        <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Scroll Down</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={24} />
        </motion.div>
      </a>
    </section>
  );
}