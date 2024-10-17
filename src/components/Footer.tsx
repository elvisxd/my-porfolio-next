'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

const contactInfo = [
  { icon: Mail, text: 'elvisreyxd@gmail.com', href: 'mailto:elvisreyxd@gmail.com' },
  { icon: Phone, text: '+1 (407) 437-9559', href: 'tel:+14074379559' },
  { icon: Github, text: 'GitHub', href: 'https://github.com/elvisxd/elvisxd' },
  { icon: Linkedin, text: 'LinkedIn', href: 'https://www.linkedin.com/in/elvis-pino-b358b2127/' },
]

export default function Footer() {
  return (
    <motion.footer 
      className="bg-muted py-8 text-muted-foreground"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Elvis Pino</h3>
            <p className="text-sm max-w-xs">Full-stack developer passionate about creating intuitive and efficient web applications.</p>
          </div>
          <div className="grid gap-4 text-sm">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
                <Link 
                  href={item.href}
                  target={item.icon !== Phone && item.icon !== Mail ? "_blank" : undefined}
                  rel={item.icon !== Phone && item.icon !== Mail ? "noopener noreferrer" : undefined}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm">
          &copy; {new Date().getFullYear()} Elvis Pino. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}