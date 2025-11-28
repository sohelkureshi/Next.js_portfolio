import { Metadata } from 'next'
import ServicesContent from '../../src/components/sections/ServicesContent'

export const metadata: Metadata = {
  title: 'Services | Sohel Kureshi',
  description: 'Full-stack development services, custom web applications, and technical consulting'
}

export default function ServicesPage() {
  return (
    <>
      <main id="main-content" className="pt-0 bg-white min-h-screen">
        <ServicesContent />
      </main>
    </>
  )
}
