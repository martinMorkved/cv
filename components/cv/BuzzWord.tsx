"use client";

import { useRef, useEffect, useState } from "react";

type BuzzWordProps = {
  children: string;
  explanation: string;
};

export function BuzzWord({ children, explanation }: BuzzWordProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <span ref={wrapperRef} className="relative inline">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer rounded border border-accent bg-accent/10 px-1.5 py-0.5 text-foreground text-xs font-medium transition hover:border-accent hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {children}
      </button>
      {open && (
        <div
          className="absolute bottom-full left-1/2 z-20 mb-2 w-80 -translate-x-1/2 rounded-lg border border-foreground/80 bg-foreground px-4 py-2 text-sm shadow-xl text-left"
          role="tooltip"
        >
          <p className="leading-relaxed text-surface">{explanation}</p>
        </div>
      )}
    </span>
  );
}
