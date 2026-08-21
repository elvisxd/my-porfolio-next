"use client";

import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { skills } from "@/data/skills";
import { useTranslation } from "@/hooks/useTranslation";
import mePhoto from "@/assets/mephoto.png";

/** Skill groups follow the CV's categories, including the AI row that the old
 *  portfolio never had. Order is deliberate: the differentiator comes first. */
const GROUPS = [
  { key: "ai", labelKey: "about.groupAi", names: ["LLM Integration", "Prompt Engineering", "Predictive Modeling", "AI-Assisted Development", "UiPath RPA"] },
  { key: "Frontend", labelKey: "about.groupFrontend" },
  { key: "Backend", labelKey: "about.groupBackend" },
  { key: "Database", labelKey: "about.groupData" },
  { key: "DevOps", labelKey: "about.groupCloud" },
  { key: "Tools", labelKey: "about.groupTools" },
] as const;

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="scroll-mt-20 border-b border-border">
      <div className="gutter section-y mx-auto max-w-6xl">
        <header className="mb-[clamp(1.75rem,1.3rem+2.2vw,2.75rem)]">
          <p className="eyebrow">{t("about.eyebrow")}</p>
          <h2 className="h-section mt-2.5">
            {t("about.title")}
          </h2>
        </header>

        <div className="reveal grid gap-[clamp(2rem,1.5rem+2.5vw,3rem)] lg:grid-cols-[minmax(0,190px)_minmax(0,1fr)]">
          <div>
            <Image
              src={mePhoto}
              alt="Elvis Pino"
              width={200}
              height={200}
              priority
              className="w-40 rounded-md border border-border object-cover grayscale lg:w-full"
            />
            <div className="mt-5 flex gap-4">
              <a href="https://github.com/elvisxd" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a href="https://www.linkedin.com/in/elvis-pino-b358b2127/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a href="mailto:elvisreyxd@gmail.com" aria-label="Email" className="text-muted-foreground transition-colors hover:text-primary">
                <Mail className="h-[18px] w-[18px]" />
              </a>
            </div>
            <a
              href="/cv/Elvis-Pino-CV.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:text-primary"
            >
              <Download className="h-3.5 w-3.5" />
              {t("about.downloadCV")}
            </a>
          </div>

          <div>
            <div className="flex max-w-[68ch] flex-col gap-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
              <p>{t("about.description3")}</p>
            </div>

            <h3 className="label-mono mt-10 border-b border-border pb-2">
              {t("about.technicalSkills")}
            </h3>
            <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-[104px_1fr]">
              {GROUPS.map((g) => {
                const names =
                  "names" in g
                    ? g.names
                    : skills
                        .filter((s) => s.category === g.key)
                        .map((s) => s.name);
                if (!names.length) return null;
                return (
                  <div key={g.key} className="contents">
                    <dt className="label-mono sm:pt-0.5">{t(g.labelKey)}</dt>
                    <dd className="text-[15px] leading-relaxed text-muted-foreground">
                      {names.join(", ")}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
