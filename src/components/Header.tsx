
'use client'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Meavatar from '@/assets/me3.jpg'
import { useRef, useState } from 'react';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sheetRef = useRef(null);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsSheetOpen(false); // Cierra el Sheet después del desplazamiento
    }
  };

  return (
    <header className="w-full bg-background px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
        <CodeIcon className="w-6 h-6" />
          <Avatar>
            <AvatarImage src={Meavatar.src} alt="Elvis Pino" />
            <AvatarFallback>EP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <h1 className="text-xl font-bold md:text-2xl">Elvis Pino</h1>
            <p className="text-muted-foreground text-sm md:text-base">Software Engineer</p>
          </div>
        </div>
        <nav className="hidden space-x-4 md:flex">
        <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="text-sm font-medium hover:underline underline-offset-4 md:text-base">
            About
          </a>
          <a href="#experience" onClick={(e) => handleNavigation(e, 'experience')} className="text-sm font-medium hover:underline underline-offset-4 md:text-base">
            Experience
          </a>
          <a href="#projects" onClick={(e) => handleNavigation(e, 'projects')} className="text-sm font-medium hover:underline underline-offset-4 md:text-base">
            Projects
          </a>
          <a href="#Studies" onClick={(e) => handleNavigation(e, 'Studies')} className="text-sm font-medium hover:underline underline-offset-4 md:text-base">
            Studies & Certificates
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
           <SheetTitle>Menu</SheetTitle>
           <SheetDescription>Navigation links</SheetDescription>
            <div className="grid gap-4 p-4">
            <a href="#about" onClick={(e) => handleNavigation(e, 'about')} className="flex w-full items-center py-2 text-lg font-semibold">
                About
              </a>
              <a href="#experience" onClick={(e) => handleNavigation(e, 'experience')} className="flex w-full items-center py-2 text-lg font-semibold">
                Experience
              </a>
              <a href="#projects" onClick={(e) => handleNavigation(e, 'projects')} className="flex w-full items-center py-2 text-lg font-semibold">
                Projects
              </a>
              <a href="#Studies" onClick={(e) => handleNavigation(e, 'Studies')} className="flex w-full items-center py-2 text-lg font-semibold">
                Studies & Certificates
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function CodeIcon(props) {
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }