import { useEffect, useRef, useState } from 'react';
import { skillCategories } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !animated) {
      const t = setTimeout(() => setAnimated(true), 300);
      return () => clearTimeout(t);
    }
  }, [isVisible, animated]);

  return (
    <section id="skills" className="py-24 bg-[#0a0a14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <p className="text-[#00d4ff] text-sm tracking-[0.3em] uppercase mb-3">What I Know</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Core <span className="text-gradient">Skills</span>
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#00d4ff] to-[#0088cc] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((cat, catIdx) => (
              <SkillCategory key={catIdx} category={cat} animated={animated} catIdx={catIdx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  category,
  animated,
  catIdx,
}: {
  category: (typeof skillCategories)[0];
  animated: boolean;
  catIdx: number;
}) {
  return (
    <div
      className="p-6 rounded-2xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#00d4ff]/30 transition-all duration-300"
      style={{ transitionDelay: `${catIdx * 0.1}s` }}
    >
      <h3 className="text-[#00d4ff] font-semibold text-sm tracking-wider uppercase mb-6 flex items-center gap-2">
        <span className="w-6 h-px bg-[#00d4ff]" />
        {category.category}
      </h3>
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar key={i} skill={skill} animated={animated} delay={catIdx * 100 + i * 80} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ skill, animated, delay }: { skill: { name: string; level: number }; animated: boolean; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animated && barRef.current) {
      barRef.current.style.width = `${skill.level}%`;
    }
  }, [animated, skill.level]);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[#e2e8f0] text-sm font-medium">{skill.name}</span>
        <span className="text-[#00d4ff] text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[#1a1a2e] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-[#00d4ff] to-[#0088cc] rounded-full transition-all ease-out"
          style={{
            width: animated ? `${skill.level}%` : '0%',
            transitionDuration: '1.2s',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
