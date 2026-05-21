export type BulletWithBuzzWord = {
  text: string;
  buzzWord: { term: string; explanation: string };
};

export type ExperienceItem = {
  period: string;
  role: string;
  place: string;
  description?: string;
  bullets?: (string | BulletWithBuzzWord)[];
};

export type EducationItem = {
  period: string;
  programme: string;
  school: string;
  note?: string;
};

export const cvHeader = {
  name: "Martin Gynther Mørkved",
  title: "Utvikler",
  email: "morkved.martin@gmail.com",
  phone: "+47 92 48 48 12",
  website: "doghouse.no",
  websiteUrl: "https://doghouse.no",
};

export const cvGoal =
  "Utvikler i Doghouse i Trondheim med erfaring fra webutvikling, API-integrasjoner og kundedrevne løsninger. Følger prosjekter tett fra kundemøte til ferdig løsning. Bygger egne prosjekter med React, Next.js og TypeScript for å videreutvikle frontend-kompetanse.";

export const experience: ExperienceItem[] = [
  {
    period: "2021–i dag",
    role: "Utvikler",
    place: "Doghouse AS",
    description:
      "Utvikler i byrå som leverer webbaserte løsninger for kunder i offentlig og privat sektor. Jobber med utvikling, videreutvikling og vedlikehold av kundeløsninger, og følger prosjekter fra behovskartlegging til ferdig leveranse.",
    bullets: [
      {
        text: "Utvikler og integrerer REST API-er mot interne og eksterne systemer.",
        buzzWord: {
          term: "REST API-er",
          explanation:
            "Utviklet bl.a. REST API for driftsmeldinger der kunden registrerer status ett sted, og løsningen automatisk oppdaterer synlig banner på forsiden. Dette sparer tid, fjerner behovet for å logge inn i WordPress ved hendelser og gjør det enklere å koble driftsrutiner inn i egne interne prosesser.",
        },
      },
      "Bygger og vedlikeholder webbaserte løsninger med JavaScript, PHP, HTML og SCSS",
      "Videreutvikler funksjonalitet og skreddersydde løsninger basert på kundebehov.",
      "Estimerer og planlegger oppgaver sammen med prosjektleder, og følger opp krav og endringer underveis i prosjektene.",
      "Bidrar med løsningsforslag og tekniske vurderinger i prosjekter.",
      "Arbeider med universell utforming og GDPR-relaterte krav i leveranser.",
      "Planlegger og gjennomfører foto til prosjekter og kampanjer ved behov.",
    ],
  },
  {
    period: "2011–2021",
    role: "Fotograf",
    place: "MGMPHOTOS",
    description:
      "Freelance fotograf for bedrifter og privatpersoner. Planlegger og gjennomfører fotooppdrag fra behovskartlegging til ferdig levert materiale, ofte i tett dialog med byråer og markedsavdelinger. Erfaring fra større kommersielle prosjekter (bl.a. via Kommunikasjonshuset Involve) har gitt meg et skarpt blikk for visuell historiefortelling, komposisjon og merkevareprofil. Det bruker jeg aktivt når jeg designer og bygger brukerflater.",
  },
  {
    period: "2011",
    role: "Produksjonsansvarlig",
    place: "TV Nordhordland",
    description: "Ansvarlig for produksjon av julekalender for WebTV.",
  },
  {
    period: "2010–2011",
    role: "Fotoansvarlig",
    place: "Nordhordland Folkehøgskule",
    description:
      "Fotoansvarlig for Årboken: prosjektledelse, fotografering, utvelgelse og redigering.",
  },
  {
    period: "2006",
    role: "Butikkmedarbeider",
    place: "Rimi",
    description: "Lager- og butikkmedarbeider. Kundeservice.",
  },
];

export const education: EducationItem[] = [
  {
    period: "2015–2019",
    programme: "IT-støttet bedriftsutvikling",
    school: "NTNU",
    note: "Bachelor: informatikk, informasjonssikkerhet, entreprenørskap, produktforvaltning, økonomi, GDPR. Programmering: .NET, HTML5, CSS, JavaScript, PHP, databaser, SharePoint.",
  },
  {
    period: "2011–2013",
    programme: "Fotograf",
    school: "Norges Kreative Høyskole",
    note: "Mørkerom, studio, journalistikk, mote, Photoshop/redigering, portrett, historie, film.",
  },
  {
    period: "2011",
    programme: "Kreative kurs",
    school: "Norges Kreative Høyskole",
    note: "Photoshop, Illustrator, InDesign.",
  },
  {
    period: "2010–2011",
    programme: "Foto, DVD og grafisk design",
    school: "Nordhordland Folkehøgskule",
  },
  {
    period: "2007–2011",
    programme: "Generell studiekompetanse",
    school: "Byåsen Videregående Skole",
    note: "Studiespesialisering: entreprenørskap, samfunnsøkonomi, engelsk, norsk, matematikk, kommunikasjon og kultur.",
  },
];

export const languages = "Norsk morsmål, engelsk flytende.";

export type SkillsGroup = {
  label: string;
  items: string[];
};

export const skillsGroups: SkillsGroup[] = [
  {
    label: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML",
      "CSS / SCSS",
      "jQuery",
    ],
  },
  {
    label: "Backend & integrasjon",
    items: ["PHP", "REST API-er", "WordPress", "MySQL"],
  },
  {
    label: "Verktøy",
    items: ["Git", "Figma", "Adobe Photoshop", "MS Office", "AI-assisterte utviklingsverktøy"],
  },
  {
    label: "Personvern & compliance",
    items: ["GDPR", "Personvernerklæringer", "Cookie compliance"],
  },
];

export const cvSidebarAbout =
  "Utvikler med erfaring fra webutvikling, API-integrasjoner og kundedrevne løsninger. Bakgrunn som fotograf gir et ekstra fokus på struktur, brukeropplevelse og visuell kommunikasjon i digitale produkter. Egne prosjekter deler jeg på GitHub og publiserer ofte med Vercel.";

export const referencesNote = "Referanser oppgis ved forespørsel.";
