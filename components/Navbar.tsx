"use client";
import React from 'react';
import { 
  Terminal as TerminalIcon, 
  FileText, 
  User, 
  Cpu, 
  Layers,
  Mail 
} from 'lucide-react';

export default function Navbar() {
  const links = [
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Cpu size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Layers size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0b1120]/90 backdrop-blur-md border-b border-slate-800/60 shadow-2xl">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        
        {/* GAUCHE : Logo (Home) */}
        <div className="flex-1 flex justify-start">
          <a href="#home" className="flex items-center gap-3 font-bold text-2xl hover:text-blue-500 transition-all group">
            <TerminalIcon 
              size={28} 
              className="text-blue-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300" 
            />
            <span className="tracking-tighter uppercase text-white">Maxime.B</span>
          </a>
        </div>

        {/* MILIEU : Navigation avec Dynamic Glow Hover */}
        <div className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all font-black group"
            >
              <span className="text-blue-500/40 group-hover:text-blue-400 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,1)] transition-all duration-300 ease-out">
                {link.icon}
              </span>
              {link.name}
            </a>
          ))}
        </div>

        {/* DROITE : Resume Button */}
        <div className="flex-1 flex justify-end">
          <a 
            href="/cv.pdf" 
            target="_blank" 
            className="flex items-center gap-2 px-7 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs font-mono uppercase tracking-widest text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 font-black"
          >
            <FileText size={18} /> Resume
          </a>
        </div>
      </div>
    </nav>
  );
}