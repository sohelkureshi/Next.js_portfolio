import AboutContent from '../src/components/sections/AboutContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sohel Kureshi - Full-Stack Developer | NIT Nagpur',
  description:
    'Official portfolio of Sohel Kureshi, also searched as Sohail Qureshi, Sohel Qureshi and Sohail Kureshi. B.Tech graduate, MERN stack developer and SDE-1 candidate.',
  keywords: [
    'Sohel Kureshi',
    'Sohail Qureshi',
    'Sohel Qureshi',
    'Sohail Kureshi',
    'Sohel Kureshi portfolio',
    'Full-stack developer NIT Nagpur',
  ],
}

export default function Home() {
  return <AboutContent />
}
