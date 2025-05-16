import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elvis Pino | Full-Stack Developer",
  description:
    "Portfolio of Elvis Pino, a Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Elvis Pino",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Elvis Pino" }],
  creator: "Elvis Pino",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elvispino.com",
    title: "Elvis Pino | Full-Stack Developer",
    description:
      "Portfolio of Elvis Pino, a Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
    siteName: "Elvis Pino Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Pino | Full-Stack Developer",
    description:
      "Portfolio of Elvis Pino, a Full-Stack Developer specializing in React, Next.js, TypeScript, and Node.js.",
    creator: "@elvisxd",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
