interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl animate-glow-pulse" />
      <div className="container-px relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          {eyebrow && (
            <span className="inline-flex rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold backdrop-blur">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
          {description && <p className="mt-6 text-lg text-white/75 md:text-xl">{description}</p>}
        </div>
      </div>
    </section>
  );
}
