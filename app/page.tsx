import AboutContent from '../src/components/sections/AboutContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sohel Kureshi — Full-Stack Developer | NIT Nagpur',
  description: 'B.Tech Graduate | MERN Stack | Open Source Contributor | Available for SDE-1 Roles'
}

export default function Home() {
  return <AboutContent />
}
