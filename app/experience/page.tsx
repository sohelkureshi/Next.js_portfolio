import type { Metadata } from 'next'
import ExperienceContent from '../../src/components/sections/ExperienceContent'

export const metadata: Metadata = {
  title: 'Experience | Full-Stack Developer - Sohel Kureshi',
  description:
    'Professional experience of full-stack developer Sohel Kureshi, including CodTech IT Solutions internship focusing on Node.js, Express, MongoDB, security and real-time collaboration.',
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
