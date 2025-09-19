"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const languages = [
  { code: "en", name: "English", initials: "EN" },
  { code: "es", name: "Español", initials: "ES" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1"
        aria-label="Select language"
      >
        <span className="text-sm font-semibold">
          {currentLanguage?.initials}
        </span>
        <ChevronDown className="h-3 w-3" />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 z-20 min-w-[140px] bg-background border border-border rounded-md shadow-md overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as "en" | "es");
                  setIsOpen(false);
                }}
                className="w-full px-3 py-2 text-sm flex items-center justify-between hover:bg-accent cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{lang.initials}</span>
                </div>
                {language === lang.code && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
