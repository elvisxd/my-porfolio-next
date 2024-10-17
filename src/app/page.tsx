'use client'

import React from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import Projects from '@/components/Proyects'
import WorkExperience from '@/components/WorkExperience'
import Studies from '@/components/Studies'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-background opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <section id="about" className="py-16 sm:py-24">
            <About />
          </section>
          <section id="experience" className="py-16 sm:py-24 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg">
            <WorkExperience />
          </section>
          <section id="projects" className="py-16 sm:py-24">
            <Projects />
          </section>
          <section id="Studies" className="py-16 sm:py-24 bg-background/50 backdrop-blur-sm rounded-lg shadow-lg">
            <Studies />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}