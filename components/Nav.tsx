'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  const navLinks = [
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/ai-for-business', label: 'AI for Your Business' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 bg-cream/80 backdrop-blur-md border-b transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-black/5 border-charcoal/5' : 'border-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-display font-bold text-xl text-charcoal no-underline flex items-center gap-2.5">
            <span className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center text-base">🤖</span>
            Good Robot Co.
          </Link>

          {/* Hamburger button - mobile only */}
          <button
            className={`mobile-menu-btn md:hidden bg-transparent border-none cursor-pointer p-2 ${isMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-300"></span>
            <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-300"></span>
          </button>

          {/* Desktop nav - hidden on mobile */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal no-underline font-medium text-sm hover:text-coral transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 bg-coral text-white font-semibold text-sm rounded-full hover:bg-coral-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral/30 transition-all duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay - separate from nav */}
      <div
        className={`fixed inset-0 z-40 bg-cream md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className="text-charcoal no-underline font-medium text-2xl hover:text-coral transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          onClick={closeMenu}
          className="inline-block px-8 py-4 bg-coral text-white font-semibold text-lg rounded-full hover:bg-coral-hover transition-all duration-300"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </>
  )
}
