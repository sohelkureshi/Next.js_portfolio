'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { name: 'About',      href: '/'           },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects',   href: '/projects'   },
  { name: 'Skills',     href: '/skills'     },
  { name: 'Education',  href: '/education'  },
  { name: 'Services',   href: '/services'   },
  { name: 'Contact',    href: '/contact'    },
  { name: 'Resume',     href: '/resume'     },
] as const

// ─── Scroll lock helpers ─────────────────────────────────────────────────────
let savedScrollY = 0

function lockScroll() {
  savedScrollY = window.scrollY
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
}

// ─── Class builders ──────────────────────────────────────────────────────────
function desktopLinkClass(active: boolean) {
  return active
    ? 'font-semibold text-sm px-4 py-2 rounded-xl text-slate-900 bg-emerald-400 shadow-md transition-all'
    : 'font-semibold text-sm px-4 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-700/80 transition-all'
}
function mobileLinkClass(active: boolean) {
  return active
    ? 'font-semibold text-sm px-4 py-4 rounded-2xl border border-emerald-400 bg-emerald-400 text-slate-900 shadow-md transition-all'
    : 'font-semibold text-sm px-4 py-4 rounded-2xl border border-slate-700 text-slate-200 hover:border-emerald-400 hover:bg-slate-800 transition-all'
}

// ────────────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname  = usePathname()
  const menuRef   = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (mobileOpen) {
      unlockScroll()
      setMobileOpen(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Scroll lock — synced to open state
  useEffect(() => {
    mobileOpen ? lockScroll() : unlockScroll()
    return unlockScroll // safety unlock on unmount
  }, [mobileOpen])

  // Outside click
  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: PointerEvent) => {
      const t = e.target as Node
      if (!menuRef.current?.contains(t) && !buttonRef.current?.contains(t)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('pointerdown', handler)
    return () => document.removeEventListener('pointerdown', handler)
  }, [mobileOpen])

  // Escape key
  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [mobileOpen])

  const toggle = useCallback(() => setMobileOpen(v => !v), [])
  const close  = useCallback(() => setMobileOpen(false), [])

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (pathname === '/') { e.preventDefault(); window.location.href = '/' }
  }, [pathname])

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-40 md:hidden bg-slate-950/60 backdrop-blur-sm
          transition-opacity duration-250 ease-in-out
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-emerald-500/30 shadow-[0_10px_40px_rgba(15,23,42,0.7)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top bar */}
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group" aria-label="Sohel Kureshi Portfolio">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl border border-emerald-400/80 bg-gradient-to-br from-emerald-500 to-emerald-300 shadow-md group-hover:shadow-lg transition-all">
                <span className="absolute inset-0 rounded-2xl border border-white/10" />
                <span className="text-[16px] font-extrabold text-slate-900">SK</span>
              </div>
              <div className="flex sm:flex-col leading-tight">
                <span className="text-sm font-bold text-white">
                  Sohel Kureshi
                  <span className="sm:hidden text-slate-400 font-medium"> | Full-Stack Dev</span>
                </span>
                <span className="hidden sm:block text-xs text-slate-300">Full-Stack Developer</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 px-3 py-2 rounded-2xl bg-slate-800/70 border border-slate-700/80 shadow-sm">
              {NAV_LINKS.map(({ name, href }) => (
                <Link key={href} href={href} className={desktopLinkClass(pathname === href)}>
                  {name}
                </Link>
              ))}
            </div>

            {/* Hamburger → X */}
            <button
              ref={buttonRef}
              onClick={toggle}
              className="md:hidden p-2.5 rounded-xl border border-slate-600 text-slate-200 hover:text-white hover:border-emerald-400/80 bg-slate-800/90 shadow-sm transition-all"
              aria-label={mobileOpen ? 'Close Navigation' : 'Open Navigation'}
              aria-expanded={mobileOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
                <line x1="4" y1="7" x2="20" y2="7"
                  style={{
                    transformOrigin: '12px 7px',
                    transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1)',
                    transform: mobileOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                  }}
                />
                <line x1="4" y1="12" x2="20" y2="12"
                  style={{ transition: 'opacity 200ms ease', opacity: mobileOpen ? 0 : 1 }}
                />
                <line x1="4" y1="17" x2="20" y2="17"
                  style={{
                    transformOrigin: '12px 17px',
                    transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1)',
                    transform: mobileOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                  }}
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className="md:hidden"
            style={{
              display: 'grid',
              gridTemplateRows: mobileOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows 300ms cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <div ref={menuRef} className="pb-4 mt-3">
                <div className="rounded-3xl border border-slate-700 bg-slate-900/95 shadow-xl p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {NAV_LINKS.map(({ name, href }) => (
                      <Link key={href} href={href} onClick={close} className={mobileLinkClass(pathname === href)}>
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}