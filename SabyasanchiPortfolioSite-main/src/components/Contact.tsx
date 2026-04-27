import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Primary Email',
    value: personalInfo.emails[0],
    href: `mailto:${personalInfo.emails[0]}`,
  },
  {
    icon: <Mail size={20} />,
    label: 'Secondary Email',
    value: personalInfo.emails[1],
    href: `mailto:${personalInfo.emails[1]}`,
  },
  {
    icon: <MessageSquare size={20} />,
    label: 'WhatsApp',
    value: personalInfo.phone.whatsapp,
    href: `https://wa.me/${personalInfo.phone.whatsapp}`,
    external: true,
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone (Call)',
    value: personalInfo.phone.call,
    href: `tel:${personalInfo.phone.call}`,
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: personalInfo.linkedinLabel,
    href: personalInfo.linkedin,
    external: true,
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: personalInfo.githubLabel,
    href: personalInfo.github,
    external: true,
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: personalInfo.address,
    href: 'https://maps.google.com/?q=Kolkata,West+Bengal,India',
    external: true,
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Contact <span className="text-gradient">Me</span>
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088cc] rounded-full" />
            <p className="mt-6 text-[#94a3b8] max-w-xl mx-auto text-sm leading-relaxed">
              I'm open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {contactItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5 transition-all duration-300 group hover:-translate-y-0.5"
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <div className="p-3 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[#64748b] text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="text-[#e2e8f0] text-sm font-medium mt-0.5 group-hover:text-[#00d4ff] transition-colors duration-300 break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-br from-[#00d4ff]/5 to-transparent">
              <div>
                <p className="text-white font-semibold text-lg">Ready to work together?</p>
                <p className="text-[#94a3b8] text-sm mt-1">Download my resume and let's connect</p>
              </div>
              <a
                href={personalInfo.cv}
                download
                className="flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#080812] font-semibold rounded hover:bg-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] whitespace-nowrap"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
