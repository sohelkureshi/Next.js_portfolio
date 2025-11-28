import { Metadata } from 'next'
import SkillsContent from '../../src/components/sections/SkillsContent'

export const metadata: Metadata = {
  title: 'Skills | Sohel Kureshi',
  description: 'Technical expertise across full-stack development, modern frameworks, and DevOps tools'
}

export default function SkillsPage() {
  return (
    <>
      <main id="main-content" className="pt-0 bg-white min-h-screen">
        <SkillsContent />
      </main>
    </>
  )
}
