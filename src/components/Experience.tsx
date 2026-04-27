import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-[#080812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-3">Career Path</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088cc] rounded-full" />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#00d4ff]/20 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} idx={idx} isVisible={isVisible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, idx, isVisible }: { exp: (typeof experiences)[0]; idx: number; isVisible: boolean }) {
  const isLeft = idx % 2 === 0;

  return (
    <div
      className={`lg:grid lg:grid-cols-2 lg:gap-8 items-start transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${idx * 0.15}s` }}
    >
      <div className={`${isLeft ? 'lg:col-start-1' : 'lg:col-start-2'} mb-6 lg:mb-0`}>
        <div className="relative group">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#00d4ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative p-6 rounded-2xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/40 transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 shrink-0">
                <Briefcase size={18} className="text-[#00d4ff]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base leading-snug">{exp.title}</h3>
                <p className="text-[#00d4ff] text-sm font-medium">{exp.company}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-5 text-[#64748b] text-xs">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[#00d4ff]/60" />
                {exp.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-[#00d4ff]/60" />
                {exp.period}
              </span>
            </div>

            <div className="space-y-3 mb-5">
              {exp.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-[#00d4ff] mt-0.5 shrink-0" />
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    <span className="text-white font-medium">{h.label}: </span>
                    {h.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="px-2 py-0.5 text-xs text-[#94a3b8] bg-[#1a1a2e] border border-[#2a2a4a] rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`hidden lg:flex ${isLeft ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'} items-center justify-center`}>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#00d4ff] bg-[#080812] shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            <span className="text-[#00d4ff] font-bold text-lg">{idx + 1}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
