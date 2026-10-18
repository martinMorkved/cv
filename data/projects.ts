export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  name: string;
  title: string;
  tech: string[];
  description: string;
  liveUrl?: string;
  repoUrl?: string;
  images: ProjectImage[];
  // Mobilskjermbilder vises i høy ramme uten beskjæring
  portraitImages?: boolean;
};

export const projects: Project[] = [
  {
    id: "hfdd",
    name: "HFDD",
    title: "HFDD (Have Fun Don't Die) – logg økter, bygg program, følg fremgang",
    tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
    liveUrl: "https://www.hfdd.no/",
    description:
      "Jeg ville ha et eget treningsverktøy, og ikke minst se om jeg klarte å bygge det selv. Brukere kan opprette og følge treningsprogrammer og logge økter med sett/reps, notater og vurdering. Siden vennene mine også skulle bruke appen, støtter den ulike programstrukturer (ukevis, roterende, blokk, frekvens) – det mest krevende var å forstå og implementere mesosykluser. Øvelsesbiblioteket er felles for alle, så nye forslag må godkjennes av admin for å unngå duplikater med litt ulike navn. Jeg valgte Supabase fordi gratisnivået dekker både rollebasert autentisering og database.",
    images: [
      { src: "/images/refrances/hfdd/dashboard.png", alt: "HFDD-dashboard med antall fullførte økter, aktivt program og programprogresjon" },
      { src: "/images/refrances/hfdd/log-workout.png", alt: "Loggføring av økt med vekt og reps per sett og forrige resultat ved siden av" },
      { src: "/images/refrances/hfdd/add-exercises.png", alt: "Dialog for å legge til øvelser med søk og filter på muskelgruppe" },
      { src: "/images/refrances/hfdd/progression-suggestion.png", alt: "Forslag om å øke vekten med 2,5 kg når alle sett er innenfor målet, og knapper for å bytte til alternative øvelser" },
      { src: "/images/refrances/hfdd/share-workout.png", alt: "Deling av fullført økt som bilde med øvelser, vekt og reps" },
      { src: "/images/refrances/hfdd/programs.png", alt: "Oversikt over egne treningsprogrammer med aktivt program, programtype og antall øvelser" },
      { src: "/images/refrances/hfdd/edit-program.png", alt: "Redigering av program med programtype og progresjonsregel" },
      { src: "/images/refrances/hfdd/edit-program-days.png", alt: "Redigering av dagene i en syklus med øvelser som kan sorteres" },
      { src: "/images/refrances/hfdd/more.png", alt: "Meny med verktøy og konto, innlogget som admin" },
      { src: "/images/refrances/hfdd/progress.png", alt: "Progresjonsgraf som viser tyngste sett per økt for belt squat" },
    ],
    portraitImages: true,
  },
  {
    id: "wow-vault-tracker",
    name: "WoW Vault Tracker",
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
      "Laget for å slippe å logge inn på hver karakter for å sjekke ukens Mythic+-fremdrift, og fordi guildmesteren vår ville se hvem som trengte hjelp til å fullføre flere Mythic+-runder. Appen henter data fra Raider.io API-et og viser hvor mange +10-runder eller høyere som teller mot ukens Great Vault (1 / 4 / 8), og når uken resetter. Innlogging skjer med Discord via NextAuth, siden nesten alle i gaming-miljøer allerede har en konto der. Profiler caches fordi Raider.io kan stenge ute klienter som sender for mange forespørsler.",
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
    name: "Driftstatus",
    title: "Driftstatus – systemstatus via REST API",
    tech: ["Next.js", "TypeScript", "REST API"],
    description:
      "Basert på et tidligere kundeprosjekt utviklet jeg en egen versjon av en driftstatus-løsning i Next.js. Statusen oppdateres via et REST API slik at den kan kobles mot kundens andre systemer. Ett API-kall oppdaterer driftsmeldingen overalt, så ingen trenger å endre den manuelt flere steder. Ved vedlikehold eller feil vises et varselbanner øverst på siden med lenke til en driftstatus-side med melding, forventet nedetid og tidspunkt for siste oppdatering.",
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
