// app/layout.tsx
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://sohelkureshi.vercel.app'
const SITE_NAME = 'Sohel Kureshi — Software Engineer'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sohel Kureshi | Software Engineer | NIT Nagpur',
    template: '%s | Sohel Kureshi',
  },
  description:
    'Software engineer and NIT Nagpur graduate specializing in MERN stack, Next.js and modern web applications. Explore projects, skills, education, services and contact details.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Sohel Kureshi | Software Engineer | NIT Nagpur',
    description:
      'Portfolio of software engineer Sohel Kureshi, featuring MERN stack and Next.js projects, professional experience, education and contact information.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio of Software Engineer Sohel Kureshi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sohel Kureshi | Software Engineer',
    description:
      'Software engineer and NIT Nagpur graduate focused on MERN stack, Next.js and real-world web projects.',
    images: ['/og_image.png'],
  },
  //  IMPORTANT: Google Search Console verification here
  verification: {
    google: 'Upw0N_l5B9V_9s0WPUQcFe7acOAy1BVZ5sZL_ucLKvA',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-950 text-slate-900`}>
        <Navbar />
        <main className="bg-white min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
