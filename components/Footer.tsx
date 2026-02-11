import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div className="max-w-[280px]">
            <Link href="/" className="font-display font-bold text-xl text-white no-underline flex items-center gap-2.5 mb-3.5">
              <span className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center text-base">🤖</span>
              Good Robot Co.
            </Link>
            <p className="text-white/60 text-[15px]">
              Technology & growth partner for small and mid-size businesses. Strategy, execution, and honest guidance.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-3.5">Navigation</h4>
            <Link href="/#services" className="block text-white/80 hover:text-coral py-1 text-[15px]">Growth Services</Link>
            <Link href="/case-studies" className="block text-white/80 hover:text-coral py-1 text-[15px]">Case Studies</Link>
            <Link href="/pricing" className="block text-white/80 hover:text-coral py-1 text-[15px]">Pricing</Link>
            <Link href="/ai-for-business" className="block text-white/80 hover:text-coral py-1 text-[15px]">AI for Growth</Link>
            <Link href="/blog" className="block text-white/80 hover:text-coral py-1 text-[15px]">Blog</Link>
            <Link href="/#contact" className="block text-white/80 hover:text-coral py-1 text-[15px]">Contact</Link>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-3.5">Resources</h4>
            <Link href="/ai-for-business" className="block text-white/80 hover:text-coral py-1 text-[15px]">Can AI Help My Business?</Link>
            <Link href="/about" className="block text-white/80 hover:text-coral py-1 text-[15px]">About</Link>
            <Link href="/blog" className="block text-white/80 hover:text-coral py-1 text-[15px]">Latest Articles</Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3.5 text-sm text-white/50">
          <span>© 2025 Good Robot Co. All rights reserved.</span>
          <span>Made with care in Houston, TX</span>
        </div>
      </div>
    </footer>
  )
}
