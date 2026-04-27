import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="bg-[#080812] border-t border-[#1e1e3a] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-[#00d4ff] font-bold text-xl tracking-widest uppercase">
              {personalInfo.name.split(' ')[0]}
              <span className="text-white"> Bhattacharjee</span>
            </a>
            <p className="text-[#64748b] text-xs mt-1">Python Developer · Business Developer · AI Enthusiast</p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.emails[0]}`}
              className="text-[#64748b] hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-[#64748b] text-xs flex items-center gap-1">
            Built with Passion <Heart size={12} className="text-[#00d4ff]" /> · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
