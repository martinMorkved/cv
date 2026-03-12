"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

type ImageCarouselProps = {
  images: ProjectImage[];
};

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((i) => (i + 1) % images.length);
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  if (images.length === 0) return null;

  const current = images[activeIndex];

  return (
    <section className="space-y-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-background">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 420px"
        />
      </div>

      <div className="flex items-center justify-between gap-4 text-xs">
        <button
          type="button"
          onClick={prev}
          aria-label="Forrige bilde"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-foreground hover:text-surface"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          {images.map((img, index) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? "bg-foreground" : "bg-border hover:bg-foreground/60"
              }`}
              aria-label={`Vis bilde ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Neste bilde"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-foreground hover:text-surface"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
            <path fill="currentColor" d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
