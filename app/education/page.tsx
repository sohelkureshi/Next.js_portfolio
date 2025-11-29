import type { Metadata } from 'next'
import EducationContent from '../../src/components/sections/EducationContent'

export const metadata: Metadata = {
  title: 'Education | NIT Nagpur Graduate - Sohel Kureshi',
  description:
    'Academic journey of NIT Nagpur graduate Sohel Kureshi, showcasing SSC, HSC and B.Tech achievements with strong foundations in computer science and engineering.',
  alternates: {
    canonical: '/education',
  },
}

export default function EducationPage() {
  return (
    <main id="main-content" className="pt-0 bg-white min-h-screen">
      <EducationContent />
    </main>
  )
}
