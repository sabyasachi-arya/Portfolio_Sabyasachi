import { GraduationCap, Award, CheckCircle, ExternalLink, Terminal} from 'lucide-react';
import { education, certifications } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 bg-[#080812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-3">Qualifications</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088cc] rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                  <GraduationCap size={18} className="text-[#00d4ff]" />
                </div>
                Academic Qualifications
                <span className="text-xs text-[#00d4ff] border border-[#00d4ff]/30 px-2 py-0.5 rounded-full bg-[#00d4ff]/5 ml-auto">
                  Verified by WES
                </span>
              </h3>
              <div className="flex items-center gap-2">
                    
                  <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64748b] hover:text-[#00d4ff] transition-colors"
                      title="View Project"
                    >
                      <ExternalLink size={16} />

              <div className="space-y-6 relative">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[#00d4ff]/50 to-transparent" />

                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="pl-10 relative transition-all duration-700"
                    style={{ transitionDelay: `${idx * 0.15}s` }}
                  >
                    <div className="absolute left-2 top-2 w-4 h-4 rounded-full border-2 border-[#00d4ff] bg-[#080812] shadow-[0_0_8px_rgba(0,212,255,0.5)]" />

                    <div className="p-5 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/40 transition-all duration-300 group">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-white font-semibold text-sm leading-snug">{edu.degree}</h4>
                        {edu.verified && (
                          <CheckCircle size={14} className="text-[#00d4ff] shrink-0 mt-0.5" />
                        )}
                      </div>
                      <p className="text-[#00d4ff] text-sm">{edu.institution}</p>
                      <p className="text-[#64748b] text-xs mt-1">{edu.university}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[#94a3b8] text-xs">{edu.year}</span>
                        <span className="text-[#00d4ff] text-xs font-semibold bg-[#00d4ff]/10 px-2 py-0.5 rounded-full border border-[#00d4ff]/20">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                  <Award size={18} className="text-[#00d4ff]" />
                </div>
                Certifications
              </h3>

              <div className="space-y-5">
                {certifications.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5 transition-all duration-300 group"
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a4a] shrink-0 group-hover:border-[#00d4ff]/40 transition-colors">
                        <Award size={18} className="text-[#00d4ff]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm group-hover:text-[#00d4ff] transition-colors">{cert.title}</h4>
                        <p className="text-[#94a3b8] text-xs mt-1">
                          {cert.issuer} — <span className="text-[#00d4ff]/80">{cert.platform}</span>
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[#64748b] text-xs">{cert.date}</span>
                          {cert.score && (
                            <span className="text-[#00d4ff] text-xs font-semibold bg-[#00d4ff]/10 px-2 py-0.5 rounded-full border border-[#00d4ff]/20">
                              Score: {cert.score}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
