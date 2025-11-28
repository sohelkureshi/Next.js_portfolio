import { Metadata } from 'next'
import ProjectsContent from '../../src/components/sections/ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects | Sohel Kureshi',
  description: 'Featured Projects - Transforming ideas into digital reality'
}

export default function ProjectsPage() {
  return (
    <>
      <main id="main-content" className="pt-0 bg-white min-h-screen">
        <ProjectsContent />
      </main>
    </>
  )
}
