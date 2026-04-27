import { Globe } from 'lucide-react';
import { languages } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const levelColors: Record<string, string> = {
  Advanced: '#00d4ff',
  Native: '#22c55e',
  Professional: '#f59e0b',
};

export default function Languages() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="languages" className="py-24 bg-[#080812]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-3">Communication</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Language <span className="text-gradient">Proficiency</span>
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088cc] rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/40 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a4a]">
                    <Globe size={18} style={{ color: levelColors[lang.level] || '#00d4ff' }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{lang.name}</h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full border"
                      style={{
                        color: levelColors[lang.level] || '#00d4ff',
                        borderColor: `${levelColors[lang.level] || '#00d4ff'}40`,
                        backgroundColor: `${levelColors[lang.level] || '#00d4ff'}10`,
                      }}
                    >
                      {lang.level}
                    </span>
                  </div>
                </div>

                {lang.details.length > 0 && (
                  <div className="space-y-2 mt-4 pt-4 border-t border-[#1e1e3a]">
                    {lang.details.map((detail, i) => (
                      <div key={i} className="text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-[#64748b]">{detail.label}</span>
                          <span className="text-[#00d4ff] font-semibold">{detail.score}</span>
                        </div>
                        {detail.breakdown && (
                          <p className="text-[#94a3b8] mt-0.5 font-mono">{detail.breakdown}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
