import { Metadata } from 'next'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'
import { Reveal } from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Pricing | Good Robot Co.',
  description: 'Transparent pricing for tech consulting, AI integration, and growth partnership. Solutions sized for small and mid-size businesses ready to scale.',
  openGraph: {
    title: 'Pricing | Good Robot Co.',
    description: 'Transparent pricing for tech consulting, AI integration, and growth partnership. Solutions sized for small and mid-size businesses ready to scale.',
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
    description: 'Transparent pricing for tech consulting, AI integration, and growth partnership. Solutions sized for small and mid-size businesses ready to scale.',
    images: ['/og-image.png'],
  },
}

export default function Pricing() {
  return (
    <>
      <HeroSimple
        label="Pricing"
        title="Transparent Pricing"
        subtitle="No hidden fees, no surprise invoices. Investment tiers designed around the growth outcomes that matter most to your business."
      />

      {/* Pricing Philosophy */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="border-l-4 border-coral pl-8">
              <SectionLabel>Our philosophy</SectionLabel>
              <h2 className="text-2xl font-display font-bold mb-4">Simple, growth-focused pricing</h2>
              <div className="space-y-4 text-charcoal-light mb-6">
                <p>I keep pricing simple and accessible for small businesses. Every tier is built around a specific growth outcome, so you know exactly what you&apos;re investing in and the results you can expect.</p>
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
          </Reveal>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Investment tiers</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Three Simple Options</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Quick Win */}
            <Reveal delay={0}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-sage-light rounded-2xl flex items-center justify-center text-3xl mb-6">⚡</div>
                <h3 className="text-2xl font-display font-bold mb-2">Quick Win</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-charcoal">$1,500</span>
                  <span className="text-charcoal-light"> - $3,000</span>
                </div>
                <p className="text-charcoal-light mb-6">Fast-impact projects that show results in 1-2 weeks.</p>

                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-charcoal mb-3">Good for:</p>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Speed-to-lead automation</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Review solicitation system</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Basic process automation</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Tech assessment & roadmap</span>
                  </div>
                </div>

                <p className="text-sm text-charcoal-light italic">Timeline: 1-2 weeks</p>
              </div>
            </Reveal>

            {/* Growth Engine */}
            <Reveal delay={0.08}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-coral h-full">
                <div className="inline-block px-3 py-1 bg-coral text-white text-xs font-semibold rounded-full mb-4">Most Common</div>
                <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center text-3xl mb-6">📈</div>
                <h3 className="text-2xl font-display font-bold mb-2">Growth Engine</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-charcoal">$3,000</span>
                  <span className="text-charcoal-light"> - $6,000</span>
                </div>
                <p className="text-charcoal-light mb-6">Custom systems that drive measurable growth.</p>

                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-charcoal mb-3">Good for:</p>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Lead generation pipeline</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Sales automation workflow</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">AI-powered tools & chatbots</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Custom web apps & integrations</span>
                  </div>
                </div>

                <p className="text-sm text-charcoal-light italic">Timeline: 3-5 weeks</p>
              </div>
            </Reveal>

            {/* Growth Partnership */}
            <Reveal delay={0.16}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-lavender-light rounded-2xl flex items-center justify-center text-3xl mb-6">🤝</div>
                <h3 className="text-2xl font-display font-bold mb-2">Growth Partnership</h3>
                <div className="mb-6">
                  <span className="text-charcoal-light text-base">Starting at</span>
                  <div><span className="text-4xl font-bold text-charcoal">$300</span><span className="text-charcoal-light text-xl">/mo</span></div>
                </div>
                <p className="text-charcoal-light mb-6">Ongoing tech partnership and growth optimization.</p>

                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-charcoal mb-3">What&apos;s included:</p>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Continuous system optimization</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Strategic growth guidance</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">Priority support & maintenance</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-sage flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-charcoal-light">New opportunity identification</span>
                  </div>
                </div>

                <p className="text-sm text-charcoal-light italic">Cancel anytime, no commitment</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Simple terms</SectionLabel>
            <h2 className="text-2xl font-display font-bold mb-8 text-center">How Payment Works</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-cream rounded-2xl">
                <div className="text-3xl mb-3">💳</div>
                <h3 className="font-display font-bold mb-2">Simple Payment</h3>
                <p className="text-sm text-charcoal-light">50% to start, 50% on completion. For larger projects, we can split into milestones.</p>
              </div>
              <div className="text-center p-6 bg-cream rounded-2xl">
                <div className="text-3xl mb-3">⏱️</div>
                <h3 className="font-display font-bold mb-2">No Hourly Rates</h3>
                <p className="text-sm text-charcoal-light">Fixed prices mean no surprise invoices. You know exactly what you&apos;re paying upfront.</p>
              </div>
              <div className="text-center p-6 bg-cream rounded-2xl">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-display font-bold mb-2">Revisions Included</h3>
                <p className="text-sm text-charcoal-light">Two rounds of revisions are included in every project. You&apos;ll get it right.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Common questions</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Common Questions</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <FAQAccordion items={[
              { question: "What if my project doesn't fit these tiers?", answer: "No problem. These are just guidelines. Book a free call and tell me what you need. I'll give you a custom quote that makes sense." },
              { question: "What's NOT included in these prices?", answer: "Third-party costs like domain names, hosting, or software subscriptions. I'll always flag these upfront. Most clients spend $10-50/month on these basics." },
              { question: "Can I see examples of your work?", answer: "Absolutely. I'll show you my portfolio during our call. I'm also happy to share references from past clients." },
              { question: "What does 'Growth Partnership' actually mean?", answer: "It means I don't disappear after launch. I stay on as your tech and growth partner, keep optimizing your systems, spot new opportunities, and make sure the tech keeps driving results. Think of it as having a senior technologist on your team without the full-time salary." },
              { question: "What if I just need advice?", answer: "The first call is free. If you just need 20 minutes of guidance, that's totally fine. If you need more, we can do a paid consultation or ongoing support." },
              { question: "What happens if something goes wrong?", answer: "I stand behind my work. If there's a bug or something breaks within 30 days of delivery, I'll fix it for free. No questions asked." },
            ]} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Ready to find the right growth plan for your business?"
        subheadline="Book a free 20-minute call and I'll give you an honest assessment of which tier fits your goals, what it would cost, and how fast you'll see results."
      />
    </>
  )
}
