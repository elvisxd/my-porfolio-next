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
    level: "Advanced",
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
    level: "Advanced",
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
    level: "Intermediate",
    category: "Backend",
    color: "#E10098",
  },
  {
    name: "Python",
    level: "Intermediate",
    category: "Backend",
    color: "#3776AB",
  },
  {
    name: "PHP",
    level: "Intermediate",
    category: "Backend",
    color: "#777BB4",
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

  // DevOps
  { name: "AWS", level: "Intermediate", category: "DevOps", color: "#FF9900" },
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

export const skillCategories: { [key: string]: string } = {
  Frontend: "User Interface Technologies",
  Backend: "Server and API Development",
  Database: "Databases and Storage",
  DevOps: "Infrastructure and Deployment",
  Tools: "Development Tools",
  Languages: "Programming Languages",
};
