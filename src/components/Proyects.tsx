'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { EyeIcon, GithubIcon, ChevronDown, ChevronUp } from 'lucide-react'

import calotimg from '@/assets/calot.png'
import qrimg from '@/assets/qr-generator.png'
import weatherimg from '@/assets/weatherApp.png'
import financeimg from '@/assets/financepro-landing-page.png'
import imgIA from '@/assets/gemini-chat-app.png'

const projects = [
  {
    imageSrc: financeimg.src,
    title: "FinancePro - Beta Version",
    description: "FinancePro is a financial management platform that helps users track their income, expenses, and investments. With a user-friendly interface and powerful features, FinancePro makes it easy to manage your finances and achieve your financial goals. The platform offers tools for budgeting, expense tracking, investment analysis, and more. Whether you're a beginner or an experienced investor, FinancePro has everything you need to take control of your finances.",
    badges: ['Next JS','React JS','Postgressql', 'Tailwindcss', 'Vercel'],
    liveLink: "https://financepro-iota.vercel.app/",
    codeLink: "#"
  },
  {
    imageSrc: calotimg.src,
    title: "Calot",
    description: "A comprehensive platform for renting and selling properties. This website offers a wide range of real estate listings, including apartments, houses, and commercial properties. With user-friendly search filters and detailed property descriptions, finding your next home or investment has never been easier. Trusted by thousands of users, we provide reliable and up-to-date information to help you make informed decisions. Explore our listings today and discover your perfect property.",
    badges: ['PHP','Css', 'Mysql'],
    liveLink: "https://www.calot.com.ar/",
    codeLink: "#"
  },
  {
    imageSrc: imgIA.src,
    title: 'Gemini Chat App',
    description: 'A free and open-source chat app built using React and Tailwind CSS. This app allows users to create and join chat rooms, send messages, and view chat history. It also features a user authentication system, allowing users to sign up and log in to their accounts. The app is designed to be highly customizable, with options for changing the color scheme, font size, and other visual elements. It is also responsive, meaning it can be used on different devices and screen sizes.',
    badges: ['Next JS','React', 'Tailwindcss', 'Vercel'],
    liveLink: "https://gemini-chat-app-three.vercel.app/",
    codeLink: "#"
  },
  {
    imageSrc: qrimg.src,
    title: "Qr Generator",
    description: "A free platform for generating QR codes. This tool is built from scratch using Html, JavaScript and Css. It offers an easy-to-use interface for creating custom QR codes for various purposes, including URLs, contact information, and more.",
    badges: ['React', 'Tailwindcss', 'Vercel'],
    liveLink: "https://qr-generator-pp31.vercel.app/",
    codeLink: "https://github.com/elvisxd/qr-generator"
  },
  {
    imageSrc: weatherimg.src,
    title: "Weather App",
    description: "A comprehensive Weather App that provides real-time weather updates and forecasts. Built using React and TailwindCSS, this app offers a sleek and responsive interface. Users can search for weather information by city and view detailed weather conditions, including temperature, humidity, wind speed, and more. The app also features a dynamic background that changes based on the current weather conditions.",
    badges: ['React', 'Tailwindcss', 'Vercel'],
    liveLink: "https://weather-app-one-sepia-34.vercel.app/",
    codeLink: "https://github.com/elvisxd/weather-app"
  }
]

export default function Projects() {
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
            Projects
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Work</h2>
          <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base">
            Explore a selection of my projects, showcasing my skills and experience in web development.
          </p>
        </motion.div>
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  imageSrc: string
  title: string
  description: string
  badges: string[]
  liveLink: string
  codeLink: string
}

function ProjectCard({ imageSrc, title, description, badges, liveLink, codeLink }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {isExpanded ? description : `${description.substring(0, 100)}...`}
          </p>
          <Button variant="link" size="sm" onClick={toggleExpand} className="mt-2 p-0">
            {isExpanded ? (
              <>Show less <ChevronUp className="ml-1 h-4 w-4" /></>
            ) : (
              <>Show more <ChevronDown className="ml-1 h-4 w-4" /></>
            )}
          </Button>
          <div className="flex flex-wrap gap-2 mt-4">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline" size="sm">
            <Link href={liveLink} target="_blank" rel="noopener noreferrer">
              <EyeIcon className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={codeLink} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              View Code
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}