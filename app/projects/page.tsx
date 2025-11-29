import type { Metadata } from 'next'
import ProjectsContent from '../../src/components/sections/ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects | MERN & Next.js Portfolio - Sohel Kureshi',
  description:
    'Portfolio projects by full-stack developer Sohel Kureshi, including MERN stack apps, Next.js projects, real-time collaboration tools, analytics dashboards and AI-powered solutions.',
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-0 bg-white min-h-screen">
      <ProjectsContent />
    </main>
  )
}
