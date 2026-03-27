"use client";

import { useCallback } from "react";
import Image from "next/image";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
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
  const githubUrl = "https://github.com/martinMorkved";
  const linkedinUrl = "https://www.linkedin.com/in/martin-m%C3%B8rkved-a759902b3/";

  const handleDownloadPDF = useCallback(async () => {
    const el = document.getElementById("cv-print-area");
    if (!el) return;
    let cleanedCSS = "";
    const oklabRe = /color-mix\(in oklab[^)]*\)/g;
    try {
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          if (sheet.cssRules) {
            for (const rule of Array.from(sheet.cssRules)) {
              cleanedCSS += rule.cssText;
            }
          }
        } catch {
          // CORS or other
        }
      }
      cleanedCSS = cleanedCSS.replace(oklabRe, "#e2e8f0");
    } catch {
      // ignore
    }

    document.body.classList.add("pdf-capture");
    await new Promise<void>((r) => requestAnimationFrame(() => r()));

    try {
      let langOffsetCssPxFromClone: number | null = null;
      const renderScale = 1.35;
      const canvas = await html2canvas(el, {
        scale: renderScale,
        useCORS: true,
        logging: false,
        ignoreElements: (node) => node.getAttribute?.("data-pdf-ignore") === "true",
        onclone: (clonedDoc) => {
          clonedDoc.body.classList.add("pdf-capture");
          const head = clonedDoc.head;
          head.querySelectorAll("link[rel='stylesheet'], style").forEach((node) => node.remove());
          const style = clonedDoc.createElement("style");
          style.textContent = cleanedCSS || "/* no CSS */";
          head.appendChild(style);
          clonedDoc.querySelectorAll("style").forEach((styleEl) => {
            if (styleEl.textContent?.includes("oklab")) {
              styleEl.textContent = styleEl.textContent.replace(oklabRe, "#e2e8f0");
            }
          });
          const root = clonedDoc.body.querySelector("#cv-print-area") ?? clonedDoc.body;
          root.querySelectorAll(".cv-contact-nav, .cv-contact-icons").forEach((el) => {
            (el as HTMLElement).style.display = "none";
          });
          root.querySelectorAll(".cv-pdf-contact").forEach((el) => {
            (el as HTMLElement).style.display = "block";
            (el as HTMLElement).classList.remove("hidden");
          });
          root.querySelectorAll(".cv-portrait-wrap").forEach((el) => {
            const wrap = el as HTMLElement;
            wrap.style.aspectRatio = "3 / 4";
            wrap.style.overflow = "hidden";
          });
          root.querySelectorAll(".cv-portrait-img").forEach((el) => {
            const img = el as HTMLElement;
            img.style.objectFit = "contain";
            img.style.objectPosition = "top center";
          });

          // IMPORTANT: measure in cloned layout (the exact DOM html2canvas renders)
          const clonedRoot = root as HTMLElement;
          const clonedLang = clonedDoc.getElementById("cv-languages");
          if (clonedLang) {
            const rootRect = clonedRoot.getBoundingClientRect();
            const langRect = clonedLang.getBoundingClientRect();
            langOffsetCssPxFromClone = langRect.top - rootRect.top;
            console.log("[PDF] clone langOffsetCssPx:", langOffsetCssPxFromClone);
          } else {
            console.warn("[PDF] clone did not find #cv-languages");
          }
        },
      });

      const scale = renderScale; // må matche html2canvas scale over
      const langOffsetCssPx = langOffsetCssPxFromClone;

      const imgWidth = 210; // mm
      const doc = new jsPDF("p", "mm", "a4");
      const pageHeightMm = doc.internal.pageSize.getHeight();
      const pageBgRgb: [number, number, number] = [248, 250, 252];

      const fillPageBg = () => {
        doc.setFillColor(...pageBgRgb);
        doc.rect(0, 0, imgWidth, pageHeightMm, "F");
      };

      // mm per canvas-pixel (x og y er lik pga samme skalering)
      const mmPerPx = imgWidth / canvas.width;
      const sliceHeightPxDefault = Math.max(1, Math.round(pageHeightMm / mmPerPx));

      const overlapPx = Math.round(2 * scale);
      const pageSliceHeightPx = sliceHeightPxDefault;
      const stepPx = Math.max(1, pageSliceHeightPx - overlapPx);

      const pageStartsPx: number[] = [0];
      while (
        pageStartsPx[pageStartsPx.length - 1] + pageSliceHeightPx <
        canvas.height
      ) {
        pageStartsPx.push(pageStartsPx[pageStartsPx.length - 1] + stepPx);
      }

      pageStartsPx.forEach((pageStartPx, pageIndex) => {
        const sliceHeightPxActual = Math.min(
          pageSliceHeightPx,
          canvas.height - pageStartPx,
        );

        // Avoid creating effectively empty tail pages.
        if (sliceHeightPxActual <= overlapPx + 1) return;

        if (pageIndex > 0) doc.addPage();
        fillPageBg();

        const sliceCanvas = document.createElement("canvas");
        sliceCanvas.width = canvas.width;
        sliceCanvas.height = sliceHeightPxActual;
        const ctx = sliceCanvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(
          canvas,
          0,
          pageStartPx,
          canvas.width,
          sliceHeightPxActual,
          0,
          0,
          canvas.width,
          sliceHeightPxActual,
        );

        const sliceHeightMm = sliceHeightPxActual * mmPerPx;
        const jpgData = sliceCanvas.toDataURL("image/jpeg", 0.72);
        doc.addImage(jpgData, "JPEG", 0, 0, imgWidth, sliceHeightMm, undefined, "FAST");
      });

      doc.save("Martin-Gynther-Morkved-CV.pdf");
    } catch (e) {
      console.error("PDF export failed:", e);
    } finally {
      document.body.classList.remove("pdf-capture");
    }
  }, []);

  return (
    <aside className="flex flex-col items-center lg:items-stretch w-full max-w-[300px] lg:max-w-none">
      <div className="relative w-full overflow-hidden rounded-2xl bg-surface shadow-lg ring-1 ring-border">
        {/* Larger image area */}
        <div className="cv-portrait-wrap relative aspect-[3/4] w-full">
          <Image
            src={portraitSrc}
            alt={name}
            fill
            className="cv-portrait-img object-cover object-top"
            priority
            sizes="(max-width: 1024px) 300px, 320px"
          />
        </div>
        {/* Bar at bottom: name, title, contact */}
        <div className="bg-foreground px-5 py-4 text-center lg:text-left">
          <h1 className="text-lg font-bold tracking-tight text-surface">
            {name}
          </h1>
          <p className="cv-sidebar-title mt-0.5 text-xs font-medium uppercase tracking-wider text-surface/80">
            {title}
          </p>
          <nav className="cv-contact-nav mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-surface/80 lg:justify-start">
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
          </nav>
          <div className="cv-pdf-contact mt-3 hidden text-xs text-surface/80 break-all">
            <p>{email}</p>
            <p className="mt-1">{phone}</p>
            <p className="mt-2 font-medium text-surface">GitHub:</p>
            <p className="mt-0.5">{githubUrl}</p>
            <p className="mt-2 font-medium text-surface">LinkedIn:</p>
            <p className="mt-0.5">{linkedinUrl}</p>
          </div>
          <div className="cv-contact-icons mt-3 flex justify-center gap-3 lg:justify-start">
            <a
              href={githubUrl}
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
              href={linkedinUrl}
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
        <Button type="button" onClick={handleDownloadPDF} data-pdf-ignore="true">
          Last ned CV
        </Button>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted text-center lg:text-left">
        {cvSidebarAbout}
      </p>
    </aside>
  );
}
