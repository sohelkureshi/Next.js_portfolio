import type { Metadata } from 'next'
import ResumeContent from '../../src/components/sections/ResumeContent'

export const metadata: Metadata = {
  title: 'Resume | Sohel Kureshi Full-Stack Developer',
  description:
    'Download the resume of full-stack developer Sohel Kureshi, also searched as Sohail Qureshi, Sohel Qureshi and Sohail Kureshi. View skills, projects and MERN stack experience.',
  keywords: [
    'Sohel Kureshi resume',
    'Sohail Qureshi resume',
    'Sohel Qureshi resume',
    'Sohail Kureshi resume',
    'Sohel Kureshi full-stack developer',
  ],
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
