import type { SkillsGroup } from "@/data/cv";

type CVSkillsProps = {
  languages: string;
  skillsGroups: SkillsGroup[];
};

export function CVSkills({ languages, skillsGroups }: CVSkillsProps) {
  return (
    <div className="space-y-5">
      <p className="text-sm text-muted">
        <span className="font-medium text-foreground">Språk: </span>
        {languages}
      </p>
      <div className="space-y-4">
        {skillsGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-surface px-3 py-1.5 text-sm font-medium text-foreground ring-1 ring-border/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
