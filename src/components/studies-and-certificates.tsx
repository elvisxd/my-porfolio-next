"use client";

import { ArrowUpRight } from "lucide-react";
import { getEducationItems } from "@/data/education";
import { useTranslation } from "@/hooks/useTranslation";

export default function StudiesAndCertificates() {
  const { t, language } = useTranslation();
  const items = getEducationItems(language);

  const degrees = items.filter((i) => i.type === "Degree");
  const certs = items.filter((i) => i.type !== "Degree");

  const year = (iso?: string) => (iso ? iso.slice(0, 4) : "");
  const range = (start?: string, end?: string, inProgress?: boolean) => {
    const s = year(start);
    const e = inProgress ? t("education.inProgress") : year(end);
    return s && e ? `${s} — ${e}` : s || e;
  };

  return (
    <section id="Studies" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <header className="mb-10">
          <p className="label-mono text-primary">{t("education.eyebrow")}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            {t("education.title")}
          </h2>
        </header>

        <h3 className="label-mono border-b border-border pb-2">
          {t("education.degrees")}
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {degrees.map((d) => (
            <div key={d.id} className="grid gap-x-8 gap-y-1 sm:grid-cols-[128px_1fr]">
              <span className="font-mono text-[11px] text-muted-foreground">
                {range(d.startDate, d.endDate, d.inProgress)}
              </span>
              <div>
                <p className="font-display text-[15px] font-semibold">{d.title}</p>
                <p className="text-sm text-muted-foreground">
                  {d.institution}
                  {d.location ? ` — ${d.location}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="label-mono mt-11 border-b border-border pb-2">
          {t("education.certificates")}
        </h3>
        <ul className="mt-1">
          {certs.map((c) => (
            <li
              key={c.id}
              className="grid gap-x-8 gap-y-1 border-b border-border py-3 sm:grid-cols-[128px_1fr_auto] sm:items-baseline"
            >
              <span className="font-mono text-[11px] text-muted-foreground">
                {range(c.startDate, c.endDate, c.inProgress)}
              </span>
              <div>
                <p className="text-[15px] font-semibold leading-snug">{c.title}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                  {c.institution}
                  {c.credential ? ` · ${c.credential}` : ""}
                </p>
              </div>
              {c.link ? (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-[13px] font-semibold text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {t("education.verify")}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
