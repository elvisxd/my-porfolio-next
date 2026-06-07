"use client";

import { useEffect } from "react";
// import Header from "@/components/Header";
import AboutMe from "@/components/About";
import Projects from "@/components/Proyects";
import WorkExperience from "@/components/WorkExperience";
import StudiesAndCertificates from "@/components/studies-and-certificates";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useAnimation } from "framer-motion";

// Intersection observer for section animations
function SectionObserver() {
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  return null;
}

export default function Home() {
  return (
    <>
      <SectionObserver />

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col items-stretch w-full">
          {/* Hero Section */}
          <HeroSection />

          {/* Content Sections */}
          <div className="w-full px-1 sm:px-2 lg:px-4">
            <section id="about" className="scroll-mt-20 py-4 md:py-4">
              <AboutMe />
            </section>

            <section id="experience" className="scroll-mt-20 py-4 md:py-4">
              <WorkExperience />
            </section>

            <section id="projects" className="scroll-mt-20 py-4 md:py-4">
              <Projects />
            </section>

            <section id="Studies" className="scroll-mt-20 py-4 md:py-4">
              <StudiesAndCertificates />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
