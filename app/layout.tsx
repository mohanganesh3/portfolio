import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Mohan Ganesh - AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Mohan Ganesh - AI/ML Engineer from IIIT SriCity specializing in Computer Vision, NLP, and Full-Stack Development",
  generator: "v0.app",
  keywords: "AI, Machine Learning, Computer Vision, NLP, Full-Stack Developer, React, Python, TensorFlow",
  authors: [{ name: "Mohan Ganesh" }],
  openGraph: {
    title: "Mohan Ganesh - AI/ML Engineer & Full-Stack Developer",
    description: "Portfolio showcasing cutting-edge AI/ML projects and full-stack development expertise",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
