"use client";
import { motion } from 'framer-motion';
import { Github, Play } from 'lucide-react';

export default function Projects() {
  const projects = [
    { 
      title: "CVE Fix Redirector", 
      desc: "Automated vulnerability patching tool to secure local systems and manage traffic.", 
      tags: ["HTML", "CSS", "Tailwind", "JS", "Python"], 
      link: "https://github.com/Akaonii/CVE-Fix", 
      video: "/videos/cvefix-demo.mp4", 
      img: "/projects/cveFix.png" 
    },
    { 
      title: "Ip-Tool", 
      desc: "Advanced IP reconnaissance and network tracking utility designed for security analysis.", 
      tags: ["Python", "HTML", "JS"], 
      link: "https://github.com/Akaonii/Ip-Tool", 
      video: "/videos/iptool-demo.mp4", 
      img: "/projects/IpTool.png" 
    },
    { 
      title: "Drawbot - Robot Autonome", 
      desc: "Conversion of digital designs into physical robotic art via C++ and embedded systems.", 
      tags: ["C++", "Projet Robot", "Arduino"], 
      link: "https://github.com/Akaonii/Drawbot---Showcase", 
      video: "/videos/drawbot-demo.mp4", 
      img: "/projects/Drawbot.jpeg" 
    },
    { 
      title: "ECECooked - Olympic Engine", 
      desc: "Academic project themed around the Olympic Games, showcasing game logic and OOP.", 
      tags: ["C", "Allegro"], 
      link: "https://github.com/Akaonii/ECECooked---Showcase", 
      video: "/videos/ececooked-demo.mp4", 
      img: "/projects/EceCooked.png" 
    },
    { 
      title: "OmnesBNB - Secure Platform", 
      desc: "A secure property booking showcase featuring robust authentication and defensive monitoring.", 
      tags: ["PhpMyAdmin", "MySQL", "PHP", "HTML", "CSS", "Tailwind", "JS"], 
      link: "https://github.com/Akaonii/OmnesBNB-Showcase", 
      img: "/projects/omnesbnb.jpg" 
    }
  ];

  return (
    <div id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
        <span className="text-blue-500 font-mono text-2xl">03.</span> Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -10 }} 
            className="group bg-[#111827] rounded-2xl border border-slate-800 overflow-hidden shadow-xl"
          >
            {/* Thumbnail & Overlay */}
            <div className="h-48 relative overflow-hidden bg-slate-800">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" 
              />
              
              <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                <a 
                  href={p.link} 
                  target="_blank" 
                  className="p-3 bg-white text-slate-950 rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-lg"
                  title="View Source Code"
                >
                  <Github size={22} />
                </a>

                {/* Play icon only if video exists (Excludes OmnesBNB) */}
                {p.video && (
                  <a 
                    href={p.video} 
                    target="_blank" 
                    className="p-3 bg-white text-slate-950 rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-lg"
                    title="Watch Demo"
                  >
                    <Play size={22} />
                  </a>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag, idx) => (
                  <span key={idx} className="text-[9px] font-mono font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-slate-400 italic leading-relaxed font-light">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}