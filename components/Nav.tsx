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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] py-4 bg-cream/80 backdrop-blur-md border-b transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-black/5 border-charcoal/5' : 'border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-display font-bold text-xl text-charcoal no-underline flex items-center gap-2.5">
          <span className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center text-base">🤖</span>
          Good Robot Co.
        </Link>
        
        <button 
          className={`mobile-menu-btn md:hidden bg-transparent border-none cursor-pointer p-2 z-[1001] ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-charcoal my-1.5 transition-all duration-300"></span>
        </button>
        
        <div className={`flex gap-6 items-center max-md:fixed max-md:inset-0 max-md:bg-cream max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-8 max-md:transition-all max-md:duration-300 max-md:z-[1000] ${isMenuOpen ? 'max-md:opacity-100 max-md:visible' : 'max-md:opacity-0 max-md:invisible'}`}>
          <Link href="/#how-it-works" onClick={closeMenu} className="text-charcoal no-underline font-medium text-sm hover:text-coral transition-colors max-md:text-2xl">
            How It Works
          </Link>
          <Link href="/#services" onClick={closeMenu} className="text-charcoal no-underline font-medium text-sm hover:text-coral transition-colors max-md:text-2xl">
            Services
          </Link>
          <Link href="/ai-for-business" onClick={closeMenu} className="text-charcoal no-underline font-medium text-sm hover:text-coral transition-colors max-md:text-2xl">
            AI for Your Business
          </Link>
          <Link href="/blog" onClick={closeMenu} className="text-charcoal no-underline font-medium text-sm hover:text-coral transition-colors max-md:text-2xl">
            Blog
          </Link>
          <Link href="/#contact" onClick={closeMenu} className="inline-block px-6 py-3 bg-coral text-white font-semibold text-sm rounded-full hover:bg-coral-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral/30 transition-all duration-300 max-md:text-lg max-md:px-8 max-md:py-4">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  )
}
