'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { MESSAGING } from '@/lib/messaging.constants'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transition: `opacity 0.8s ease ${delay}s`,
    }}>
      {children}
    </div>
  )
}

function OrnamentalRule() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-charcoal/20" />
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-charcoal/30 flex-shrink-0">
        <rect x="5" y="5" width="10" height="10" fill="currentColor" transform="rotate(45 10 10)" />
      </svg>
      <div className="flex-1 h-px bg-charcoal/20" />
    </div>
  )
}

function DoubleRule() {
  return (
    <div className="my-6">
      <div className="h-[2px] bg-charcoal/80" />
      <div className="h-[1px] bg-charcoal/40 mt-[2px]" />
    </div>
  )
}

export default function Redesign7() {
  const today = new Date()
  const dateStr = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#F5F0E4' }}>
      <style>{`
        .newspaper-cols { column-count: 2; column-gap: 2rem; column-rule: 1px solid rgba(42,42,42,0.15); }
        @media (max-width: 768px) { .newspaper-cols { column-count: 1; } }
        .drop-cap::first-letter { float: left; font-size: 3.5em; line-height: 0.8; padding-right: 0.1em; font-family: var(--font-fraunces), serif; font-weight: 900; color: #2A2A2A; }
        .small-caps { font-variant: small-caps; letter-spacing: 0.05em; }
      `}</style>

      {/* Masthead */}
      <header className="pt-28 pb-4 px-6 text-center border-b-2 border-charcoal/80" style={{ backgroundColor: '#F5F0E4' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between text-xs text-charcoal/50 mb-4">
            <span>{dateStr}</span>
            <span>Houston, Texas</span>
            <span>Vol. I, No. 1</span>
          </div>
          <div className="h-[3px] bg-charcoal/80 mb-2" />
          <div className="h-[1px] bg-charcoal/40 mb-6" />

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tight text-charcoal leading-none mb-2">
            Good Robot Co.
          </h1>
          <p className="text-sm tracking-[0.4em] uppercase text-charcoal/50 mb-6">
            The Journal of Practical Technology
          </p>

          <div className="h-[1px] bg-charcoal/40 mb-2" />
          <div className="h-[3px] bg-charcoal/80 mb-4" />

          <div className="flex items-center justify-center gap-6 text-xs text-charcoal/40 small-caps">
            <span>Growth + Technology Partner</span>
            <span>&bull;</span>
            <span>Lead Generation</span>
            <span>&bull;</span>
            <span>Sales Conversion</span>
            <span>&bull;</span>
            <span>AI Automation</span>
          </div>
        </div>
      </header>

      {/* Main Story */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-coral font-bold">BREAKING</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-charcoal leading-tight mt-3 mb-4">
                Grow Your Business With the Right Tech
              </h2>
              <p className="text-lg text-charcoal/60 italic font-display max-w-2xl mx-auto">
                From lead generation to AI automation to custom tools &mdash; helping small businesses grow revenue, save time, and stop leaving money on the table
              </p>
              <div className="flex items-center justify-center gap-3 mt-4 text-xs text-charcoal/40">
                <span className="font-bold text-charcoal/60">By Ben Poon</span>
                <span>&bull;</span>
                <span>{MESSAGING.founderTitle}</span>
              </div>
            </div>
          </FadeIn>

          <DoubleRule />

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
              <div className="md:col-span-8">
                <div className="newspaper-cols text-[15px] text-charcoal/80 leading-relaxed">
                  <p className="drop-cap mb-4">
                    Your tech should drive growth, not hold it back. Small businesses know this instinctively, having been burned by agencies that overcomplicate, developers who disappear, and tools that promise the moon but deliver confusion. The gap between what businesses need and what the tech industry sells them has never been wider.
                  </p>
                  <p className="mb-4">
                    Good Robot Co. takes a different approach. Founded by Ben Poon, a senior engineer who traded the scale of enterprise systems for the directness of working with small businesses, the consultancy operates on a simple principle: understand the real problem first, then use the right tool to solve it.
                  </p>
                  <p className="mb-4">
                    &ldquo;That might be AI,&rdquo; Poon explains. &ldquo;It might be simple automation. It might be fixing technical debt that&apos;s been slowing you down. I won&apos;t overcomplicate things or sell you solutions you don&apos;t need.&rdquo;
                  </p>
                  <p>
                    Only a few clients at a time. That means real attention to your business instead of the volume approach you get from bigger agencies. 2 spots open right now.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="border-2 border-charcoal/20 p-1">
                  <Image
                    src="/good_robot_hero.png"
                    alt="Person working with a robot assistant"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-xs text-charcoal/40 italic mt-2 text-center">
                  Fig. 1 &mdash; Modern technology consulting in action
                </p>
              </div>
            </div>
          </FadeIn>

          <OrnamentalRule />

          {/* Services as newspaper columns */}
          <FadeIn>
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-black text-charcoal text-center mb-2">
                Services Offered
              </h3>
              <p className="text-center text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-8">
                A Complete Guide to Available Engagements
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MESSAGING.growthServices.map((service) => (
                  <div key={service.title} className="border-t border-charcoal/15 pt-4">
                    <h4 className="font-display font-bold text-charcoal mb-2">{service.emoji} {service.title}</h4>
                    <p className="text-sm text-charcoal/60 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <OrnamentalRule />

          {/* Testimonials as pull quotes */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="border-l-4 border-coral pl-6">
                <blockquote className="text-lg font-display italic text-charcoal leading-relaxed mb-4">
                  &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.&rdquo;
                </blockquote>
                <cite className="text-xs text-charcoal/50 not-italic">
                  &mdash; <span className="font-bold text-charcoal/70">Nubia Saenz</span>, Caseworker, Almost Home
                </cite>
              </div>
              <div className="border-l-4 border-sage pl-6">
                <blockquote className="text-lg font-display italic text-charcoal leading-relaxed mb-4">
                  &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
                </blockquote>
                <cite className="text-xs text-charcoal/50 not-italic">
                  &mdash; <span className="font-bold text-charcoal/70">Sara Ho</span>, Founder, Let&apos;s Learn Together
                </cite>
              </div>
            </div>
          </FadeIn>

          <DoubleRule />

          {/* Case Studies as news items */}
          <FadeIn>
            <h3 className="text-2xl md:text-3xl font-display font-black text-charcoal text-center mb-2">
              Recent Dispatches
            </h3>
            <p className="text-center text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-8">
              Selected Case Studies from the Field
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  headline: 'AI System Eliminates 15 Hours of Weekly Manual Labor',
                  deck: 'Mayday Lead Generation',
                  body: 'An AI-powered system now scans 10-15K businesses monthly, delivering daily digests of pre-qualified leads and eliminating manual prospecting entirely.',
                  stat: '~15 hrs/wk saved',
                  href: '/case-studies/mayday',
                },
                {
                  headline: 'Emergency Response Intake Reduced by 80%',
                  deck: 'SWAPP Emergency Response',
                  body: 'Intelligent workflows and digital forms transformed a 45-minute intake process, helping prevent 8,300+ nights of unsheltered homelessness.',
                  stat: '80% faster intake',
                  href: '/case-studies/swapp',
                },
                {
                  headline: 'Tutoring Agency Reclaims Hours Lost to Billing',
                  deck: "Let's Learn Together",
                  body: 'After evaluating three vendors, the right platform was selected and billing operations optimized, saving the growing agency hours of tedious work weekly.',
                  stat: 'Hours saved weekly',
                  href: '/case-studies/llt',
                },
              ].map((story) => (
                <Link key={story.headline} href={story.href} className="group border-t-2 border-charcoal/20 pt-4 block">
                  <span className="text-xs text-coral font-bold uppercase tracking-wider">{story.deck}</span>
                  <h4 className="text-lg font-display font-bold text-charcoal leading-snug mt-1 mb-2 group-hover:text-coral transition-colors">
                    {story.headline}
                  </h4>
                  <p className="text-sm text-charcoal/60 leading-relaxed mb-3">{story.body}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-coral">{story.stat}</span>
                    <span className="text-xs text-charcoal/40 group-hover:text-coral transition-colors">Read more &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>

          <OrnamentalRule />

          {/* About - Interview style */}
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
              <div className="md:col-span-4">
                <div className="border-2 border-charcoal/20 p-1">
                  <Image
                    src="/ben-headshot-3.jpg"
                    alt="Ben Poon"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover grayscale"
                  />
                </div>
                <p className="text-xs text-charcoal/40 italic mt-2 text-center">
                  Ben Poon, {MESSAGING.founderTitle}
                </p>
              </div>
              <div className="md:col-span-8">
                <h3 className="text-2xl font-display font-black text-charcoal mb-2">
                  A Different Kind of Consultant
                </h3>
                <p className="text-xs tracking-[0.2em] uppercase text-charcoal/40 mb-6">
                  Profile &mdash; Ben Poon, Founder
                </p>
                <div className="text-[15px] text-charcoal/70 leading-relaxed space-y-4">
                  <p>
                    The consulting industry has a trust problem. Businesses routinely receive bloated proposals, impenetrable jargon, and solutions designed more to justify fees than to solve problems. Ben Poon decided to do it differently.
                  </p>
                  <p>
                    With senior-level experience building systems at scale, Poon now works directly with small and mid-size businesses. There are no account managers. No layers of bureaucracy. Clients talk to the person doing the work.
                  </p>
                  <p>
                    The approach starts with honest assessment. Solutions are right-sized to actual needs. Pricing is accessible. And perhaps most unusually in an industry known for vanishing acts: he sticks around after launch.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <DoubleRule />

          {/* Process */}
          <FadeIn>
            <div className="mb-10">
              <h3 className="text-2xl font-display font-black text-charcoal text-center mb-8">
                How an Engagement Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { num: 'I.', title: 'Strategy Session', desc: "20 minutes. You tell me what's holding your business back. I'll tell you if I can help." },
                  { num: 'II.', title: 'Growth Audit', desc: 'I dig into your lead flow, sales process, and operations. You get a clear, prioritized action plan.' },
                  { num: 'III.', title: 'Build & Launch', desc: 'I build the systems. Regular updates, no jargon, no surprises. You see results fast.' },
                  { num: 'IV.', title: 'Grow Together', desc: "I don't disappear after launch. Continuous optimization, new opportunities, and a partner who's invested in your growth." },
                ].map(step => (
                  <div key={step.num} className="border-t border-charcoal/15 pt-4 text-center">
                    <span className="text-2xl font-display font-black text-coral">{step.num}</span>
                    <h4 className="font-display font-bold text-charcoal mt-2 mb-2">{step.title}</h4>
                    <p className="text-xs text-charcoal/60 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <OrnamentalRule />

          {/* CTA - Classified Ad Style */}
          <FadeIn>
            <section id="contact" className="mb-10">
              <div className="max-w-lg mx-auto border-2 border-charcoal/80 p-8 md:p-10 text-center" style={{ backgroundColor: '#EDE8D8' }}>
                <span className="text-xs tracking-[0.3em] uppercase text-charcoal/40 block mb-4">CLASSIFIED</span>
                <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-4">
                  Seeking: Businesses Ready to Grow
                </h2>
                <p className="text-sm text-charcoal/60 leading-relaxed mb-6">
                  20-minute strategy session. No charge. No obligation. An honest conversation about what&apos;s holding your business back and how to fix it. Limited to 2-3 new engagements per month.
                </p>
                <a
                  href="https://calendly.com/benjamintpoon/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-2 border-charcoal text-charcoal px-8 py-3 text-sm font-bold tracking-[0.15em] uppercase hover:bg-charcoal hover:text-cream transition-colors duration-300 mb-4"
                >
                  Let&apos;s Talk Growth &rarr;
                </a>
                <p className="text-xs text-charcoal/40">
                  Or write: <a href="mailto:hello@goodrobotco.com" className="text-coral hover:underline">hello@goodrobotco.com</a>
                </p>
              </div>
            </section>
          </FadeIn>
        </div>
      </section>

      {/* Colophon */}
      <footer className="border-t-2 border-charcoal/80 py-6 px-6 text-center">
        <div className="text-xs text-charcoal/40">
          <span className="small-caps">Good Robot Co.</span> &mdash; Published in Houston, Texas &mdash; {today.getFullYear()} &mdash; All Rights Reserved
        </div>
      </footer>
    </main>
  )
}
