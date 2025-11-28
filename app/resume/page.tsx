import { Metadata } from 'next'
import ResumeContent from '../../src/components/sections/ResumeContent'

export const metadata: Metadata = {
  title: 'Resume | Sohel Kureshi',
  description: 'Download resume and view professional summary, skills, and experience'
}

export default function ResumePage() {
  return (
    <>
      <main id="main-content" className="pt-0 bg-white min-h-screen">
        <ResumeContent />
      </main>
    </>
  )
}
