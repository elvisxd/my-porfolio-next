import imageApp1 from "@/assets/appphoto2.png";
import imageCalot from "@/assets/calot.png";
import imageEcommerceWeb from "@/assets/eccomerce.png";
import imageFinancepro from "@/assets/financepro-landing-page.png";
import imageGeminiChat from "@/assets/gemini-chat-app.png";
import imageNestjsApi from "@/assets/NestJS-API-Railway-Deployment.png";
import imageQrGenerator from "@/assets/qr-generator.png";
import imageWeatherApp from "@/assets/weatherApp.png";
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "mobile-app-nestjs",
    title: "Mobile App - NestJS Backend",
    description:
      "A comprehensive mobile application built with React Native and Expo, featuring a robust NestJS backend. The app includes Google Sign-In authentication through Firebase, real-time data synchronization with Supabase, and a modern user interface. Built with TypeScript for type safety and Axios for HTTP requests, this application demonstrates full-stack mobile development with enterprise-level architecture. The project utilizes Android Studio for development and testing, with proper pod management for iOS compatibility.",
    shortDescription:
      "A full-stack mobile app with React Native, NestJS backend, and Firebase authentication.",
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
    liveLink: "#",
    codeLink: "#",
    status: "In Progress",
    featured: true,
    createdAt: "2025-07-01",
  },
  {
    id: "nestjs-api",
    title: "NestJS REST API",
    description:
      "A robust and scalable REST API built with NestJS and PostgreSQL. This API features comprehensive CRUD operations, authentication, data validation, and follows best practices for enterprise-level applications. The application is deployed on Railway with PostgreSQL database integration, offering high performance and reliability. Built with TypeScript for type safety and includes automated testing, API documentation with Swagger, and proper error handling.",
    shortDescription:
      "A scalable REST API built with NestJS, PostgreSQL, and deployed on Railway.",
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
    title: "Modern E-Commerce Store",
    description:
      "A fully-featured e-commerce platform built with modern web technologies. This application offers a seamless shopping experience with features like product browsing, cart management, secure checkout, and order tracking. The platform leverages Supabase for backend functionality, Vercel Blob for image optimization and storage, and is styled with Tailwind CSS for a responsive and attractive UI. The application includes user authentication, product filtering, reviews, and an admin dashboard for store management.",
    shortDescription:
      "A modern e-commerce platform with seamless shopping experience and comprehensive management tools.",
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
    title: "FinancePro - Beta Version",
    description:
      "FinancePro is a financial management platform that helps users track their income, expenses, and investments. With a user-friendly interface and powerful features, FinancePro makes it easy to manage your finances and achieve your financial goals. The platform offers tools for budgeting, expense tracking, investment analysis, and more. Whether you're a beginner or an experienced investor, FinancePro has everything you need to take control of your finances.",
    shortDescription:
      "A comprehensive financial management platform for tracking income, expenses, and investments.",
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
    title: "Calot",
    description:
      "A comprehensive platform for renting and selling properties. This website offers a wide range of real estate listings, including apartments, houses, and commercial properties. With user-friendly search filters and detailed property descriptions, finding your next home or investment has never been easier. Trusted by thousands of users, we provide reliable and up-to-date information to help you make informed decisions. Explore our listings today and discover your perfect property.",
    shortDescription:
      "A real estate platform for renting and selling properties with detailed listings and search filters.",
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
    title: "Gemini Chat App",
    description:
      "A free and open-source chat app built using React and Tailwind CSS. This app allows users to create and join chat rooms, send messages, and view chat history. It also features a user authentication system, allowing users to sign up and log in to their accounts. The app is designed to be highly customizable, with options for changing the color scheme, font size, and other visual elements. It is also responsive, meaning it can be used on different devices and screen sizes.",
    shortDescription:
      "An open-source chat application with room creation, messaging, and user authentication.",
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
    title: "QR Generator",
    description:
      "A free platform for generating QR codes. This tool is built from scratch using Html, JavaScript and Css. It offers an easy-to-use interface for creating custom QR codes for various purposes, including URLs, contact information, and more.",
    shortDescription:
      "A simple tool for generating custom QR codes for various purposes.",
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
    title: "Weather App",
    description:
      "A comprehensive Weather App that provides real-time weather updates and forecasts. Built using React and TailwindCSS, this app offers a sleek and responsive interface. Users can search for weather information by city and view detailed weather conditions, including temperature, humidity, wind speed, and more. The app also features a dynamic background that changes based on the current weather conditions.",
    shortDescription:
      "A weather application providing real-time updates and forecasts with a dynamic interface.",
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

export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();

  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      techSet.add(tech.name);
    });
  });

  return Array.from(techSet).sort();
};
