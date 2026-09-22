"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { useActiveSection } from "@/hooks/use-active-section";
import { useTranslation } from "@/hooks/useTranslation";

const NAV = [
  { href: "#about", key: "header.about" },
  { href: "#experience", key: "header.experience" },
  { href: "#projects", key: "header.projects" },
  { href: "#Studies", key: "header.studies" },
] as const;

const SECTION_IDS = NAV.map((item) => item.href.slice(1));

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS, 120);
  const navRef = useRef<HTMLElement>(null);
  const inkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The underline slides to the link of the section in view instead of
  // jumping. Measured in the DOM, not kept in state: it changes with the
  // active section and with the viewport, and nothing else reads it.
  useEffect(() => {
    const place = () => {
      const ink = inkRef.current;
      const link = active
        ? navRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`)
        : null;
      if (!ink) return;
      if (!link) {
        ink.style.opacity = "0";
        return;
      }
      ink.style.opacity = "1";
      ink.style.left = `${link.offsetLeft}px`;
      ink.style.width = `${link.offsetWidth}px`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

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

        <nav ref={navRef} className="relative hidden items-center gap-6 sm:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href.slice(1) ? "location" : undefined}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary aria-[current]:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
          <span
            ref={inkRef}
            aria-hidden
            className="pointer-events-none absolute -bottom-[13px] h-0.5 bg-primary opacity-0 transition-[left,width,opacity] duration-300 ease-out"
          />
        </nav>

        <div className="flex items-center gap-1">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
