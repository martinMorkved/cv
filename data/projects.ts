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
    id: "hfdd",
    title: "HFDD (Have Fun Don't Die) – treningsplanlegger",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
    liveUrl: "https://www.hfdd.no/",
    description:
      "Treningsapplikasjon bygget i React og TypeScript der brukere kan opprette, følge og loggføre egne treningsprogrammer. Appen har eget øvelsesbibliotek med muskelgrupper og beskrivelser, og brukeren kan lage program med ulike strukturer (ukevis, roterende, blokk, frekvens). Treningsøkter logges mot program eller som frie økter, med sett/reps, notater og vurdering, og historikk vises i egen side. Brukere kan foreslå nye øvelser som godkjennes av admin. Applikasjonen bruker rollebasert autentisering via Supabase Auth og lagrer data i Supabase med typede relasjoner for brukere, øvelser, programmer og treningsøkter.",
    images: [
      { src: "/images/refrances/hfdd/frontpage.png", alt: "Forsiden" },
      { src: "/images/refrances/hfdd/second.png", alt: "Treningsprogram eller økter" },
      { src: "/images/refrances/hfdd/third.png", alt: "Logge økt" },
    ],
  },
  {
    id: "wow-vault-tracker",
    title: "WoW Vault Tracker – Mythic+ vault på ett sted",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Prisma",
      "PostgreSQL",
      "Raider.io API",
    ],
    description:
      "Webapplikasjon for sporing av Mythic+-fremdrift i World of Warcraft, bygget med Next.js, Prisma og PostgreSQL. Brukere logger inn med Discord via NextAuth, legger til egne karakterer og henter Mythic+-data fra Raider.io API-et. Appen viser hvor mange +10- eller høyere-runder som telles mot ukens Great Vault (1 / 4 / 8), med tydelig fremdrift og når uken resetter. Karakterer lagres per bruker med Prisma, profil kan caches for raskere lasting, og brukeren kan oppdatere alle karakterer eller fjerne dem etter behov.",
    liveUrl: "https://wow-vault-tracker.vercel.app/",
    repoUrl: "https://github.com/martinMorkved/wow_vault_tracker",
    images: [
      {
        src: "/images/refrances/vault-tracker/vault-tracker.png",
        alt: "WoW Vault Tracker med Mythic+ og Great Vault-fremdrift",
      },
    ],
  },
  {
    id: "driftstatus-rest-api",
    title: "Driftstatus – systemstatus via REST API",
    tech: ["Next.js", "TypeScript", "REST API"],
    description:
      "Basert på et tidligere kundeprosjekt utviklet jeg en egen versjon av en driftstatus-løsning i Next.js med API-basert statusoppdatering og varsling av driftsmeldinger. Ved vedlikehold eller feil vises et tydelig varselbanner øverst på siden med lenke til en egen driftstatus-side som viser driftsmelding, forventet nedetid og tidspunkt for siste oppdatering.",
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
];
