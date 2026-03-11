"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function TopNav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="bg-background py-3">
      <nav className="mx-auto flex max-w-4xl items-center justify-center gap-6 px-6 text-sm text-muted lg:px-10">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-semibold text-foreground"
              : "text-muted hover:text-foreground"
          }
        >
          Hjem
        </Link>
        <Link
          href="/cv"
          className={
            pathname.startsWith("/cv")
              ? "font-semibold text-foreground"
              : "text-muted hover:text-foreground"
          }
        >
          CV
        </Link>
        <Link
          href="/projects"
          className={
            pathname.startsWith("/projects")
              ? "font-semibold text-foreground"
              : "text-muted hover:text-foreground"
          }
        >
          Prosjekter
        </Link>
      </nav>
    </header>
  );
}

