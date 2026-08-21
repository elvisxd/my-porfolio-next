"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { getProjects } from "@/data/projects";
import { useTranslation } from "@/hooks/useTranslation";

/** Featured projects get room to argue for themselves; everything else is a
 *  compact index. Volume goes in the table, evidence goes in the cards. */
const FEATURED_IDS = ["trading-platform", "mobile-app-nestjs", "ecommerce-store"];

export default function Projects() {
  const { t, language } = useTranslation();
  const projects = getProjects(language);

  const featured = FEATURED_IDS.map((id) =>
    projects.find((p) => p.id === id)
  ).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const rest = projects.filter((p) => !FEATURED_IDS.includes(p.id));

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <header className="mb-10">
          <p className="label-mono text-primary">{t("projects.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            {t("projects.title")}
          </h2>
        </header>

        <div className="flex flex-col gap-12">
          {featured.map((p) => {
            const isPrivate = !p.liveLink;
            return (
              <article key={p.id} className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-9">
                {p.imageSrc ? (
                  <div className="overflow-hidden rounded-md border border-border bg-muted">
                    <Image
                      src={p.imageSrc}
                      alt={p.title}
                      width={1200}
                      height={675}
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="h-auto w-full"
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
              className="grid gap-x-6 gap-y-1 border-b border-border py-3.5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_auto] sm:items-baseline"
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
                    className="text-[13px] font-semibold text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {t("projects.demo")}
                  </a>
                ) : null}
                {p.codeLink && p.codeLink !== "#" ? (
                  <a
                    href={p.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
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
