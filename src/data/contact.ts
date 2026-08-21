import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import type { ContactInfo, FooterSection } from "@/types/footer";

export const contactInfo: ContactInfo[] = [
  {
    id: "email",
    icon: Mail,
    text: "elvisreyxd@gmail.com",
    href: "mailto:elvisreyxd@gmail.com",
  },
  {
    id: "phone",
    icon: Phone,
    text: "+1 (407) 437-9559",
    href: "tel:+14074379559",
  },
  {
    id: "github",
    icon: Github,
    text: "GitHub",
    href: "https://github.com/elvisxd",
    isExternal: true,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/elvis-pino-dev/",
    isExternal: true,
  },
  {
    id: "twitter",
    icon: Twitter,
    text: "Twitter",
    href: "https://twitter.com/elvisxd",
    isExternal: true,
  },
  {
    id: "instagram",
    icon: Instagram,
    text: "Instagram",
    href: "https://instagram.com/elvisxd",
    isExternal: true,
  },
];

type Language = "en" | "es";

interface TranslatableFooterSection {
  id: string;
  title: Record<Language, string>;
  links: {
    id: string;
    text: Record<Language, string>;
    href: string;
    isExternal?: boolean;
  }[];
}

const footerSectionsData: TranslatableFooterSection[] = [
  {
    id: "navigation",
    title: {
      en: "Navigation",
      es: "Navegación",
    },
    links: [
      { id: "home", text: { en: "Home", es: "Inicio" }, href: "#" },
      { id: "about", text: { en: "About", es: "Acerca" }, href: "#about" },
      {
        id: "experience",
        text: { en: "Experience", es: "Experiencia" },
        href: "#experience",
      },
      {
        id: "projects",
        text: { en: "Projects", es: "Proyectos" },
        href: "#projects",
      },
      {
        id: "studies",
        text: { en: "Studies", es: "Estudios" },
        href: "#Studies",
      },
    ],
  },
];

// Helper function to get footer sections with current language
export const getFooterSections = (
  language: Language = "en"
): FooterSection[] => {
  return footerSectionsData.map((section) => ({
    ...section,
    title: section.title[language],
    links: section.links.map((link) => ({
      ...link,
      text: link.text[language],
    })),
  }));
};

// Export footer sections with default English language for backward compatibility
export const footerSections: FooterSection[] = getFooterSections("en");
