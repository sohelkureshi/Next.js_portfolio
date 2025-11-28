import { Metadata } from 'next'
import ContactContent from '../../src/components/sections/ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Sohel Kureshi',
  description: "Let's collaborate and build something amazing together"
}

export default function ContactPage() {
  return (
    <>
      <main id="main-content" className="pt-0 bg-white min-h-screen">
        <ContactContent />
      </main>
    </>
  )
}
