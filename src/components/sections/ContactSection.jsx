import { useState } from 'react';
import { personalInfo, socialLinks } from '../../data/portfolio';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    state: 'idle',
    message: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formEndpoint) {
      setStatus({
        state: 'error',
        message: 'Add VITE_FORMSPREE_ENDPOINT to connect this form.',
      });
      return;
    }

    setStatus({
      state: 'submitting',
      message: 'Sending your message...',
    });

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setStatus({
        state: 'success',
        message: 'Message sent successfully.',
      });
    } catch (error) {
      setStatus({
        state: 'error',
        message: 'Unable to send right now. Please try again.',
      });
    }
  };

  const buttonLabel =
    status.state === 'submitting' ? 'Sending...' : 'Send Message';

  return (
    <section id="contact" className="section-shell pt-10">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn className="glass-panel p-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's connect."
            copy="Reach out by email, phone, LinkedIn, Instagram, or the contact form below."
          />
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-electric/60 hover:text-white"
          >
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="mt-3 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-electric/60 hover:text-white"
          >
            {personalInfo.phone}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:border-electric/60 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="glass-panel p-8">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm text-slate-300">
              Name
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Email
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric/60"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Message
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or collaboration idea."
                required
                className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-electric/60"
              />
            </label>
            <button
              type="submit"
              disabled={status.state === 'submitting'}
              className="mt-2 rounded-full bg-gradient-to-r from-electric to-violetdeep px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
            >
              {buttonLabel}
            </button>
            <p
              className={`text-sm ${
                status.state === 'error'
                  ? 'text-rose-300'
                  : status.state === 'success'
                    ? 'text-emerald-300'
                    : 'text-slate-400'
              }`}
            >
              {status.message || 'Messages go to the Formspree endpoint you configure.'}
            </p>
          </form>
        </FadeIn>
      </div>
      <footer className="pb-8 pt-12 text-center text-sm text-slate-500">
        Designed for a software portfolio with room for code, visual work, and AI projects.
      </footer>
    </section>
  );
}
