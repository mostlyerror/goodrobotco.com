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
      transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
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
      setCount(Math.round(end * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

function ProgressBar({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) {
  const { ref, inView } = useInView(0.3)
  return (
    <div ref={ref} className="mb-5" style={{ opacity: inView ? 1 : 0, transition: `opacity 0.5s ease ${delay}s` }}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-charcoal/70">{label}</span>
        <span className="text-sm font-bold text-coral">{value}%</span>
      </div>
      <div className="h-2 bg-charcoal/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-coral to-mustard rounded-full" style={{
          width: inView ? `${value}%` : '0%',
          transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay + 0.3}s`,
        }} />
      </div>
    </div>
  )
}

export default function Redesign12() {
  return (
    <>
      <main className="bg-cream min-h-screen">
        {/* Hero - D3 colorful animated + D5 problem-first hook */}
      <section className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
        {/* Animated color blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-[10%] w-[500px] h-[500px] bg-coral/12 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-sage/10 rounded-full blur-[100px] animate-float-delayed" />
          <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-mustard/8 rounded-full blur-[100px] animate-float-fast" />
          <div className="absolute top-[20%] right-[30%] w-[250px] h-[250px] bg-sky/8 rounded-full blur-[80px] animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
                  <div className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                  <span className="text-charcoal/60">Growth + Technology Partner</span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-charcoal leading-[0.92] mb-6">
                  Grow your business
                  <br />with the right tech.
                  <br /><span className="text-coral italic">More leads. More
                  <br />revenue. Less hassle.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-lg text-charcoal-light leading-relaxed max-w-md mb-10">
                  From lead generation to AI automation to custom tools. I help small businesses grow revenue, save time, and stop leaving money on the table.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  >
                    Let&apos;s Talk Growth &rarr;
                  </Link>
                  <span className="text-charcoal-light text-sm">(Free &middot; 20 min &middot; Zero pressure)</span>
                </div>
              </Reveal>
            </div>

            {/* D3-style animated metrics dashboard */}
            <Reveal delay={0.2}>
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-charcoal/5">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-coral" />
                  <div className="w-3 h-3 rounded-full bg-sage" />
                  <div className="w-3 h-3 rounded-full bg-mustard" />
                  <span className="text-xs text-charcoal/30 ml-2">Client results to date</span>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-4xl font-display font-black text-coral">
                      <AnimatedCounter end={15} prefix="~" />h
                    </div>
                    <div className="text-xs text-charcoal-light mt-1">Saved weekly per client</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-black text-sage">
                      <AnimatedCounter end={3} suffix="x" />
                    </div>
                    <div className="text-xs text-charcoal-light mt-1">Average ROI within 6 months</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-black text-mustard">
                      <AnimatedCounter end={100} suffix="%" />
                    </div>
                    <div className="text-xs text-charcoal-light mt-1">On-time project delivery</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-black text-sky">
                      <AnimatedCounter end={2} prefix="$" suffix="M+" />
                    </div>
                    <div className="text-xs text-charcoal-light mt-1">Client revenue impacted</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-charcoal/10">
                  <ProgressBar value={95} label="Client satisfaction" delay={0} />
                  <ProgressBar value={100} label="Projects delivered on time" delay={0.15} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem - What's broken */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-12 text-center">
              Sound familiar?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { emoji: '\u{1F6A7}', title: 'The Bottleneck', desc: "Your tech can\u0027t keep up with your ambition. Growth ideas stall in a backlog that never shrinks." },
              { emoji: '\u{1F4B8}', title: 'The Sticker Shock', desc: "Quoted $50K for something that should cost a fraction. Every agency you call quotes even higher." },
              { emoji: '\u{1F916}', title: 'The AI Question', desc: "Your competitors are automating and scaling with AI. You\u0027re still trying to figure out where to start." },
              { emoji: '\u{1F4C8}', title: 'The Ceiling', desc: "Your team spends hours on manual work instead of the creative, strategic work that actually grows revenue." },
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

      {/* Amplify - Cost of inaction */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-coral/6 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
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

      {/* What I do - D3 colorful service cards + D2 casual copy */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">What I do</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-3">
              Here&apos;s how this ends.
            </h2>
            <p className="text-charcoal-light text-lg mb-14">Every service directly targets one of the problems above.</p>
          </Reveal>

          {/* D8-inspired varied layout: growth services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {MESSAGING.growthServices.slice(0, 2).map((s, i) => {
              const bgClasses = ['bg-coral text-cream', 'bg-sage text-cream']
              return (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className={`${bgClasses[i]} p-8 md:p-10 rounded-2xl h-full`}>
                    <span className="text-3xl block mb-4">{s.emoji}</span>
                    <h3 className="text-xl font-display font-bold mb-3">{s.title}</h3>
                    <p className="opacity-80 leading-relaxed text-[15px]">{s.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MESSAGING.growthServices.slice(2).map((s, i) => {
              const bgClasses = ['bg-mustard text-cream', 'bg-sky text-cream', 'bg-lavender text-cream']
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className={`${bgClasses[i] || 'bg-charcoal text-cream'} p-6 rounded-2xl h-full`}>
                    <span className="text-2xl block mb-3">{s.emoji}</span>
                    <h3 className="text-base font-display font-bold mb-1">{s.title}</h3>
                    <p className="opacity-70 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pull Quote - D1 style */}
      <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute top-8 left-8 text-[18rem] leading-none font-display font-black text-white/[0.03] select-none pointer-events-none">&ldquo;</div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <blockquote className="text-2xl md:text-4xl font-display italic text-cream leading-snug mb-8">
              &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-coral" />
              <div>
                <span className="text-cream font-bold">Nubia Saenz</span>
                <span className="text-cream/50 text-sm block">Caseworker, Almost Home</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Second testimonial */}
      <section className="py-16 bg-sage/10">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <blockquote className="text-xl md:text-2xl font-display italic text-charcoal leading-relaxed mb-6">
              &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
            </blockquote>
            <span className="text-charcoal-light text-sm">Sara Ho, Founder of Let&apos;s Learn Together</span>
          </Reveal>
        </div>
      </section>

      {/* About Me with metrics - D3 style */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4">
                <div className="relative">
                  <Image
                    src="/ben-headshot-3.jpg"
                    alt="Ben Poon"
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                  />
                  {/* Floating stat card - D3 */}
                  <div className="absolute -bottom-4 -right-4 bg-coral text-cream p-4 rounded-xl shadow-xl">
                    <div className="text-2xl font-display font-black">2-3</div>
                    <div className="text-[10px] text-cream/70 uppercase tracking-wider">projects/month</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">About me</span>
                <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-6">
                  I&apos;m Ben. Your {MESSAGING.founderTitle.toLowerCase()} for what&apos;s next.
                </h2>
                <div className="space-y-4 text-charcoal-light leading-relaxed mb-8">
                  <p>I work with founders who are ready to grow and need a technical partner who gets it. Senior-level experience from building systems at scale, now dedicated to helping small businesses punch above their weight.</p>
                  <p>I only take on a few projects at a time so I can give each one real attention. No account managers, no runaround. Just me, invested in your growth.</p>
                </div>
                {/* Metrics grid - D3 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: '<24h', label: 'Response time' },
                    { value: '100%', label: 'Completion rate' },
                    { value: '~15h', label: 'Avg. time saved' },
                    { value: '95%', label: 'Client retention' },
                  ].map(m => (
                    <div key={m.label} className="bg-cream p-3 rounded-lg text-center">
                      <div className="text-lg font-display font-black text-coral">{m.value}</div>
                      <div className="text-[10px] text-charcoal-light uppercase tracking-wider mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process - D2 "How this usually goes" */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">The process</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-3">
              How this usually goes.
            </h2>
            <p className="text-charcoal-light mb-14">(It&apos;s not complicated. That&apos;s the point.)</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { num: '01', title: 'Strategy Session', desc: "You tell me what's holding your business back. I'll tell you if I can help.", color: 'bg-coral' },
              { num: '02', title: 'Growth Audit', desc: "I dig into your lead flow, sales process, and operations. You get a clear plan.", color: 'bg-sage' },
              { num: '03', title: 'Build & Launch', desc: "I build the systems. Regular updates, no jargon, no surprises.", color: 'bg-mustard' },
              { num: '04', title: 'Grow Together', desc: "Continuous optimization, new opportunities. I grow with you.", color: 'bg-lavender' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className={`${step.color} text-cream p-6 rounded-2xl h-full`}>
                  <span className="text-3xl font-display font-black text-cream/30 block mb-3">{step.num}</span>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-cream/70 text-sm">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - D5 "reach out" + D2 coffee + D3 standout */}
      <section id="contact" className="py-28 md:py-40 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[25%] left-[20%] w-[500px] h-[500px] bg-coral/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[15%] right-[15%] w-[400px] h-[400px] bg-sage/6 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <p className="text-4xl mb-6">☕</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-cream leading-tight mb-6">
              This is the part where
              <br /><span className="text-coral italic">we grab coffee.</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-md mx-auto mb-4 leading-relaxed">
              Every week you wait costs you time and money. 20 minutes. You tell me the problem, I&apos;ll tell you the fix.
            </p>
            <p className="text-cream/30 text-sm mb-12">(It&apos;s free. No pitch. Pinky promise.)</p>
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
