// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://sohelkureshi.vercel.app'
const SITE_NAME = 'Sohel Kureshi - Full-Stack Developer'
const NAME_VARIANTS = [
  'Sohel Kureshi',
  'Sohail Qureshi',
  'Sohel Qureshi',
  'Sohail Kureshi',
]

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sohel Kureshi',
  alternateName: ['Sohail Qureshi', 'Sohel Qureshi', 'Sohail Kureshi'],
  url: SITE_URL,
  jobTitle: 'Full-Stack Developer',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'NIT Nagpur',
  },
  knowsAbout: [
    'MERN stack',
    'Next.js',
    'React',
    'Node.js',
    'MongoDB',
    'Full-stack web development',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sohel Kureshi | Full-Stack Developer | NIT Nagpur',
    template: '%s | Sohel Kureshi',
  },
  description:
    'Portfolio of Sohel Kureshi, also searched as Sohail Qureshi, Sohel Qureshi and Sohail Kureshi. Full-stack developer and NIT Nagpur graduate specializing in MERN stack, Next.js and modern web applications.',
  keywords: [
    ...NAME_VARIANTS,
    'Sohel Kureshi full-stack developer',
    'Sohel Kureshi portfolio',
    'NIT Nagpur full-stack developer',
    'MERN stack developer India',
    'Next.js developer India',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Sohel Kureshi | Full-Stack Developer | NIT Nagpur',
    description:
      'Portfolio of full-stack developer Sohel Kureshi, also searched as Sohail Qureshi, Sohel Qureshi and Sohail Kureshi, featuring MERN stack and Next.js projects.',
    images: [
      {
        url: '/og_image.png',
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
      'Full-stack developer Sohel Kureshi, also searched as Sohail Qureshi, Sohel Qureshi and Sohail Kureshi.',
    images: ['/og_image.png'],
  },
  verification: {
    google: 'Upw0N_l5B9V_9s0WPUQcFe7acOAy1BVZ5sZL_ucLKvA',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="bg-white min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
