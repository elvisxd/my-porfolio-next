"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExperienceCard } from "@/components/experience-card";
import { TimelineNode } from "@/components/timeline-node";
import { getExperiences } from "@/data/experiences";
import { useTranslation } from "@/hooks/useTranslation";
import type { WorkExperienceProps } from "@/types/experience";

export default function WorkExperience({
  className = "",
  id = "experience",
}: WorkExperienceProps) {
  const { t, language } = useTranslation();

  // Get translated experiences based on current language
  const experiences = getExperiences(language);

  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA =
      a.current ? new Date()
      : a.endDate ? new Date(a.endDate)
      : new Date();
    const dateB =
      b.current ? new Date()
      : b.endDate ? new Date(b.endDate)
      : new Date();
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section
      id={id}
      className={`w-full py-4 md:py-4 lg:py-4 bg-gradient-to-b from-background to-muted/30 ${className}`}
    >
      <div className="w-full px-1 sm:px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            {t("experience.title")}
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("experience.professionalJourney")}
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base">
            {t("experience.description")}
          </p>
        </motion.div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full bg-muted-foreground/20 origin-top"
            ></motion.div>
          </div>

          {/* Timeline entries */}
          {sortedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 sm:mb-16 flex flex-col sm:flex-row items-start sm:even:flex-row-reverse relative group"
            >
              {/* Timeline connector and icon */}
              <TimelineNode experience={exp} index={index} />

              {/* Experience card */}
              <ExperienceCard
                experience={exp}
                index={index}
                isEven={index % 2 === 0}
              />
            </motion.div>
          ))}

          {/* Timeline end marker */}
          <div className="absolute left-4 sm:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="w-4 h-4 rounded-full bg-primary/30"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
