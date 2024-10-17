'use client'

import React, { useState } from 'react'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ChevronDown, ChevronUp } from "lucide-react"
import meavatar from '@/assets/me1.jpg'

const skills = [
  { name: "JavaScript", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Python", level: "Intermediate" },
  { name: "SQL", level: "Advanced" },
  { name: "Git", level: "Expert" },
  { name: "AWS", level: "Intermediate" },
  { name: "Docker", level: "Intermediate" },
  { name: "HTML", level: "Expert" },
  { name: "CSS", level: "Advanced" },
  { name: "Vue", level: "Intermediate" },
  { name: "Next.js", level: "Advanced" },
  { name: "GraphQL", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Redux", level: "Advanced" },
  { name: "Jest", level: "Advanced" },
  { name: "Webpack", level: "Intermediate" }
]

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const displayedSkills = isExpanded ? skills : skills.slice(0, 9)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-background via-muted to-background">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-12 items-center"
        >
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={meavatar.src}
                alt="Elvis Pino"
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 hover:scale-105"
              />
            </div>
          </Card>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Elvis Pino
              </h1>
              <p className="text-muted-foreground text-xl mt-2">Full-stack Developer</p>
            </div>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m a passionate full-stack developer with a strong background in JavaScript, React, and Node.js. 
                  With a keen eye for design and a love for creating intuitive user experiences, I specialize in building 
                  scalable and maintainable web applications. My journey in tech is driven by an insatiable curiosity and 
                  a commitment to staying at the forefront of emerging technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  When I&apos;m not coding, you can find me exploring new hiking trails, experimenting with new recipes in the 
                  kitchen, or diving into a good book on software architecture and design patterns.
                </p>
              </CardContent>
            </Card>
            <div>
              <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                <AnimatePresence>
                  {displayedSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Badge 
                              variant="secondary" 
                              className="w-full justify-center py-2 px-3 text-sm cursor-pointer transition-colors hover:bg-secondary/80"
                            >
                              {skill.name}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.level}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              {skills.length > 9 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleExpand}
                  className="mt-4 w-full"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Show More <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}