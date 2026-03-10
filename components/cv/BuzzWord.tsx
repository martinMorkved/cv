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
        className="cursor-pointer rounded border border-sky-500 bg-sky-50/80 px-1.5 py-0.5 text-slate-800 text-xs font-medium transition hover:border-sky-600 hover:bg-sky-100/80 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {children}
      </button>
      {open && (
        <div
          className="absolute bottom-full left-1/2 z-20 mb-2 w-80 -translate-x-1/2 rounded-lg border border-slate-900/70 bg-slate-900 px-4 py-2 text-sm shadow-xl text-left"
          role="tooltip"
        >
          <p className="leading-relaxed text-slate-100">{explanation}</p>
        </div>
      )}
    </span>
  );
}
