import type { Metadata } from 'next'
import SkillsContent from '../../src/components/sections/SkillsContent'

export const metadata: Metadata = {
  title: 'Skills | MERN, Next.js & Data Analytics - Sohel Kureshi',
  description:
    'Technical skills of full-stack developer Sohel Kureshi, including JavaScript, MERN stack, Next.js, databases, DevOps tools and data analytics libraries such as Pandas and Scikit-learn.',
  alternates: {
    canonical: '/skills',
  },
}

export default function SkillsPage() {
  return (
    <main id="main-content" className="pt-0 bg-white min-h-screen">
      <SkillsContent />
    </main>
  )
}
