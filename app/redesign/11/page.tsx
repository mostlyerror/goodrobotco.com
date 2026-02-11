'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import DesignSwitcher from '@/components/DesignSwitcher'
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

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(32px)',
      transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  )
}

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }: {
  end: number; suffix?: string; prefix?: string; duration?: number
}) {
  const { ref, inView } = useInView(0.5)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const startTime = performance.now()
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(end * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default function Redesign11() {
  return (
    <>
      <main className="bg-cream min-h-screen">
        {/* === CHAPTER 1: THE HOOK === */}
      {/* Editorial Hero - D1 typography + D5 narrative opening */}
      <section className="min-h-screen flex items-end pb-16 md:pb-24 pt-32 relative overflow-hidden">
        {/* Color blobs - D3 influence */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-coral/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-32 w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-mustard/8 rounded-full blur-3xl" />
        </div>

        {/* Vertical accent line - D1 */}
        <div className="absolute top-0 left-[8%] md:left-[12%] w-px h-full bg-gradient-to-b from-transparent via-coral/30 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm border border-coral/20">
                <div className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                2 spots open this month
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {/* D1 + D9 hero typography scale */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.88] tracking-tight text-charcoal mb-8">
                Grow your business.
                <br />
                <span className="text-coral italic">With the right tech.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              {/* D2 conversational voice */}
              <p className="text-xl md:text-2xl text-charcoal-light leading-relaxed max-w-xl mb-4">
                From lead generation to AI automation to custom tools. I help small businesses grow revenue, save time, and stop leaving money on the table.
              </p>
              <p className="text-charcoal-light/60 text-sm mb-10">
                (That&apos;s the whole pitch. Seriously.)
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex items-center gap-6 flex-wrap">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/30 hover:shadow-2xl hover:shadow-coral/40 hover:-translate-y-1 transition-all duration-300"
                >
                  Let&apos;s Talk Growth &rarr;
                </Link>
                <span className="text-charcoal-light text-sm">(Free. 20 min. No sales pitch.)</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* === CHAPTER 2: THE PROBLEM === */}
      {/* D5 narrative progression - acknowledge the pain */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Sound familiar?</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-12">
              Your business is ready to grow. Your tech is holding it back.
            </h2>
          </Reveal>

          <div className="space-y-4">
            {[
              { emoji: '🚫', text: '"We\'re turning down opportunities because our systems can\'t keep up."', color: 'border-l-coral' },
              { emoji: '💸', text: '"We\'re spending more on workarounds than it would cost to fix the real problem."', color: 'border-l-mustard' },
              { emoji: '🤖', text: '"We know AI could help us scale, but we don\'t know where to start."', color: 'border-l-sage' },
              { emoji: '⏳', text: '"My team spends hours on manual work instead of the stuff that actually grows revenue."', color: 'border-l-sky' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`flex items-start gap-4 p-6 bg-cream rounded-2xl border-l-4 ${item.color}`}>
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <p className="text-charcoal text-lg italic leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* === CHAPTER 2.5: THE COST === */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-coral/6 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">The cost of waiting</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-cream leading-tight mb-16">
              Every month you wait,<br />it compounds.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <Reveal delay={0.1}>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-black text-coral">
                  $<AnimatedCounter end={47} suffix="K" />
                </p>
                <p className="text-cream/50 text-sm leading-relaxed">Average wasted on wrong tech solutions</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-black text-sage">
                  <AnimatedCounter end={15} suffix="h" /><span className="text-2xl text-sage/60">/wk</span>
                </p>
                <p className="text-cream/50 text-sm leading-relaxed">Lost to manual processes your team shouldn&apos;t be doing</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-black text-mustard">
                  <AnimatedCounter end={68} suffix="%" />
                </p>
                <p className="text-cream/50 text-sm leading-relaxed">Of tech projects go over budget or never ship</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-black text-lavender">
                  <AnimatedCounter end={6} suffix=" mo" />
                </p>
                <p className="text-cream/50 text-sm leading-relaxed">Average delay from one bad technical decision</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.5}>
            <p className="text-cream/40 italic text-xl mt-16 font-display">
              It doesn&apos;t have to be this way.
            </p>
          </Reveal>
        </div>
      </section>

      {/* === CHAPTER 3: THE TRUTH === */}
      {/* D5 narrative turn + D1 quote treatment */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute top-10 left-10 text-[18rem] leading-none font-display font-black text-white/[0.02] select-none pointer-events-none">
          &ldquo;
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-8">The truth</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-cream leading-tight mb-8">
              Your tech should drive growth,
              <span className="text-cream/30 block mt-2">not hold it back.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-cream/60 text-lg leading-relaxed max-w-2xl mb-12">
              <p>
                I used to build systems at scale for big companies. Now I take that same experience and help small businesses build the technical foundations they need to grow &mdash; without the enterprise price tag.
              </p>
              <p>
                My thing is figuring out what will move the needle for <em>your</em> business. Sometimes that&apos;s AI. Sometimes it&apos;s a simple workflow fix. I&apos;ll always give you an honest answer about what&apos;s worth the investment.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex items-center gap-5">
              <Image
                src="/ben-headshot-3.jpg"
                alt="Ben Poon"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-cream/10"
              />
              <div>
                <span className="text-cream font-bold text-lg">Ben Poon</span>
                <span className="text-cream/40 block text-sm">{MESSAGING.founderTitle} &middot; 2-3 projects/month</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* === CHAPTER 4: WHAT I DELIVER === */}
      {/* D3 services with stats + D3 color boldness */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">How I help you grow</span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
              <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal">
                Here&apos;s how we stop the bleeding.
              </h2>
              <p className="text-charcoal-light text-sm">Each one directly targets what&apos;s holding you back.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MESSAGING.growthServices.map((service, i) => {
              const colors = ['bg-coral', 'bg-sage', 'bg-mustard', 'bg-sky', 'bg-lavender']
              return (
                <Reveal key={service.title} delay={i * 0.06}>
                  <div className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${colors[i] || 'bg-sage'} rounded-xl flex items-center justify-center`}>
                        <span className="text-xl text-white">{service.emoji}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-display font-bold text-charcoal mb-2">{service.title}</h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* === CHAPTER 5: THE PROOF === */}
      {/* D5 "Don't take my word for it" + D3 "In their words" */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">In their words</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-14">
              Don&apos;t take my word for it.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Reveal>
              <div className="bg-gradient-to-br from-sage/10 to-sage/5 border border-sage/20 rounded-2xl p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-mustard rounded-sm" />
                  ))}
                </div>
                <blockquote className="text-lg font-display italic text-charcoal leading-relaxed mb-6">
                  &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-sage/20">
                  <span className="font-bold text-charcoal">Nubia Saenz</span>
                  <span className="text-charcoal-light text-sm block">Caseworker, Almost Home</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-gradient-to-br from-coral/10 to-coral/5 border border-coral/20 rounded-2xl p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-mustard rounded-sm" />
                  ))}
                </div>
                <blockquote className="text-lg font-display italic text-charcoal leading-relaxed mb-6">
                  &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-coral/20">
                  <span className="font-bold text-charcoal">Sara Ho</span>
                  <span className="text-charcoal-light text-sm block">Founder, Let&apos;s Learn Together</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* === CHAPTER 6: HOW IT WORKS === */}
      {/* D2 "How this usually goes" casual process */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-sage/10 via-cream to-mustard/8">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">The process</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-4">
              How this usually goes.
            </h2>
            <p className="text-charcoal-light text-lg mb-14">Spoiler: it&apos;s pretty straightforward.</p>
          </Reveal>

          <div className="space-y-8 relative">
            {/* Connection line */}
            <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-coral via-sage via-mustard to-lavender hidden md:block" />

            {[
              { step: 1, title: 'Strategy Session', desc: "20 minutes. You tell me what's holding your business back. I'll tell you if I can help. If I can't, I'll point you somewhere better.", emoji: '☕', color: 'bg-coral' },
              { step: 2, title: 'Growth Audit', desc: "I dig into your lead flow, sales process, and operations. You get a clear, prioritized action plan with real pricing. No surprises.", emoji: '🔍', color: 'bg-sage' },
              { step: 3, title: 'Build & Launch', desc: "I build the systems. Regular updates, no jargon, no surprises. You see results fast.", emoji: '🛠️', color: 'bg-mustard' },
              { step: 4, title: 'Grow Together', desc: "I don't disappear after launch. Continuous optimization, new opportunities, and a partner who's invested in your growth.", emoji: '🤝', color: 'bg-lavender' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-6 md:gap-8">
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg relative z-10`}>
                    <span className="text-xl">{item.emoji}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-display font-bold text-charcoal mb-2">
                      <span className="text-charcoal/20 mr-2">{item.step}.</span>{item.title}
                    </h3>
                    <p className="text-charcoal-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CHAPTER 7: THE ASK === */}
      {/* D5 "This is the part where you reach out" + D2 coffee + D3 standout CTA */}
      <section id="contact" className="py-28 md:py-40 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-coral/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] bg-sage/6 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-8">The next step</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-cream leading-tight mb-6">
              This is the part where
              <br />
              <span className="text-coral italic">you reach out.</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-lg mx-auto mb-4 leading-relaxed">
              Every week you wait costs you time and money. Let&apos;s fix that. 20 minutes. You tell me the problem, I&apos;ll sketch the fix.
            </p>
            <p className="text-cream/30 text-sm mb-12">(No pitch. No pressure. Just real talk about growing your business.)</p>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 bg-coral text-white font-bold text-lg rounded-full shadow-2xl shadow-coral/30 hover:shadow-coral/50 hover:-translate-y-1 transition-all duration-300"
              >
                Let&apos;s Talk Growth &rarr;
              </a>
              <a href="mailto:hello@goodrobotco.com" className="text-cream/40 hover:text-cream text-sm transition-colors">
                or email hello@goodrobotco.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      </main>
      <DesignSwitcher />
    </>
  )
}
