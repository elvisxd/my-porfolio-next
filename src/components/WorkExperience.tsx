"use client";

import { TechChip } from "@/components/brand-icon";
import { techBrand } from "@/data/brand-icons";
import { getExperiences } from "@/data/experiences";
import { useTranslation } from "@/hooks/useTranslation";

/** Experience reads as a record, not a set of cards: a mono metadata rail on
 *  the left, the role and its substance on the right. Same structure as the CV. */
export default function WorkExperience() {
  const { t, language } = useTranslation();
  const experiences = getExperiences(language);

  return (
    <section id="experience" className="scroll-mt-20 border-b border-border">
      <div className="gutter section-y mx-auto max-w-6xl">
        <header className="mb-[clamp(1.75rem,1.3rem+2.2vw,2.75rem)]">
          <p className="eyebrow">{t("experience.eyebrow")}</p>
          <h2 className="h-section mt-2.5">
            {t("experience.title")}
          </h2>
        </header>

        {/* A rail runs down the left of the record and fills in amber as the
            reader scrolls; each role gets a dot that lights when it arrives. */}
        <div className="relative pl-8 sm:pl-10">
          <span aria-hidden className="rail-line" />
          <span aria-hidden className="rail-fill" />
          <div className="flex flex-col gap-[clamp(1.75rem,1.3rem+2.2vw,2.75rem)]">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="reveal relative grid gap-x-10 gap-y-3 sm:grid-cols-[minmax(0,128px)_minmax(0,1fr)]"
            >
              <span aria-hidden className="rail-dot" />
              <div className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                <span className="block text-foreground/75">{exp.period}</span>
                {exp.location ? (
                  <span className="mt-1 block">{exp.location}</span>
                ) : null}
                {exp.current ? (
                  <span className="mt-2 inline-block rounded-sm bg-accent px-1.5 py-0.5 text-[10px] uppercase tracking-[0.1em] text-accent-foreground">
                    {t("experience.current")}
                  </span>
                ) : null}
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold tracking-[-0.01em]">
                  {exp.title}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-primary">
                  {exp.company}
                </p>

                <ul className="mt-3 flex flex-col gap-1.5">
                  {exp.responsibilities.map((r) => (
                    <li
                      key={r.id}
                      className="relative pl-4 text-[15px] leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.62em] before:h-px before:w-2 before:bg-primary"
                    >
                      {r.text}
                    </li>
                  ))}
                </ul>

                <ul className="rule-dotted mt-4 flex flex-wrap gap-1.5 pt-3">
                  {exp.technologies.map((tech) => (
                    <TechChip
                      key={tech.name}
                      name={tech.name}
                      brand={techBrand(tech.name, tech.color)}
                      compact
                    />
                  ))}
                </ul>
              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
