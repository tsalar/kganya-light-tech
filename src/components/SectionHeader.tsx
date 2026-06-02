interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-soft dark:text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
