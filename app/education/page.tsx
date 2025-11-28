import { Metadata } from 'next'
import EducationContent from '../../src/components/sections/EducationContent'

export const metadata: Metadata = {
  title: 'Education | Sohel Kureshi',
  description: 'Academic Journey - Building knowledge through excellence and dedication'
}

export default function EducationPage() {
  return (
    <>
      <main id="main-content" className="pt-0 bg-white min-h-screen">
        <EducationContent />
      </main>
    </>
  )
}
