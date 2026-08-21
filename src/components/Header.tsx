"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { useTranslation } from "@/hooks/useTranslation";

const NAV = [
  { href: "#about", key: "header.about" },
  { href: "#experience", key: "header.experience" },
  { href: "#projects", key: "header.projects" },
  { href: "#Studies", key: "header.studies" },
] as const;

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-background/88 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#"
          className="font-display text-[15px] font-bold tracking-[-0.01em] transition-colors hover:text-primary"
        >
          Elvis Pino
        </a>

        <nav className="hidden items-center gap-6 sm:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
