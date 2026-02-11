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

function Glitch({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(-20px)',
      transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)',
    }}>
      {children}
    </div>
  )
}

export default function Redesign6() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <main className="bg-cream min-h-screen font-mono selection:bg-coral selection:text-cream">
      <style>{`
        .brutalist-border { border: 3px solid #2A2A2A; }
        .brutalist-border-thin { border: 1.5px solid #2A2A2A; }
        .marquee { overflow: hidden; white-space: nowrap; }
        .marquee-inner { display: inline-block; animation: marquee 20s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .hover-invert:hover { filter: invert(1); }
      `}</style>

      {/* Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-charcoal text-cream brutalist-border border-t-0 border-l-0 border-r-0">
        <div className="flex items-center justify-between px-4 py-2 text-xs">
          <span>GOOD ROBOT CO.</span>
          <span className="hidden md:block">GROWTH + TECHNOLOGY PARTNER</span>
          <span>{time}</span>
        </div>
      </div>

      {/* Ticker */}
      <div className="mt-[37px] bg-coral text-cream py-2 brutalist-border border-t-0 border-l-0 border-r-0">
        <div className="marquee">
          <span className="marquee-inner text-xs tracking-[0.3em] uppercase">
            LEAD GENERATION &mdash; SALES CONVERSION &mdash; CUSTOMER RETENTION &mdash; OPERATIONAL EFFICIENCY &mdash; GROWTH PARTNERSHIP &mdash;&nbsp;
            LEAD GENERATION &mdash; SALES CONVERSION &mdash; CUSTOMER RETENTION &mdash; OPERATIONAL EFFICIENCY &mdash; GROWTH PARTNERSHIP &mdash;&nbsp;
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Main headline block */}
            <div className="md:col-span-8 brutalist-border p-6 md:p-10">
              <Glitch>
                <span className="text-xs tracking-[0.3em] uppercase text-charcoal/50 block mb-6">
                  [EST. 2024] &mdash; HOUSTON, TX
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.85] text-charcoal uppercase tracking-tight mb-8">
                  GROW YOUR<br />
                  BUSINESS<br />
                  WITH THE<br />
                  <span className="bg-coral text-cream px-3 inline-block">RIGHT TECH.</span>
                </h1>
                <p className="text-sm md:text-base text-charcoal/70 max-w-lg leading-relaxed">
                  {MESSAGING.hero.subheadline}
                </p>
              </Glitch>
            </div>

            {/* Side panel */}
            <div className="md:col-span-4 brutalist-border md:border-l-0 flex flex-col">
              <div className="p-6 brutalist-border border-t-0 border-l-0 border-r-0 flex-1 flex items-center justify-center">
                <Image
                  src="/ben-headshot-3.jpg"
                  alt="Ben Poon"
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover grayscale contrast-125"
                  priority
                />
              </div>
              <div className="p-4 text-xs text-center">
                <span className="block font-bold text-charcoal uppercase">BEN POON</span>
                <span className="text-charcoal/50">TECHNOLOGY &amp; GROWTH PARTNER</span>
              </div>
            </div>
          </div>

          {/* Action row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 brutalist-border border-t-0">
            <Link
              href="#contact"
              className="p-5 text-center font-bold text-sm uppercase tracking-[0.2em] bg-charcoal text-cream hover:bg-coral transition-colors duration-200 brutalist-border border-b-0 border-l-0 border-r-0 md:border-r-[3px] md:border-b-[3px]"
            >
              [BOOK A CALL] &rarr;
            </Link>
            <Link
              href="#work"
              className="p-5 text-center font-bold text-sm uppercase tracking-[0.2em] text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-200 brutalist-border border-b-0 border-l-0 border-r-0 md:border-r-[3px] md:border-b-[3px]"
            >
              [VIEW WORK]
            </Link>
            <a
              href="mailto:hello@goodrobotco.com"
              className="p-5 text-center font-bold text-sm uppercase tracking-[0.2em] text-charcoal hover:bg-charcoal hover:text-cream transition-colors duration-200"
            >
              [EMAIL]
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points - Raw list */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Glitch>
            <div className="brutalist-border p-6 md:p-10 bg-charcoal text-cream">
              <span className="text-xs tracking-[0.3em] uppercase text-coral block mb-8">
                // COMMON_PROBLEMS.LOG
              </span>
              <div className="space-y-4 font-mono text-sm md:text-base">
                {[
                  { code: 'ERR_DEV_GHOSTED', msg: '"A developer ghosted us and our website is broken."' },
                  { code: 'ERR_OVERQUOTED', msg: '"Why am I being quoted $50K for simple software?"' },
                  { code: 'ERR_AI_CONFUSION', msg: '"Can AI actually help my business?"' },
                  { code: 'ERR_MANUAL_LABOR', msg: '"We spend hours every week on tasks that should be automatic."' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-coral flex-shrink-0">&gt;</span>
                    <div>
                      <span className="text-cream/40 text-xs block">[{item.code}]</span>
                      <span className="text-cream/80">{item.msg}</span>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-cream/10">
                  <span className="text-sage">&gt; SOLUTION: goodrobotco --assess --fix --maintain</span>
                </div>
              </div>
            </div>
          </Glitch>
        </div>
      </section>

      {/* Services - Grid */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Glitch>
            <div className="brutalist-border-thin p-4 mb-8 inline-block">
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal">SERVICES</span>
            </div>
          </Glitch>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {MESSAGING.growthServices.map((gs, i) => ({
              code: String(i + 1).padStart(3, '0'),
              title: gs.title.toUpperCase(),
              desc: gs.desc,
            })).map((s, i) => (
              <Glitch key={s.code}>
                <div className="brutalist-border p-6 md:p-8 hover:bg-charcoal hover:text-cream transition-colors duration-200 group cursor-default h-full">
                  <span className="text-xs text-charcoal/30 group-hover:text-cream/30 block mb-4 transition-colors">[{s.code}]</span>
                  <h3 className="text-lg font-bold tracking-wide mb-3">{s.title}</h3>
                  <p className="text-sm text-charcoal/60 group-hover:text-cream/60 leading-relaxed transition-colors">{s.desc}</p>
                </div>
              </Glitch>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Raw blocks */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <Glitch>
              <div className="brutalist-border bg-coral text-cream p-8 md:p-10">
                <span className="text-xs tracking-[0.2em] uppercase text-cream/60 block mb-6">TESTIMONIAL_01</span>
                <blockquote className="text-lg md:text-xl font-display italic leading-relaxed mb-6">
                  &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.&rdquo;
                </blockquote>
                <div className="text-xs uppercase tracking-wider">
                  <span className="font-bold">NUBIA SAENZ</span> // CASEWORKER, ALMOST HOME
                </div>
              </div>
            </Glitch>

            <Glitch>
              <div className="brutalist-border md:border-l-0 bg-sage text-cream p-8 md:p-10">
                <span className="text-xs tracking-[0.2em] uppercase text-cream/60 block mb-6">TESTIMONIAL_02</span>
                <blockquote className="text-lg md:text-xl font-display italic leading-relaxed mb-6">
                  &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
                </blockquote>
                <div className="text-xs uppercase tracking-wider">
                  <span className="font-bold">SARA HO</span> // FOUNDER, LET&apos;S LEARN TOGETHER
                </div>
              </div>
            </Glitch>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Glitch>
            <div className="brutalist-border-thin p-4 mb-8 inline-block">
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal">SELECTED WORK</span>
            </div>
          </Glitch>

          <div className="space-y-0">
            {[
              { num: '01', title: 'MAYDAY', type: 'AI LEAD GENERATION', stat: '~15 HRS/WK SAVED', href: '/case-studies/mayday' },
              { num: '02', title: 'SWAPP', type: 'EMERGENCY RESPONSE', stat: '80% FASTER INTAKE', href: '/case-studies/swapp' },
              { num: '03', title: 'LET\'S LEARN TOGETHER', type: 'BILLING OPTIMIZATION', stat: 'HOURS SAVED WEEKLY', href: '/case-studies/llt' },
            ].map((study) => (
              <Glitch key={study.num}>
                <Link href={study.href} className="group block brutalist-border p-6 md:p-8 hover:bg-charcoal hover:text-cream transition-colors duration-200">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <span className="col-span-1 text-xs text-charcoal/30 group-hover:text-cream/30 transition-colors">[{study.num}]</span>
                    <h3 className="col-span-3 text-lg md:text-xl font-bold tracking-wide">{study.title}</h3>
                    <span className="col-span-3 text-xs tracking-wider text-charcoal/50 group-hover:text-cream/50 transition-colors hidden md:block">{study.type}</span>
                    <span className="col-span-4 md:col-span-3 text-sm font-bold text-coral group-hover:text-mustard transition-colors text-right">{study.stat}</span>
                    <span className="col-span-1 text-right text-charcoal/30 group-hover:text-cream group-hover:translate-x-1 transition-all">&rarr;</span>
                  </div>
                </Link>
              </Glitch>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Glitch>
            <div className="brutalist-border p-8 md:p-12 bg-charcoal text-cream">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <span className="text-xs tracking-[0.3em] uppercase text-coral block mb-8">// PHILOSOPHY.TXT</span>
                  <h2 className="text-3xl md:text-4xl font-display font-black leading-tight mb-8 uppercase">
                    YOUR TECH SHOULD DRIVE GROWTH,<br />
                    NOT HOLD IT BACK.
                  </h2>
                  <div className="space-y-4 text-sm text-cream/60 leading-relaxed max-w-2xl">
                    <p>
                      Senior-level experience from building systems at scale. Now working directly with small businesses. No account managers. No runaround.
                    </p>
                    <p>
                      That might be AI. It might be simple automation. It might be fixing technical debt. I won&apos;t overcomplicate things or sell you solutions you don&apos;t need.
                    </p>
                    <p>
                      Only taking on a few clients at a time. 2 spots open right now.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-4 flex flex-col justify-between">
                  <div className="space-y-3 text-xs">
                    {[
                      { k: 'APPROACH', v: 'STRATEGY FIRST' },
                      { k: 'FOCUS', v: 'GROWTH-FOCUSED' },
                      { k: 'MODEL', v: 'EMBEDDED PARTNERSHIP' },
                      { k: 'PRICING', v: 'ACCESSIBLE' },
                      { k: 'AVAILABILITY', v: '2-3 PROJECTS/MO' },
                      { k: 'POST-LAUNCH', v: 'I STICK AROUND' },
                    ].map(item => (
                      <div key={item.k} className="flex justify-between border-b border-cream/10 pb-2">
                        <span className="text-cream/40">{item.k}</span>
                        <span className="text-cream font-bold">{item.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Glitch>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Glitch>
            <div className="brutalist-border-thin p-4 mb-8 inline-block">
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal">PROCESS</span>
            </div>
          </Glitch>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { num: '01', title: 'STRATEGY SESSION', desc: MESSAGING.processSteps[0].desc, bg: 'bg-coral' },
              { num: '02', title: 'GROWTH AUDIT', desc: MESSAGING.processSteps[1].desc, bg: 'bg-sage' },
              { num: '03', title: 'BUILD & LAUNCH', desc: MESSAGING.processSteps[2].desc, bg: 'bg-mustard' },
              { num: '04', title: 'GROW TOGETHER', desc: MESSAGING.processSteps[3].desc, bg: 'bg-lavender' },
            ].map((step) => (
              <Glitch key={step.num}>
                <div className={`brutalist-border ${step.bg} text-cream p-6 md:p-8 h-full`}>
                  <span className="text-xs text-cream/50 block mb-4">[STEP_{step.num}]</span>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-cream/70">{step.desc}</p>
                </div>
              </Glitch>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-4 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Glitch>
            <div className="brutalist-border p-10 md:p-16 text-center bg-charcoal text-cream">
              <span className="text-xs tracking-[0.3em] uppercase text-coral block mb-8">// INIT_CONTACT</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black uppercase leading-[0.85] mb-8">
                LET&apos;S FIGURE OUT<br />
                WHAT YOU<br />
                <span className="bg-coral text-cream px-3 inline-block">ACTUALLY NEED.</span>
              </h2>
              <p className="text-sm text-cream/50 max-w-md mx-auto mb-10">
                Book a free 20-minute call. No pitch, no pressure. Just an honest conversation about what&apos;s not working.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://calendly.com/benjamintpoon/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-border border-cream px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-cream hover:text-charcoal transition-colors duration-200"
                >
                  [BOOK CALL] &rarr;
                </a>
                <a
                  href="mailto:hello@goodrobotco.com"
                  className="text-xs text-cream/40 hover:text-cream tracking-wider transition-colors"
                >
                  HELLO@GOODROBOTCO.COM
                </a>
              </div>
            </div>
          </Glitch>
        </div>
      </section>

      {/* Footer ticker */}
      <div className="bg-charcoal text-cream py-2 brutalist-border border-b-0 border-l-0 border-r-0">
        <div className="marquee">
          <span className="marquee-inner text-xs tracking-[0.3em] uppercase text-cream/30">
            GOOD ROBOT CO. &mdash; HOUSTON TX &mdash; GROWTH + TECHNOLOGY PARTNER &mdash; hello@goodrobotco.com &mdash;&nbsp;
            GOOD ROBOT CO. &mdash; HOUSTON TX &mdash; GROWTH + TECHNOLOGY PARTNER &mdash; hello@goodrobotco.com &mdash;&nbsp;
          </span>
        </div>
      </div>
    </main>
  )
}
