import { Metadata } from 'next'
import Link from 'next/link'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Blog | Good Robot Co.',
  description: 'Practical insights on technology, AI, and building smarter systems for small and mid-size businesses.',
}

export default function Blog() {
  return (
    <>
      <HeroSimple 
        title="Blog"
        subtitle="Practical insights on technology, AI, and building smarter systems, without the jargon."
        maxWidth="max-w-6xl"
      />

      {/* Blog Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured Post */}
          <Link 
            href="/ai-for-business" 
            className="block bg-white rounded-3xl overflow-hidden mb-16 hover:shadow-xl transition-shadow duration-300 no-underline text-charcoal"
          >
            <div className="grid md:grid-cols-2">
              <div className="bg-sage-light h-64 md:h-auto flex items-center justify-center text-8xl">🤖</div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 bg-coral text-white text-sm font-semibold rounded-full mb-5 w-fit">Featured</span>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">Can AI Actually Help My Business?</h2>
                <p className="text-charcoal-light mb-6">A practical guide to understanding if and how AI can help your small or mid-size business save time, reduce costs, and serve customers better.</p>
                <span className="text-coral font-semibold">Read the full guide →</span>
              </div>
            </div>
          </Link>

          {/* More Posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link 
              href="#" 
              className="block bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 no-underline text-charcoal"
            >
              <div className="h-48 bg-sage-light flex items-center justify-center text-5xl">💸</div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-cream text-sm font-medium rounded-full mb-4">Buy vs Build</span>
                <h3 className="text-lg font-semibold mb-2 leading-snug">When to Buy Software vs Build It Custom</h3>
                <p className="text-charcoal-light text-sm mb-4">A framework for making the right call and avoiding expensive mistakes.</p>
                <span className="text-sm text-charcoal-light">Coming soon</span>
              </div>
            </Link>
            
            <Link 
              href="#" 
              className="block bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 no-underline text-charcoal"
            >
              <div className="h-48 bg-mustard-light flex items-center justify-center text-5xl">🔧</div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-cream text-sm font-medium rounded-full mb-4">Operations</span>
                <h3 className="text-lg font-semibold mb-2 leading-snug">5 Signs Your Business Needs Better Systems</h3>
                <p className="text-charcoal-light text-sm mb-4">How to know when spreadsheets and manual processes are costing you more than they should.</p>
                <span className="text-sm text-charcoal-light">Coming soon</span>
              </div>
            </Link>
            
            <Link 
              href="#" 
              className="block bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 no-underline text-charcoal"
            >
              <div className="h-48 bg-lavender-light flex items-center justify-center text-5xl">🤝</div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-cream text-sm font-medium rounded-full mb-4">Working with Developers</span>
                <h3 className="text-lg font-semibold mb-2 leading-snug">How to Not Get Burned by a Tech Contractor</h3>
                <p className="text-charcoal-light text-sm mb-4">Red flags, green flags, and questions to ask before signing anything.</p>
                <span className="text-sm text-charcoal-light">Coming soon</span>
              </div>
            </Link>
            
            <Link 
              href="#" 
              className="block bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 no-underline text-charcoal"
            >
              <div className="h-48 bg-cream-dark flex items-center justify-center text-5xl">⚡</div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-cream text-sm font-medium rounded-full mb-4">Automation</span>
                <h3 className="text-lg font-semibold mb-2 leading-snug">Zapier vs Make vs Custom Code: Which Do You Need?</h3>
                <p className="text-charcoal-light text-sm mb-4">A plain-English comparison of your automation options.</p>
                <span className="text-sm text-charcoal-light">Coming soon</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        headline="Have a question or project in mind?"
        subheadline="Let's talk about what you're trying to accomplish. No sales pitch, just a real conversation about your business."
      />
    </>
  )
}
