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

function Emerge({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(24px)',
      transition: `all 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  )
}

export default function Redesign9() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0F0F0F' }}>
      <style>{`
        .gold-text { color: #C9A96E; }
        .gold-bg { background-color: #C9A96E; }
        .gold-border { border-color: #C9A96E; }
        .gold-text-muted { color: rgba(201,169,110,0.5); }
        .luxury-gradient { background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%); }
        .text-offwhite { color: #E8E2D6; }
        .text-offwhite-muted { color: rgba(232,226,214,0.5); }
        .text-offwhite-dim { color: rgba(232,226,214,0.25); }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(201,169,110,0.08), transparent); background-size: 200% 100%; animation: shimmer 3s ease-in-out infinite; }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
      `}</style>

      {/* Hero */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-24">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[200px]" style={{ backgroundColor: 'rgba(201,169,110,0.06)' }} />
        </div>

        {/* Thin gold line accent */}
        <div className="absolute top-0 left-1/2 w-px h-32 gold-bg opacity-20" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <Emerge>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-12 h-px gold-bg opacity-40" />
                <span className="text-xs tracking-[0.5em] uppercase gold-text-muted">Good Robot Co.</span>
                <div className="w-12 h-px gold-bg opacity-40" />
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-offwhite leading-[0.9] tracking-tight mb-8">
                Grow your business
                <br />
                <span className="font-display italic gold-text">with the right tech.</span>
              </h1>

              <p className="text-lg md:text-xl text-offwhite-muted max-w-lg mx-auto leading-relaxed mb-14">
                From lead generation to AI automation to custom tools. Helping small businesses grow revenue, save time, and stop leaving money on the table.
              </p>

              <div className="flex items-center justify-center gap-8">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-4 gold-text text-sm tracking-[0.2em] uppercase font-medium"
                >
                  <span className="w-14 h-14 rounded-full gold-border border flex items-center justify-center group-hover:gold-bg group-hover:text-black transition-all duration-700">
                    &rarr;
                  </span>
                  <span>Let&apos;s Talk Growth</span>
                </Link>
              </div>
            </div>
          </Emerge>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-px gold-bg opacity-10" />
      </section>

      {/* Philosophy - Cinematic */}
      <section className="py-32 md:py-44 relative luxury-gradient">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Emerge>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
              <div className="md:col-span-5">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-sm gold-border border opacity-20" />
                  <Image
                    src="/ben-headshot-3.jpg"
                    alt="Ben Poon"
                    width={500}
                    height={600}
                    className="w-full aspect-[3/4] object-cover"
                    style={{ filter: 'contrast(1.05) brightness(0.95)' }}
                  />
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-8 h-px gold-bg opacity-40" />
                  <span className="text-xs tracking-[0.4em] uppercase gold-text-muted">Philosophy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-offwhite leading-snug mb-8">
                  Your tech should drive growth,
                  <span className="text-offwhite-dim block mt-2">not hold it back.</span>
                </h2>
                <div className="space-y-5 text-offwhite-muted leading-relaxed">
                  <p>
                    Senior-level expertise from building systems at scale, now dedicated exclusively to select businesses. The approach is singular: understand the real problem, then deploy the precise solution.
                  </p>
                  <p>
                    Limited to 2-3 engagements per month. Each receives undivided attention, direct communication, and outcomes that speak for themselves.
                  </p>
                </div>
                <div className="mt-10 pt-8 border-t" style={{ borderColor: 'rgba(201,169,110,0.1)' }}>
                  <span className="font-display text-lg text-offwhite">Ben Poon</span>
                  <span className="text-offwhite-dim block text-sm mt-1">{MESSAGING.founderTitle}</span>
                </div>
              </div>
            </div>
          </Emerge>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 md:py-44" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Emerge>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px gold-bg opacity-40" />
                <span className="text-xs tracking-[0.4em] uppercase gold-text-muted">Services</span>
                <div className="w-8 h-px gold-bg opacity-40" />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-offwhite">
                Tailored Engagements
              </h2>
            </div>
          </Emerge>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(201,169,110,0.08)' }}>
            {MESSAGING.growthServices.map((service, i) => (
              <Emerge key={service.title} delay={i * 0.06}>
                <div className="p-10 md:p-12 hover:shimmer transition-all duration-700 group" style={{ backgroundColor: '#0F0F0F' }}>
                  <div className="w-8 h-px gold-bg opacity-30 mb-6 group-hover:w-16 group-hover:opacity-60 transition-all duration-700" />
                  <h3 className="text-lg font-display font-semibold text-offwhite mb-3">{service.emoji} {service.title}</h3>
                  <p className="text-sm text-offwhite-muted leading-relaxed">{service.desc}</p>
                </div>
              </Emerge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Dramatic */}
      <section className="py-32 md:py-44 luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-px h-full gold-bg opacity-5" />
          <div className="absolute top-0 right-[20%] w-px h-full gold-bg opacity-5" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Emerge>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="w-8 h-px gold-bg opacity-40" />
                <span className="text-xs tracking-[0.4em] uppercase gold-text-muted">Testimonial</span>
                <div className="w-8 h-px gold-bg opacity-40" />
              </div>
              <blockquote className="text-2xl md:text-4xl font-display italic text-offwhite leading-relaxed mb-10">
                &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.&rdquo;
              </blockquote>
              <div>
                <span className="gold-text font-medium">Nubia Saenz</span>
                <span className="text-offwhite-dim block text-sm mt-1">Caseworker, Almost Home</span>
              </div>
            </div>
          </Emerge>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-32 md:py-44" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Emerge>
            <div className="flex items-end justify-between mb-16">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px gold-bg opacity-40" />
                  <span className="text-xs tracking-[0.4em] uppercase gold-text-muted">Portfolio</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-offwhite">Selected Work</h2>
              </div>
              <Link href="/case-studies" className="gold-text text-sm tracking-wider uppercase hidden md:block hover:opacity-70 transition-opacity">
                View All &rarr;
              </Link>
            </div>
          </Emerge>

          <div className="space-y-0">
            {[
              { title: 'Mayday', type: 'AI Lead Generation', stat: '~15 hours', sub: 'eliminated weekly', href: '/case-studies/mayday' },
              { title: 'SWAPP', type: 'Emergency Response System', stat: '80%', sub: 'faster intake time', href: '/case-studies/swapp' },
              { title: "Let's Learn Together", type: 'Operations Optimization', stat: 'Hours', sub: 'saved every week', href: '/case-studies/llt' },
            ].map((study, i) => (
              <Emerge key={study.title} delay={i * 0.08}>
                <Link href={study.href} className="group block py-10 md:py-14 border-t" style={{ borderColor: 'rgba(201,169,110,0.1)' }}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-5">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-offwhite group-hover:gold-text transition-colors duration-500">{study.title}</h3>
                      <span className="text-sm text-offwhite-dim">{study.type}</span>
                    </div>
                    <div className="md:col-span-5">
                      <span className="text-3xl font-display font-bold gold-text">{study.stat}</span>
                      <span className="text-offwhite-dim text-sm block mt-1">{study.sub}</span>
                    </div>
                    <div className="md:col-span-2 text-right">
                      <span className="text-offwhite-dim group-hover:gold-text group-hover:translate-x-2 transition-all duration-500 inline-block text-lg">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </Emerge>
            ))}
          </div>
        </div>
      </section>

      {/* Second testimonial */}
      <section className="py-20 md:py-28 luxury-gradient">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Emerge>
            <blockquote className="text-xl md:text-2xl font-display italic text-offwhite leading-relaxed mb-6">
              &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
            </blockquote>
            <div>
              <span className="gold-text font-medium text-sm">Sara Ho</span>
              <span className="text-offwhite-dim text-sm"> / Founder, Let&apos;s Learn Together</span>
            </div>
          </Emerge>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-32 md:py-44" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Emerge>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px gold-bg opacity-40" />
                <span className="text-xs tracking-[0.4em] uppercase gold-text-muted">Distinction</span>
                <div className="w-8 h-px gold-bg opacity-40" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-offwhite">
                The Difference
              </h2>
            </div>
          </Emerge>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {[
              { title: 'Strategy First', desc: "I don't pitch solutions on the first call. I listen, understand your growth bottlenecks, and map out what will actually move the needle for your business." },
              { title: 'Growth-Focused', desc: "Every recommendation ties back to revenue. More leads, better conversion, happier customers. Tech is the how, not the what." },
              { title: 'Embedded Partnership', desc: "I'm not a vendor you hire and forget. I'm a long-term partner who understands your business and keeps improving things over time." },
              { title: 'Principled Pricing', desc: "Quality work at accessible rates. The value of direct engagement without the overhead of agency structures." },
            ].map((item, i) => (
              <Emerge key={item.title} delay={i * 0.08}>
                <div>
                  <div className="w-6 h-px gold-bg opacity-40 mb-4" />
                  <h3 className="text-xl font-display font-semibold text-offwhite mb-3">{item.title}</h3>
                  <p className="text-offwhite-muted leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              </Emerge>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 md:py-44 luxury-gradient">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Emerge>
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px gold-bg opacity-40" />
                <span className="text-xs tracking-[0.4em] uppercase gold-text-muted">Process</span>
                <div className="w-8 h-px gold-bg opacity-40" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-offwhite">
                The Engagement
              </h2>
            </div>
          </Emerge>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { num: 'I', title: 'Strategy Session', desc: "20 minutes. You tell me what's holding your business back. I'll tell you if I can help." },
              { num: 'II', title: 'Growth Audit', desc: 'I dig into your lead flow, sales process, and operations. You get a clear, prioritized action plan.' },
              { num: 'III', title: 'Build & Launch', desc: 'I build the systems. Regular updates, no jargon, no surprises. You see results fast.' },
              { num: 'IV', title: 'Grow Together', desc: "Continuous optimization, new opportunities, and a partner who's invested in your growth." },
            ].map((step, i) => (
              <Emerge key={step.num} delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-4xl font-display font-bold gold-text block mb-4">{step.num}</span>
                  <h3 className="text-lg font-display font-semibold text-offwhite mb-3">{step.title}</h3>
                  <p className="text-sm text-offwhite-muted leading-relaxed">{step.desc}</p>
                </div>
              </Emerge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-36 md:py-48 relative" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]" style={{ backgroundColor: 'rgba(201,169,110,0.04)' }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Emerge>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px gold-bg opacity-40" />
              <span className="text-xs tracking-[0.4em] uppercase gold-text-muted">Contact</span>
              <div className="w-12 h-px gold-bg opacity-40" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-offwhite leading-tight mb-6">
              Let us determine
              <span className="text-offwhite-dim block">how to grow your business.</span>
            </h2>
            <p className="text-lg text-offwhite-muted max-w-md mx-auto mb-14 leading-relaxed">
              A complimentary 20-minute strategy session. No obligation. An honest assessment of your growth potential.
            </p>
            <div className="flex flex-col items-center gap-8">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 gold-text text-sm tracking-[0.2em] uppercase font-medium"
              >
                <span className="w-16 h-16 rounded-full gold-border border flex items-center justify-center group-hover:gold-bg group-hover:text-black transition-all duration-700">
                  &rarr;
                </span>
                <span>Let&apos;s Talk Growth</span>
              </a>
              <a href="mailto:hello@goodrobotco.com" className="text-offwhite-dim text-sm hover:text-offwhite transition-colors duration-500">
                hello@goodrobotco.com
              </a>
            </div>
          </Emerge>
        </div>
      </section>
    </main>
  )
}
