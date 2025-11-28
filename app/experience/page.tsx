// app/experience/page.tsx
import { Metadata } from 'next'
import ExperienceContent from '../../src/components/sections/ExperienceContent'

export const metadata: Metadata = {
  title: 'Experience | Sohel Kureshi',
  description: 'Professional Experience - Building solutions that matter'
}

export default function ExperiencePage() {
  return (
    <main id="main-content" className="pt-0 bg-white min-h-screen">
      <ExperienceContent />
    </main>
  )
}
