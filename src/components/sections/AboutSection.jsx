import { about, certifications, education, hobbies, personalInfo } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <FadeIn className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="About Me"
            title={about.headline}
            copy={about.summary}
          />
        </div>
        <div className="space-y-6">
          <div className="glass-panel p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Contact
                </p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  {personalInfo.email}
                  <br />
                  {personalInfo.phone}
                  <br />
                  {personalInfo.location}
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Languages
                </p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  Tamil, English, Hindi, French
                </p>
              </div>
            </div>
          </div>
          <div className="glass-panel p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Education</p>
            <div className="mt-4 space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-sm text-electric">{item.period}</p>
                  <p className="mt-1 text-base font-semibold text-white">{item.degree}</p>
                  <p className="text-sm leading-6 text-slate-300">{item.school}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="glass-panel p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Certifications</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {certifications.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-panel p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Hobbies</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {hobbies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-electric/20 bg-electric/10 px-4 py-2 text-sm text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
