import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/CTA'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import { JsonLd } from '@/components/JsonLd'
import { MESSAGING } from '@/lib/messaging.constants'

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: MESSAGING.faqItems.slice(0, 4).map((item) => ({
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
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-cream via-cream to-sage/10">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large blurred gradient blobs */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-mustard/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-coral/5 rounded-full blur-3xl"></div>

          {/* SVG decorative elements */}
          <svg className="absolute top-32 left-[8%] w-24 h-24 text-coral/15 max-lg:hidden" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6"/>
          </svg>
          <svg className="absolute bottom-1/4 right-[8%] w-40 h-40 text-sage/15 max-lg:hidden" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <svg className="absolute top-[20%] left-[12%] w-10 h-10 text-lavender/20 max-lg:hidden" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" rx="20" fill="currentColor"/>
          </svg>
          <svg className="absolute bottom-32 left-[18%] w-8 h-8 text-coral/20 max-lg:hidden" viewBox="0 0 100 100">
            <rect x="15" y="15" width="70" height="70" rx="15" fill="currentColor"/>
          </svg>

          {/* Dot grid patterns */}
          <div className="absolute top-40 left-[5%] grid grid-cols-4 gap-4 opacity-20 max-lg:hidden">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-charcoal/60 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Floating shapes (animated) */}
        <div className="absolute top-[20%] left-[8%] w-14 h-14 bg-sage/80 rounded-2xl animate-float max-lg:hidden shadow-lg"></div>
        <div className="absolute top-[55%] left-[15%] w-10 h-10 bg-mustard/80 rounded-full animate-float-delayed max-lg:hidden shadow-lg"></div>
        <div className="absolute top-[35%] left-[5%] w-6 h-6 bg-lavender/80 rounded-xl animate-float-fast max-lg:hidden shadow-md"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-sm font-medium mb-5 shadow-sm border border-mustard/30">
              📈 {MESSAGING.hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {MESSAGING.hero.headline.replace('right tech.', '')} <span className="text-coral italic">right tech.</span>
            </h1>
            <p className="text-lg text-charcoal-light max-w-[550px] mb-8">
              {MESSAGING.hero.subheadline}
            </p>

            {/* Illustration */}
            <div className="mb-0 md:mb-8 md:mt-4">
              <Image
                src="/good_robot_hero.png"
                alt="Person working collaboratively with a friendly robot assistant"
                width={600}
                height={400}
                priority
                className="w-full h-auto max-w-full md:max-w-2xl"
              />
            </div>

            <div className="flex gap-4 flex-wrap max-md:flex-col">
              <Link href="#contact" className="inline-block px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/40 hover:bg-coral-hover hover:-translate-y-1 hover:shadow-2xl hover:shadow-coral/50 transition-all duration-300 text-center">
                {MESSAGING.hero.cta} →
              </Link>
              <Link href="#work" className="inline-block px-8 py-4 bg-white text-charcoal font-semibold text-base rounded-full border border-charcoal/20 shadow-md hover:bg-charcoal hover:text-white hover:border-charcoal hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                {MESSAGING.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Approach Growth */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">How we approach growth for your business</h2>
            <p className="text-lg text-charcoal-light">Strategy first, then execution with the right tools for your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MESSAGING.approach.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="text-5xl mb-5">{item.emoji}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-charcoal-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="[The app] has allowed me to go through the line faster, and [our clients'] anxiety has decreased because they don't have to fill out so much paperwork, and it has allowed them to speak up more on their needs."
              author="Nubia Saenz"
              title="Caseworker"
              company="Almost Home"
              size="large"
            />
            <Testimonial
              quote="LOVING this new system! Saves me so many hours of tedious work!"
              author="Sara Ho"
              title="Founder"
              company="Let's Learn Together"
              size="large"
            />
          </div>
        </div>
      </section>

      {/* Sound Familiar + Philosophy Combined */}
      <section className="py-20 bg-white">
        <JsonLd data={faqSchema} />
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Sound familiar?</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {MESSAGING.painPoints.map((point) => (
              <div key={point.quote} className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
                <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">{point.emoji}</span>
                <p className="text-charcoal italic text-[15px]">&quot;{point.quote}&quot;</p>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="border-l-4 border-coral pl-8 md:pl-12">
            <p className="text-2xl md:text-3xl font-display italic text-charcoal mb-6">
              &quot;Your tech should drive growth, not hold it back.&quot;
            </p>
            <div className="space-y-4 text-charcoal-light mb-8">
              <p>I bring senior-level experience from building systems at scale, now working directly with small and mid-size businesses. My focus: understanding what&apos;s actually holding your growth back, then building the systems to fix it.</p>
              <p>That might be automated lead generation. It might be a sales follow-up system. It might be fixing broken operations that are capping your capacity. I won&apos;t overcomplicate things or sell you solutions you don&apos;t need.</p>
              <p>You&apos;ll get a thought partner who cares about your revenue, not just your tech stack. Every recommendation ties back to business outcomes.</p>
              <p>I only take on a few clients at a time so I can give each one real attention. Right now I have 2 spots open.</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/ben-headshot-3.jpg"
                alt="Ben Poon"
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-cream shadow-lg"
              />
              <div>
                <span className="font-bold text-lg">Ben Poon</span>
                <span className="text-charcoal-light ml-1 block md:inline">· {MESSAGING.founderTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Services */}
      <section id="services" className="py-20 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[550px] mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">How we drive growth</h2>
            <p className="text-lg text-white/70">Real solutions that have saved clients 20 hours a week and cut costs by 80%. Here&apos;s how I can help you grow.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MESSAGING.growthServices.map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                <span className="text-4xl mb-5 block">{service.emoji}</span>
                <h3 className="text-xl font-semibold mb-2.5">{service.title}</h3>
                <p className="text-white/70 text-[15px]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[550px] mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">Why work with me?</h2>
            <p className="text-lg text-charcoal-light">I work with service businesses, agencies, and local businesses who want to grow smarter. You&apos;ll work directly with me. No account managers, no runaround.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="w-16 h-16 bg-sage-light rounded-2xl flex items-center justify-center text-2xl mb-5">📈</div>
              <h3 className="text-xl font-semibold mb-2.5">Growth-Focused</h3>
              <p className="text-charcoal-light text-[15px]">Every recommendation ties back to revenue. More leads, better conversion, happier customers. Not tech for tech&apos;s sake.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-mustard-light rounded-2xl flex items-center justify-center text-2xl mb-5">💬</div>
              <h3 className="text-xl font-semibold mb-2.5">No Jargon</h3>
              <p className="text-charcoal-light text-[15px]">I explain things in plain English. You&apos;ll always understand what you&apos;re getting and why.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-lavender-light rounded-2xl flex items-center justify-center text-2xl mb-5">🤝</div>
              <h3 className="text-xl font-semibold mb-2.5">True Partnership</h3>
              <p className="text-charcoal-light text-[15px]">I&apos;m not a vendor who disappears after launch. I&apos;m an embedded partner invested in your long-term growth.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-sky-light rounded-2xl flex items-center justify-center text-2xl mb-5">💰</div>
              <h3 className="text-xl font-semibold mb-2.5">Fair Pricing</h3>
              <p className="text-charcoal-light text-[15px]">Quality work without the agency markup. Accessible rates with personalized attention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Invest */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">When to invest in growth</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sage/10 to-sage/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-sage">{MESSAGING.investMatrix[0].title}</h3>
              <ul className="space-y-4">
                {MESSAGING.investMatrix[0].items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sage text-xl mt-0.5">&#10003;</span>
                    <span className="text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-sky/10 to-sky/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-sky">{MESSAGING.investMatrix[1].title}</h3>
              <ul className="space-y-4">
                {MESSAGING.investMatrix[1].items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-sky text-xl mt-0.5">&#10003;</span>
                    <span className="text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-mustard/10 to-mustard/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-mustard">{MESSAGING.investMatrix[2].title}</h3>
              <ul className="space-y-4">
                {MESSAGING.investMatrix[2].items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-mustard text-xl mt-0.5">&#10003;</span>
                    <span className="text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-coral/10 to-coral/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-coral">{MESSAGING.investMatrix[3].title}</h3>
              <ul className="space-y-4">
                {MESSAGING.investMatrix[3].items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-coral text-xl mt-0.5">&#10003;</span>
                    <span className="text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-charcoal-light mb-6">Not sure which approach fits your situation?</p>
            <Link href="#contact" className="inline-block px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/40 hover:bg-coral-hover hover:-translate-y-1 hover:shadow-2xl hover:shadow-coral/50 transition-all duration-300">
              Book a Free Strategy Call →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">Common Questions</h2>
            <p className="text-lg text-charcoal-light">Here&apos;s what most people want to know before we start working together.</p>
          </div>
          <FAQ items={MESSAGING.faqItems.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))} />
        </div>
      </section>

      {/* Recent Work */}
      <section id="work" className="py-20 bg-gradient-to-br from-cream via-white to-sage/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">Growth in Action</h2>
              <p className="text-lg text-charcoal-light">Real projects, real business outcomes</p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-charcoal hover:text-coral font-medium transition-colors"
            >
              View all case studies
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Horizontal Scrolling Carousel */}
          <div className="relative">
            <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-6 px-6">
              <div className="flex gap-6 w-max">
                {/* Mayday Case Study Card */}
                <Link
                  href="/case-studies/mayday"
                  className="flex-shrink-0 w-[70vw] md:w-[340px] bg-white rounded-2xl border border-charcoal/10 overflow-hidden hover:border-coral/30 hover:shadow-2xl transition-all duration-300 group snap-start"
                >
                  <div className="relative bg-gradient-to-br from-sage/20 to-sky/15 h-28 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-1">🎯</div>
                      <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Lead Generation</div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col h-[calc(100%-7rem)]">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-coral transition-colors">
                        Mayday: Pipeline on Autopilot
                      </h3>
                    </div>
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      AI-powered lead generation system that fills your pipeline automatically by scanning businesses and delivering daily digests of pre-qualified opportunities.
                    </p>
                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <div className="text-2xl font-bold text-coral mb-0.5">~15 hours</div>
                          <div className="text-xs text-charcoal/60">Prospecting eliminated</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-sage mb-0.5">10-15k</div>
                          <div className="text-xs text-charcoal/60">Leads scanned/month</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                        Read case study
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* SWAPP Case Study Card */}
                <Link
                  href="/case-studies/swapp"
                  className="flex-shrink-0 w-[70vw] md:w-[340px] bg-white rounded-2xl border border-charcoal/10 overflow-hidden hover:border-coral/30 hover:shadow-2xl transition-all duration-300 group snap-start"
                >
                  <div className="relative bg-gradient-to-br from-coral/20 to-mustard/15 h-28 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-1">🏔️</div>
                      <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Operational Capacity</div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col h-[calc(100%-7rem)]">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-coral transition-colors">
                        SWAPP: 15x Capacity Growth
                      </h3>
                    </div>
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      Automated workflows and digital systems that unlocked 15x operational capacity, enabling the team to serve dramatically more people without adding headcount.
                    </p>
                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <div className="text-2xl font-bold text-coral mb-0.5">80%</div>
                          <div className="text-xs text-charcoal/60">Faster processing</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-sage mb-0.5">15x</div>
                          <div className="text-xs text-charcoal/60">Capacity increase</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                        Read case study
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* LLT Case Study Card */}
                <Link
                  href="/case-studies/llt"
                  className="flex-shrink-0 w-[70vw] md:w-[340px] bg-white rounded-2xl border border-charcoal/10 overflow-hidden hover:border-coral/30 hover:shadow-2xl transition-all duration-300 group snap-start"
                >
                  <div className="relative bg-gradient-to-br from-lavender/20 to-mustard/10 h-28 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-1">📚</div>
                      <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Operational Optimization</div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col h-[calc(100%-7rem)]">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-coral transition-colors">
                        Let&apos;s Learn Together
                      </h3>
                    </div>
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      Helped Houston tutoring agency optimize billing operations and adopt the right platform, saving hours weekly while enabling growth to scale.
                    </p>
                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <div className="text-2xl font-bold text-coral mb-0.5">Hours</div>
                          <div className="text-xs text-charcoal/60">Saved weekly</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-sage mb-0.5">3</div>
                          <div className="text-xs text-charcoal/60">Vendors evaluated</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                        Read case study
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="text-center mt-6 text-sm text-charcoal/40">
              <span className="md:hidden">← Swipe to see more →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Contact Steps */}
      <section className="py-12 bg-white border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-coral text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold mb-1">{MESSAGING.processSteps[0].title}</h3>
                <p className="text-sm text-charcoal-light">{MESSAGING.processSteps[0].desc}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-sage text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold mb-1">{MESSAGING.processSteps[1].title}</h3>
                <p className="text-sm text-charcoal-light">{MESSAGING.processSteps[1].desc}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-mustard text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold mb-1">{MESSAGING.processSteps[2].title}</h3>
                <p className="text-sm text-charcoal-light">{MESSAGING.processSteps[2].desc}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-lavender text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold mb-1">{MESSAGING.processSteps[3].title}</h3>
                <p className="text-sm text-charcoal-light">{MESSAGING.processSteps[3].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}
