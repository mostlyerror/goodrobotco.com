'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const designs = [
  { num: 1, href: '/redesign/11' },
  { num: 2, href: '/redesign/12' },
  { num: 3, href: '/redesign/13' },
  { num: 4, href: '/redesign/14' },
  { num: 5, href: '/redesign/15' },
  { num: 6, href: '/redesign/16' },
  { num: 7, href: '/redesign/17' },
  { num: 8, href: '/redesign/18' },
  { num: 'H', href: '/redesign/hybrid' },
]

export default function DesignSwitcher() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 bg-charcoal/90 backdrop-blur-xl px-3 py-2 rounded-full shadow-2xl shadow-black/20 border border-white/10">
      {designs.map(d => {
        const isActive = pathname === d.href
        return (
          <Link
            key={d.num}
            href={d.href}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold font-display transition-all duration-200 ${
              isActive
                ? 'bg-coral text-white scale-110 shadow-lg shadow-coral/40'
                : 'text-white/40 hover:text-white hover:bg-white/10'
            }`}
          >
            {d.num}
          </Link>
        )
      })}
    </div>
  )
}
