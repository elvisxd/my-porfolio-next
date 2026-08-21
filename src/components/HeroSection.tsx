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
    <section className="grid-ground relative overflow-hidden border-b border-border bg-background">
      <div className="gutter relative mx-auto max-w-6xl pb-[clamp(3rem,2.2rem+4vw,5rem)] pt-[clamp(5rem,3.5rem+7vw,9rem)]">
        <p className="eyebrow">
          {t("hero.eyebrow")}
        </p>

        <h1
          className="mt-[clamp(0.9rem,0.7rem+0.8vw,1.35rem)] font-display font-bold leading-[1.0] tracking-[-0.03em] text-foreground" style={{ fontSize: "var(--step-name)" }}
        >
          {t("hero.name")}
        </h1>

        <p
          className="mt-[clamp(1.1rem,0.9rem+1vw,1.75rem)] max-w-[22ch] font-display font-semibold leading-[1.2] tracking-[-0.015em] text-foreground sm:max-w-[30ch] lg:max-w-[36ch]"
          style={{ fontSize: "var(--step-headline)" }}
        >
          {t("hero.headline")}
        </p>

        <p
          className="mt-[clamp(0.9rem,0.75rem+0.6vw,1.25rem)] max-w-[58ch] leading-[1.62] text-muted-foreground" style={{ fontSize: "var(--step-body)" }}
        >
          {t("hero.description")}
        </p>

        {/* The design principle, set apart as a quoted rule */}
        <p
          className="mt-[clamp(1.1rem,0.9rem+0.7vw,1.6rem)] border-l-2 border-primary py-0.5 pl-4 font-mono text-[clamp(0.76rem,0.72rem+0.2vw,0.83rem)] leading-[1.6] text-foreground/85"
        >
          {t("hero.principle")}
        </p>

        <div className="mt-[clamp(1.6rem,1.2rem+1.6vw,2.4rem)] flex flex-wrap items-center gap-x-3 gap-y-2.5">
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

        <p className="mt-[clamp(1.3rem,1rem+1vw,1.8rem)] font-mono text-[clamp(0.7rem,0.67rem+0.14vw,0.76rem)] text-muted-foreground">
          {t("hero.location")}
        </p>

        {/* Metrics band — the same figures the CV leads with */}
        <dl
          className="mt-[clamp(2.5rem,1.9rem+3vw,4rem)] grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.key} className="bg-card px-[clamp(0.85rem,0.7rem+0.6vw,1.15rem)] py-[clamp(0.8rem,0.7rem+0.4vw,1.05rem)]">
              <dd className="tabular font-mono text-[clamp(1.3rem,1.15rem+0.7vw,1.65rem)] font-bold leading-none tracking-[-0.02em] text-primary">
                {s.value}
                <span className="text-lg">{s.unit}</span>
              </dd>
              <dt className="mt-[0.42rem] font-mono text-[clamp(0.6rem,0.58rem+0.1vw,0.66rem)] uppercase leading-[1.35] tracking-[0.09em] text-muted-foreground">
                {t(s.key)}
              </dt>
            </div>
          ))}
        </dl>

        <a
          href="#about"
          className="mt-[clamp(2rem,1.5rem+2vw,3rem)] inline-flex items-center gap-2 font-mono text-[clamp(0.63rem,0.6rem+0.14vw,0.7rem)] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          {t("hero.scrollToExplore")}
        </a>
      </div>
    </section>
  );
}
