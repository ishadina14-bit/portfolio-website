import { experiences } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Work experience that strengthened communication, structure, and adaptability."
        copy="These roles built the organizational discipline and teaching clarity that now support your transition into software and IT-focused work."
      />
      <div className="relative mt-10 border-l border-white/10 pl-8">
        {experiences.map((item, index) => (
          <FadeIn key={item.role} delay={index * 0.08} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-gradient-to-r from-electric to-violetdeep" />
            <div className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.period}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{item.role}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
