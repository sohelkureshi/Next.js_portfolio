// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://sohelkureshi.vercel.app'
const SITE_NAME = 'Sohel Kureshi — Full-Stack Developer'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sohel Kureshi | Full-Stack Developer | NIT Nagpur',
    template: '%s | Sohel Kureshi',
  },
  description:
    'Full-stack developer and NIT Nagpur graduate specializing in MERN stack, Next.js and modern web applications. Explore projects, skills, education, services and contact details.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Sohel Kureshi | Full-Stack Developer | NIT Nagpur',
    description:
      'Portfolio of full-stack developer Sohel Kureshi, featuring MERN stack and Next.js projects, professional experience, education and contact information.',
    images: [
      {
        url: '/og-image.png', // make sure this file exists in /public
        width: 1200,
        height: 630,
        alt: 'Portfolio of Full-Stack Developer Sohel Kureshi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sohel Kureshi | Full-Stack Developer',
    description:
      'Full-stack developer and NIT Nagpur graduate focused on MERN stack, Next.js and real-world web projects.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
