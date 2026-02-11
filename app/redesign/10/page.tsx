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

function SlideIn({ children, className = '', delay = 0, from = 'left' }: {
  children: React.ReactNode; className?: string; delay?: number; from?: 'left' | 'right'
}) {
  const { ref, inView } = useInView()
  const x = from === 'left' ? '-40px' : '40px'
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : `translateX(${x})`,
      transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  )
}

function FadeUp({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  )
}

export default function Redesign10() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      {/* Hero - Full Split */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-20 md:pt-0">
        {/* Left: Dark */}
        <div className="bg-charcoal text-cream flex items-center p-8 md:p-16 lg:p-20 relative overflow-hidden order-2 md:order-1">
          <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/8 rounded-full blur-[80px]" />

          <SlideIn from="left">
            <div className="relative z-10">
              <span className="text-xs tracking-[0.3em] uppercase text-cream/40 block mb-6">Growth + Technology Partner</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-[0.92] mb-8">
                Grow your
                <br />business with
                <br /><span className="text-coral italic">the right tech.</span>
              </h1>
              <p className="text-cream/50 text-lg leading-relaxed max-w-md mb-10">
                From lead generation to AI automation to custom tools. Helping small businesses grow revenue and save time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral text-cream font-bold rounded-full hover:bg-coral-hover transition-colors"
                >
                  Let&apos;s Talk Growth &rarr;
                </Link>
                <Link
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-cream/20 text-cream font-medium rounded-full hover:bg-cream/10 transition-colors"
                >
                  See Work
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Right: Light with image */}
        <div className="bg-sage/15 flex items-center justify-center p-8 md:p-12 order-1 md:order-2 min-h-[300px] md:min-h-0">
          <SlideIn from="right" delay={0.2}>
            <Image
              src="/good_robot_hero.png"
              alt="Person working collaboratively with a friendly robot assistant"
              width={600}
              height={400}
              priority
              className="w-full max-w-lg h-auto"
            />
          </SlideIn>
        </div>
      </section>

      {/* Pain Points - Split */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        {/* Left: Light - Questions */}
        <div className="bg-cream p-8 md:p-16 lg:p-20 flex items-center">
          <SlideIn from="left">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-coral block mb-6">Sound Familiar?</span>
              <div className="space-y-5">
                {[
                  { emoji: '👻', q: '"A developer ghosted us and our website is broken."' },
                  { emoji: '💸', q: '"Why am I being quoted $50K for simple software?"' },
                  { emoji: '🤖', q: '"Can AI actually help my business?"' },
                  { emoji: '😩', q: '"We spend hours on tasks that should be automatic."' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl">
                    <span className="text-xl flex-shrink-0">{item.emoji}</span>
                    <p className="text-charcoal italic text-[15px] leading-relaxed">{item.q}</p>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Right: Dark - Philosophy */}
        <div className="bg-charcoal text-cream p-8 md:p-16 lg:p-20 flex items-center">
          <SlideIn from="right" delay={0.1}>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-coral block mb-6">The Approach</span>
              <h2 className="text-3xl md:text-4xl font-display font-black leading-tight mb-6">
                Your tech should<br />drive growth.
              </h2>
              <div className="space-y-4 text-cream/60 leading-relaxed">
                <p>
                  I bring senior-level experience from building systems at scale. Every recommendation ties back to revenue &mdash; more leads, better conversion, happier customers.
                </p>
                <p>
                  I&apos;m not a vendor you hire and forget. I&apos;m a long-term partner who understands your business and keeps improving things over time.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-cream/10">
                <Image
                  src="/ben-headshot-3.jpg"
                  alt="Ben Poon"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-cream/20"
                />
                <div>
                  <span className="text-cream font-bold">Ben Poon</span>
                  <span className="text-cream/40 text-sm block">{MESSAGING.founderTitle}</span>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Services - Alternating Split */}
      <section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column services */}
          <div className="divide-y divide-charcoal/10">
            {MESSAGING.growthServices.slice(0, 3).map((s, i) => (
              <SlideIn key={s.title} from="left" delay={i * 0.08}>
                <div className="p-8 md:p-12 hover:bg-cream/50 transition-colors duration-300">
                  <span className="text-3xl block mb-4">{s.emoji}</span>
                  <h3 className="text-xl font-display font-bold text-charcoal mb-2">{s.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{s.desc}</p>
                </div>
              </SlideIn>
            ))}
          </div>

          {/* Right column services */}
          <div className="divide-y divide-charcoal/10 bg-charcoal/[0.02]">
            {MESSAGING.growthServices.slice(3).map((s, i) => (
              <SlideIn key={s.title} from="right" delay={i * 0.08}>
                <div className="p-8 md:p-12 hover:bg-cream/50 transition-colors duration-300">
                  <span className="text-3xl block mb-4">{s.emoji}</span>
                  <h3 className="text-xl font-display font-bold text-charcoal mb-2">{s.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{s.desc}</p>
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-coral text-cream p-8 md:p-16 lg:p-20 flex items-center">
          <SlideIn from="left">
            <div>
              <svg className="w-10 h-10 text-cream/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl font-display italic leading-relaxed mb-6">
                [The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.
              </blockquote>
              <div>
                <span className="font-bold">Nubia Saenz</span>
                <span className="text-cream/70 block text-sm">Caseworker, Almost Home</span>
              </div>
            </div>
          </SlideIn>
        </div>

        <div className="bg-sage text-cream p-8 md:p-16 lg:p-20 flex items-center">
          <SlideIn from="right" delay={0.1}>
            <div>
              <svg className="w-10 h-10 text-cream/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl font-display italic leading-relaxed mb-6">
                LOVING this new system! Saves me so many hours of tedious work!
              </blockquote>
              <div>
                <span className="font-bold">Sara Ho</span>
                <span className="text-cream/70 block text-sm">Founder, Let&apos;s Learn Together</span>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Case Studies - Split Cards */}
      <section id="work" className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <FadeUp>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-coral block mb-3">Selected Work</span>
                <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal">Recent Projects</h2>
              </div>
              <Link href="/case-studies" className="text-coral font-medium text-sm hover:underline hidden md:block">
                All case studies &rarr;
              </Link>
            </div>
          </FadeUp>

          <div className="space-y-6">
            {[
              {
                title: 'Mayday',
                subtitle: 'AI Lead Generation',
                desc: 'AI-powered system scanning 10-15K businesses monthly, saving 20 hours a week on manual prospecting.',
                stat: '~15h', statLabel: 'saved weekly',
                stat2: '10-15K', stat2Label: 'scanned/month',
                colors: 'bg-charcoal text-cream',
                statColors: 'bg-cream/10',
                href: '/case-studies/mayday',
              },
              {
                title: 'SWAPP',
                subtitle: 'Emergency Response',
                desc: 'Digital intake system reducing processing time by 80%, helping prevent 8,300+ nights of unsheltered homelessness.',
                stat: '80%', statLabel: 'faster intake',
                stat2: '8,300+', stat2Label: 'nights prevented',
                colors: 'bg-sage text-cream',
                statColors: 'bg-cream/10',
                href: '/case-studies/swapp',
              },
              {
                title: "Let's Learn Together",
                subtitle: 'Operations Optimization',
                desc: 'Billing optimization and platform selection for a growing Houston tutoring agency.',
                stat: 'Hours', statLabel: 'saved weekly',
                stat2: '3', stat2Label: 'vendors evaluated',
                colors: 'bg-coral text-cream',
                statColors: 'bg-cream/10',
                href: '/case-studies/llt',
              },
            ].map((study, i) => (
              <FadeUp key={study.title} delay={i * 0.08}>
                <Link href={study.href} className="group block">
                  <div className={`grid grid-cols-1 md:grid-cols-3 ${study.colors} rounded-2xl overflow-hidden`}>
                    <div className="md:col-span-2 p-8 md:p-10">
                      <span className="text-xs tracking-[0.2em] uppercase opacity-50 block mb-3">{study.subtitle}</span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:opacity-80 transition-opacity">{study.title}</h3>
                      <p className="opacity-70 leading-relaxed text-[15px]">{study.desc}</p>
                      <div className="mt-6 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity text-sm font-medium">
                        Read case study <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </div>
                    </div>
                    <div className={`${study.statColors} p-8 md:p-10 flex flex-col justify-center`}>
                      <div className="mb-6">
                        <span className="text-4xl font-display font-black">{study.stat}</span>
                        <span className="text-sm opacity-60 block mt-1">{study.statLabel}</span>
                      </div>
                      <div>
                        <span className="text-4xl font-display font-black">{study.stat2}</span>
                        <span className="text-sm opacity-60 block mt-1">{study.stat2Label}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me - Split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-8 md:p-16 lg:p-20">
          <SlideIn from="left">
            <span className="text-xs tracking-[0.3em] uppercase text-coral block mb-6">Why Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-10 leading-tight">
              Direct access.<br />No layers.
            </h2>
            <div className="space-y-6">
              {[
                { icon: '🎯', title: 'Right-Sized', desc: "I match the solution to your actual problem." },
                { icon: '💬', title: 'No Jargon', desc: "Plain English. You always understand what you're getting." },
                { icon: '📱', title: 'Responsive', desc: "I answer emails and show up to calls." },
                { icon: '💰', title: 'Fair Pricing', desc: "Quality work without the agency markup." },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-charcoal-light text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>

        <div className="bg-charcoal text-cream p-8 md:p-16 lg:p-20">
          <SlideIn from="right" delay={0.1}>
            <span className="text-xs tracking-[0.3em] uppercase text-coral block mb-6">Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-black mb-10 leading-tight">
              Four steps.<br />No surprises.
            </h2>
            <div className="space-y-8">
              {[
                { num: '01', title: 'Strategy Session', desc: "20 minutes. You tell me what's holding your business back. I'll tell you if I can help." },
                { num: '02', title: 'Growth Audit', desc: "I dig into your lead flow, sales process, and operations. You get a clear, prioritized action plan." },
                { num: '03', title: 'Build & Launch', desc: "I build the systems. Regular updates, no jargon, no surprises. You see results fast." },
                { num: '04', title: 'Grow Together', desc: "I don't disappear after launch. Continuous optimization, new opportunities, and a partner invested in your growth." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-5">
                  <span className="text-2xl font-display font-black text-coral flex-shrink-0">{step.num}</span>
                  <div>
                    <h3 className="font-bold mb-1">{step.title}</h3>
                    <p className="text-cream/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* CTA - Full Split */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        {/* Left: Coral CTA */}
        <div className="bg-coral text-cream p-8 md:p-16 lg:p-20 flex items-center">
          <SlideIn from="left">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black leading-tight mb-6">
                Let&apos;s figure out<br />how to grow.
              </h2>
              <p className="text-cream/80 text-lg mb-10 max-w-md leading-relaxed">
                Free 20-minute strategy session. No pitch, no pressure. Just an honest conversation about growing your business.
              </p>
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-cream text-coral font-bold text-lg rounded-full hover:bg-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                Let&apos;s Talk Growth &rarr;
              </a>
            </div>
          </SlideIn>
        </div>

        {/* Right: Dark with contact info */}
        <div className="bg-charcoal text-cream p-8 md:p-16 lg:p-20 flex items-center">
          <SlideIn from="right" delay={0.1}>
            <div>
              <h3 className="text-2xl font-display font-bold mb-8">Or get in touch directly</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-cream/40 block mb-2">Email</span>
                  <a href="mailto:hello@goodrobotco.com" className="text-xl text-cream hover:text-coral transition-colors font-medium">
                    hello@goodrobotco.com
                  </a>
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-cream/40 block mb-2">Location</span>
                  <span className="text-xl text-cream">Houston, Texas</span>
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-cream/40 block mb-2">Availability</span>
                  <span className="text-xl text-cream">2-3 projects per month</span>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>
    </main>
  )
}
