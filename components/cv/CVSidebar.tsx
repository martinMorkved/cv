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
      <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg ring-1 ring-slate-200/60">
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
        <div className="bg-slate-900 px-5 py-4 text-center lg:text-left">
          <h1 className="text-lg font-bold tracking-tight text-white">
            {name}
          </h1>
          <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-300">
            {title}
          </p>
          <nav className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-300 lg:justify-start">
            <a
              href={`mailto:${email}`}
              className="hover:text-white transition-colors"
            >
              E-post
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hover:text-white transition-colors"
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
              className="hover:text-white transition-colors"
            >
              {website}
            </a>
          </nav>
        </div>
      </div>

      <div className="mt-6 flex justify-center lg:justify-start">
        <Button>Last ned CV</Button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-600 text-center lg:text-left">
        {cvSidebarAbout}
      </p>
    </aside>
  );
}
