import type { Education } from "@/types/education";
import {
  BookOpen,
  Brush,
  Code,
  GraduationCap,
  PuzzleIcon,
  School,
  Server,
  Smartphone,
} from "lucide-react";

type Language = "en" | "es";

interface TranslatableEducation
  extends Omit<Education, "title" | "description"> {
  title: Record<Language, string>;
  description: Record<Language, string>;
}

const educationData: TranslatableEducation[] = [
  {
    id: "vibe-coding-devtalles",
    title: {
      en: "Vibe Coding: Responsibly",
      es: "Vibe Coding: De forma responsable",
    },
    institution: "DevTalles",
    description: {
      en: "Certificate of completion for the Vibe Coding course, focusing on responsible AI-assisted coding practices.",
      es: "Certificado de finalización del curso Vibe Coding, enfocado en prácticas responsables de codificación asistida por IA.",
    },
    type: "Certificate",
    icon: Code,
    startDate: "2026-06-01",
    endDate: "2026-06-07",
    link: "https://cursos.devtalles.com/certificates/ntcx9jd3qr",
    credential: "ntcx9jd3qr",
    skills: [
      "AI-Assisted Coding",
      "Vibe Coding",
      "Best Practices",
    ],
  },
  {
    id: "dotnet-backend-devtalles",
    title: {
      en: ".NET Backend: .NET Core, SQL Server and JWT Security",
      es: "Backend .NET: .NET Core, SQL Server y Seguridad JWT",
    },
    institution: "DevTalles",
    description: {
      en: "Intensive course covering .NET Core backend development, SQL Server database management, and JWT security implementation for secure API authentication.",
      es: "Curso intensivo cubriendo desarrollo backend con .NET Core, gestión de bases de datos SQL Server, e implementación de seguridad JWT para autenticación segura de APIs.",
    },
    type: "Certificate",
    icon: Server,
    startDate: "2025-06-01",
    endDate: "2025-07-22",
    link: "https://cursos.devtalles.com/certificates/bhe9ladrfd",
    credential: "bhe9ladrfd",
    skills: [
      ".NET Core",
      "SQL Server",
      "JWT Security",
      "API Authentication",
      "Backend Development",
      "C#",
    ],
  },
  {
    id: "computer-science-bachelor",
    title: {
      en: "Bachelor of Computer Science",
      es: "Licenciatura en Ciencias de la Computación",
    },
    institution: "Maria Auxiliadora II",
    location: "Venezuela",
    description: {
      en: "Graduated with a degree in Computer Science, focusing on programming fundamentals, algorithms, and data structures.",
      es: "Graduado con un título en Ciencias de la Computación, enfocándose en fundamentos de programación, algoritmos y estructuras de datos.",
    },
    type: "Degree",
    icon: School,
    startDate: "2008-09-01",
    endDate: "2012-07-15",
    skills: ["Programming Fundamentals", "Algorithms", "Data Structures"],
  },
  {
    id: "systems-engineering",
    title: {
      en: "Systems Engineering",
      es: "Ingeniería de Sistemas",
    },
    institution: "Unimar",
    location: "Venezuela",
    description: {
      en: "Graduated with a degree in Systems Engineering, with emphasis on software development, database management, and system architecture.",
      es: "Graduado con un título en Ingeniería de Sistemas, con énfasis en desarrollo de software, gestión de bases de datos y arquitectura de sistemas.",
    },
    type: "Degree",
    icon: GraduationCap,
    startDate: "2012-09-01",
    endDate: "2017-06-30",
    link: "https://portalunimar.unimar.edu.ve/home",
    skills: [
      "Software Development",
      "Database Management",
      "System Architecture",
    ],
  },
  {
    id: "nestjs-devtalles",
    title: {
      en: "NestJS: Backend Development with PostgreSQL and WebSockets",
      es: "NestJS: Desarrollo Backend con PostgreSQL y WebSockets",
    },
    institution: "DevTalles",
    description: {
      en: "Comprehensive course covering NestJS framework development, PostgreSQL database integration, Docker containerization, ORM implementation, and real-time communication with WebSockets.",
      es: "Curso integral cubriendo desarrollo del framework NestJS, integración de bases de datos PostgreSQL, containerización con Docker, implementación de ORM y comunicación en tiempo real con WebSockets.",
    },
    type: "Certificate",
    icon: Server,
    startDate: "2025-04-01",
    endDate: "2025-06-12",
    link: "https://cursos.devtalles.com/certificates/2cyepaaiut",
    credential: "2cyepaaiut",
    skills: [
      "NestJS",
      "PostgreSQL",
      "Docker",
      "ORM",
      "WebSockets",
      "TypeScript",
      "Backend Development",
    ],
  },
  {
    id: "react-native-expo",
    title: {
      en: "React Native Expo: Native Applications for iOS and Android",
      es: "React Native Expo: Aplicaciones Nativas para iOS y Android",
    },
    institution: "DevTalles",
    description: {
      en: "Completion Certificate for React Native Expo development course covering native applications for iOS and Android platforms.",
      es: "Certificado de finalización del curso de desarrollo React Native Expo cubriendo aplicaciones nativas para plataformas iOS y Android.",
    },
    type: "Certificate",
    icon: Smartphone,
    startDate: "2025-05-01",
    endDate: "2025-06-09",
    link: "https://cursos.devtalles.com/certificates/cgwvjogaxy",
    credential: "cgwvjogaxy",
    skills: [
      "React Native",
      "Expo",
      "iOS Development",
      "Android Development",
      "Mobile Apps",
    ],
  },
  {
    id: "frontend-specialization",
    title: {
      en: "Front-End Design Specialization",
      es: "Especialización en Diseño Front-End",
    },
    institution: "Coursera (Meta)",
    description: {
      en: "Comprehensive specialization covering modern front-end development practices, responsive design, and user experience principles.",
      es: "Especialización integral cubriendo prácticas modernas de desarrollo front-end, diseño responsivo y principios de experiencia de usuario.",
    },
    type: "Specialization",
    icon: Brush,
    startDate: "2023-01-15",
    inProgress: true,
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer?",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Responsive Design",
      "UX Principles",
    ],
  },
  {
    id: "advanced-react",
    title: {
      en: "Meta Advanced React Certificate",
      es: "Certificado Avanzado de React de Meta",
    },
    institution: "Coursera",
    description: {
      en: "Advanced course covering React hooks, context API, performance optimization, and testing strategies for complex applications.",
      es: "Curso avanzado cubriendo React hooks, context API, optimización de rendimiento y estrategias de testing para aplicaciones complejas.",
    },
    type: "Certificate",
    icon: Code,
    startDate: "2022-09-10",
    endDate: "2022-11-20",
    link: "https://www.coursera.org/account/accomplishments/verify/9UXAD93Z6TDJ",
    credential: "9UXAD93Z6TDJ",
    skills: [
      "React Hooks",
      "Context API",
      "Performance Optimization",
      "Testing",
    ],
  },
  {
    id: "react-basics",
    title: {
      en: "Meta React Basics Certificate",
      es: "Certificado de Fundamentos de React de Meta",
    },
    institution: "Coursera",
    description: {
      en: "Foundational course covering React fundamentals, components, props, state management, and basic application development.",
      es: "Curso fundamental cubriendo fundamentos de React, componentes, props, gestión de estado y desarrollo básico de aplicaciones.",
    },
    type: "Certificate",
    icon: PuzzleIcon,
    startDate: "2022-07-05",
    endDate: "2022-08-30",
    link: "https://www.coursera.org/account/accomplishments/verify/W852TWECIXYB",
    credential: "W852TWECIXYB",
    skills: [
      "React Fundamentals",
      "Component Architecture",
      "State Management",
    ],
  },
  {
    id: "backend-intro",
    title: {
      en: "Introduction to Back-End Development",
      es: "Introducción al Desarrollo Back-End",
    },
    institution: "Coursera (Meta)",
    description: {
      en: "Introductory course covering server-side programming, API development, and database integration.",
      es: "Curso introductorio cubriendo programación del lado del servidor, desarrollo de APIs e integración de bases de datos.",
    },
    type: "Certificate",
    icon: Code,
    startDate: "2022-05-15",
    endDate: "2022-06-30",
    link: "https://www.coursera.org/account/accomplishments/verify/FYCE14Q2I9Y3",
    credential: "FYCE14Q2I9Y3",
    skills: ["Node.js", "Express", "API Development", "Database Integration"],
  },
  {
    id: "javascript-algorithms",
    title: {
      en: "JavaScript Algorithms and Data Structures",
      es: "Algoritmos y Estructuras de Datos en JavaScript",
    },
    institution: "freeCodeCamp",
    description: {
      en: "Comprehensive certification covering JavaScript programming fundamentals, algorithms, and data structure implementations.",
      es: "Certificación integral cubriendo fundamentos de programación JavaScript, algoritmos e implementaciones de estructuras de datos.",
    },
    type: "Certificate",
    icon: BookOpen,
    startDate: "2021-11-01",
    endDate: "2022-01-15",
    link: "https://www.freecodecamp.org/certification/fcc12345/javascript-algorithms-and-data-structures",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
  },
  {
    id: "responsive-web-design",
    title: {
      en: "Responsive Web Design",
      es: "Diseño Web Responsivo",
    },
    institution: "freeCodeCamp",
    description: {
      en: "Course focused on building responsive websites with HTML, CSS, and accessibility best practices.",
      es: "Curso enfocado en construir sitios web responsivos con HTML, CSS y mejores prácticas de accesibilidad.",
    },
    type: "Certificate",
    icon: Brush,
    startDate: "2021-08-10",
    endDate: "2021-10-20",
    link: "https://www.freecodecamp.org/certification/fcc12345/responsive-web-design",
    skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
  },
];

// Helper function to get education items with current language
export const getEducationItems = (language: Language = "en"): Education[] => {
  return educationData.map((item) => ({
    ...item,
    title: item.title[language],
    description: item.description[language],
  }));
};

// Export education items with default English language for backward compatibility
export const educationItems: Education[] = getEducationItems("en");

export const getEducationTypes = (): string[] => {
  const typesSet = new Set<string>();

  educationData.forEach((item) => {
    typesSet.add(item.type);
  });

  return Array.from(typesSet).sort();
};
