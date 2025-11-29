import type { Metadata } from 'next'
import ContactContent from '../../src/components/sections/ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Full-Stack Developer in India - Sohel Kureshi',
  description:
    "Contact full-stack developer Sohel Kureshi for MERN stack, Next.js and modern web application projects. Let's collaborate and build something impactful.",
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main id="main-content" className="pt-0 bg-white min-h-screen">
      <ContactContent />
    </main>
  )
}
