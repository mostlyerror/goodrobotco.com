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

export default function Redesign16() {
  return (
    <>
      <main className="bg-cream min-h-screen">

        {/* ========== HERO - The Bold Opening ========== */}
        <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-20 py-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-body text-sm text-charcoal/50 mb-16">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              Growth + Technology Partner
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display font-black text-charcoal text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight max-w-6xl">
              Your tech should drive{' '}
              <em className="text-coral italic">growth, not hold it back.</em>
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="border-t border-charcoal/10 mt-12 md:mt-16 mb-8 md:mb-10 max-w-6xl" />
          </Reveal>

          <Reveal delay={0.35}>
            <p className="font-body text-charcoal/60 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
              From lead generation to AI automation to custom tools. I help small businesses grow revenue and save time.
            </p>
          </Reveal>

          <Reveal delay={0.6} className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-charcoal/30">
              <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
              <div className="w-px h-8 bg-charcoal/20" />
            </div>
          </Reveal>
        </section>

        {/* ========== PAIN POINTS - "The Truth" ========== */}
        <section className="bg-cream px-6 md:px-12 lg:px-20 py-28 md:py-36">
          <Reveal>
            <span className="inline-block font-body text-xs uppercase tracking-[0.25em] text-coral font-semibold mb-16 md:mb-20">
              The Uncomfortable Truth
            </span>
          </Reveal>

          <div className="max-w-5xl space-y-0">
            <Reveal delay={0.1}>
              <div className="border-t border-charcoal/10 py-10 md:py-14">
                <p className="font-display font-bold text-charcoal text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-snug">
                  <span className="text-charcoal/30 font-body text-base md:text-lg mr-4 tracking-wide">01 /</span>
                  You&apos;ve been quoted $50K for something that should cost $5K.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-t border-charcoal/10 py-10 md:py-14">
                <p className="font-display font-bold text-charcoal text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-snug">
                  <span className="text-charcoal/30 font-body text-base md:text-lg mr-4 tracking-wide">02 /</span>
                  Your last developer ghosted you mid-project.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="border-t border-charcoal/10 border-b py-10 md:py-14">
                <p className="font-display font-bold text-charcoal text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-snug">
                  <span className="text-charcoal/30 font-body text-base md:text-lg mr-4 tracking-wide">03 /</span>
                  You&apos;re spending 15 hours a week on tasks a robot could do in seconds.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== AMPLIFY - "The Cost" ========== */}
        <section className="bg-charcoal px-6 md:px-12 lg:px-20 py-28 md:py-40">
          <Reveal>
            <h2 className="font-display font-black text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight max-w-4xl mb-20 md:mb-28">
              Every month you wait, it compounds.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-5xl">
            <Reveal delay={0.1}>
              <div className="space-y-3">
                <p className="font-display font-black text-coral text-4xl md:text-5xl lg:text-6xl">
                  $<AnimatedCounter end={47} suffix="K" />
                </p>
                <p className="font-body text-cream/50 text-sm md:text-base leading-relaxed">
                  Average wasted on wrong tech solutions
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-3">
                <p className="font-display font-black text-sage text-4xl md:text-5xl lg:text-6xl">
                  <AnimatedCounter end={15} suffix="h" /><span className="text-2xl md:text-3xl text-sage/60">/wk</span>
                </p>
                <p className="font-body text-cream/50 text-sm md:text-base leading-relaxed">
                  Lost to manual processes
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-3">
                <p className="font-display font-black text-mustard text-4xl md:text-5xl lg:text-6xl">
                  <AnimatedCounter end={68} suffix="%" />
                </p>
                <p className="font-body text-cream/50 text-sm md:text-base leading-relaxed">
                  Of tech projects go over budget
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-3">
                <p className="font-display font-black text-lavender text-4xl md:text-5xl lg:text-6xl">
                  <AnimatedCounter end={6} suffix=" mo" />
                </p>
                <p className="font-body text-cream/50 text-sm md:text-base leading-relaxed">
                  Average delay from bad technical decisions
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.5}>
            <p className="font-display italic text-cream/40 text-xl md:text-2xl lg:text-3xl mt-20 md:mt-28 max-w-3xl">
              There&apos;s a fix. And it&apos;s simpler than you think.
            </p>
          </Reveal>
        </section>

        {/* ========== SOLUTION / SERVICES ========== */}
        <section className="bg-cream px-6 md:px-12 lg:px-20 py-28 md:py-40">
          <Reveal>
            <span className="inline-block font-body text-xs uppercase tracking-[0.25em] text-charcoal/40 font-semibold mb-6">
              What I Actually Do
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display font-black text-charcoal text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight max-w-3xl mb-16 md:mb-20">
              Here&apos;s the fix.<br />Simple. Direct.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
            {MESSAGING.growthServices.map((s, i) => (
              <Reveal key={s.title} delay={0.15 + i * 0.1}>
                <div className={`bg-white rounded-xl p-8 md:p-10 shadow-sm border-l-4 ${i === 0 ? 'border-coral' : i === 1 ? 'border-sage' : i === 2 ? 'border-mustard' : i === 3 ? 'border-sky' : 'border-lavender'} hover:shadow-md transition-shadow duration-300`}>
                  <h3 className="font-display font-bold text-charcoal text-xl md:text-2xl mb-3">
                    {s.emoji} {s.title}
                  </h3>
                  <p className="font-body text-charcoal/60 text-base md:text-lg leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ========== PROOF - Browser Window ========== */}
        <section className="bg-cream px-6 md:px-12 lg:px-20 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-charcoal/5">
                <div className="flex items-center gap-2 px-5 py-4 border-b border-charcoal/5 bg-charcoal/[0.02]">
                  <div className="w-3 h-3 rounded-full bg-coral/80" />
                  <div className="w-3 h-3 rounded-full bg-sage/80" />
                  <div className="w-3 h-3 rounded-full bg-mustard/80" />
                  <span className="ml-4 font-body text-xs text-charcoal/30 tracking-wide">goodrobotco.com/results</span>
                </div>

                <div className="p-8 md:p-12">
                  <h3 className="font-display font-bold text-charcoal text-2xl md:text-3xl mb-10 text-center">
                    Client Results
                  </h3>

                  <div className="grid grid-cols-2 gap-8 md:gap-12">
                    <Reveal delay={0.15}>
                      <div className="text-center space-y-2">
                        <p className="font-display font-black text-coral text-4xl md:text-5xl">
                          ~<AnimatedCounter end={15} suffix="h" />
                        </p>
                        <p className="font-body text-charcoal/50 text-sm md:text-base">
                          Saved weekly per client
                        </p>
                      </div>
                    </Reveal>

                    <Reveal delay={0.25}>
                      <div className="text-center space-y-2">
                        <p className="font-display font-black text-sage text-4xl md:text-5xl">
                          <AnimatedCounter end={80} suffix="%" />
                        </p>
                        <p className="font-body text-charcoal/50 text-sm md:text-base">
                          Faster process times
                        </p>
                      </div>
                    </Reveal>

                    <Reveal delay={0.35}>
                      <div className="text-center space-y-2">
                        <p className="font-display font-black text-mustard text-4xl md:text-5xl">
                          $<AnimatedCounter end={2} suffix="M+" />
                        </p>
                        <p className="font-body text-charcoal/50 text-sm md:text-base">
                          Client revenue impacted
                        </p>
                      </div>
                    </Reveal>

                    <Reveal delay={0.45}>
                      <div className="text-center space-y-2">
                        <p className="font-display font-black text-sky text-4xl md:text-5xl">
                          <AnimatedCounter end={15} suffix="x" />
                        </p>
                        <p className="font-body text-charcoal/50 text-sm md:text-base">
                          Capacity increase
                        </p>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <blockquote className="mt-10 md:mt-14 text-center max-w-2xl mx-auto">
                <p className="font-display italic text-charcoal/50 text-lg md:text-xl leading-relaxed">
                  &ldquo;Ben took a chaotic mess and turned it into something our whole team actually uses. No drama, no delays.&rdquo;
                </p>
                <cite className="block mt-4 font-body text-sm text-charcoal/30 not-italic">
                  Nonprofit Director, LA
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* ========== WHO AM I ========== */}
        <section className="bg-white px-6 md:px-12 lg:px-20 py-28 md:py-40">
          <Reveal>
            <span className="inline-block font-body text-xs uppercase tracking-[0.25em] text-charcoal/40 font-semibold mb-16 md:mb-20">
              Who You&apos;re Working With
            </span>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-6xl">
            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div className="relative aspect-square max-w-md rounded-2xl overflow-hidden">
                  <Image
                    src="/ben-headshot-3.jpg"
                    alt="Ben Poon"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="bg-cream/60 rounded-xl p-4 text-center">
                    <p className="font-display font-bold text-charcoal text-lg">&lt;24h</p>
                    <p className="font-body text-charcoal/40 text-xs mt-1">Response Time</p>
                  </div>
                  <div className="bg-cream/60 rounded-xl p-4 text-center">
                    <p className="font-display font-bold text-charcoal text-lg">100%</p>
                    <p className="font-body text-charcoal/40 text-xs mt-1">Delivered</p>
                  </div>
                  <div className="bg-cream/60 rounded-xl p-4 text-center">
                    <p className="font-display font-bold text-charcoal text-lg">~15h</p>
                    <p className="font-body text-charcoal/40 text-xs mt-1">Avg Saved</p>
                  </div>
                  <div className="bg-cream/60 rounded-xl p-4 text-center">
                    <p className="font-display font-bold text-charcoal text-lg">95%</p>
                    <p className="font-body text-charcoal/40 text-xs mt-1">Retention</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={0.2}>
                <div className="space-y-6">
                  <h2 className="font-display font-black text-charcoal text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
                    I&apos;m Ben. Your Technology &amp; Growth Partner.
                  </h2>
                  <p className="font-body text-charcoal/60 text-lg md:text-xl leading-relaxed">
                    Senior engineer who left enterprise scale to work directly with growing businesses. You talk to me, I do the work. No project managers. No middlemen. No 47-slide decks.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={0.3}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center">
                      <span className="font-display font-bold text-coral text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-charcoal text-lg">Strategy Session</h4>
                      <p className="font-body text-charcoal/50 text-base mt-1">20 minutes. You tell me what&apos;s holding your business back.</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.35}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                      <span className="font-display font-bold text-sage text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-charcoal text-lg">Growth Audit</h4>
                      <p className="font-body text-charcoal/50 text-base mt-1">I dig into your lead flow, sales process, and operations.</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.4}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-mustard/10 flex items-center justify-center">
                      <span className="font-display font-bold text-mustard text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-charcoal text-lg">Build &amp; Launch</h4>
                      <p className="font-body text-charcoal/50 text-base mt-1">I build the systems. Regular updates, no jargon.</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.45}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lavender/10 flex items-center justify-center">
                      <span className="font-display font-bold text-lavender text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-charcoal text-lg">Grow Together</h4>
                      <p className="font-body text-charcoal/50 text-base mt-1">Continuous optimization and a partner invested in your growth.</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PRE-FOOTER CTA ========== */}
        <section className="relative bg-charcoal overflow-hidden px-6 md:px-12 lg:px-20 py-28 md:py-40">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-coral/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sage/8 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="text-6xl md:text-7xl block mb-8">&#9749;</span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display font-black text-cream text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight mb-8">
                This is the part where we{' '}
                <em className="text-coral italic">grab coffee.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-body text-cream/60 text-lg md:text-xl leading-relaxed mb-4 max-w-xl mx-auto">
                20 minutes. You tell me what&apos;s holding your business back. I&apos;ll tell you if I can help.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="font-body text-cream/35 text-sm mb-10">
                (It&apos;s free. No pitch. Pinky promise.)
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-5">
                <Link
                  href="https://calendly.com/benjamintpoon/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-coral hover:bg-coral/90 text-white font-body font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5"
                >
                  Let&apos;s Talk Growth &rarr;
                </Link>

                <p className="font-body text-cream/30 text-sm">
                  or email{' '}
                  <Link
                    href="mailto:hello@goodrobotco.com"
                    className="text-cream/50 hover:text-cream transition-colors underline underline-offset-4 decoration-cream/20"
                  >
                    hello@goodrobotco.com
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="bg-charcoal border-t border-cream/5 px-6 md:px-12 lg:px-20 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-body text-cream/25 text-sm">
              &copy; 2025 Good Robot Co.
            </p>
            <Link
              href="mailto:hello@goodrobotco.com"
              className="font-body text-cream/25 text-sm hover:text-cream/50 transition-colors"
            >
              hello@goodrobotco.com
            </Link>
          </div>
        </footer>

      </main>
      <DesignSwitcher />
    </>
  )
}
