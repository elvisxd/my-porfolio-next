"use client";

import { ArrowUpRight } from "lucide-react";
import { IssuerTile } from "@/components/brand-icon";
import { issuerBrand } from "@/data/brand-icons";
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
    <section id="Studies" className="grid-ground scroll-mt-20 border-b border-border">
      <div className="gutter section-y mx-auto max-w-6xl">
        <header className="mb-[clamp(1.75rem,1.3rem+2.2vw,2.75rem)]">
          <p className="eyebrow">{t("education.eyebrow")}</p>
          <h2 className="h-section mt-2.5">
            {t("education.title")}
          </h2>
        </header>

        <h3 className="label-mono border-b border-border pb-2">
          {t("education.degrees")}
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {degrees.map((d) => (
            <div key={d.id} className="reveal grid grid-cols-[34px_minmax(0,1fr)] gap-x-4 gap-y-1 sm:grid-cols-[minmax(0,120px)_34px_minmax(0,1fr)] sm:gap-x-6">
              <span className="col-span-2 font-mono text-[11px] text-muted-foreground sm:col-span-1">
                {range(d.startDate, d.endDate, d.inProgress)}
              </span>
              <IssuerTile brand={issuerBrand(d.institution)} label={d.institution} />
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
        <ul className="stagger mt-1">
          {certs.map((c) => (
            <li
              key={c.id}
              className="reveal row-hover -mx-2 grid grid-cols-[34px_minmax(0,1fr)] gap-x-4 gap-y-1 border-b border-border px-2 py-3 sm:grid-cols-[minmax(0,120px)_34px_minmax(0,1fr)_auto] sm:items-center sm:gap-x-6"
            >
              <span className="col-span-2 font-mono text-[11px] text-muted-foreground sm:col-span-1">
                {range(c.startDate, c.endDate, c.inProgress)}
              </span>
              <IssuerTile brand={issuerBrand(c.institution)} label={c.institution} />
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
