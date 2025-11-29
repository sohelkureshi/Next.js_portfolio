// app/sitemap.ts
import type { MetadataRoute } from 'next'

const SITE_URL = 'https://sohelkureshi.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: string[] = [
    '/',
    '/experience',
    '/projects',
    '/skills',
    '/education',
    '/services',
    '/contact',
    '/resume',
  ]

  return staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
