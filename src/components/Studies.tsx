'use client'

import React from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Brush, Code, PuzzleIcon, ExternalLink } from 'lucide-react'

const educationItems = [
  {
    icon: BookOpen,
    title: "Bachelor of Computer Science",
    institution: "Maria Auxiliadora II, Venezuela",
    description: "Graduated with a degree in Computer Science.",
    link: null
  },
  {
    icon: Award,
    title: "Graduated Systems Engineer",
    institution: "Unimar, Venezuela",
    description: "Graduated with a degree in Systems Engineering.",
    link: "https://portalunimar.unimar.edu.ve/home"
  },
  {
    icon: Brush,
    title: "Front-End Design Specialization",
    institution: "Coursera",
    description: "Currently working on this specialization course.",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer?"
  },
  {
    icon: Code,
    title: "Meta Advanced React Certificate",
    institution: "Coursera",
    description: "Completed the Advanced React course.",
    link: "https://www.coursera.org/account/accomplishments/verify/9UXAD93Z6TDJ"
  },
  {
    icon: PuzzleIcon,
    title: "Meta React Basics Certificate",
    institution: "Coursera",
    description: "Earned the Meta React Basics Certificate.",
    link: "https://www.coursera.org/account/accomplishments/verify/W852TWECIXYB"
  },
  {
    icon: Code,
    title: "Introduction to Back-End Development",
    institution: "Coursera",
    description: "Completed the Introduction to Back-End Development course.",
    link: "https://www.coursera.org/account/accomplishments/verify/FYCE14Q2I9Y3"
  }
]

export default function StudiesAndCertificates() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted to-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            Studies & Certificates
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Educational Journey</h2>
          <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base">
            Explore the various studies and certificates I&apos;ve completed to enhance my expertise in software development and design.
          </p>
        </motion.div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {educationItems.map((item, index) => (
            <EducationCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface EducationCardProps {
  icon: React.ElementType
  title: string
  institution: string
  description: string
  link: string | null
  index: number
}

function EducationCard({ icon: Icon, title, institution, description, link, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="rounded-md bg-primary p-3 text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-medium text-muted-foreground mb-2">{institution}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
          {link && (
            <Link 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-sm font-medium text-primary hover:underline"
            >
              View Certificate
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}