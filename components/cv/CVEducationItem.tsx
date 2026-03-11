import type { EducationItem } from "@/data/cv";

type CVEducationItemProps = {
  item: EducationItem;
};

export function CVEducationItem({ item }: CVEducationItemProps) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-2 text-sm border-b border-border/60 last:border-0">
      <span className="text-muted">{item.period}</span>
      <span className="font-medium text-foreground">{item.programme}</span>
      <span className="text-muted">· {item.school}</span>
      {item.note && (
        <span className="mt-0.5 block w-full text-xs text-muted">{item.note}</span>
      )}
    </div>
  );
}
