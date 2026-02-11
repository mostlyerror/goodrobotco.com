'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import { MESSAGING } from '@/lib/messaging.constants'

function useInView(threshold = 0.2) {
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
      opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(30px)',
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
  const animatedRef = useRef(false)

  useEffect(() => {
    if (!inView || animatedRef.current) return
    animatedRef.current = true
    const start = 0
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(start + (end - start) * eased))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

function ProgressBar({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) {
  const { ref, inView } = useInView(0.3)
  return (
    <div ref={ref} className="mb-6" style={{ opacity: inView ? 1 : 0, transition: `opacity 0.5s ease ${delay}s` }}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-cream/80">{label}</span>
        <span className="text-sm font-bold text-coral">{value}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-coral to-mustard rounded-full"
          style={{
            width: inView ? `${value}%` : '0%',
            transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay + 0.3}s`,
          }}
        />
      </div>
    </div>
  )
}

export default function Redesign3() {
  return (
    <main className="bg-charcoal min-h-screen text-cream">
      {/* Hero - Data First */}
      <section className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-coral/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-sage/8 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">
                <div className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                <span className="text-xs font-bold tracking-wider uppercase text-cream/70">Growth + Technology Partner</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight mb-8">
                Grow your business
                <span className="block text-coral"> with the right tech.</span>
              </h1>

              <p className="text-lg text-cream/60 leading-relaxed max-w-lg mb-10">
                {MESSAGING.hero.subheadline}
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-coral text-white font-bold rounded-lg hover:bg-coral-hover transition-colors duration-300"
                >
                  Let&apos;s Talk Growth &rarr;
                </Link>
                <Link href="#results" className="text-cream/60 hover:text-cream font-medium transition-colors">
                  See Results
                </Link>
              </div>
            </div>

            {/* Hero metrics dashboard */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-coral" />
                <div className="w-3 h-3 rounded-full bg-mustard" />
                <div className="w-3 h-3 rounded-full bg-sage" />
                <span className="text-xs text-cream/40 ml-2 font-mono">client-results.dashboard</span>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-4xl md:text-5xl font-display font-black text-coral">
                    <AnimatedCounter end={15} prefix="~" />h
                  </div>
                  <div className="text-sm text-cream/50 mt-1">Saved weekly per client</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-black text-sage">
                    <AnimatedCounter end={80} suffix="%" />
                  </div>
                  <div className="text-sm text-cream/50 mt-1">Faster process times</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-black text-mustard">
                    <AnimatedCounter end={8300} suffix="+" />
                  </div>
                  <div className="text-sm text-cream/50 mt-1">Nights of homelessness prevented</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-display font-black text-sky">
                    <AnimatedCounter end={15} suffix="x" />
                  </div>
                  <div className="text-sm text-cream/50 mt-1">Capacity increase</div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <ProgressBar value={95} label="Client satisfaction" delay={0} />
                <ProgressBar value={100} label="Projects delivered on time" delay={0.15} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-24 md:py-32 bg-cream text-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-xl mb-16">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">Proven Results</span>
              <h2 className="text-3xl md:text-5xl font-display font-black mt-3">
                Every project. Measured.
              </h2>
            </div>
          </Reveal>

          {/* Case Study Cards with Data */}
          <div className="space-y-6">
            {[
              {
                title: 'Mayday',
                subtitle: 'AI-Powered Lead Generation',
                desc: 'Eliminated manual prospecting by building an AI system that scans businesses and delivers daily digests of pre-qualified leads.',
                metrics: [
                  { value: '~15', unit: 'hours', label: 'Eliminated weekly' },
                  { value: '10-15K', unit: '', label: 'Businesses scanned/month' },
                ],
                tags: ['AI Integration', 'Custom Development', 'Automation'],
                href: '/case-studies/mayday',
                accentColor: 'bg-coral',
              },
              {
                title: 'SWAPP',
                subtitle: 'Emergency Response System',
                desc: 'Intelligent emergency response system using automated workflows and digital forms, preventing thousands of nights of unsheltered homelessness.',
                metrics: [
                  { value: '80%', unit: '', label: 'Faster intake time' },
                  { value: '15x', unit: '', label: 'Capacity increase' },
                ],
                tags: ['Process Automation', 'Custom Development'],
                href: '/case-studies/swapp',
                accentColor: 'bg-sage',
              },
              {
                title: "Let's Learn Together",
                subtitle: 'Billing & Operations',
                desc: 'Helped Houston tutoring agency optimize billing operations and adopt the right business management platform, saving hours of work weekly.',
                metrics: [
                  { value: 'Hours', unit: '', label: 'Saved weekly' },
                  { value: '3', unit: '', label: 'Vendors evaluated' },
                ],
                tags: ['Tech Assessment', 'Process Optimization'],
                href: '/case-studies/llt',
                accentColor: 'bg-sky',
              },
            ].map((study, i) => (
              <Reveal key={study.title} delay={i * 0.1}>
                <Link href={study.href} className="group block bg-white rounded-2xl border border-charcoal/10 overflow-hidden hover:border-coral/30 hover:shadow-2xl transition-all duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Left accent */}
                    <div className={`md:col-span-1 ${study.accentColor} hidden md:block`} />

                    {/* Content */}
                    <div className="md:col-span-7 p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-display font-bold text-charcoal group-hover:text-coral transition-colors">{study.title}</h3>
                        <span className="text-sm text-charcoal-light">{study.subtitle}</span>
                      </div>
                      <p className="text-charcoal-light leading-relaxed mb-6">{study.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-charcoal/5 rounded-full text-xs font-medium text-charcoal/70">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="md:col-span-4 bg-charcoal/[0.02] p-8 md:p-10 flex items-center">
                      <div className="grid grid-cols-2 gap-6 w-full">
                        {study.metrics.map((metric, mi) => (
                          <div key={mi}>
                            <div className="text-3xl md:text-4xl font-display font-black text-charcoal">
                              {metric.value}<span className="text-lg text-charcoal-light">{metric.unit}</span>
                            </div>
                            <div className="text-xs text-charcoal-light mt-1">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Comparison */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">The Difference</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-cream mt-3">Before vs. After</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-px bg-white/10 rounded-2xl overflow-hidden">
            {/* Before */}
            <Reveal>
              <div className="bg-charcoal p-10 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-sm font-bold text-red-400/80 uppercase tracking-wider">Before</span>
                </div>
                <ul className="space-y-5">
                  {[
                    '20 hours a week on manual prospecting',
                    '45-minute intake process per person',
                    'Hours spent on billing reconciliation',
                    'Guessing which tools to invest in',
                    'Developers who disappear mid-project',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-cream/50">
                      <span className="text-red-400 mt-1 flex-shrink-0">&#x2715;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* After */}
            <Reveal delay={0.15}>
              <div className="bg-charcoal p-10 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-sage" />
                  <span className="text-sm font-bold text-sage uppercase tracking-wider">After</span>
                </div>
                <ul className="space-y-5">
                  {[
                    'AI delivers qualified leads daily',
                    '80% faster intake with digital forms',
                    'Automated billing saves hours weekly',
                    'Clear tech roadmap with ROI priorities',
                    'Ongoing support that doesn\'t vanish',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-cream">
                      <span className="text-sage mt-1 flex-shrink-0">&#x2713;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-cream text-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">Services</span>
                <h2 className="text-3xl md:text-5xl font-display font-black mt-3">What I deliver</h2>
              </div>
              <p className="text-charcoal-light max-w-md">Every engagement starts with honest assessment and ends with measurable outcomes.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {MESSAGING.growthServices.map((gs, i) => {
              const stats = [
                { stat: '10x', statLabel: 'pipeline growth' },
                { stat: '80%', statLabel: 'conversion lift' },
                { stat: '5x', statLabel: 'more reviews' },
                { stat: '15h', statLabel: 'saved weekly' },
                { stat: '∞', statLabel: 'availability' },
              ]
              return { icon: gs.emoji, title: gs.title, desc: gs.desc, ...stats[i] }
            }).map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="bg-white p-8 rounded-xl border border-charcoal/10 hover:border-coral/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div className="text-right">
                      <span className="text-2xl font-display font-black text-coral">{service.stat}</span>
                      <span className="block text-[10px] text-charcoal-light uppercase tracking-wider">{service.statLabel}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold text-charcoal mb-2">{service.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Metrics */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">Client Feedback</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-cream mt-3">In their words</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/[0.08] transition-colors duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-mustard" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-cream/90 leading-relaxed mb-6 italic">
                  &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork, and it has allowed them to speak up more on their needs.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div>
                    <span className="font-bold text-cream block">Nubia Saenz</span>
                    <span className="text-sm text-cream/50">Caseworker, Almost Home</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/[0.08] transition-colors duration-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-mustard" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg text-cream/90 leading-relaxed mb-6 italic">
                  &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div>
                    <span className="font-bold text-cream block">Sara Ho</span>
                    <span className="text-sm text-cream/50">Founder, Let&apos;s Learn Together</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About - Credibility */}
      <section className="py-24 md:py-32 bg-cream text-charcoal">
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
                    className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                  />
                  {/* Floating stat card */}
                  <div className="absolute -bottom-4 -right-4 bg-charcoal text-cream p-4 rounded-xl shadow-xl">
                    <div className="text-2xl font-display font-black text-coral">2-3</div>
                    <div className="text-[10px] text-cream/60 uppercase tracking-wider">Projects / month</div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">About</span>
                <h2 className="text-3xl md:text-4xl font-display font-black mt-3 mb-6">
                  Senior-level experience.<br />Small business focus.
                </h2>
                <div className="space-y-4 text-charcoal-light leading-relaxed">
                  <p>I bring experience from building systems at scale, now working directly with small and mid-size businesses. No account managers, no runaround. Just direct access to the person doing the work.</p>
                  <p>I only take on a few clients at a time so I can give each one real attention. 2 spots open right now.</p>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Response time', value: '<24h' },
                    { label: 'Completion rate', value: '100%' },
                    { label: 'Avg. time saved', value: '15h/wk' },
                    { label: 'Client retention', value: '95%' },
                  ].map(item => (
                    <div key={item.label} className="bg-white p-4 rounded-lg text-center border border-charcoal/5">
                      <div className="text-xl font-display font-black text-coral">{item.value}</div>
                      <div className="text-[10px] text-charcoal-light uppercase tracking-wider mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 md:py-36 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral mb-6 block">Get Started</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-cream mb-6 leading-tight">
              Ready to see <span className="text-coral">your numbers</span> improve?
            </h2>
            <p className="text-lg text-cream/50 max-w-xl mx-auto mb-12">
              Book a free 20-minute assessment. I&apos;ll tell you exactly what&apos;s possible, with projected outcomes, before you commit to anything.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-coral text-white font-bold text-lg rounded-lg hover:bg-coral-hover transition-all duration-300 shadow-xl shadow-coral/25"
              >
                Book Free Assessment &rarr;
              </a>
              <a
                href="mailto:hello@goodrobotco.com"
                className="text-cream/50 hover:text-cream font-medium transition-colors"
              >
                hello@goodrobotco.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
