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
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
      transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
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

export default function Redesign13() {
  return (
    <>
      <main className="bg-cream min-h-screen">
        {/* Hero - D9 refined type + D2 warmth */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-20 relative overflow-hidden">
        {/* Soft color atmosphere */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] bg-sage/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-coral/6 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-px bg-coral" />
              <span className="text-xs tracking-[0.3em] uppercase text-charcoal/40">Growth + Technology Partner</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-charcoal leading-[0.92] tracking-tight mb-8">
              Grow your business
              <br />with the
              <br /><span className="text-coral italic">right tech.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-xl">
              <p className="text-xl text-charcoal-light leading-relaxed mb-3">
                From lead generation to AI automation to custom tools. I help small businesses grow revenue, save time, and stop leaving money on the table.
              </p>
              <p className="text-charcoal-light/50 text-sm mb-10">(That&apos;s it. No 47-slide deck required.)</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/25 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                Let&apos;s Talk Growth &rarr;
              </Link>
              <Link href="#work" className="text-charcoal-light font-medium hover:text-coral transition-colors">
                See the results first
              </Link>
            </div>
          </Reveal>

          {/* Floating metric pills */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-3 mt-16">
              {[
                { label: '~15h saved/week', color: 'bg-sage/15 text-sage' },
                { label: '80% faster intake', color: 'bg-coral/10 text-coral' },
                { label: '$2M+ revenue impacted', color: 'bg-sky/15 text-sky' },
                { label: '2-3 projects/month', color: 'bg-mustard/15 text-mustard' },
              ].map(pill => (
                <span key={pill.label} className={`${pill.color} px-4 py-2 rounded-full text-sm font-bold`}>
                  {pill.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem acknowledgment - D5 style with D2 tone */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-12 text-center">
              You probably clicked because<br />one of these is <span className="text-coral italic">your</span> situation.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { emoji: '🚧', title: 'The Bottleneck', desc: "Your tech can\u0027t keep up with your ambition. Growth ideas die in a backlog." },
              { emoji: '💸', title: 'The Sticker Shock', desc: "You got quoted $50K for something that feels like it should cost way less \u2014 and you\u0027re not even sure it\u0027ll move the needle." },
              { emoji: '🤖', title: 'The AI Question', desc: "Everyone\u0027s using AI to grow faster. You\u0027re still trying to figure out where to start." },
              { emoji: '📈', title: 'The Ceiling', desc: "Your team spends hours on manual work instead of the creative, strategic work that actually grows revenue." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-cream p-6 rounded-2xl hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="font-display font-bold text-charcoal">{item.title}</h3>
                  </div>
                  <p className="text-charcoal-light text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Amplify - The cost of waiting */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">The cost of waiting</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-cream leading-tight mb-16">
              Every month you wait,<br />it compounds.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <Reveal delay={0.1}>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-black text-coral">
                  $<AnimatedCounter end={47} suffix="K" />
                </p>
                <p className="text-cream/50 text-sm leading-relaxed">Wasted on wrong solutions</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-black text-sage">
                  <AnimatedCounter end={15} suffix="h" /><span className="text-2xl text-sage/60">/wk</span>
                </p>
                <p className="text-cream/50 text-sm leading-relaxed">Lost to manual processes</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-black text-mustard">
                  <AnimatedCounter end={68} suffix="%" />
                </p>
                <p className="text-cream/50 text-sm leading-relaxed">Of tech projects over budget</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-display font-black text-sky">
                  <AnimatedCounter end={6} suffix=" mo" />
                </p>
                <p className="text-cream/50 text-sm leading-relaxed">Avg. delay from bad decisions</p>
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

      {/* Services - warm cards with D3 color accents */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">How I help you grow</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-14">
              Here&apos;s how we fix it.
            </h2>
          </Reveal>

          <div className="space-y-4">
            {MESSAGING.growthServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className={`bg-white border-l-4 ${i === 0 ? 'border-l-coral' : i === 1 ? 'border-l-sage' : i === 2 ? 'border-l-mustard' : i === 3 ? 'border-l-sky' : 'border-l-lavender'} p-6 md:p-8 rounded-r-xl flex items-start gap-5 hover:shadow-md transition-shadow duration-300`}>
                  <span className="text-2xl flex-shrink-0 mt-1">{s.emoji}</span>
                  <div>
                    <h3 className="text-lg font-display font-bold text-charcoal mb-1">{s.title}</h3>
                    <p className="text-charcoal-light text-[15px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - D3 "In their words" */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">In their words</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-cream mb-14">
              What clients actually say.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 bg-mustard rounded-sm" />)}
                </div>
                <blockquote className="text-lg text-cream/90 italic leading-relaxed mb-6">
                  &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/10">
                  <span className="font-bold text-cream">Nubia Saenz</span>
                  <span className="text-cream/40 text-sm block">Caseworker, Almost Home</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 bg-mustard rounded-sm" />)}
                </div>
                <blockquote className="text-lg text-cream/90 italic leading-relaxed mb-6">
                  &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/10">
                  <span className="font-bold text-cream">Sara Ho</span>
                  <span className="text-cream/40 text-sm block">Founder, Let&apos;s Learn Together</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About with metrics - D3 */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4 relative">
                <Image
                  src="/ben-headshot-3.jpg"
                  alt="Ben Poon"
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-3 -right-3 bg-charcoal text-cream px-4 py-3 rounded-xl shadow-lg">
                  <span className="text-lg font-display font-black text-coral">2-3</span>
                  <span className="text-[10px] text-cream/60 block">projects/mo</span>
                </div>
              </div>
              <div className="md:col-span-8">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">The person doing the work</span>
                <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                  Hi, I&apos;m Ben.
                </h2>
                <div className="space-y-4 text-charcoal-light leading-relaxed mb-8">
                  <p>Technology and growth partner for small and mid-size businesses. Senior engineer background, now working directly with founders who are ready to grow. You talk to me. I do the work. No layers in between.</p>
                  <p>I take on just a few projects at a time so I can invest real attention in each one. That means accessible pricing and a true partnership focused on your growth.</p>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { v: '<24h', l: 'Response' },
                    { v: '100%', l: 'Delivered' },
                    { v: '~15h', l: 'Avg. saved' },
                    { v: '95%', l: 'Retention' },
                  ].map(m => (
                    <div key={m.l} className="bg-white p-3 rounded-lg text-center">
                      <div className="text-base font-display font-black text-coral">{m.v}</div>
                      <div className="text-[9px] text-charcoal-light uppercase tracking-wider">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* D2 casual process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">How it works</span>
            <h2 className="text-3xl font-display font-bold text-charcoal mb-3">
              How this usually goes.
            </h2>
            <p className="text-charcoal-light mb-12">(Refreshingly uncomplicated.)</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '1', title: 'Strategy Session', desc: "20 minutes. You tell me what's holding your business back. I'll tell you if I can help.", color: 'bg-coral' },
              { n: '2', title: 'Growth Audit', desc: 'I dig into your lead flow, sales process, and operations. You get a clear, prioritized action plan.', color: 'bg-sage' },
              { n: '3', title: 'Build & Launch', desc: 'I build the systems. Regular updates, no jargon, no surprises. You see results fast.', color: 'bg-mustard' },
              { n: '4', title: 'Grow Together', desc: "I don't disappear after launch. Continuous optimization, new opportunities, and a partner who's invested in your growth.", color: 'bg-lavender' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className={`${s.color} text-cream p-6 rounded-2xl text-center`}>
                  <span className="text-4xl font-display font-black text-cream/20 block mb-2">{s.n}</span>
                  <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                  <p className="text-cream/70 text-sm">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - D5 "this is the part" + D2 coffee */}
      <section id="contact" className="py-28 md:py-40 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-coral/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-sage/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-cream leading-tight mb-6">
              This is the part
              <br />where you <span className="text-coral italic">reach out.</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-lg mx-auto mb-3 leading-relaxed">
              Every week you wait costs you time and money. 20 minutes. You tell me the problem, I&apos;ll sketch the solution.
            </p>
            <p className="text-cream/25 text-sm mb-12">(Free. Honest. No slide deck.)</p>
            <div className="flex flex-col items-center gap-5">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 bg-coral text-white font-bold text-lg rounded-full shadow-2xl shadow-coral/30 hover:-translate-y-1 transition-all duration-300"
              >
                Let&apos;s Talk Growth &rarr;
              </a>
              <a href="mailto:hello@goodrobotco.com" className="text-cream/40 hover:text-cream text-sm transition-colors">
                or just email hello@goodrobotco.com
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
