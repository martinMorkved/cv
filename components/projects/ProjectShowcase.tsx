import type { Project } from "@/data/projects";
import { ProjectLinks } from "./ProjectLinks";
import { ImageCarousel } from "./ImageCarousel";

type ProjectShowcaseProps = {
  project: Project;
};

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <section className="space-y-3">
        <header>
          <h2 className="text-base font-semibold tracking-tight">{project.title}</h2>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
            {project.tech.map((item, i) => (
              <span key={item}>
                {item}
                {i < project.tech.length - 1 && " · "}
              </span>
            ))}
          </p>
        </header>
        <p className="text-sm text-muted">{project.description}</p>
        <ProjectLinks liveUrl={project.liveUrl} repoUrl={project.repoUrl} />
      </section>

      {project.images.length > 0 && <ImageCarousel images={project.images} />}
    </div>
  );
}
