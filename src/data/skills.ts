import type { Skill } from "@/types/skills";

export const skills: Skill[] = [
  // Frontend
  {
    name: "JavaScript",
    level: "Expert",
    category: "Frontend",
    color: "#F7DF1E",
  },
  { name: "React", level: "Expert", category: "Frontend", color: "#61DAFB" },
  {
    name: "React Native",
    level: "Expert",
    category: "Frontend",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    level: "Expert",
    category: "Frontend",
    color: "#3178C6",
  },
  { name: "HTML", level: "Expert", category: "Frontend", color: "#E34F26" },
  { name: "CSS", level: "Advanced", category: "Frontend", color: "#1572B6" },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    category: "Frontend",
    color: "#06B6D4",
  },
  {
    name: "Vue",
    level: "Intermediate",
    category: "Frontend",
    color: "#4FC08D",
  },
  {
    name: "Next.js",
    level: "Advanced",
    category: "Frontend",
    color: "#000000",
  },
  { name: "Redux", level: "Advanced", category: "Frontend", color: "#764ABC" },

  // Backend
  { name: "Node.js", level: "Advanced", category: "Backend", color: "#339933" },
  {
    name: "NestJS",
    level: "Expert",
    category: "Backend",
    color: "#E0234E",
  },
  {
    name: "Express.js",
    level: "Advanced",
    category: "Backend",
    color: "#000000",
  },
  {
    name: "GraphQL",
    level: "Advanced",
    category: "Backend",
    color: "#E10098",
  },
  {
    name: "Python",
    level: "Advanced",
    category: "Backend",
    color: "#3776AB",
  },
  {
    name: "PHP",
    level: "Advanced",
    category: "Backend",
    color: "#777BB4",
  },
  {
    name: "C#",
    level: "Expert",
    category: "Backend",
    color: "#239120",
  },
  {
    name: "Java",
    level: "Expert",
    category: "Backend",
    color: "#ED8B00",
  },

  // Database
  { name: "SQL", level: "Advanced", category: "Database", color: "#4479A1" },
  {
    name: "MongoDB",
    level: "Intermediate",
    category: "Database",
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    level: "Advanced",
    category: "Database",
    color: "#336791",
  },
  {
    name: "MySQL",
    level: "Advanced",
    category: "Database",
    color: "#4479A1",
  },
  {
    name: "Supabase",
    level: "Intermediate",
    category: "Database",
    color: "#3ECF8E",
  },
  {
    name: "SQL Server",
    level: "Advanced",
    category: "Database",
    color: "#CC2927",
  },
  {
    name: "Azure SQL",
    level: "Advanced",
    category: "Database",
    color: "#0078D4",
  },
  {
    name: "Entity Framework",
    level: "Advanced",
    category: "Database",
    color: "#512BD4",
  },

  // DevOps
  { name: "AWS", level: "Intermediate", category: "DevOps", color: "#FF9900" },
  {
    name: "Azure",
    level: "Advanced",
    category: "DevOps",
    color: "#0078D4",
  },
  {
    name: "Azure DevOps",
    level: "Intermediate",
    category: "DevOps",
    color: "#0078D4",
  },
  {
    name: "Docker",
    level: "Intermediate",
    category: "DevOps",
    color: "#2496ED",
  },
  {
    name: "Railway",
    level: "Intermediate",
    category: "DevOps",
    color: "#0B0D0E",
  },
  {
    name: "Vercel",
    level: "Advanced",
    category: "DevOps",
    color: "#000000",
  },

  // AI
  {
    name: "Claude",
    level: "Advanced",
    category: "AI",
    color: "#D97757",
  },
  {
    name: "Claude Code",
    level: "Advanced",
    category: "AI",
    color: "#D97757",
  },
  {
    name: "Google Gemini API",
    level: "Advanced",
    category: "AI",
    color: "#8E75B2",
  },
  {
    name: "LLM Integration",
    level: "Advanced",
    category: "AI",
    color: "#8E75B2",
  },
  {
    name: "Prompt Engineering",
    level: "Advanced",
    category: "AI",
    color: "#D97757",
  },

  // Tools
  { name: "Git", level: "Expert", category: "Tools", color: "#F05032" },
  { name: "Jest", level: "Advanced", category: "Tools", color: "#C21325" },
  {
    name: "Webpack",
    level: "Intermediate",
    category: "Tools",
    color: "#8DD6F9",
  },
  {
    name: "Turbopack",
    level: "Intermediate",
    category: "Tools",
    color: "#000000",
  },
  {
    name: "Swagger",
    level: "Intermediate",
    category: "Tools",
    color: "#85EA2D",
  },
];

type Language = "en" | "es";

const skillCategoriesData: { [key: string]: Record<Language, string> } = {
  Frontend: {
    en: "User Interface Technologies",
    es: "Tecnologías de Interfaz de Usuario",
  },
  Backend: {
    en: "Server and API Development",
    es: "Desarrollo de Servidor y APIs",
  },
  Database: {
    en: "Databases and Storage",
    es: "Bases de Datos y Almacenamiento",
  },
  DevOps: {
    en: "Infrastructure and Deployment",
    es: "Infraestructura y Despliegue",
  },
  Tools: {
    en: "Development Tools",
    es: "Herramientas de Desarrollo",
  },
  AI: {
    en: "AI and Applied Models",
    es: "IA y Modelos Aplicados",
  },
  Languages: {
    en: "Programming Languages",
    es: "Lenguajes de Programación",
  },
};

// Helper function to get skill categories with current language
export const getSkillCategories = (
  language: Language = "en"
): { [key: string]: string } => {
  const result: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(skillCategoriesData)) {
    result[key] = value[language];
  }
  return result;
};

// Export skill categories with default English language for backward compatibility
export const skillCategories: { [key: string]: string } =
  getSkillCategories("en");
