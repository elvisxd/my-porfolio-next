import Link from "next/link"
import { LinkIcon } from '@heroicons/react/24/outline';;
export default function Component() {
    return (

        <div className="w-full py-0 md:py-24 lg:py-10">
        <div className="container grid items-center gap-10 px-4 md:px-6 lg:ml-20 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Studies & Certificates</div>
          </div>
          </div>
      <section className="w-full py-12 md:py-24 lg:py-5 lg:ml-20">
        <div className="container grid max-w-9xl gap-8 px-4 md:px-6">
          <div className="space-y-4">
            <p className="text-muted-foreground md:text-xl/relaxed">
              Explore the various studies and certificates I've completed to enhance my expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-primary p-3 text-primary-foreground">
                  <BookIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Bachelor of Computer Science</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Graduated with a degree in Computer Science from the Maria Auxiliadora II, Venezuela.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-4">
                
                <div className="rounded-md bg-secondary p-3 text-secondary-foreground">
                  <AwardIcon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold">Graduated Systems Engineer</h3>

              </div>
              <Link href="https://portalunimar.unimar.edu.ve/home">
              <p className="mt-2 text-sm text-muted-foreground">
                Graduated with a degree in Systems Engineering from the Unimar, Venezuela.
              </p>
              <LinkIcon className="w-3 h-3 " />
              </Link>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-muted p-3 text-muted-foreground">
                  <BrushIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Front - End Design Specialization</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <Link href="https://www.coursera.org/professional-certificates/meta-front-end-developer?">
               Current working on it. Specialization course on Coursera.
               <LinkIcon className="w-3 h-3 " />
               </Link>
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-card p-3 text-card-foreground">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Full-Stack Web Development Udemy</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                <Link href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=OF83024F">
                 Full-Stack Web Development course on Udemy.
                <LinkIcon className="w-3 h-3 " />
                </Link>
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-accent p-3 text-accent-foreground">
                  <PuzzleIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">Meta React Certificate</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
              <Link href="https://www.coursera.org/account/accomplishments/verify/W852TWECIXYB">
                Earned the Meta React Certificate from Coursera.
                <LinkIcon className="w-3 h-3 " />
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>
      </div>
    )
  }
  
  function AwardIcon(props) {
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
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>
    )
  }
  
  
  function BookIcon(props) {
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
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }
  
  
  function BrushIcon(props) {
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
        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
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
  
  
  function PuzzleIcon(props) {
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
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
      </svg>
    )
  }
  
  
  function TelescopeIcon(props) {
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
        <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
        <path d="m13.56 11.747 4.332-.924" />
        <path d="m16 21-3.105-6.21" />
        <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
        <path d="m6.158 8.633 1.114 4.456" />
        <path d="m8 21 3.105-6.21" />
        <circle cx="12" cy="13" r="2" />
      </svg>
    )
  }