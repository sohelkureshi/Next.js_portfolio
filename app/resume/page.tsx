import type { Metadata } from 'next'
import ResumeContent from '../../src/components/sections/ResumeContent'

export const metadata: Metadata = {
  title: 'Resume | Full-Stack Developer - Sohel Kureshi',
  description:
    'Download the resume of full-stack developer Sohel Kureshi, NIT Nagpur graduate. View professional summary, skills, projects and experience in MERN stack and modern web development.',
  alternates: {
    canonical: '/resume',
  },
}

export default function ResumePage() {
  return (
    <main id="main-content" className="pt-0 bg-white min-h-screen">
      <ResumeContent />
    </main>
  )
}
