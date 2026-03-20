import { skillGroups } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Core technical skills, languages, and focus areas."
        copy="This section reflects the stack, spoken languages, and technical areas highlighted across your academic work and projects."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.title} delay={index * 0.08} className="glass-panel p-6">
            <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-electric/20 bg-electric/10 px-4 py-2 text-sm text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
