"use client";

import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import { Github } from "@/components/brand-icons";
import { getProjects } from "@/data/projects";
import { useTranslation } from "@/hooks/useTranslation";

/** Featured projects get room to argue for themselves; everything else is a
 *  compact index. Volume goes in the table, evidence goes in the cards. */
const FEATURED_IDS = [
  "trading-platform",
  "sports-betting-research",
  "mobile-app-nestjs",
  "ecommerce-store",
];

export default function Projects() {
  const { t, language } = useTranslation();
  const projects = getProjects(language);

  const featured = FEATURED_IDS.map((id) =>
    projects.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const rest = projects.filter((p) => !FEATURED_IDS.includes(p.id));

  return (
    <section id="projects" className="grid-ground scroll-mt-20 border-b border-border">
      <div className="gutter section-y mx-auto max-w-6xl">
        <header className="mb-[clamp(1.75rem,1.3rem+2.2vw,2.75rem)]">
          <p className="eyebrow">{t("projects.eyebrow")}</p>
          <h2 className="h-section mt-2.5">
            {t("projects.title")}
          </h2>
        </header>

        <div className="flex flex-col gap-[clamp(2.5rem,1.9rem+3vw,4rem)]">
          {featured.map((p) => {
            const isPrivate = !p.liveLink;
            return (
              <article key={p.id} className="reveal grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-center lg:gap-12">
                {p.imageSrc ? (
                  <div className="group/img overflow-hidden rounded-md border border-border bg-muted">
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      width={1200}
                      height={675}
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="aspect-video h-auto w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-[1.015]"
                    />
                  </div>
                ) : null}

                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.012em]">
                      {p.title}
                    </h3>
                    {isPrivate ? (
                      <span className="inline-flex items-center gap-1 rounded-sm bg-accent px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-accent-foreground">
                        <Lock className="h-2.5 w-2.5" />
                        {t("projects.privateSystem")}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {p.shortDescription ?? p.description}
                  </p>

                  <p className="rule-dotted mt-4 pt-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
                    {p.technologies.map((tech) => tech.name).join(" · ")}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {p.liveLink ? (
                      <a
                        href={p.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {t("projects.viewLive")}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        {t("projects.walkthrough")}
                      </span>
                    )}
                    {p.codeLink && p.codeLink !== "#" ? (
                      <a
                        href={p.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                      >
                        <Github className="h-3.5 w-3.5" />
                        {t("projects.viewCode")}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Compact index of the remaining work */}
        <h3 className="label-mono mt-14 border-b border-border pb-2">
          {t("projects.more")}
        </h3>
        <ul className="mt-1">
          {rest.map((p) => (
            <li
              key={p.id}
              className="row-hover -mx-2 grid gap-x-6 gap-y-1 border-b border-border px-2 py-3.5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_auto] sm:items-baseline"
            >
              <span className="font-display text-[15px] font-semibold">
                {p.title}
              </span>
              <span className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                {p.technologies.map((tech) => tech.name).join(" · ")}
              </span>
              <span className="flex gap-4">
                {p.liveLink ? (
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-[13px] font-semibold text-muted-foreground hover:text-primary"
                  >
                    {t("projects.demo")}
                  </a>
                ) : null}
                {p.codeLink && p.codeLink !== "#" ? (
                  <a
                    href={p.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-[13px] font-semibold text-muted-foreground hover:text-primary"
                  >
                    {t("projects.code")}
                  </a>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
