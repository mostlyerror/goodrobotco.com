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

function Fade({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  )
}

function SlideUp({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  )
}

export default function Redesign4() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero - Maximum Breathing Room */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-20">
        <div className="max-w-6xl mx-auto w-full">
          <Fade>
            <p className="text-sm tracking-[0.25em] uppercase text-charcoal/40 mb-12">Good Robot Co.</p>
          </Fade>

          <SlideUp delay={0.2}>
            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-display font-bold leading-[0.95] tracking-tight text-charcoal mb-0">
              Grow your business
            </h1>
          </SlideUp>
          <SlideUp delay={0.35}>
            <h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-display font-bold leading-[0.95] tracking-tight text-charcoal/30 mb-16">
              with the right tech.
            </h1>
          </SlideUp>

          <SlideUp delay={0.5}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="text-charcoal-light text-lg md:text-xl leading-relaxed max-w-md">
                {MESSAGING.hero.subheadline}
              </p>

              <div className="flex items-center gap-8">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-4 text-charcoal font-medium"
                >
                  <span className="w-14 h-14 rounded-full border-2 border-charcoal flex items-center justify-center group-hover:bg-charcoal group-hover:text-cream transition-all duration-500">
                    &rarr;
                  </span>
                  <span className="text-sm tracking-wider uppercase">Let&apos;s Talk Growth</span>
                </Link>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* Thin divider */}
      <div className="mx-6 md:mx-12 lg:mx-24">
        <div className="h-px bg-charcoal/8" />
      </div>

      {/* Services - Ultra Clean */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <p className="text-sm tracking-[0.25em] uppercase text-charcoal/40 mb-20">Services</p>
          </Fade>

          <div className="space-y-0">
            {MESSAGING.growthServices.map((service) => ({ title: service.title, desc: service.desc })).map((service, i) => (
              <SlideUp key={service.title} delay={i * 0.06}>
                <div className="group py-8 md:py-10 border-t border-charcoal/8 cursor-default">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline">
                    <span className="md:col-span-1 text-xs text-charcoal/25 font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="md:col-span-4 text-xl md:text-2xl font-display font-semibold text-charcoal group-hover:text-coral transition-colors duration-500">{service.title}</h3>
                    <p className="md:col-span-7 text-charcoal-light leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Quote - Generous space */}
      <section className="py-32 md:py-44 px-6 md:px-12 lg:px-24 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <Fade>
            <blockquote className="text-2xl md:text-4xl font-display font-light text-cream/90 leading-relaxed mb-12">
              &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.&rdquo;
            </blockquote>
            <div className="flex items-center gap-6">
              <div className="w-16 h-px bg-cream/20" />
              <div>
                <span className="text-cream/80 font-medium">Nubia Saenz</span>
                <span className="text-cream/40 block text-sm mt-1">Caseworker at Almost Home</span>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* Work - Minimal Cards */}
      <section id="work" className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20">
            <Fade className="md:col-span-4">
              <p className="text-sm tracking-[0.25em] uppercase text-charcoal/40 mb-6">Selected Work</p>
              <p className="text-charcoal-light leading-relaxed">
                Real projects with measurable outcomes for small businesses.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                title: 'Mayday',
                type: 'AI Lead Generation',
                stat: '~15 hours',
                statLabel: 'saved weekly',
                href: '/case-studies/mayday',
              },
              {
                title: 'SWAPP',
                type: 'Emergency Response',
                stat: '80%',
                statLabel: 'faster intake',
                href: '/case-studies/swapp',
              },
              {
                title: "Let's Learn Together",
                type: 'Billing Optimization',
                stat: '15x',
                statLabel: 'capacity increase',
                href: '/case-studies/llt',
              },
            ].map((study, i) => (
              <SlideUp key={study.title} delay={i * 0.12}>
                <Link href={study.href} className="group block">
                  <div className="aspect-[4/3] bg-charcoal/[0.03] rounded-lg mb-6 flex items-center justify-center overflow-hidden group-hover:bg-charcoal/[0.06] transition-colors duration-700">
                    <div className="text-center p-8">
                      <span className="text-4xl md:text-5xl font-display font-black text-coral/80 group-hover:text-coral transition-colors duration-500">{study.stat}</span>
                      <span className="block text-xs text-charcoal/40 mt-2 uppercase tracking-wider">{study.statLabel}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-charcoal group-hover:text-coral transition-colors duration-300 mb-1">{study.title}</h3>
                  <p className="text-sm text-charcoal/40">{study.type}</p>
                </Link>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Second Quote */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-sage/8">
        <div className="max-w-3xl mx-auto text-center">
          <Fade>
            <blockquote className="text-xl md:text-2xl font-display text-charcoal leading-relaxed mb-8">
              &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
            </blockquote>
            <span className="text-charcoal/40 text-sm">Sara Ho, Founder of Let&apos;s Learn Together</span>
          </Fade>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
            <Fade className="md:col-span-5">
              <Image
                src="/ben-headshot-3.jpg"
                alt="Ben Poon"
                width={500}
                height={600}
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
            </Fade>

            <SlideUp className="md:col-span-7 md:pt-8" delay={0.15}>
              <p className="text-sm tracking-[0.25em] uppercase text-charcoal/40 mb-8">Philosophy</p>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal leading-tight mb-10">
                Your tech should drive growth,
                <span className="text-charcoal/30 block mt-1">not hold it back.</span>
              </h2>

              <div className="space-y-6 text-charcoal-light leading-relaxed">
                <p>
                  Senior-level experience from building systems at scale, now applied directly to small and mid-size businesses. The focus is always the same: understand the real problem, then use the right tool to solve it.
                </p>
                <p>
                  That might be AI. It might be simple automation. It might be fixing technical debt. No overcomplicated solutions, no selling things you don&apos;t need.
                </p>
                <p>
                  Only taking on a few clients at a time. 2 spots open right now.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-charcoal/8">
                <span className="font-display font-semibold text-charcoal text-lg">Ben Poon</span>
                <span className="text-charcoal/40 text-sm block mt-1">{MESSAGING.founderTitle}</span>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Differentiators - Minimal */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <p className="text-sm tracking-[0.25em] uppercase text-charcoal/40 mb-20">Why</p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {[
              { title: 'Right-sized solutions', desc: "Matching the solution to the actual problem. No overselling, no overengineering. Just what you need." },
              { title: 'Plain English', desc: "You'll always understand what you're getting and why. No jargon, no hand-waving." },
              { title: 'Always reachable', desc: "I answer emails. I show up to calls. You'll never wonder where your project stands." },
              { title: 'Accessible pricing', desc: "Quality work without agency markup. Fair rates with direct access to the person doing the work." },
            ].map((item, i) => (
              <SlideUp key={item.title} delay={i * 0.08}>
                <div>
                  <h3 className="text-xl font-display font-semibold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{item.desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Horizontal */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <p className="text-sm tracking-[0.25em] uppercase text-charcoal/40 mb-20">Process</p>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { num: '01', title: MESSAGING.processSteps[0].title, desc: MESSAGING.processSteps[0].desc },
              { num: '02', title: MESSAGING.processSteps[1].title, desc: MESSAGING.processSteps[1].desc },
              { num: '03', title: MESSAGING.processSteps[2].title, desc: MESSAGING.processSteps[2].desc },
              { num: '04', title: MESSAGING.processSteps[3].title, desc: MESSAGING.processSteps[3].desc },
            ].map((step, i) => (
              <SlideUp key={step.num} delay={i * 0.1}>
                <div>
                  <span className="text-5xl font-display font-black text-charcoal/8 block mb-4">{step.num}</span>
                  <h3 className="text-lg font-display font-semibold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{step.desc}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Clean & Direct */}
      <section id="contact" className="py-32 md:py-44 px-6 md:px-12 lg:px-24 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <Fade>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream leading-[0.95] tracking-tight mb-8">
              Let&apos;s figure out
              <span className="text-cream/30 block">what you need.</span>
            </h2>

            <p className="text-cream/50 text-lg max-w-md mb-16 leading-relaxed">
              Free 20-minute call. No commitment. Just an honest conversation about what&apos;s not working.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-8">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 text-cream font-medium"
              >
                <span className="w-16 h-16 rounded-full border-2 border-cream/30 flex items-center justify-center group-hover:bg-cream group-hover:text-charcoal transition-all duration-500">
                  &rarr;
                </span>
                <span className="text-sm tracking-wider uppercase">Book a free call</span>
              </a>

              <div className="sm:pt-4">
                <a
                  href="mailto:hello@goodrobotco.com"
                  className="text-cream/40 hover:text-cream text-sm transition-colors duration-300"
                >
                  hello@goodrobotco.com
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  )
}
