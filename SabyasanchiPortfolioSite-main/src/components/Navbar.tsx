import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0a0a14]/90 backdrop-blur-md border-b border-[#1e1e3a] shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="text-[#00d4ff] font-bold text-lg tracking-widest uppercase hover:text-white transition-colors duration-300"
        >
          SB
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#94a3b8] hover:text-[#00d4ff] text-sm tracking-wider uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href={personalInfo.cv}
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#00d4ff] text-[#00d4ff] text-sm rounded hover:bg-[#00d4ff]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]"
        >
          <Download size={14} />
          Resume
        </a>

        <button
          className="md:hidden text-[#94a3b8] hover:text-[#00d4ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a14]/95 backdrop-blur-md border-b border-[#1e1e3a] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#94a3b8] hover:text-[#00d4ff] text-sm tracking-wider uppercase transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personalInfo.cv}
                download
                className="flex items-center gap-2 text-[#00d4ff] text-sm"
              >
                <Download size={14} /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
