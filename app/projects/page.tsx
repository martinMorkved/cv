import { projects } from "@/data/projects";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

export default function ProjectsPage() {
  return (
    <div className="cv-page min-h-screen">
      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-10 lg:py-16">
        <header className="mb-10 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Prosjekter
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Småprosjekter & øving
          </h1>
          <p className="max-w-prose text-sm leading-relaxed text-muted">
            Her samler jeg små prosjekter jeg bygger for å lære mer om React,
            Next.js, TypeScript og API-integrasjoner.
          </p>
        </header>

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectShowcase key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
