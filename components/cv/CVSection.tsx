type CVSectionProps = {
  title: string;
  children: React.ReactNode;
  compact?: boolean;
  accent?: boolean;
  /** Extra space above section (e.g. when it lands on a new page in PDF) */
  spaciousTop?: boolean;
};

export function CVSection({
  title,
  children,
  compact = false,
  accent = false,
  spaciousTop = false,
}: CVSectionProps) {

  const topClass = spaciousTop ? "mt-28" : compact ? "mt-10" : "mt-12";

  return (
    <section className={topClass}>
      <h2
        className={
          accent
            ? "text-xs font-semibold uppercase tracking-widest text-accent"
            : "text-xs font-semibold uppercase tracking-widest text-muted"
        }
      >
        {title}
      </h2>
      <div className={compact ? "mt-4" : "mt-8"}>{children}</div>
    </section>
  );
}
