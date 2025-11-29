import type { Metadata } from 'next'
import ServicesContent from '../../src/components/sections/ServicesContent'

export const metadata: Metadata = {
  title: 'Services | Web Development & MERN Stack - Sohel Kureshi',
  description:
    'Full-stack web development services by Sohel Kureshi, including MERN stack apps, UI/UX implementation, dashboards, data analytics and custom web application development.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <main id="main-content" className="pt-0 bg-white min-h-screen">
      <ServicesContent />
    </main>
  )
}
