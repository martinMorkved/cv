export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  tech: string[];
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: "driftstatus-rest-api",
    title: "Driftstatus – systemstatus via REST API",
    tech: ["Next.js", "TypeScript", "REST API"],
    description:
      "Idé hentet fra et konkret kundeprosjekt der vi opprinnelig bygde en lignende løsning i PHP for WordPress. Her har jeg gjenskapt samme konsept i Next.js: en enkel driftstatus-løsning der status oppdateres via et REST API. Ved vedlikehold eller feil vises et tydelig varselbanner øverst på siden med lenke til en egen driftstatus-side som viser driftsmelding, forventet nedetid og tidspunkt for siste oppdatering.",
    liveUrl: "https://rest-api-delta-mocha.vercel.app/",
    repoUrl: "https://github.com/martinMorkved/rest-api",
    images: [
      {
        src: "/images/refrances/rest-api/front-page.png",
        alt: "Forsiden med driftstatus-banner",
      },
      {
        src: "/images/refrances/rest-api/page.png",
        alt: "Driftstatus-side med aktiv melding",
      },
      {
        src: "/images/refrances/rest-api/page-error.png",
        alt: "Driftstatus-side med feilmelding",
      },
    ],
  },
  {
    id: "hfdd",
    title: "HFDD (Have Fun Don't Die) – treningsplanlegger",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
    liveUrl: "https://www.hfdd.no/",
    description:
      "Personlig treningsapp der brukere kan bygge og følge treningsprogram. Appen har egen øvelsesbibliotek med muskelgrupper og beskrivelser, og brukeren kan lage program med ulike strukturer (ukevis, roterende, blokk, frekvens). Treningsøkter logges mot program eller som frie økter, med sett/reps, notater og vurdering, og historikk vises i egen side. Brukere kan foreslå nye øvelser som godkjennes av admin. Innlogging og roller (admin/standard/pro) håndteres via Supabase Auth, og data lagres i Supabase med typede tabeller for brukere, profiler, øvelser, program og treningsøkter.",
    images: [
      { src: "/images/refrances/hfdd/frontpage.png", alt: "Forsiden" },
      { src: "/images/refrances/hfdd/second.png", alt: "Treningsprogram eller økter" },
      { src: "/images/refrances/hfdd/third.png", alt: "Logge økt" },
    ],
  },
];
