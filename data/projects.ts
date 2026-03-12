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
];
