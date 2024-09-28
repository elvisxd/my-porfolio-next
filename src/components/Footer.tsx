
export default function Component() {
    return (
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-center">
            <div className="grid gap-2">
              <h3 className="text-lg font-bold">Elvis Pino</h3>
              <div className="flex flex-col sm:flex-row gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <MailIcon className="w-4 h-4" />
                  <a href="mailto:elvisreyxd@gmail.com">elvisreyxd@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-4 h-4" />
                  <a href="#">+1 (407) 437-9559</a>
                </div>
                <div className="flex items-center gap-2">
                  <GitlabIcon className="w-4 h-4" />
                  <a href="https://github.com/elvisxd/elvisxd" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <a href="https://www.linkedin.com/in/elvis-pino-b358b2127/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xs text-right">&copy; 2024 Elvis Pino. All rights reserved.</div>
          </div>
        </div>
      </footer>
    )
  }
  
  function GitlabIcon(props) {
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
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props) {
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  
  function MailIcon(props) {
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function PhoneIcon(props) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }