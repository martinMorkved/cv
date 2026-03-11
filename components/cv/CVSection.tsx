type CVSectionProps = {
  title: string;
  children: React.ReactNode;
  compact?: boolean;
  accent?: boolean;
};

export function CVSection({ title, children, compact = false, accent = false }: CVSectionProps) {
  return (
    <section className={compact ? "mt-10" : "mt-12"}>
      <h2
        className={
          accent
            ? "text-xs font-semibold uppercase tracking-widest text-accent"
            : "text-xs font-semibold uppercase tracking-widest text-muted"
        }
      >
        {title}
      </h2>
      <div className={compact ? "mt-4" : "mt-6"}>{children}</div>
    </section>
  );
}
