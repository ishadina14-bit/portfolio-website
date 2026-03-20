import { personalInfo, roles } from '../../data/portfolio';
import { useRevealText } from '../../hooks/useRevealText';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { FadeIn } from '../ui/FadeIn';

export function HeroSection() {
  const typedName = useRevealText(personalInfo.name, 85);
  const typedRole = useTypingEffect(roles);

  return (
    <section id="home" className="section-shell pt-16 sm:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <FadeIn className="glass-panel p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
            Portfolio 2026
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
            {typedName}
            <span className="ml-1 inline-block h-10 w-[2px] animate-pulse bg-white/80 align-middle sm:h-14" />
          </h1>
          <div className="mt-4 min-h-[2.5rem] text-xl font-semibold text-electric sm:text-2xl">
            {typedRole}
            <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-electric align-middle" />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            {personalInfo.role} focused on building a strong career in IT through
            practical development work, continuous learning, and people-centered
            communication.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 px-4 py-2">
              {personalInfo.location}
            </span>
            <a
              href={`tel:${personalInfo.phone}`}
              className="rounded-full border border-white/10 px-4 py-2 transition hover:border-electric/60 hover:text-white"
            >
              {personalInfo.phone}
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-electric to-violetdeep px-6 py-3 text-center text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="/IshaDinakaranMCAResume.pdf"
              download="IshaDinakaranMCAResume.pdf"
              className="rounded-full border border-electric/30 bg-electric/10 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-electric/60 hover:bg-electric/15 hover:text-white"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-electric/60 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="glass-panel relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-electric/15 via-transparent to-violetdeep/20" />
            <div className="relative space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Focus</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Software Development, Machine Learning, and Creative Thinking
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['MCA Graduate', 'Machine Learning Projects', 'HR and Teaching Experience', 'Creative and Interpersonal Skills'].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
