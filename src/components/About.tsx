
import Image from "next/image"
import meavatar from '@/assets/me1.jpg'
import { Badge } from "@/components/ui/badge"

export default function Component() {
    function TextWithBadge({ text }) {
        return (
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{text}</Badge>
          </div>
        );
      }

    return (
      <section className="w-full py-12 md:py-24 lg:py-10">
        <div className="container grid items-center gap-10 px-4 md:px-6 lg:ml-20 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Elvis Pino</h2>
            <div className="grid gap-4 text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with a strong background in JavaScript, React, and Node.js. I have a
                keen eye for design and a love for creating intuitive and user-friendly applications.
              </p>
              <p>
                With several years of experience under my belt, I've honed my skills in building scalable and maintainable
                web applications. I'm always eager to learn new technologies and techniques to stay ahead of the curve.
              </p>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 text-sm font-medium">
            <TextWithBadge text="JavaScript" />
            <TextWithBadge text="React" />
            <TextWithBadge text="Node.js" />
            <TextWithBadge text="TypeScript" />
            <TextWithBadge text="Python" />
            <TextWithBadge text="SQL" />
            <TextWithBadge text="Git" />
            <TextWithBadge text="AWS" />
            <TextWithBadge text="Docker" />
            <TextWithBadge text="HTML" />
            <TextWithBadge text="CSS" />
            <TextWithBadge text="C#" />
            <TextWithBadge text="Vue" />
            <TextWithBadge text="Next.js" />
            <TextWithBadge text="PostgreSQL" />
            <TextWithBadge text="Java" />
            <TextWithBadge text="PHP" />
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src={meavatar.src}
              alt="John Doe"
              width={400}
              height={400}
              className="rounded-full"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    )

  


}



