'use client'
import React, { useState } from 'react';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import calotimg from '@/assets/calot.png'
import qrimg from '@/assets/qr-generator.png'
import weatherimg from '@/assets/weatherApp.png'
import financeimg from '@/assets/financepro.png'
import { Badge } from "@/components/ui/badge"
import imgIA from '@/assets/gemini-chat-app.png'
import Image from 'next/image';

export default function Component() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-10">
        <div className="container grid items-center gap-10 px-4 md:px-6 lg:ml-20 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
          </div>
          </div>
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:p-6 lg:ml-20 lg:mr-20">

    <ProjectCard
        imageSrc={calotimg.src}
        title="Calot"
        description="A comprehensive platform for renting and selling properties. This website offers a wide range of real estate listings, including apartments, houses, and commercial properties. With user-friendly search filters and detailed property descriptions, finding your next home or investment has never been easier. Trusted by thousands of users, we provide reliable and up-to-date information to help you make informed decisions. Explore our listings today and discover your perfect property."
        badges={['PHP','Css', 'Mysql']}
        liveLink="https://www.calot.com.ar/"
        codeLink="#"
      />
      <ProjectCard 
      imageSrc={imgIA.src}
      title='Gemini Chat App'
      description='A free and open-source chat app built using React and Tailwind CSS. This app allows users to create and join chat rooms, send messages, and view chat history. It also features a user authentication system, allowing users to sign up and log in to their accounts. The app is designed to be highly customizable, with options for changing the color scheme, font size, and other visual elements. It is also responsive, meaning it can be used on different devices and screen sizes.'
      badges={['Next JS','React', 'Tailwindcss', 'Vercel']}
      liveLink="https://gemini-chat-app-three.vercel.app/"
      codeLink="#"
      />
      <ProjectCard
        imageSrc={qrimg.src}
        title="Qr Generator"
        description=" A free platform for generating QR codes.This tool is built from scratch using Html, JavaScript and Css. It offers an easy-to-use interface for creating custom QR codes for various purposes, including URLs, contact information, and more."
        badges={['React', 'Tailwindcss', 'Vercel']}
        liveLink="https://qr-generator-pp31.vercel.app/"
        codeLink="https://github.com/elvisxd/qr-generator"
      />
        <ProjectCard
        imageSrc={weatherimg.src}
        title="Weather App"
        description="A comprehensive Weather App that provides real-time weather updates and forecasts. Built using React and TailwindCSS, this app offers a sleek and responsive interface. Users can search for weather information by city and view detailed weather conditions, including temperature, humidity, wind speed, and more. The app also features a dynamic background that changes based on the current weather conditions."
        badges={['React', 'Tailwindcss', 'Vercel']}
        liveLink="https://weather-app-one-sepia-34.vercel.app/"
        codeLink="https://github.com/elvisxd/weather-app"
      />
       <ProjectCard
        imageSrc={financeimg.src}
        title="FinancePro - Current working on it"
        description="FinancePro is a financial management platform that helps users track their income, expenses, and investments. With a user-friendly interface and powerful features, FinancePro makes it easy to manage your finances and achieve your financial goals. The platform offers tools for budgeting, expense tracking, investment analysis, and more. Whether you're a beginner or an experienced investor, FinancePro has everything you need to take control of your finances."
        badges={['Next JS', 'Tailwindcss', 'Vercel']}
        liveLink="#"
        codeLink="#"
      />
    </section>
    </div>
  )
}

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
  badges: string[];
  liveLink: string;
  codeLink: string;
}

function ProjectCard({ imageSrc, title, description, badges, liveLink, codeLink }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
    
    return (
      <div className="relative overflow-hidden rounded-lg group">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className="object-cover w-full h-48 sm:h-56 md:h-64 transition duration-500 ease-in-out transform group-hover:scale-105"
          style={{ aspectRatio: "3/2", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground">
          {isExpanded ? description : `${description.substring(0, 100)}...`}
          <button onClick={toggleExpand} className=" underline ml-2">
            {isExpanded ? 'Show less' : 'Show more'}
          </button>
        </p>
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
            <Button asChild variant="ghost" size="sm" className="gap-1 underline rounded-md underline-offset-2">
              <Link href={liveLink} prefetch={false} target='_blank'>
                <EyeIcon className="w-4 h-4" />
                Live
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="gap-1 underline rounded-md underline-offset-2">
              <Link href={codeLink} prefetch={false} target='_blank'>
                <GithubIcon className="w-4 h-4" />
                Code
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

import { SVGProps } from 'react';

function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}