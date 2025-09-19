"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Import translations statically
import enTranslations from "@/locales/en.json";
import esTranslations from "@/locales/es.json";

const translations = {
  en: enTranslations,
  es: esTranslations,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Load saved language preference after component mounts
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem(
      "preferred-language"
    ) as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.startsWith("es") ? "es" : "en";
      setLanguage(browserLang);
    }
  }, []);

  // Save language preference
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("preferred-language", language);
    }
  }, [language, mounted]);

  // Translation function
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
