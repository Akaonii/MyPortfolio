"use client";
import { motion } from 'framer-motion';
import { 
  Code2, Wrench, BookText, Coffee, Terminal, Braces, 
  Database, Globe, Layout, Palette, GitBranch, 
  Box, Monitor, Server, Cpu, Shield, 
  ShieldAlert, Search, Network, Settings, Wind,
  Cloud, Zap, Microscope, CloudLightning, Binary,
  Ship, PenTool, ShieldCheck
} from 'lucide-react';

export default function Skills() {
  const categories = [
    { 
      title: "Programming", 
      icon: <Code2 className="text-blue-500" size={32} />, 
      skills: [
        { name: "Java", icon: <Coffee size={14} /> },
        { name: "C/C++", icon: <Cpu size={14} /> },
        { name: "Python", icon: <Terminal size={14} /> },
        { name: "KQL", icon: <Search size={14} /> },
        { name: "PowerShell", icon: <Terminal size={14} /> },
        { name: "Bash", icon: <Binary size={14} /> },
        { name: "PHP", icon: <Globe size={14} /> },
        { name: "SQL", icon: <Database size={14} /> },
        { name: "HTML", icon: <Layout size={14} /> },
        { name: "CSS", icon: <Palette size={14} /> },
        { name: "Tailwind", icon: <Wind size={14} /> },
        { name: "JavaScript", icon: <Braces size={14} /> }
      ] 
    },
    { 
      title: "Tools", 
      icon: <Wrench className="text-blue-500" size={32} />, 
      skills: [
        { name: "MS Sentinel / Azure", icon: <Cloud size={14} /> },
        { name: "Exegol", icon: <Shield size={14} /> },
        { name: "Kali Linux", icon: <ShieldCheck size={14} /> },
        { name: "Kubernetes", icon: <Ship size={14} /> },
        { name: "Docker", icon: <Box size={14} /> },
        { name: "Git", icon: <GitBranch size={14} /> },
        { name: "PhpMyAdmin", icon: <Server size={14} /> },
        { name: "MySQL", icon: <Database size={14} /> },
        { name: "JetBrain Tools", icon: <Settings size={14} /> }
      ] 
    },
    { 
      title: "Core Concepts", 
      icon: <BookText className="text-blue-500" size={32} />, 
      skills: [
        { name: "SOC Monitoring", icon: <Shield size={14} /> },
        { name: "Incident Response", icon: <ShieldAlert size={14} /> },
        { name: "Vulnerability Management", icon: <Zap size={14} /> },
        { name: "Cloud Security", icon: <CloudLightning size={14} /> },
        { name: "Threat Intelligence", icon: <Search size={14} /> },
        { name: "Networking", icon: <Network size={14} /> }
      ] 
    }
  ];

  return (
    <div id="skills" className="py-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
        <span className="text-blue-500 font-mono text-2xl">02.</span> Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.4)' }} 
            className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-xl transition-colors"
          >
            <div className="flex flex-col items-center mb-10">
              <div className="p-4 bg-blue-500/10 rounded-2xl mb-4">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.skills.map((skill, j) => (
                <div 
                  key={j} 
                  className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all group"
                >
                  <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] text-slate-300 font-bold tracking-wide">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}