"use client";
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="py-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
        <span className="text-blue-500 font-mono text-2xl">04.</span> Get In Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            I am always open to discussing Blue Team operations, threat intelligence, or system hardening. Let's build a more secure digital world together.
          </p>
          <div className="space-y-4">
            {/* LOCALISATION RESTAURÉE */}
            <div className="flex items-center gap-4 bg-slate-900/40 p-5 rounded-xl border border-slate-800">
              <MapPin className="text-blue-500" size={24} />
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">Location</p>
                <p className="text-sm font-black text-slate-200">Paris, France</p>
              </div>
            </div>

            <a href="mailto:maxime.brucale@edu.ece.fr" className="flex items-center gap-4 bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition-all group">
              <Mail className="text-blue-500" size={24} />
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">Email</p>
                <p className="text-sm font-black text-slate-200">maxime.brucale@edu.ece.fr</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/maxime-brucale-b77041294/" target="_blank" className="flex items-center gap-4 bg-slate-900/40 p-5 rounded-xl border border-slate-800 hover:border-blue-500 transition-all group">
              <Linkedin className="text-blue-600" size={24} />
              <div>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">LinkedIn</p>
                <p className="text-sm font-black text-slate-200">Maxime Brucale</p>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-[#111827] p-8 rounded-3xl border border-slate-800 shadow-xl">
          <form action="https://formspree.io/f/xgoyjrwr" method="POST" className="space-y-6">
            <input name="name" required type="text" placeholder="Your Name" className="w-full bg-[#0b1120] border border-slate-800 rounded-xl p-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold" />
            <input name="email" required type="email" placeholder="Your Email" className="w-full bg-[#0b1120] border border-slate-800 rounded-xl p-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold" />
            <textarea name="message" required rows={4} placeholder="Your Message" className="w-full bg-[#0b1120] border border-slate-800 rounded-xl p-4 text-sm text-white focus:border-blue-500 outline-none transition-all font-bold" />
            <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}