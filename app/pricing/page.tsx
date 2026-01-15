import { Metadata } from 'next'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Pricing | Good Robot Co.',
  description: 'Transparent pricing for tech consulting, AI integration, custom development, and ongoing support. Solutions sized for small and mid-size businesses.',
  openGraph: {
    title: 'Pricing | Good Robot Co.',
    description: 'Transparent pricing for tech consulting, AI integration, custom development, and ongoing support. Solutions sized for small and mid-size businesses.',
    url: 'https://goodrobotco.com/pricing',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Good Robot Co. Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | Good Robot Co.',
    description: 'Transparent pricing for tech consulting, AI integration, custom development, and ongoing support. Solutions sized for small and mid-size businesses.',
    images: ['/og-image.png'],
  },
}

export default function Pricing() {
  return (
    <>
      <HeroSimple
        title="Transparent Pricing"
        subtitle="No hidden fees, no surprise invoices. Here's what you can expect to invest when working with Good Robot Co."
      />

      {/* Pricing Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-l-4 border-coral pl-8">
            <h2 className="text-2xl font-semibold mb-4">Simple, straightforward pricing</h2>
            <div className="space-y-4 text-charcoal-light mb-6">
              <p>I keep pricing simple and accessible for small businesses. You know exactly what you&apos;re paying, and there are no hidden fees or surprise invoices.</p>
              <p>Every project includes planning, regular updates, and support after launch. If something&apos;s not clear, I&apos;ll explain it in plain English.</p>
            </div>
            <div>
              <p className="text-charcoal mb-4">Not sure which option fits? <a
                href="#contact"
                className="relative inline-block font-semibold text-coral hover:text-coral-hover transition-colors group"
              >
                Book a free call
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path
                    d="M0,5 Q5,3 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5 T110,5 T120,5 T130,5 T140,5 T150,5 T160,5 T170,5 T180,5 T190,5 T200,5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-coral"
                  />
                </svg>
              </a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">Three Simple Options</h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Small Projects */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-sage-light rounded-2xl flex items-center justify-center text-3xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold mb-2">Small Projects</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-charcoal">$1,500</span>
                <span className="text-charcoal-light"> – $3,000</span>
              </div>
              <p className="text-charcoal-light mb-6">Perfect for quick wins and getting started.</p>

              <div className="space-y-3 mb-8">
                <p className="text-sm font-semibold text-charcoal mb-3">Good for:</p>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Simple websites (Squarespace, Webflow)</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Basic automations (Zapier, Make)</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Quick fixes and improvements</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Tech consultation and planning</span>
                </div>
              </div>

              <p className="text-sm text-charcoal-light italic">Timeline: 1-2 weeks</p>
            </div>

            {/* Medium Projects */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-coral">
              <div className="inline-block px-3 py-1 bg-coral text-white text-xs font-semibold rounded-full mb-4">Most Common</div>
              <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center text-3xl mb-6">🛠️</div>
              <h3 className="text-2xl font-semibold mb-2">Medium Projects</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-charcoal">$3,000</span>
                <span className="text-charcoal-light"> – $6,000</span>
              </div>
              <p className="text-charcoal-light mb-6">Custom builds and integrations that make a real impact.</p>

              <div className="space-y-3 mb-8">
                <p className="text-sm font-semibold text-charcoal mb-3">Good for:</p>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Custom websites with CMS</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">AI chatbots and assistants</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Process automation workflows</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Simple web apps and tools</span>
                </div>
              </div>

              <p className="text-sm text-charcoal-light italic">Timeline: 3-5 weeks</p>
            </div>

            {/* Ongoing Support */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-lavender-light rounded-2xl flex items-center justify-center text-3xl mb-6">🤝</div>
              <h3 className="text-2xl font-semibold mb-2">Ongoing Support</h3>
              <div className="mb-6">
                <span className="text-charcoal-light text-base">Starting at</span>
                <div><span className="text-4xl font-bold text-charcoal">$300</span><span className="text-charcoal-light text-xl">/mo</span></div>
              </div>
              <p className="text-charcoal-light mb-6">Keep your tech running smoothly with regular help.</p>

              <div className="space-y-3 mb-8">
                <p className="text-sm font-semibold text-charcoal mb-3">What&apos;s included:</p>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Email/Slack support</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Monthly check-ins</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Bug fixes and updates</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-charcoal-light">Small improvements</span>
                </div>
              </div>

              <p className="text-sm text-charcoal-light italic">Cancel anytime, no commitment</p>
            </div>

          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8 text-center">How Payment Works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-cream rounded-2xl">
              <div className="text-3xl mb-3">💳</div>
              <h3 className="font-semibold mb-2">Simple Payment</h3>
              <p className="text-sm text-charcoal-light">50% to start, 50% on completion. For larger projects, we can split into milestones.</p>
            </div>
            <div className="text-center p-6 bg-cream rounded-2xl">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-semibold mb-2">No Hourly Rates</h3>
              <p className="text-sm text-charcoal-light">Fixed prices mean no surprise invoices. You know exactly what you&apos;re paying upfront.</p>
            </div>
            <div className="text-center p-6 bg-cream rounded-2xl">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold mb-2">Revisions Included</h3>
              <p className="text-sm text-charcoal-light">Two rounds of revisions are included in every project. You&apos;ll get it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">Common Questions</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">What if my project doesn&apos;t fit these tiers?</h3>
              <p className="text-charcoal-light">No problem. These are just guidelines. Book a free call and tell me what you need—I&apos;ll give you a custom quote that makes sense.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">What&apos;s NOT included in these prices?</h3>
              <p className="text-charcoal-light">Third-party costs like domain names, hosting, or software subscriptions. I&apos;ll always flag these upfront. Most clients spend $10-50/month on these basics.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">Can I see examples of your work?</h3>
              <p className="text-charcoal-light">Absolutely. I&apos;ll show you my portfolio during our call. I&apos;m also happy to share references from past clients.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">What if I just need advice?</h3>
              <p className="text-charcoal-light">The first call is free. If you just need 20 minutes of guidance, that&apos;s totally fine. If you need more, we can do a paid consultation or ongoing support.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-3">What happens if something goes wrong?</h3>
              <p className="text-charcoal-light">I stand behind my work. If there&apos;s a bug or something breaks within 30 days of delivery, I&apos;ll fix it for free. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Ready to get a specific quote for your project?"
        subheadline="Book a free 20-minute call and I'll give you an honest assessment of what your project would cost and how long it would take."
      />
    </>
  )
}
