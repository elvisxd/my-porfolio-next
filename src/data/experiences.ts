import type { WorkExperience } from "@/types/experience";
import { v4 as uuidv4 } from "uuid";

export const experiences: WorkExperience[] = [
  {
    id: uuidv4(),
    title: "Founder & Full-Stack Developer",
    company: "Nesty C.A",
    location: "Remote",
    period: "June 2023 - Present",
    startDate: "2023-06-01",
    current: true,
    responsibilities: [
      {
        id: uuidv4(),
        text: "Founded and lead a technology company specializing in automation services, web development, mobile apps, and API development.",
      },
      {
        id: uuidv4(),
        text: "Design and develop comprehensive digital solutions including responsive web applications, mobile apps, and robust APIs.",
      },
      {
        id: uuidv4(),
        text: "Implement automation solutions using AI models and microservices architecture to optimize business processes.",
      },
      {
        id: uuidv4(),
        text: "Manage client relationships, project requirements, and deliver end-to-end solutions from concept to deployment.",
      },
      {
        id: uuidv4(),
        text: "Architect scalable systems using modern frameworks and ensure high-quality, maintainable code standards.",
      },
    ],
    technologies: [
      { name: "NestJS", color: "#E0234E" },
      { name: "React Native", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "Microservices", color: "#FF6B6B" },
      { name: "AI Models", color: "#4ECDC4" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: ".NET C#", color: "#239120" },
      { name: "TypeScript", color: "#3178C6" },
    ],
  },
  {
    id: uuidv4(),
    title: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "September 2022 - Present",
    startDate: "2022-09-01",
    current: true,
    responsibilities: [
      {
        id: uuidv4(),
        text: "Develop and deploy modern web applications using React, Next.js, TypeScript, and Tailwind CSS.",
      },
      {
        id: uuidv4(),
        text: "Implement responsive designs and ensure cross-browser compatibility for client websites.",
      },
      {
        id: uuidv4(),
        text: "Create RESTful APIs and integrate third-party services to enhance application functionality.",
      },
      {
        id: uuidv4(),
        text: "Optimize website performance and implement SEO best practices to improve client visibility.",
      },
      {
        id: uuidv4(),
        text: "Collaborate directly with clients to gather requirements and deliver solutions that meet their business needs.",
      },
      {
        id: uuidv4(),
        text: "Maintain and update existing websites, implementing new features and fixing bugs as needed.",
      },
    ],
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Node.js", color: "#339933" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Vercel", color: "#000000" },
      { name: "Git", color: "#F05032" },
    ],
  },
  {
    id: uuidv4(),
    title: "Freelancer, Web Development",
    company: "Own Company",
    location: "Remote",
    period: "May 2019 - August 2020",
    startDate: "2019-05-01",
    endDate: "2020-08-31",
    responsibilities: [
      {
        id: uuidv4(),
        text: "Assisted in the development and maintenance of the company's website.",
      },
      {
        id: uuidv4(),
        text: "Learned and applied modern web development technologies and best practices.",
      },
      {
        id: uuidv4(),
        text: "Participated in daily stand-up meetings and sprint planning sessions.",
      },
      {
        id: uuidv4(),
        text: "Gained experience in project management and client communication.",
      },
    ],
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Node.js", color: "#339933" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "HTML", color: "#E34F26" },
      { name: "CSS", color: "#1572B6" },
    ],
  },
  {
    id: uuidv4(),
    title: "Software Engineer",
    company: "IT Driver",
    location: "Remote",
    period: "June 2017 - 2019",
    startDate: "2017-06-01",
    endDate: "2019-12-31",
    responsibilities: [
      {
        id: uuidv4(),
        text: "Developed and maintained web applications using PHP, CSS, and MySQL.",
      },
      {
        id: uuidv4(),
        text: "Collaborated with cross-functional teams to design and implement new features.",
      },
      {
        id: uuidv4(),
        text: "Participated in code reviews and pair programming to ensure code quality.",
      },
      {
        id: uuidv4(),
        text: "Implemented automated testing and continuous integration/deployment workflows.",
      },
    ],
    technologies: [
      { name: "PHP", color: "#777BB4" },
      { name: "MySQL", color: "#4479A1" },
      { name: "CSS", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Git", color: "#F05032" },
    ],
  },
];
