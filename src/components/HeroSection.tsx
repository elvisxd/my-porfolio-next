"use client";

import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

/** Figures come from the trading platform described in the work section. */
const STATS = [
  { value: "10", unit: "", key: "hero.statYears" },
  { value: "283", unit: "k", key: "hero.statLines" },
  { value: "5", unit: "", key: "hero.statEngines" },
  { value: "+1.29", unit: "%", key: "hero.statEdge" },
] as const;

export default function HeroSection() {
  const { t } = useTranslation();


  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      {/* Instrument grid — the faint measured ground the whole site sits on */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55] dark:opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)/0.055) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.055) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 78% 62% at 50% 34%, #000 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 78% 62% at 50% 34%, #000 45%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-28 lg:pb-20 lg:pt-32">
        <p className="label-mono text-primary">
          {t("hero.eyebrow")}
        </p>

        <h1
          className="mt-5 font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.028em] text-foreground sm:text-6xl lg:text-7xl"
        >
          {t("hero.name")}
        </h1>

        <p
          className="mt-7 max-w-[34ch] font-display text-xl font-semibold leading-[1.28] tracking-[-0.012em] text-foreground sm:text-2xl sm:max-w-[38ch]"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          {t("hero.headline")}
        </p>

        <p
          className="mt-5 max-w-[64ch] text-[15px] leading-relaxed text-muted-foreground sm:text-base"
        >
          {t("hero.description")}
        </p>

        {/* The design principle, set apart as a quoted rule */}
        <p
          className="mt-6 border-l-2 border-primary pl-4 font-mono text-[13px] leading-relaxed text-foreground/85"
        >
          {t("hero.principle")}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/88"
          >
            {t("hero.exploreWork")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:elvisreyxd@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            {t("hero.getInTouch")}
          </a>
          <a
            href="/Elvis-Pino-CV.pdf"
            download
            className="inline-flex items-center gap-2 px-1.5 py-2.5 text-sm font-semibold text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            <Download className="h-4 w-4" />
            {t("hero.downloadCv")}
          </a>
        </div>

        <p className="mt-7 font-mono text-xs text-muted-foreground">
          {t("hero.location")}
        </p>

        {/* Metrics band — the same figures the CV leads with */}
        <dl
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.key} className="bg-card px-4 py-4">
              <dd className="tabular font-mono text-2xl font-bold tracking-tight text-primary">
                {s.value}
                <span className="text-lg">{s.unit}</span>
              </dd>
              <dt className="mt-1 font-mono text-[10.5px] uppercase leading-snug tracking-[0.09em] text-muted-foreground">
                {t(s.key)}
              </dt>
            </div>
          ))}
        </dl>

        <a
          href="#about"
          className="mt-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          {t("hero.scrollToExplore")}
        </a>
      </div>
    </section>
  );
}
