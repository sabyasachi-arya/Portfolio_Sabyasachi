import { MapPin, Calendar, Flag, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { personalInfo, summary } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-3">Who I Am</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088cc] rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
                {summary}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <InfoCard icon={<MapPin size={16} />} label="Location" value={personalInfo.address} />
                <InfoCard icon={<Calendar size={16} />} label="Date of Birth" value={personalInfo.dob} />
                <InfoCard icon={<Flag size={16} />} label="Nationality" value={personalInfo.nationality} />
                <InfoCard
                  icon={<Phone size={16} />}
                  label="WhatsApp"
                  value={personalInfo.phone.whatsapp}
                  href={`https://wa.me/${personalInfo.phone.whatsapp}`}
                />
                <InfoCard
                  icon={<Phone size={16} />}
                  label="Call"
                  value={personalInfo.phone.call}
                  href={`tel:${personalInfo.phone.call}`}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-6">Connect With Me</h3>

              <ContactLink
                icon={<Mail size={18} />}
                label="Primary Email"
                value={personalInfo.emails[0]}
                href={`mailto:${personalInfo.emails[0]}`}
              />
              <ContactLink
                icon={<Mail size={18} />}
                label="Secondary Email"
                value={personalInfo.emails[1]}
                href={`mailto:${personalInfo.emails[1]}`}
              />
              <ContactLink
                icon={<Linkedin size={18} />}
                label="LinkedIn"
                value={personalInfo.linkedinLabel}
                href={personalInfo.linkedin}
                external
              />
              <ContactLink
                icon={<Github size={18} />}
                label="GitHub"
                value={personalInfo.githubLabel}
                href={personalInfo.github}
                external
              />

              <div className="mt-8 p-5 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a]">
                <p className="text-[#64748b] text-sm mb-1">Open to opportunities in</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Python Development', 'Business Development', 'Data Analysis', 'AI/ML Projects', 'Remote Work'].map((item) => (
                    <span key={item} className="px-3 py-1 text-xs text-[#00d4ff] border border-[#00d4ff]/30 rounded-full bg-[#00d4ff]/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/40 transition-colors duration-300">
      <span className="text-[#00d4ff] mt-0.5">{icon}</span>
      <div>
        <p className="text-[#64748b] text-xs uppercase tracking-wider">{label}</p>
        <p className="text-[#e2e8f0] text-sm font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

function ContactLink({ icon, label, value, href, external }: { icon: React.ReactNode; label: string; value: string; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5 transition-all duration-300 group"
    >
      <span className="text-[#00d4ff] group-hover:scale-110 transition-transform duration-300">{icon}</span>
      <div>
        <p className="text-[#64748b] text-xs uppercase tracking-wider">{label}</p>
        <p className="text-[#e2e8f0] text-sm font-medium group-hover:text-[#00d4ff] transition-colors duration-300">{value}</p>
      </div>
    </a>
  );
}
