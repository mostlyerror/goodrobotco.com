import { Metadata } from 'next'
import Link from 'next/link'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Blog | Good Robot Co.',
  description: 'Practical insights on technology, AI, and building smarter systems for small and mid-size businesses.',
  openGraph: {
    title: 'Blog | Good Robot Co.',
    description: 'Practical insights on technology, AI, and building smarter systems for small and mid-size businesses.',
    url: 'https://goodrobotco.com/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Good Robot Co.',
    description: 'Practical insights on technology, AI, and building smarter systems for small and mid-size businesses.',
  },
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
