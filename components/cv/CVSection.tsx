type CVSectionProps = {
  title: string;
  children: React.ReactNode;
  compact?: boolean;
  accent?: boolean;
  /** Extra space above section (e.g. when it lands on a new page in PDF) */
  spaciousTop?: boolean;
  sectionId?: string;
};

export function CVSection({
  title,
  children,
  compact = false,
  accent = false,
  spaciousTop = false,
  sectionId,
}: CVSectionProps) {

  const topClass = spaciousTop ? "mt-44" : compact ? "mt-10" : "mt-12";
  // Når seksjonen havner øverst på en ny PDF-side (spaciousTop),
  // vil vi at overskrift og første innhold skal sitte tettere sammen
  // slik at de ikke blir delt over to A4-skiver.
  const childrenTopClass = compact ? "mt-4" : spaciousTop ? "mt-2" : "mt-8";

  return (
    <section id={sectionId} className={topClass}>
      <h2
        className={
          accent
            ? "text-xs font-semibold uppercase tracking-widest text-accent"
            : "text-xs font-semibold uppercase tracking-widest text-muted"
        }
      >
        {title}
      </h2>
      <div className={childrenTopClass}>{children}</div>
    </section>
  );
}
