import type React from "react";
import type { Metadata } from "next";
import { Sora, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://my-porfolio-next-v1.vercel.app";
const TITLE = "Elvis Pino — Senior Full-Stack Engineer, Applied AI";
const DESCRIPTION =
  "Full-stack engineer with 10 years of experience building production systems with LLM integration and predictive models. TypeScript, Next.js, NestJS, .NET. Orlando, FL.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Elvis Pino",
    "Full-Stack Engineer",
    "Applied AI Engineer",
    "LLM Integration",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "NestJS",
    ".NET",
    "Orlando FL Developer",
  ],
  authors: [{ name: "Elvis Pino" }],
  creator: "Elvis Pino",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Elvis Pino",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@elvisxd",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
