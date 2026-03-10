import type { EducationItem } from "@/data/cv";

type CVEducationItemProps = {
  item: EducationItem;
};

export function CVEducationItem({ item }: CVEducationItemProps) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 py-2 text-sm border-b border-slate-100 last:border-0">
      <span className="text-slate-500">{item.period}</span>
      <span className="font-medium text-slate-800">{item.programme}</span>
      <span className="text-slate-500">· {item.school}</span>
      {item.note && (
        <span className="w-full text-slate-500 text-xs mt-0.5 block">{item.note}</span>
      )}
    </div>
  );
}
