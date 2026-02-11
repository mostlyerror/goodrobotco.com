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
      transform: inView ? 'translateY(0)' : 'translateY(30px)',
      transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  )
}

function Counter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const { ref, inView } = useInView(0.5)
  const [count, setCount] = useState(0)
  const started = useRef(false)
  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const t = performance.now()
    const go = (now: number) => {
      const p = Math.min((now - t) / 1800, 1)
      setCount(Math.round(end * (1 - Math.pow(1 - p, 3))))
      if (p < 1) requestAnimationFrame(go)
    }
    requestAnimationFrame(go)
  }, [inView, end])
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

export default function Redesign14() {
  return (
    <>
      <main className="bg-cream min-h-screen">
        {/* Hero - aspiration-first hook with data energy */}
      <section className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-coral/12 to-transparent rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sage/10 to-transparent rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-6">Growth + Technology Partner</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-charcoal leading-[0.9] mb-6">
              Grow your business
              <br />with the
              <br /><span className="text-coral italic">right tech.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl text-charcoal-light leading-relaxed max-w-xl mb-10">
              From lead generation to AI automation to custom tools. I help small businesses grow revenue, save time, and stop leaving money on the table.
            </p>
          </Reveal>

          {/* Inline stats row - immediate proof */}
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="bg-white px-5 py-3 rounded-full shadow-sm flex items-center gap-3">
                <span className="text-2xl font-display font-black text-coral"><Counter end={15} prefix="~" />h</span>
                <span className="text-xs text-charcoal-light">saved weekly</span>
              </div>
              <div className="bg-white px-5 py-3 rounded-full shadow-sm flex items-center gap-3">
                <span className="text-2xl font-display font-black text-sage"><Counter end={80} suffix="%" /></span>
                <span className="text-xs text-charcoal-light">faster processes</span>
              </div>
              <div className="bg-white px-5 py-3 rounded-full shadow-sm flex items-center gap-3">
                <span className="text-2xl font-display font-black text-mustard">$2M+</span>
                <span className="text-xs text-charcoal-light">revenue impacted</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/25 hover:-translate-y-1 transition-all duration-300"
              >
                Let&apos;s Talk Growth &rarr;
              </Link>
              <span className="text-charcoal-light/50 text-sm">(20 min. No pitch. Pinky promise.)</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Narrative turn: the before/after */}
      <section className="py-24 md:py-32 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Where you are vs. where you could be</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-cream mb-14">
              The gap between here and there.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Before column */}
            <Reveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-sm font-bold text-red-400/80 uppercase tracking-wider">What&apos;s holding you back</span>
                </div>
                <ul className="space-y-4">
                  {[
                    '20 hours a week on tasks that should be automated',
                    'Opportunities passing by because systems can\u2019t keep up',
                    'No technical partner \u2014 just vendors who disappear',
                    'Team doing data entry instead of strategy',
                    'Competitors shipping faster with less',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-cream/50">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">&#x2715;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* After column */}
            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-sage/30 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-sage" />
                  <span className="text-sm font-bold text-sage uppercase tracking-wider">Where you&apos;re headed</span>
                </div>
                <ul className="space-y-4">
                  {[
                    'AI handling the repetitive work \u2014 your team focuses on growth',
                    'Systems that scale with your ambition',
                    'A technical partner who\u2019s invested in your success',
                    'Your team doing their highest-value work',
                    'Shipping faster than competitors twice your size',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-cream">
                      <span className="text-sage mt-0.5 flex-shrink-0">&#x2713;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-4 pt-10 border-t border-cream/10">
              <h3 className="text-xl md:text-2xl font-display font-bold text-cream text-center mb-10">
                The cost of staying on the left:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-black text-coral">
                    $<Counter end={47} suffix="K" />
                  </p>
                  <p className="text-cream/40 text-xs mt-2">Wasted on wrong solutions</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-black text-coral">
                    <Counter end={15} suffix="h" /><span className="text-lg text-coral/50">/wk</span>
                  </p>
                  <p className="text-cream/40 text-xs mt-2">Lost to manual work</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-black text-coral">
                    <Counter end={68} suffix="%" />
                  </p>
                  <p className="text-cream/40 text-xs mt-2">Projects over budget</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-black text-coral">
                    <Counter end={6} suffix=" mo" />
                  </p>
                  <p className="text-cream/40 text-xs mt-2">Avg. delay</p>
                </div>
              </div>
              <p className="text-cream/30 italic text-center mt-8 font-display text-lg">These numbers compound every month.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services with embedded metrics */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Growth levers</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-3">
              Here&apos;s how this ends.
            </h2>
            <p className="text-charcoal-light mb-14">Every service directly targets what&apos;s holding you back.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MESSAGING.growthServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className={`${i === 0 ? 'bg-gradient-to-br from-coral/15 to-coral/5' : i === 1 ? 'bg-gradient-to-br from-sage/15 to-sage/5' : i === 2 ? 'bg-gradient-to-br from-mustard/15 to-mustard/5' : i === 3 ? 'bg-gradient-to-br from-sky/15 to-sky/5' : 'bg-gradient-to-br from-lavender/15 to-lavender/5'} border border-charcoal/5 rounded-2xl p-7 h-full flex flex-col justify-between hover:shadow-lg transition-shadow duration-300`}>
                  <div>
                    <span className="text-2xl block mb-3">{s.emoji}</span>
                    <h3 className="text-lg font-display font-bold text-charcoal mb-2">{s.title}</h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof section: testimonials + dispatches */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Don&apos;t take my word for it</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-14">
              The receipts.
            </h2>
          </Reveal>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Reveal>
              <div className="bg-charcoal text-cream rounded-2xl p-8">
                <blockquote className="text-lg font-display italic leading-relaxed mb-6">
                  &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-cream/10">
                  <div>
                    <span className="font-bold text-sm">Nubia Saenz</span>
                    <span className="text-cream/50 text-xs block">Caseworker, Almost Home</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-sage text-cream rounded-2xl p-8">
                <blockquote className="text-lg font-display italic leading-relaxed mb-6">
                  &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-cream/10">
                  <div>
                    <span className="font-bold text-sm">Sara Ho</span>
                    <span className="text-cream/70 text-xs block">Founder, Let&apos;s Learn Together</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* About + Process combined */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <Reveal className="md:col-span-5">
              <div className="relative">
                <Image
                  src="/ben-headshot-3.jpg"
                  alt="Ben Poon"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-coral text-cream p-4 rounded-xl shadow-xl">
                  <div className="text-2xl font-display font-black">2-3</div>
                  <div className="text-[10px] text-cream/70 uppercase">projects/mo</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  { v: '<24h', l: 'Response' },
                  { v: '100%', l: 'Delivered' },
                  { v: '~15h', l: 'Avg. saved' },
                  { v: '95%', l: 'Retention' },
                ].map(m => (
                  <div key={m.l} className="bg-cream p-3 rounded-lg text-center">
                    <div className="text-base font-display font-black text-coral">{m.v}</div>
                    <div className="text-[9px] text-charcoal-light uppercase tracking-wider">{m.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="md:col-span-7" delay={0.1}>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Who you&apos;re working with</span>
              <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                I&apos;m Ben. Your Technology &amp; Growth Partner.
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-10">
                Senior engineer who traded enterprise scale for working directly with growing businesses. You talk to me, I do the work. No middlemen, no runaround, no 47-slide decks.
              </p>

              <div className="space-y-6">
                {[
                  { n: '1', title: 'Strategy Session', desc: "20 minutes. You tell me what's holding your business back. I'll tell you if I can help.", color: 'bg-coral' },
                  { n: '2', title: 'Growth Audit', desc: 'I dig into your lead flow, sales process, and operations. You get a clear, prioritized action plan.', color: 'bg-sage' },
                  { n: '3', title: 'Build & Launch', desc: 'I build the systems. Regular updates, no jargon, no surprises. You see results fast.', color: 'bg-mustard' },
                  { n: '4', title: 'Grow Together', desc: "I don't disappear after launch. Continuous optimization, new opportunities, and a partner who's invested in your growth.", color: 'bg-lavender' },
                ].map((step, i) => (
                  <div key={step.n} className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${step.color} text-cream rounded-xl flex items-center justify-center font-bold flex-shrink-0`}>
                      {step.n}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-charcoal mb-1">{step.title}</h3>
                      <p className="text-charcoal-light text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA - narrative close */}
      <section id="contact" className="py-28 md:py-40 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/95 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[25%] left-[15%] w-[500px] h-[500px] bg-coral/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-sage/6 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <p className="text-5xl mb-6">☕</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-cream leading-tight mb-6">
              This is the part where
              <br />we <span className="text-coral italic">grab that coffee.</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-lg mx-auto mb-3 leading-relaxed">
              Every week you wait costs more than you think. 20 minutes. You tell me the problem, I&apos;ll tell you the fix.
            </p>
            <p className="text-cream/25 text-sm mb-12">(Free. No pitch. No deck. Just an honest conversation.)</p>
            <div className="flex flex-col items-center gap-5">
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
