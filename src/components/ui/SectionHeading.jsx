export function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric/80">
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
