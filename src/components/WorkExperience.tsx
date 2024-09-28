
export default function Component() {
    return (
        <div className="w-full py-0 md:py-24 lg:py-10">
        <div className="container grid items-center gap-10 px-4 md:px-6 lg:ml-20 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center justify-center space-y-6 lg:items-start">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Work Experience</div>
          </div>
          </div>
      <section className="py-12 md:py-16 lg:py-7 lg:ml-20">
        <div className="container">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">Software Engineer</h3>
              <p className="mb-2 text-muted-foreground">IT Driver</p>
              <p className="mb-4 text-sm text-muted-foreground">June 2017 - 2019</p>
              <div className="prose text-muted-foreground">
                <ul>
                  <li>Developed and maintained web applications using PHP, Css, and Mysql.</li>
                  <li>Collaborated with cross-functional teams to design and implement new features.</li>
                  <li>Participated in code reviews and pair programming to ensure code quality.</li>
                  <li>Implemented automated testing and continuous integration/deployment workflows.</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">Freelancer, Web Development</h3>
              <p className="mb-2 text-muted-foreground">Own Company</p>
              <p className="mb-4 text-sm text-muted-foreground">May 2019 - August 2020</p>
              <div className="prose text-muted-foreground">
                <ul>
                  <li>Assisted in the development and maintenance of the company's website.</li>
                  <li>Learned and applied modern web development technologies and best practices.</li>
                  <li>Participated in daily stand-up meetings and sprint planning sessions.</li>
                  <li>Gained experience in project management and client communication.</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">Lift driver</h3>
              <p className="mb-2 text-muted-foreground">Walmart DC Warehouse  8851</p>
              <p className="mb-4 text-sm text-muted-foreground">June 2021 - Actually</p>
              <div className="prose text-muted-foreground">
                <ul>
                  <li>Order Filler, Loader, and Lift Driver.</li>
                  <li>Responsible for moving pallets with a forklift, loading and unloading trucks with merchandise for distribution.</li>
                  <li>Additionally, tasked with replacing slots with new pallets and ensuring the workspace is clean and safe for free transit.</li>
                  <li>Volunteered for the hazmat team.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }