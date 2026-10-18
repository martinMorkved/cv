export default function Home() {
  return (
    <div className="cv-page min-h-screen">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <section className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Portfolio & CV
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Martin Gynther Mørkved
            </h1>
            <p className="text-base font-medium text-foreground">
              Bygger brukervennlige og tilgjengelige webløsninger – fra
              kundemøte til ferdig produkt.
            </p>
            <p className="max-w-prose text-sm leading-relaxed text-muted">
              Her finner du CV, erfaring og egne prosjekter bygget med React,
              Next.js og TypeScript.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/cv"
                className="spin-border inline-flex items-center justify-center rounded-full px-[18px] py-2 text-sm font-semibold text-foreground shadow-sm"
              >
                Se CV
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-[19px] py-[9px] text-sm font-semibold text-foreground shadow-sm transition hover:bg-background"
              >
                Prosjekter
              </a>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
              Kort om meg
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              Jeg jobber som utvikler i Doghouse i Trondheim, der jeg følger
              prosjekter fra kundemøte til ferdig løsning for kunder i offentlig
              og privat sektor. Arbeidet består blant annet av webutvikling,
              API-integrasjoner og universell utforming etter WCAG.
            </p>
            <p className="text-sm leading-relaxed text-muted">
              Bakgrunnen som fotograf gir meg et godt øye for det visuelle, og
              ved siden av jobb bygger jeg egne fullstack-prosjekter for å
              utvikle meg videre innen moderne frontend og brukeropplevelse.
            </p>
          </section>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="https://github.com/martinMorkved"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition hover:border-border hover:bg-foreground hover:text-surface"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.37 1.12 2.95.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.74 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.48.1 2.74.64.72 1.02 1.63 1.02 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/martin-m%C3%B8rkved-a759902b3/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition hover:border-border hover:bg-foreground hover:text-surface"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                fill="currentColor"
                d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2Zm.02 3.75H1V21h4V7.25Zm6.5 0H7.5V21h4v-7.1c0-1.88.98-2.9 2.56-2.9 1.22 0 1.94.68 1.94 2.9V21h4v-7.96C24 9.14 22.46 7.5 20 7.5c-1.8 0-2.9.78-3.5 1.7V7.25Z"
              />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
