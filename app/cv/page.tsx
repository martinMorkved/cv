import { CVSidebar } from "@/components/cv/CVSidebar";
import { CVSection } from "@/components/cv/CVSection";
import { CVExperienceItem } from "@/components/cv/CVExperienceItem";
import { CVEducationItem } from "@/components/cv/CVEducationItem";
import { CVSkills } from "@/components/cv/CVSkills";
import {
  cvHeader,
  cvGoal,
  experience,
  education,
  languages,
  skillsGroups,
  referencesNote,
} from "@/data/cv";

export default function CV() {
  return (
    <div className="cv-page min-h-screen">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-14 px-6 py-12 lg:grid-cols-[240px_1fr] lg:gap-20 lg:px-10 lg:py-16">
        <div className="flex justify-center border-b border-border pb-12 lg:justify-start lg:border-b-0 lg:border-r lg:border-border lg:pr-14 lg:pb-0">
          <CVSidebar
            name={cvHeader.name}
            title={cvHeader.title}
            email={cvHeader.email}
            phone={cvHeader.phone}
            website={cvHeader.website}
            websiteUrl={cvHeader.websiteUrl}
            portraitSrc="/images/portrait.png"
          />
        </div>

        <main className="min-w-0">
          {cvGoal && (
            <p className="text-base leading-relaxed text-muted">{cvGoal}</p>
          )}

          <CVSection title="Erfaring" accent>
            <div className="space-y-10">
              {experience.map((item, i) => (
                <CVExperienceItem
                  key={i}
                  item={item}
                  emphasize={i === 0}
                />
              ))}
            </div>
          </CVSection>

          <CVSection title="Språk og datakunnskaper">
            <CVSkills languages={languages} skillsGroups={skillsGroups} />
          </CVSection>

          <CVSection title="Utdanning" compact>
            <div className="space-y-0">
              {education.map((item, i) => (
                <CVEducationItem key={i} item={item} />
              ))}
            </div>
          </CVSection>

          <p className="mt-12 text-sm text-muted">
            {referencesNote}
          </p>
        </main>
      </div>
    </div>
  );
}
