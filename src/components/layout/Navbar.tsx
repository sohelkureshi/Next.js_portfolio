'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { name: 'About', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Education', href: '/education' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' }
] as const

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Memoized handlers
  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      window.location.href = '/'
    }
  }, [pathname])

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false)
  }, [])

  // Memoized link class generator
  const getLinkClassName = useCallback((isActive: boolean, isMobile: boolean = false) => {
    const baseClasses = 'font-semibold transition-all'
    
    if (isMobile) {
      return `${baseClasses} px-4 py-4 rounded-2xl text-sm border ${
        isActive
          ? 'border-emerald-400 bg-emerald-400 text-slate-900 shadow-md'
          : 'border-slate-700 text-slate-200 hover:border-emerald-400 hover:bg-slate-800'
      }`
    }
    
    return `${baseClasses} px-4 py-2 text-sm rounded-xl ${
      isActive
        ? 'text-slate-900 bg-emerald-400 shadow-md'
        : 'text-slate-300 hover:text-white hover:bg-slate-700/80'
    }`
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
                 bg-slate-900/95 backdrop-blur-xl
                 border-b border-emerald-500/30
                 shadow-[0_10px_40px_rgba(15,23,42,0.7)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group"
            aria-label="Sohel Kureshi Portfolio"
          >
            <div
              className="relative flex items-center justify-center w-10 h-10 rounded-2xl 
                         border border-emerald-400/80 
                         bg-gradient-to-br from-emerald-500 to-emerald-300 
                         shadow-md group-hover:shadow-lg transition-all"
            >
              <span className="absolute inset-0 rounded-2xl border border-white/10" />
              <span className="text-[16px] font-extrabold text-slate-900">SK</span>
            </div>
            <div className="flex sm:flex-col leading-tight">
              <span className="text-sm font-bold text-white">
                Sohel Kureshi
                <span className="sm:hidden text-slate-400 font-medium">
                  {' '}| Full-Stack Dev
                </span>
              </span>
              <span className="hidden sm:block text-xs text-slate-300">
                Full-Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div
              className="flex items-center gap-1 
                         px-3 py-2 
                         rounded-2xl 
                         bg-slate-800/70 
                         border border-slate-700/80 
                         shadow-sm"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={getLinkClassName(isActive)}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2.5 rounded-xl border border-slate-600 
                       text-slate-200 hover:text-white hover:border-emerald-400/80 
                       bg-slate-800/90 shadow-sm transition-all"
            aria-label="Toggle Navigation"
            aria-expanded={mobileOpen}
          >
            <svg
              className={`w-6 h-6 transition-transform ${mobileOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 pb-4">
            <div className="rounded-3xl border border-slate-700 bg-slate-900/95 shadow-xl p-4">
              <div className="grid grid-cols-2 gap-3">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={getLinkClassName(isActive, true)}
                    >
                      {link.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
