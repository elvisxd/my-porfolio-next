import type { Education } from "@/types/education";
import {
  BookOpen,
  Brush,
  Code,
  GraduationCap,
  PuzzleIcon,
  School,
  Smartphone,
} from "lucide-react";

export const educationItems: Education[] = [
  {
    id: "computer-science-bachelor",
    title: "Bachelor of Computer Science",
    institution: "Maria Auxiliadora II",
    location: "Venezuela",
    description:
      "Graduated with a degree in Computer Science, focusing on programming fundamentals, algorithms, and data structures.",
    type: "Degree",
    icon: School,
    startDate: "2008-09-01",
    endDate: "2012-07-15",
    skills: ["Programming Fundamentals", "Algorithms", "Data Structures"],
  },
  {
    id: "systems-engineering",
    title: "Systems Engineering",
    institution: "Unimar",
    location: "Venezuela",
    description:
      "Graduated with a degree in Systems Engineering, with emphasis on software development, database management, and system architecture.",
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
    id: "react-native-expo",
    title: "React Native Expo: Native Applications for iOS and Android",
    institution: "DevTalles",
    description:
      "Completion Certificate for React Native Expo development course covering native applications for iOS and Android platforms.",
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
    title: "Front-End Design Specialization",
    institution: "Coursera (Meta)",
    description:
      "Comprehensive specialization covering modern front-end development practices, responsive design, and user experience principles.",
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
    title: "Meta Advanced React Certificate",
    institution: "Coursera",
    description:
      "Advanced course covering React hooks, context API, performance optimization, and testing strategies for complex applications.",
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
    title: "Meta React Basics Certificate",
    institution: "Coursera",
    description:
      "Foundational course covering React fundamentals, component architecture, state management, and props.",
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
    title: "Introduction to Back-End Development",
    institution: "Coursera (Meta)",
    description:
      "Introductory course covering server-side programming, API development, and database integration.",
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
    title: "JavaScript Algorithms and Data Structures",
    institution: "freeCodeCamp",
    description:
      "Comprehensive course on JavaScript algorithms and data structures, covering fundamental programming concepts and problem-solving techniques.",
    type: "Certificate",
    icon: BookOpen,
    startDate: "2021-11-01",
    endDate: "2022-01-15",
    link: "https://www.freecodecamp.org/certification/fcc12345/javascript-algorithms-and-data-structures",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
  },
  {
    id: "responsive-web-design",
    title: "Responsive Web Design",
    institution: "freeCodeCamp",
    description:
      "Course focused on building responsive websites with HTML, CSS, and accessibility best practices.",
    type: "Certificate",
    icon: Brush,
    startDate: "2021-08-10",
    endDate: "2021-10-20",
    link: "https://www.freecodecamp.org/certification/fcc12345/responsive-web-design",
    skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
  },
];

export const getEducationTypes = (): string[] => {
  const typesSet = new Set<string>();

  educationItems.forEach((item) => {
    typesSet.add(item.type);
  });

  return Array.from(typesSet).sort();
};
