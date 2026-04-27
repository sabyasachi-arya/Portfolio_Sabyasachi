import { Github, ExternalLink, Terminal } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-3">What I've Built</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088cc] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-6 rounded-2xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,212,255,0.1)]"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20">
                    <Terminal size={18} className="text-[#00d4ff]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64748b] hover:text-[#00d4ff] transition-colors"
                      title="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64748b] hover:text-[#00d4ff] transition-colors"
                      title="View Project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-[#64748b] text-xs uppercase tracking-wider mb-2">Key Features</p>
                  <ul className="space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i} className="text-[#94a3b8] text-xs flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#00d4ff]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1e1e3a]">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-xs text-[#00d4ff] border border-[#00d4ff]/20 bg-[#00d4ff]/5 rounded-full font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#00d4ff]/50 text-[#00d4ff] rounded hover:bg-[#00d4ff]/10 hover:border-[#00d4ff] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
            >
              <Github size={18} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
