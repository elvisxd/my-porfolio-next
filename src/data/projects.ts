import imageApp1 from "@/assets/foto-app-ios.png";
import imageCalot from "@/assets/calot.png";
import imageEcommerceWeb from "@/assets/eccomerce.png";
import imageFinancepro from "@/assets/financepro-landing-page.png";
import imageGeminiChat from "@/assets/gemini-chat-app.png";
import imageNestjsApi from "@/assets/NestJS-API-Railway-Deployment.png";
import imageQrGenerator from "@/assets/qr-generator.png";
import imageWeatherApp from "@/assets/weatherApp.png";
import type { Project } from "@/types/project";

type Language = "en" | "es";

interface TranslatableProject
  extends Omit<Project, "title" | "description" | "shortDescription"> {
  title: Record<Language, string>;
  description: Record<Language, string>;
  shortDescription: Record<Language, string>;
}

const projectsData: TranslatableProject[] = [
  {
    id: "trading-platform",
    title: {
      en: "Algorithmic Trading Platform — Applied AI",
      es: "Plataforma de Trading Algorítmico — IA Aplicada",
    },
    description: {
      en: "Independently built and operated research and execution system, and my most complete work in applied AI, data engineering and real-time systems. It integrates Google Gemini through a custom REST client with timeout control, temperature tuning and token budgeting, running five specialized prompts across three services with graceful degradation — when the model fails, the product keeps operating without the AI layer. I wrote backtest scripts that measure whether each criterion sent in the prompt carries real predictive information, and removed the ones that did not. After measuring ~25 technical signals, I established the core architecture: the LLM does not predict, it explains numbers already computed in code. The predictive layer is a weighted voting ensemble over 5 features with a net consensus threshold and a 72-hour horizon, validated with permutation testing, Bonferroni correction and out-of-sample splits. The system persists every model reading and verifies its accuracy against real price data every 10 minutes.",
      es: "Sistema propio de investigación y ejecución que construyo y opero de forma independiente, y mi trabajo más completo en IA aplicada, ingeniería de datos y sistemas en tiempo real. Integra Google Gemini mediante un cliente REST propio con control de timeout, temperatura y presupuesto de tokens, ejecutando cinco prompts especializados en tres servicios con degradación elegante: si el modelo falla, el producto sigue operando sin la capa de IA. Escribí scripts de backtest que miden si cada criterio enviado en el prompt aporta información predictiva real, y eliminé los que no aportaban. Tras medir ~25 señales técnicas, establecí la arquitectura central: el LLM no predice, explica números ya calculados en código. La capa predictiva es un ensemble de votación ponderada sobre 5 features con umbral de consenso neto y horizonte de 72 horas, validado con test de permutación, corrección de Bonferroni y partición out-of-sample. El sistema persiste cada lectura del modelo y verifica su acierto contra precios reales cada 10 minutos.",
    },
    shortDescription: {
      en: "283k lines of TypeScript. LLM integration, a validated predictive ensemble (+1.29% edge out-of-sample) and AI observability in production.",
      es: "283k líneas de TypeScript. Integración de LLM, ensemble predictivo validado (+1.29% edge out-of-sample) y observabilidad de IA en producción.",
    },
    imageSrc: "/assets/trading-platform.png",
    technologies: [
      { name: "Next.js 15", color: "#000000" },
      { name: "React 19", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Redis", color: "#DC382D" },
      { name: "Google Gemini API", color: "#8E75B2" },
      { name: "Railway", color: "#0B0D0E" },
    ],
    liveLink: "",
    codeLink: "",
    status: "In Progress",
    featured: true,
    createdAt: "2026-04-22",
  },
  {
    id: "mobile-app-nestjs",
    title: {
      en: "Mobile App - NestJS Backend",
      es: "App Móvil - Backend NestJS",
    },
    description: {
      en: "A comprehensive mobile application built with React Native and Expo, featuring a robust NestJS backend. The app includes Google Sign-In authentication through Firebase, real-time data synchronization with Supabase, and a modern user interface. Built with TypeScript for type safety and Axios for HTTP requests, this application demonstrates full-stack mobile development with enterprise-level architecture. The project utilizes Android Studio for development and testing, with proper pod management for iOS compatibility.",
      es: "Una aplicación móvil integral construida con React Native y Expo, que incluye un robusto backend de NestJS. La aplicación incluye autenticación Google Sign-In a través de Firebase, sincronización de datos en tiempo real con Supabase y una interfaz de usuario moderna. Construida con TypeScript para seguridad de tipos y Axios para solicitudes HTTP, esta aplicación demuestra el desarrollo móvil full-stack con arquitectura de nivel empresarial. El proyecto utiliza Android Studio para desarrollo y pruebas, con gestión adecuada de pods para compatibilidad con iOS.",
    },
    shortDescription: {
      en: "A full-stack mobile app with React Native, NestJS backend, and Firebase authentication.",
      es: "Una app móvil full-stack con React Native, backend NestJS y autenticación Firebase.",
    },
    imageSrc: imageApp1.src as unknown as string,
    technologies: [
      { name: "React Native", color: "#61DAFB" },
      { name: "Expo", color: "#000020" },
      { name: "NestJS", color: "#E0234E" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Axios", color: "#5A29E4" },
      { name: "Android Studio", color: "#3DDC84" },
    ],
    liveLink: "https://apps.apple.com/kz/app/go190-store/id6748661767",
    codeLink: "#",
    status: "Completed",
    featured: true,
    createdAt: "2025-07-01",
  },
  {
    id: "nestjs-api",
    title: {
      en: "NestJS REST API",
      es: "API REST NestJS",
    },
    description: {
      en: "A robust and scalable REST API built with NestJS and PostgreSQL. This API features comprehensive CRUD operations, authentication, data validation, and follows best practices for enterprise-level applications. The application is deployed on Railway with PostgreSQL database integration, offering high performance and reliability. Built with TypeScript for type safety and includes automated testing, API documentation with Swagger, and proper error handling.",
      es: "Una API REST robusta y escalable construida con NestJS y PostgreSQL. Esta API incluye operaciones CRUD completas, autenticación, validación de datos y sigue las mejores prácticas para aplicaciones de nivel empresarial. La aplicación está desplegada en Railway con integración de base de datos PostgreSQL, ofreciendo alto rendimiento y confiabilidad. Construida con TypeScript para seguridad de tipos e incluye pruebas automatizadas, documentación de API con Swagger y manejo adecuado de errores.",
    },
    shortDescription: {
      en: "A scalable REST API built with NestJS, PostgreSQL, and deployed on Railway.",
      es: "Una API REST escalable construida con NestJS, PostgreSQL y desplegada en Railway.",
    },
    imageSrc: imageNestjsApi.src as unknown as string,
    technologies: [
      { name: "NestJS", color: "#E0234E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Railway", color: "#0B0D0E" },
      { name: "Swagger", color: "#85EA2D" },
    ],
    liveLink: "https://restapi-production-ac90.up.railway.app/",
    codeLink: "#",
    status: "Completed",
    featured: true,
    createdAt: "2025-06-12",
  },
  {
    id: "ecommerce-store",
    title: {
      en: "Modern E-Commerce Store",
      es: "Tienda E-Commerce Moderna",
    },
    description: {
      en: "A fully-featured e-commerce platform built with modern web technologies. This application offers a seamless shopping experience with features like product browsing, cart management, secure checkout, and order tracking. The platform leverages Supabase for backend functionality, Vercel Blob for image optimization and storage, and is styled with Tailwind CSS for a responsive and attractive UI. The application includes user authentication, product filtering, reviews, and an admin dashboard for store management.",
      es: "Una plataforma de comercio electrónico completa construida con tecnologías web modernas. Esta aplicación ofrece una experiencia de compra fluida con características como navegación de productos, gestión de carrito, checkout seguro y seguimiento de pedidos. La plataforma aprovecha Supabase para funcionalidad backend, Vercel Blob para optimización y almacenamiento de imágenes, y está estilizada con Tailwind CSS para una UI responsiva y atractiva. La aplicación incluye autenticación de usuarios, filtrado de productos, reseñas y un dashboard de administración para gestión de tienda.",
    },
    shortDescription: {
      en: "A modern e-commerce platform with seamless shopping experience and comprehensive management tools.",
      es: "Una plataforma de e-commerce moderna con experiencia de compra fluida y herramientas de gestión integral.",
    },
    imageSrc: imageEcommerceWeb.src as unknown as string,
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Supabase", color: "#3ECF8E" },
      { name: "Vercel Blob", color: "#000000" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
    liveLink: "https://my-ecommerce-app-delta.vercel.app/",
    codeLink: "#",
    status: "Completed",
    featured: true,
    createdAt: "2025-05-02",
  },
  {
    id: "financepro",
    title: {
      en: "FinancePro - Beta Version",
      es: "FinancePro - Versión Beta",
    },
    description: {
      en: "FinancePro is a financial management platform that helps users track their income, expenses, and investments. With a user-friendly interface and powerful features, FinancePro makes it easy to manage your finances and achieve your financial goals. The platform offers tools for budgeting, expense tracking, investment analysis, and more. Whether you're a beginner or an experienced investor, FinancePro has everything you need to take control of your finances.",
      es: "FinancePro es una plataforma de gestión financiera que ayuda a los usuarios a rastrear sus ingresos, gastos e inversiones. Con una interfaz fácil de usar y características poderosas, FinancePro facilita la gestión de tus finanzas y el logro de tus objetivos financieros. La plataforma ofrece herramientas para presupuestos, seguimiento de gastos, análisis de inversiones y más. Ya seas principiante o un inversionista experimentado, FinancePro tiene todo lo que necesitas para tomar control de tus finanzas.",
    },
    shortDescription: {
      en: "A comprehensive financial management platform for tracking income, expenses, and investments.",
      es: "Una plataforma integral de gestión financiera para rastrear ingresos, gastos e inversiones.",
    },
    imageSrc: imageFinancepro.src as unknown as string,
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Vercel", color: "#000000" },
    ],
    liveLink: "https://financepro-iota.vercel.app/",
    codeLink: "#",
    status: "Beta",
    featured: true,
    createdAt: "2024-09-15",
  },
  {
    id: "calot",
    title: {
      en: "Calot",
      es: "Calot",
    },
    description: {
      en: "A comprehensive platform for renting and selling properties. This website offers a wide range of real estate listings, including apartments, houses, and commercial properties. With user-friendly search filters and detailed property descriptions, finding your next home or investment has never been easier. Trusted by thousands of users, we provide reliable and up-to-date information to help you make informed decisions. Explore our listings today and discover your perfect property.",
      es: "Una plataforma integral para alquilar y vender propiedades. Este sitio web ofrece una amplia gama de listados inmobiliarios, incluyendo apartamentos, casas y propiedades comerciales. Con filtros de búsqueda fáciles de usar y descripciones detalladas de propiedades, encontrar tu próximo hogar o inversión nunca ha sido más fácil. Confiados por miles de usuarios, proporcionamos información confiable y actualizada para ayudarte a tomar decisiones informadas. Explora nuestros listados hoy y descubre tu propiedad perfecta.",
    },
    shortDescription: {
      en: "A real estate platform for renting and selling properties with detailed listings and search filters.",
      es: "Una plataforma inmobiliaria para alquilar y vender propiedades con listados detallados y filtros de búsqueda.",
    },
    imageSrc: imageCalot.src as unknown as string,
    technologies: [
      { name: "PHP", color: "#777BB4" },
      { name: "CSS", color: "#1572B6" },
      { name: "MySQL", color: "#4479A1" },
    ],
    liveLink: "https://www.calot.com.ar/",
    codeLink: "#",
    status: "Completed",
    createdAt: "2019-06-20",
  },
  {
    id: "gemini-chat",
    title: {
      en: "Chat UI",
      es: "Interfaz de Chat",
    },
    description: {
      en: "A free and open-source chat app built using React and Tailwind CSS. This app allows users to create and join chat rooms, send messages, and view chat history. It also features a user authentication system, allowing users to sign up and log in to their accounts. The app is designed to be highly customizable, with options for changing the color scheme, font size, and other visual elements. It is also responsive, meaning it can be used on different devices and screen sizes.",
      es: "Una aplicación de chat gratuita y de código abierto construida con React y Tailwind CSS. Esta aplicación permite a los usuarios crear y unirse a salas de chat, enviar mensajes y ver el historial de chat. También cuenta con un sistema de autenticación de usuarios, permitiendo a los usuarios registrarse e iniciar sesión en sus cuentas. La aplicación está diseñada para ser altamente personalizable, con opciones para cambiar el esquema de colores, tamaño de fuente y otros elementos visuales. También es responsiva, lo que significa que puede usarse en diferentes dispositivos y tamaños de pantalla.",
    },
    shortDescription: {
      en: "A chat interface with room creation, messaging, authentication and theming.",
      es: "Una interfaz de chat con creación de salas, mensajería, autenticación y personalización de tema.",
    },
    imageSrc: imageGeminiChat.src as unknown as string,
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Vercel", color: "#000000" },
    ],
    liveLink: "https://gemini-chat-app-three.vercel.app/",
    codeLink: "#",
    status: "Completed",
    featured: true,
    createdAt: "2023-03-10",
  },
  {
    id: "qr-generator",
    title: {
      en: "QR Generator",
      es: "Generador de QR",
    },
    description: {
      en: "A free platform for generating QR codes. This tool is built from scratch using Html, JavaScript and Css. It offers an easy-to-use interface for creating custom QR codes for various purposes, including URLs, contact information, and more.",
      es: "Una plataforma gratuita para generar códigos QR. Esta herramienta está construida desde cero usando HTML, JavaScript y CSS. Ofrece una interfaz fácil de usar para crear códigos QR personalizados para varios propósitos, incluyendo URLs, información de contacto y más.",
    },
    shortDescription: {
      en: "A simple tool for generating custom QR codes for various purposes.",
      es: "Una herramienta simple para generar códigos QR personalizados para varios propósitos.",
    },
    imageSrc: imageQrGenerator.src as unknown as string,
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Vercel", color: "#000000" },
    ],
    liveLink: "https://qr-generator-pp31.vercel.app/",
    codeLink: "https://github.com/elvisxd/qr-generator",
    status: "Completed",
    createdAt: "2022-11-05",
  },
  {
    id: "weather-app",
    title: {
      en: "Weather App",
      es: "App del Clima",
    },
    description: {
      en: "A comprehensive Weather App that provides real-time weather updates and forecasts. Built using React and TailwindCSS, this app offers a sleek and responsive interface. Users can search for weather information by city and view detailed weather conditions, including temperature, humidity, wind speed, and more. The app also features a dynamic background that changes based on the current weather conditions.",
      es: "Una aplicación de clima integral que proporciona actualizaciones meteorológicas en tiempo real y pronósticos. Construida usando React y TailwindCSS, esta aplicación ofrece una interfaz elegante y responsiva. Los usuarios pueden buscar información meteorológica por ciudad y ver condiciones climáticas detalladas, incluyendo temperatura, humedad, velocidad del viento y más. La aplicación también cuenta con un fondo dinámico que cambia según las condiciones climáticas actuales.",
    },
    shortDescription: {
      en: "A weather application providing real-time updates and forecasts with a dynamic interface.",
      es: "Una aplicación del clima que proporciona actualizaciones en tiempo real y pronósticos con interfaz dinámica.",
    },
    imageSrc: imageWeatherApp.src as unknown as string,
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Vercel", color: "#000000" },
    ],
    liveLink: "https://weather-app-one-sepia-34.vercel.app/",
    codeLink: "https://github.com/elvisxd/weather-app",
    status: "Completed",
    createdAt: "2022-08-15",
  },
];

// Helper function to get projects with current language
export const getProjects = (language: Language = "en"): Project[] => {
  return projectsData.map((project) => ({
    ...project,
    title: project.title[language],
    description: project.description[language],
    shortDescription: project.shortDescription[language],
  }));
};

// Export projects with default English language for backward compatibility
export const projects: Project[] = getProjects("en");

export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();

  projectsData.forEach((project) => {
    project.technologies.forEach((tech) => {
      techSet.add(tech.name);
    });
  });

  return Array.from(techSet).sort();
};
