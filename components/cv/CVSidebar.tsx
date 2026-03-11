"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { cvSidebarAbout } from "@/data/cv";

type CVSidebarProps = {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  websiteUrl: string;
  portraitSrc: string;
};

export function CVSidebar({
  name,
  title,
  email,
  phone,
  website,
  websiteUrl,
  portraitSrc,
}: CVSidebarProps) {
  return (
    <aside className="flex flex-col items-center lg:items-stretch w-full max-w-[300px] lg:max-w-none">
      <div className="relative w-full overflow-hidden rounded-2xl bg-surface shadow-lg ring-1 ring-border">
        {/* Larger image area */}
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={portraitSrc}
            alt={name}
            fill
            className="object-cover object-top"
            priority
            sizes="(max-width: 1024px) 300px, 320px"
          />
        </div>
        {/* Bar at bottom: name, title, contact */}
        <div className="bg-foreground px-5 py-4 text-center lg:text-left">
          <h1 className="text-lg font-bold tracking-tight text-surface">
            {name}
          </h1>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-surface/80">
            {title}
          </p>
          <nav className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-surface/80 lg:justify-start">
            <a
              href={`mailto:${email}`}
              className="transition-colors hover:text-surface"
            >
              E-post
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="transition-colors hover:text-surface"
            >
              Telefon
            </a>
            <a
              href={
                websiteUrl.startsWith("http")
                  ? websiteUrl
                  : `https://${websiteUrl}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-surface"
            >
              {website}
            </a>
          </nav>
          <div className="mt-3 flex justify-center gap-3 lg:justify-start">
            <a
              href="https://github.com/martinMorkved"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-surface/40 text-surface/90 transition hover:border-transparent hover:bg-surface/15 hover:text-surface"
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
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-surface/40 text-surface/90 transition hover:border-transparent hover:bg-surface/15 hover:text-surface"
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
        </div>
      </div>

      <div className="mt-6 flex justify-center lg:justify-start">
        <Button>Last ned CV</Button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted text-center lg:text-left">
        {cvSidebarAbout}
      </p>
    </aside>
  );
}
