"use client";

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
          <p className="label-mono text-primary">{t("experience.eyebrow")}</p>
          <h2 className="h-section mt-2.5">
            {t("experience.title")}
          </h2>
        </header>

        <div className="flex flex-col gap-[clamp(1.75rem,1.3rem+2.2vw,2.75rem)]">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="reveal grid gap-x-10 gap-y-3 sm:grid-cols-[minmax(0,128px)_minmax(0,1fr)]"
            >
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

                <p className="rule-dotted mt-4 pt-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  {exp.technologies.map((tech) => tech.name).join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
