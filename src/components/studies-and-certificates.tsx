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
      <div className="gutter section-y mx-auto max-w-6xl">
        <header className="mb-[clamp(1.75rem,1.3rem+2.2vw,2.75rem)]">
          <p className="label-mono text-primary">{t("education.eyebrow")}</p>
          <h2 className="h-section mt-2.5">
            {t("education.title")}
          </h2>
        </header>

        <h3 className="label-mono border-b border-border pb-2">
          {t("education.degrees")}
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {degrees.map((d) => (
            <div key={d.id} className="reveal grid gap-x-8 gap-y-1 sm:grid-cols-[minmax(0,120px)_minmax(0,1fr)]">
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
              className="row-hover -mx-2 grid gap-x-8 gap-y-1 border-b border-border px-2 py-3 sm:grid-cols-[minmax(0,120px)_minmax(0,1fr)_auto] sm:items-baseline"
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
                  className="group inline-flex items-center gap-1 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-primary"
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
