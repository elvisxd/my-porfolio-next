import type { WorkExperience } from "@/types/experience";

type Language = "en" | "es";

interface TranslatableWorkExperience extends Omit<
  WorkExperience,
  "title" | "responsibilities" | "period"
> {
  title: Record<Language, string>;
  period: Record<Language, string>;
  responsibilities: {
    id: string;
    text: Record<Language, string>;
  }[];
}

const experiencesData: TranslatableWorkExperience[] = [
  {
    id: "nesty-ca",
    title: {
      en: "Founder & Full-Stack Developer",
      es: "Fundador & Desarrollador Full-Stack",
    },
    company: "Nesty C.A",
    location: "Remote",
    period: { en: "June 2023 — Present", es: "Junio 2023 — Actualidad" },
    startDate: "2023-06-01",
    current: true,
    responsibilities: [
      {
        id: "freelance",
        text: {
          en: "Founded and lead a technology company specializing in automation services, web development, mobile apps, and API development.",
          es: "Fundé y lidero una empresa tecnológica especializada en servicios de automatización, desarrollo web, aplicaciones móviles y desarrollo de APIs.",
        },
      },
      {
        id: "own-company",
        text: {
          en: "Design and develop comprehensive digital solutions including responsive web applications, mobile apps, and robust APIs.",
          es: "Diseño y desarrollo soluciones digitales integrales incluyendo aplicaciones web responsivas, aplicaciones móviles y APIs robustas.",
        },
      },
      {
        id: "it-driver",
        text: {
          en: "Implement automation solutions using AI models and microservices architecture to optimize business processes.",
          es: "Implemento soluciones de automatización usando modelos de IA y arquitectura de microservicios para optimizar procesos de negocio.",
        },
      },
      {
        id: "nesty-resp-1",
        text: {
          en: "Manage client relationships, project requirements, and deliver end-to-end solutions from concept to deployment.",
          es: "Gestiono relaciones con clientes, requisitos de proyectos y entrego soluciones completas desde el concepto hasta el despliegue.",
        },
      },
      {
        id: "nesty-resp-2",
        text: {
          en: "Architect scalable systems using modern frameworks and ensure high-quality, maintainable code standards.",
          es: "Arquitecto sistemas escalables usando frameworks modernos y aseguro estándares de código de alta calidad y mantenible.",
        },
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
    id: "walmart",
    title: {
      en: "Internal Applications Developer",
      es: "Desarrollador de Aplicaciones Internas",
    },
    company: "Walmart Inc.",
    location: "Cocoa, FL",
    period: { en: "2022 — Present", es: "2022 — Actualidad" },
    startDate: "2022-01-01",
    current: true,
    responsibilities: [
      {
        id: "walmart-resp-1",
        text: {
          en: "Build and maintain internal web applications used by store staff for daily operations.",
          es: "Desarrollo y mantengo aplicaciones web internas utilizadas por el personal de tienda para operaciones diarias.",
        },
      },
      {
        id: "walmart-resp-2",
        text: {
          en: "Streamline internal processes through custom web solutions, reducing manual steps in recurring tasks.",
          es: "Optimizo procesos internos mediante soluciones web a medida, reduciendo pasos manuales en tareas recurrentes.",
        },
      },
      {
        id: "walmart-resp-3",
        text: {
          en: "Provide technical support and continuous improvement for tools in active use, prioritizing stability and usability.",
          es: "Doy soporte técnico y mejora continua a las herramientas en uso, priorizando estabilidad y facilidad de uso.",
        },
      },
    ],
    technologies: [
      { name: "PHP", color: "#777BB4" },
      { name: "MySQL", color: "#4479A1" },
      { name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    id: "nesty-resp-3",
    title: {
      en: "Full-Stack Developer",
      es: "Desarrollador Full-Stack",
    },
    company: "Freelance",
    location: "Remote",
    period: { en: "Sept 2022 — Present", es: "Sept 2022 — Actualidad" },
    startDate: "2022-09-01",
    current: true,
    responsibilities: [
      {
        id: "nesty-resp-4",
        text: {
          en: "Develop and deploy modern web applications using React, Next.js, TypeScript, and Tailwind CSS.",
          es: "Desarrollo y despliego aplicaciones web modernas usando React, Next.js, TypeScript y Tailwind CSS.",
        },
      },
      {
        id: "nesty-resp-5",
        text: {
          en: "Implement responsive designs and ensure cross-browser compatibility for client websites.",
          es: "Implemento diseños responsivos y aseguro compatibilidad entre navegadores para sitios web de clientes.",
        },
      },
      {
        id: "freelance-resp-1",
        text: {
          en: "Create RESTful APIs and integrate third-party services to enhance application functionality.",
          es: "Creo APIs RESTful e integro servicios de terceros para mejorar la funcionalidad de las aplicaciones.",
        },
      },
      {
        id: "freelance-resp-2",
        text: {
          en: "Optimize website performance and implement SEO best practices to improve client visibility.",
          es: "Optimizo el rendimiento de sitios web e implemento mejores prácticas de SEO para mejorar la visibilidad del cliente.",
        },
      },
      {
        id: "freelance-resp-3",
        text: {
          en: "Collaborate directly with clients to gather requirements and deliver solutions that meet their business needs.",
          es: "Colaboro directamente con clientes para recopilar requisitos y entregar soluciones que satisfagan sus necesidades de negocio.",
        },
      },
      {
        id: "freelance-resp-4",
        text: {
          en: "Maintain and update existing websites, implementing new features and fixing bugs as needed.",
          es: "Mantengo y actualizo sitios web existentes, implementando nuevas características y corrigiendo errores según sea necesario.",
        },
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
    id: "freelance-resp-5",
    title: {
      en: "Freelancer, Web Development",
      es: "Freelancer, Desarrollo Web",
    },
    company: "Own Company",
    location: "Remote",
    period: { en: "May 2019 — Aug 2020", es: "Mayo 2019 — Ago 2020" },
    startDate: "2019-05-01",
    endDate: "2020-08-31",
    responsibilities: [
      {
        id: "freelance-resp-6",
        text: {
          en: "Assisted in the development and maintenance of the company's website.",
          es: "Asistí en el desarrollo y mantenimiento del sitio web de la empresa.",
        },
      },
      {
        id: "own-resp-1",
        text: {
          en: "Learned and applied modern web development technologies and best practices.",
          es: "Aprendí y apliqué tecnologías modernas de desarrollo web y mejores prácticas.",
        },
      },
      {
        id: "own-resp-2",
        text: {
          en: "Participated in daily stand-up meetings and sprint planning sessions.",
          es: "Participé en reuniones diarias de stand-up y sesiones de planificación de sprints.",
        },
      },
      {
        id: "own-resp-3",
        text: {
          en: "Gained experience in project management and client communication.",
          es: "Gané experiencia en gestión de proyectos y comunicación con clientes.",
        },
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
    id: "own-resp-4",
    title: {
      en: "Software Engineer",
      es: "Ingeniero de Software",
    },
    company: "IT Driver",
    location: "Remote",
    period: { en: "June 2017 — 2019", es: "Junio 2017 — 2019" },
    startDate: "2017-06-01",
    endDate: "2019-12-31",
    responsibilities: [
      {
        id: "itdriver-resp-1",
        text: {
          en: "Developed and maintained web applications using PHP, CSS, and MySQL.",
          es: "Desarrollé y mantuve aplicaciones web usando PHP, CSS y MySQL.",
        },
      },
      {
        id: "itdriver-resp-2",
        text: {
          en: "Collaborated with cross-functional teams to design and implement new features.",
          es: "Colaboré con equipos multifuncionales para diseñar e implementar nuevas características.",
        },
      },
      {
        id: "itdriver-resp-3",
        text: {
          en: "Participated in code reviews and pair programming to ensure code quality.",
          es: "Participé en revisiones de código y programación en pareja para asegurar la calidad del código.",
        },
      },
      {
        id: "itdriver-resp-4",
        text: {
          en: "Implemented automated testing and continuous integration/deployment workflows.",
          es: "Implementé pruebas automatizadas y flujos de trabajo de integración/despliegue continuo.",
        },
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

// Helper function to get experiences with current language
export const getExperiences = (language: Language = "en"): WorkExperience[] => {
  return experiencesData.map((experience) => ({
    ...experience,
    title: experience.title[language],
    period: experience.period[language],
    responsibilities: experience.responsibilities.map((responsibility) => ({
      ...responsibility,
      text: responsibility.text[language],
    })),
  }));
};

// Export experiences with default English language for backward compatibility
export const experiences: WorkExperience[] = getExperiences("en");
