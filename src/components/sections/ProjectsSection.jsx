import { projects } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Projects across machine learning, IoT, DBMS, and frontend practice."
        copy="The project list combines academic exploration with practical builds, from voice security and style transfer to IoT systems and smaller application exercises."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.08} className="glass-panel p-7">
            <p className="text-sm uppercase tracking-[0.3em] text-electric/80">
              {project.eyebrow}
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-slate-200"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
