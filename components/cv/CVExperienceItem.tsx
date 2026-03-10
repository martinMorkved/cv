import type { ExperienceItem, BulletWithBuzzWord } from "@/data/cv";
import { BuzzWord } from "@/components/cv/BuzzWord";

type CVExperienceItemProps = {
  item: ExperienceItem;
  emphasize?: boolean;
};

function renderBulletContent(bullet: string | BulletWithBuzzWord) {
  if (typeof bullet === "string") {
    return bullet;
  }
  const { text, buzzWord } = bullet;
  const parts = text.split(buzzWord.term);
  return (
    <>
      {parts.flatMap((part, i) =>
        i < parts.length - 1
          ? [part, <BuzzWord key={i} explanation={buzzWord.explanation}>{buzzWord.term}</BuzzWord>]
          : [part]
      )}
    </>
  );
}

export function CVExperienceItem({ item, emphasize = false }: CVExperienceItemProps) {
  if (emphasize) {
    return (
      <article className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200/60">
        <div className="border-l-4 border-sky-500 pl-6">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
            {item.period}
          </p>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {item.role}
          </h3>
          <p className="mt-1 text-lg text-slate-600">{item.place}</p>
        </div>
        {item.description && (
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            {item.description}
          </p>
        )}
        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-6 space-y-3">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-base leading-relaxed text-slate-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                <span>{renderBulletContent(bullet)}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    );
  }

  return (
    <div className="border-l-2 border-slate-200 pl-5 py-1">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-sm font-medium text-slate-500">{item.period}</span>
        <span className="font-semibold text-slate-800">{item.role}</span>
        <span className="text-slate-500">· {item.place}</span>
      </div>
      {item.description && (
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-600">
          {item.description}
        </p>
      )}
    </div>
  );
}
