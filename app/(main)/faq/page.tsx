import { Metadata } from 'next'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'
import FAQMasonryGrid from '@/components/FAQMasonryGrid'
import { JsonLd } from '@/components/JsonLd'
import { MESSAGING } from '@/lib/messaging.constants'

export const metadata: Metadata = {
  title: 'FAQ | Good Robot Co.',
  description: 'Common questions about working with Good Robot Co. — pricing, process, timelines, AI, lead generation, and what to expect from a growth partnership.',
  openGraph: {
    title: 'FAQ | Good Robot Co.',
    description: 'Common questions about working with Good Robot Co. — pricing, process, timelines, AI, lead generation, and what to expect from a growth partnership.',
    url: 'https://goodrobotco.com/faq',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: MESSAGING.faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd data={faqSchema} />

      <HeroSimple
        label="FAQ"
        title="Questions, answered."
        subtitle="Everything you'd want to know before we start working together."
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FAQMasonryGrid items={MESSAGING.faqItems} />
        </div>
      </section>

      <CTA
        headline="Still have questions?"
        subheadline="Book a free 20-minute call. I'll give you straight answers — no pitch, no pressure."
      />
    </>
  )
}
