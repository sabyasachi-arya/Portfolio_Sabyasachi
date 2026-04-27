import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const titleWords = ['Python Developer', 'Business Developer', 'AI Enthusiast'];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titleWords[wordIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1800);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplayText(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWordIndex((w) => (w + 1) % titleWords.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? 60 : 90
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080812]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle" style={{ left: '10%', animationDelay: '0s', animationDuration: '18s' }} />
        <div className="particle" style={{ left: '25%', animationDelay: '3s', animationDuration: '22s' }} />
        <div className="particle" style={{ left: '45%', animationDelay: '6s', animationDuration: '16s' }} />
        <div className="particle" style={{ left: '65%', animationDelay: '1s', animationDuration: '20s' }} />
        <div className="particle" style={{ left: '80%', animationDelay: '4s', animationDuration: '25s' }} />
        <div className="particle" style={{ left: '55%', animationDelay: '8s', animationDuration: '19s' }} />

        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#00d4ff]/5 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#0088cc]/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center py-20">
        <div className="hero-content">
          <p className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-down">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in-up">
            {personalInfo.name.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-gradient' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <div className="flex items-center gap-2 mb-6 h-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-[#94a3b8] text-lg sm:text-xl font-light">
              {displayText}
            </span>
            <span className="text-[#00d4ff] text-2xl animate-blink">|</span>
          </div>

          <p className="text-[#64748b] text-base leading-relaxed max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            B.Tech Computer Science | Results-driven professional bridging technology and business growth.
            Based in Kolkata, India. Open to global opportunities.
          </p>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href={personalInfo.cv}
              download
              className="flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#080812] font-semibold rounded hover:bg-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download CV
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-[#00d4ff]/50 text-[#00d4ff] font-semibold rounded hover:border-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${personalInfo.emails[0]}`}
              className="text-[#64748b] hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
              title="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href={`https://wa.me/${personalInfo.phone.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
              title="WhatsApp"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in-left">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#0088cc]/20 blur-xl animate-pulse-slow" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#0055aa] opacity-60" />
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top border-4 border-[#080812] shadow-2xl"
            />
            <div className="absolute -bottom-3 -right-3 bg-[#0f0f1a] border border-[#1e1e3a] rounded-xl px-4 py-2 shadow-lg">
              <p className="text-[#00d4ff] font-semibold text-sm">PCEP Certified</p>
              <p className="text-[#64748b] text-xs">Python Programmer</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#64748b] hover:text-[#00d4ff] transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
