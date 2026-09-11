"use client";

import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "@/components/brand-icons";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="font-display text-xl font-semibold tracking-[-0.015em]">
          {t("footer.available")}
        </p>
        <p className="mt-2 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
          {t("footer.availableDetail")}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
          <a
            href="mailto:elvisreyxd@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            <Mail className="h-4 w-4" />
            elvisreyxd@gmail.com
          </a>
          <a
            href="tel:+14074379559"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            <Phone className="h-4 w-4" />
            +1 (407) 437-9559
          </a>
          <a
            href="https://www.linkedin.com/in/elvis-pino-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/elvisxd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            <Github className="h-4 w-4" />
            github.com/elvisxd
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Elvis Pino
          </p>
          <p className="font-mono text-[11px] text-muted-foreground">
            {t("footer.builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
