import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sohel Kureshi — Full-Stack Developer',
  description: 'Crafting digital experiences with passion and precision',
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
