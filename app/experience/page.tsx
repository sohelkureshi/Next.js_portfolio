import type { Metadata } from 'next'
import ExperienceContent from '../../src/components/sections/ExperienceContent'

export const metadata: Metadata = {
  title: 'Experience | Software Engineer - Sohel Kureshi',
  description:
    'Professional experience of software engineer Sohel Kureshi, including CodTech IT Solutions internship focusing on Node.js, Express, MongoDB, security and real-time collaboration.',
  alternates: {
    canonical: '/experience',
  },
}

export default function ExperiencePage() {
  return (
    <main id="main-content" className="pt-0 bg-white min-h-screen">
      <ExperienceContent />
    </main>
  )
}
