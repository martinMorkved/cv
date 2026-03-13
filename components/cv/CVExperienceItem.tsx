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
      <article className="rounded-2xl bg-surface p-8 shadow-sm ring-1 ring-border">
        <div className="border-l-4 border-accent pl-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {item.period}
          </p>
          <h3 className="cv-role-title mt-2 text-3xl font-bold tracking-tight text-foreground">
            {item.role}
          </h3>
          <p className="mt-1 text-lg text-muted">{item.place}</p>
        </div>
        {item.description && (
          <p className="mt-6 text-base leading-relaxed text-muted">
            {item.description}
          </p>
        )}
        {item.bullets && item.bullets.length > 0 && (
          <ul className="mt-6 space-y-3">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-base leading-relaxed text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{renderBulletContent(bullet)}</span>
              </li>
            ))}
          </ul>
        )}
      </article>
    );
  }

  return (
    <div className="border-l-2 border-border pl-5 py-1">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="text-sm font-medium text-muted">{item.period}</span>
        <span className="font-semibold text-foreground">{item.role}</span>
        <span className="text-muted">· {item.place}</span>
      </div>
      {item.description && (
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
          {item.description}
        </p>
      )}
    </div>
  );
}
