// app/robots.txt/route.ts
import { NextResponse } from 'next/server'

const SITE_URL = 'https://sohelkureshi.vercel.app'

export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

  return new NextResponse(body.trim() + '\n', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
