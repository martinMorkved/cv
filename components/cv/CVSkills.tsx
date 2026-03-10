import type { SkillsGroup } from "@/data/cv";

type CVSkillsProps = {
  languages: string;
  skillsGroups: SkillsGroup[];
};

export function CVSkills({ languages, skillsGroups }: CVSkillsProps) {
  return (
    <div className="space-y-5">
      <p className="text-sm text-slate-600">
        <span className="font-medium text-slate-700">Språk: </span>
        {languages}
      </p>
      <div className="space-y-4">
        {skillsGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
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
