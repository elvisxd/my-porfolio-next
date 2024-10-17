'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react'

const experiences = [
  {
    title: "Software Engineer",
    company: "IT Driver",
    period: "June 2017 - 2019",
    responsibilities: [
      "Developed and maintained web applications using PHP, CSS, and MySQL.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Participated in code reviews and pair programming to ensure code quality.",
      "Implemented automated testing and continuous integration/deployment workflows."
    ]
  },
  {
    title: "Freelancer, Web Development",
    company: "Own Company",
    period: "May 2019 - August 2020",
    responsibilities: [
      "Assisted in the development and maintenance of the company's website.",
      "Learned and applied modern web development technologies and best practices.",
      "Participated in daily stand-up meetings and sprint planning sessions.",
      "Gained experience in project management and client communication."
    ]
  },
  {
    title: "Lift Driver",
    company: "Walmart DC Warehouse 8851",
    period: "June 2021 - Present",
    responsibilities: [
      "Order Filler, Loader, and Lift Driver.",
      "Responsible for moving pallets with a forklift, loading and unloading trucks with merchandise for distribution.",
      "Additionally, tasked with replacing slots with new pallets and ensuring the workspace is clean and safe for free transit.",
      "Volunteered for the hazmat team."
    ]
  }
]

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            Work Experience
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Professional Journey</h2>
          <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base">
            Explore my career path and the valuable experiences I&apos;ve gained along the way.
          </p>
        </motion.div>
        <div className="mt-12 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 flex flex-col sm:flex-row items-start sm:even:flex-row-reverse relative"
            >
              <div className="flex items-center sm:w-1/2 mb-4 sm:mb-0">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10 absolute left-0 sm:left-1/2 transform -translate-x-1/2">
                  <Briefcase size={16} className="text-primary-foreground" />
                </div>
              </div>
              <Card className={`w-full sm:w-5/12 transition-all hover:shadow-lg ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-bold">{exp.title}</CardTitle>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">{exp.company}</p>
                  <Badge variant="outline" className="mt-2 text-xs sm:text-sm">
                    {exp.period}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <AnimatePresence initial={false}>
                    {expandedIndex === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-2"
                      >
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="text-xs sm:text-sm text-muted-foreground flex items-start"
                          >
                            <span className="mr-2 mt-1 text-primary">•</span>
                            {resp}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(index)}
                    className="mt-4 w-full justify-between"
                  >
                    {expandedIndex === index ? (
                      <>
                        Show Less <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        Show More <ChevronDown size={16} />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}