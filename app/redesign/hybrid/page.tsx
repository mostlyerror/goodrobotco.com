'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import DesignSwitcher from '@/components/DesignSwitcher'
import { MESSAGING } from '@/lib/messaging.constants'

/* ────────────────────────────────────────────
   Shared utilities
   ──────────────────────────────────────────── */

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

/* ────────────────────────────────────────────
   FAQ Accordion (inline, styled to match)
   ──────────────────────────────────────────── */

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void
}) {
  return (
    <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-coral shadow-lg' : 'border-charcoal/10 hover:border-charcoal/20'}`}>
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-cream/50 transition-colors duration-200 cursor-pointer"
        aria-expanded={isOpen}
        type="button"
      >
        <span className="font-semibold text-lg text-charcoal">{question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 text-coral transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`px-6 text-charcoal-light leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {answer}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────
   Contact Form
   ──────────────────────────────────────────── */

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '52da23ac-e8a4-4f34-bee4-4d47e100fd89',
          name: formData.name, email: formData.email, message: formData.message,
          subject: `New contact form submission from ${formData.name}`
        })
      })
      if (response.ok) { setSubmitStatus('success'); setFormData({ name: '', email: '', message: '' }) }
      else setSubmitStatus('error')
    } catch { setSubmitStatus('error') }
    finally { setIsSubmitting(false) }
  }

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8">
        <div className="text-5xl mb-4">&#9993;</div>
        <h4 className="text-xl font-display font-bold text-charcoal mb-2">Message Sent!</h4>
        <p className="text-charcoal-light mb-4 text-sm">I&apos;ll get back to you within 24 hours.</p>
        <button type="button" onClick={() => setSubmitStatus('idle')} className="text-coral font-medium hover:underline text-sm">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-cream/70 mb-1.5">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-white/10 rounded-lg border ${errors.name ? 'border-red-400' : 'border-white/20'} text-cream placeholder-cream/30 focus:border-coral focus:outline-none transition-colors`}
          disabled={isSubmitting} />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-cream/70 mb-1.5">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-white/10 rounded-lg border ${errors.email ? 'border-red-400' : 'border-white/20'} text-cream placeholder-cream/30 focus:border-coral focus:outline-none transition-colors`}
          disabled={isSubmitting} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cream/70 mb-1.5">Message</label>
        <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-white/10 rounded-lg border ${errors.message ? 'border-red-400' : 'border-white/20'} text-cream placeholder-cream/30 focus:border-coral focus:outline-none transition-colors resize-none`}
          disabled={isSubmitting} />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>
      {submitStatus === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong. Try again or email <a href="mailto:hello@goodrobotco.com" className="underline">hello@goodrobotco.com</a></p>
      )}
      <button type="submit" disabled={isSubmitting}
        className="w-full px-6 py-3 bg-coral text-white font-bold rounded-full hover:bg-coral/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

/* ════════════════════════════════════════════
   HYBRID PAGE
   V13 base + V16 hero energy + V14 before/after
   + current site decision matrix, FAQ, case studies
   ════════════════════════════════════════════ */

export default function HybridRedesign() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <>
      <main className="bg-cream min-h-screen">

        {/* ══════════════════════════════════════
           1. HERO - V16 boldness + V13 warmth
           ══════════════════════════════════════ */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[15%] right-[5%] w-[500px] h-[500px] bg-sage/8 rounded-full blur-[150px]" />
            <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-coral/6 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-sm text-charcoal/50 mb-12">
                <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                2 spots open this month
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-charcoal leading-[0.92] tracking-tight mb-6">
                Your tech is{' '}
                <em className="text-coral italic">holding your growth back.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="max-w-xl">
                <p className="text-xl text-charcoal-light leading-relaxed mb-2">
                  I help small businesses grow through lead generation, sales automation, and smarter technology &mdash; so you can fill your pipeline, close more deals, and stop leaving money on the table.
                </p>
                <p className="text-charcoal-light/50 text-sm mb-10">(No 47-slide deck required.)</p>
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

        {/* ══════════════════════════════════════
           2. PAIN POINTS - V13 "You probably clicked"
           ══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-12 text-center">
                You probably clicked because<br />one of these is <span className="text-coral italic">your</span> situation.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { emoji: '\ud83d\udea7', title: 'The Pipeline Gap', desc: "Leads come in but you respond too slowly and lose them to competitors who follow up faster." },
                { emoji: '\ud83d\udcb8', title: 'The Follow-Up Problem', desc: "You know you should follow up more, but nobody has time. Promising conversations stall and die." },
                { emoji: '\ud83e\udd16', title: 'The AI Question', desc: "Everyone\u0027s using AI to grow faster. You\u0027re still trying to figure out where to start." },
                { emoji: '\ud83d\udcc8', title: 'The Growth Ceiling', desc: "Your team spends hours on manual work instead of the revenue-generating activities that actually grow the business." },
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

        {/* ══════════════════════════════════════
           3. BEFORE / AFTER - from V14
           ══════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-charcoal text-cream">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Reveal>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Where you are vs. where you could be</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-cream mb-14">
                The gap between here and there.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </section>

        {/* ══════════════════════════════════════
           4. COST OF WAITING - V13/V11 urgency
           ══════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-charcoal border-t border-cream/5">
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

        {/* ══════════════════════════════════════
           5. SERVICES - V13 border-left cards
           ══════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-cream">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Reveal>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">How I help you grow</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-14">
                Here&apos;s how we grow it.
              </h2>
            </Reveal>

            <div className="space-y-4">
              {MESSAGING.growthServices.map((s, i) => {
                const accentMap: Record<string, string> = {
                  coral: 'border-l-coral',
                  sage: 'border-l-sage',
                  mustard: 'border-l-mustard',
                  sky: 'border-l-sky',
                  lavender: 'border-l-lavender',
                }
                const accent = accentMap[s.accent] || 'border-l-sage'
                return (
                  <Reveal key={s.title} delay={i * 0.05}>
                    <div className={`bg-white border-l-4 ${accent} p-6 md:p-8 rounded-r-xl flex items-start gap-5 hover:shadow-md transition-shadow duration-300`}>
                      <span className="text-2xl flex-shrink-0 mt-1">{s.emoji}</span>
                      <div>
                        <h3 className="text-lg font-display font-bold text-charcoal mb-1">{s.title}</h3>
                        <p className="text-charcoal-light text-[15px] leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
           6. TESTIMONIALS - V13 style
           ══════════════════════════════════════ */}
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

        {/* ══════════════════════════════════════
           7. CASE STUDIES - from current site, restyled
           ══════════════════════════════════════ */}
        <section id="work" className="py-24 md:py-32 bg-cream">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Reveal>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Real results</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-14">
                Recent work.
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  href: '/case-studies/mayday',
                  emoji: '\ud83c\udfaf',
                  title: 'Mayday: Lead Generation',
                  desc: 'AI-powered lead generation system that eliminates 15 hours/week of manual prospecting.',
                  stats: [{ value: '~15h', label: 'Saved weekly' }, { value: '10-15k', label: 'Businesses scanned/mo' }],
                  gradient: 'from-sage/20 to-sky/15',
                },
                {
                  href: '/case-studies/swapp',
                  emoji: '\ud83c\udfd4\ufe0f',
                  title: 'SWAPP: Emergency Response',
                  desc: 'Reduced intake time by 80% and prevented 8,300+ nights of unsheltered homelessness.',
                  stats: [{ value: '80%', label: 'Faster intake' }, { value: '15x', label: 'Capacity increase' }],
                  gradient: 'from-coral/20 to-mustard/15',
                },
                {
                  href: '/case-studies/llt',
                  emoji: '\ud83d\udcda',
                  title: 'Let\u2019s Learn Together',
                  desc: 'Optimized billing operations and platform selection, saving hours weekly while enabling growth.',
                  stats: [{ value: 'Hours', label: 'Saved weekly' }, { value: '3', label: 'Vendors evaluated' }],
                  gradient: 'from-lavender/20 to-mustard/10',
                },
              ].map((cs, i) => (
                <Reveal key={cs.title} delay={i * 0.08}>
                  <Link href={cs.href} className="group block bg-white rounded-2xl border border-charcoal/10 overflow-hidden hover:border-coral/30 hover:shadow-xl transition-all duration-300">
                    <div className={`bg-gradient-to-br ${cs.gradient} h-24 flex items-center justify-center`}>
                      <span className="text-3xl">{cs.emoji}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-display font-bold text-charcoal group-hover:text-coral transition-colors mb-2">
                        {cs.title}
                      </h3>
                      <p className="text-charcoal-light text-sm leading-relaxed mb-5">{cs.desc}</p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {cs.stats.map(stat => (
                          <div key={stat.label}>
                            <div className="text-xl font-display font-black text-coral">{stat.value}</div>
                            <div className="text-[10px] text-charcoal/50 uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <span className="flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                        Read case study <span>&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
           8. ABOUT - V13 with photo + metrics
           ══════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-white">
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
                  <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Your growth partner</span>
                  <h2 className="text-3xl font-display font-bold text-charcoal mb-6">
                    Hi, I&apos;m Ben.
                  </h2>
                  <div className="space-y-4 text-charcoal-light leading-relaxed mb-8">
                    <p>I work with founders who are ready to grow and need a growth partner who actually gets it. Senior engineer background, now working directly with small businesses to drive revenue through lead generation, sales automation, and smarter tech. You talk to me. I do the work. No layers in between.</p>
                    <p>I take on just a few projects at a time so I can invest real attention in each one. That means accessible pricing and a true partnership where I&apos;m as invested in your growth as you are.</p>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
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
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════
           9. PROCESS - V13 casual steps
           ══════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-cream">
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
                { n: '1', title: 'Strategy Session', desc: "20 min. You tell me what\u0027s holding your business back. I\u0027ll tell you if I can help.", color: 'bg-coral' },
                { n: '2', title: 'Growth Audit', desc: 'I dig into your lead flow, sales process, and operations. You get a clear action plan.', color: 'bg-sage' },
                { n: '3', title: 'Build & Launch', desc: 'I build the systems. Regular updates, no jargon. You see results fast.', color: 'bg-mustard' },
                { n: '4', title: 'Grow Together', desc: "I don\u0027t disappear after launch. Continuous optimization and a partner invested in your growth.", color: 'bg-lavender' },
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

        {/* ══════════════════════════════════════
           10. WHEN TO INVEST - from current site
           ══════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Reveal>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Not sure where to start?</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-14 text-center">
                When to invest in growth.
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6">
              {MESSAGING.investMatrix.map((category, i) => {
                const colorMap: Record<string, { gradient: string; text: string; check: string }> = {
                  sage: { gradient: 'from-sage/10 to-sage/5', text: 'text-sage', check: 'text-sage' },
                  sky: { gradient: 'from-sky/10 to-sky/5', text: 'text-sky', check: 'text-sky' },
                  mustard: { gradient: 'from-mustard/10 to-mustard/5', text: 'text-mustard', check: 'text-mustard' },
                  coral: { gradient: 'from-coral/10 to-coral/5', text: 'text-coral', check: 'text-coral' },
                }
                const colors = colorMap[category.color] || colorMap.sage
                return (
                  <Reveal key={category.title} delay={i * 0.08}>
                    <div className={`bg-gradient-to-br ${colors.gradient} p-8 rounded-2xl`}>
                      <h3 className={`text-xl font-display font-bold mb-5 ${colors.text}`}>{category.title}</h3>
                      <ul className="space-y-3">
                        {category.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-charcoal-light text-sm">
                            <span className={`${colors.check} mt-0.5 flex-shrink-0`}>&#x2713;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={0.3}>
              <div className="text-center mt-12">
                <p className="text-charcoal-light mb-5">Not sure which approach fits your situation?</p>
                <Link href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/25 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  Let&apos;s Find Your Growth Lever &rarr;
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════
           11. FAQ - from current site, restyled
           ══════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-cream">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <Reveal>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral block mb-4">Common questions</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4 text-center">
                What most people want to know.
              </h2>
              <p className="text-charcoal-light text-center mb-14">Before we start working together.</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                {MESSAGING.faqItems.map((faq, i) => (
                  <FAQItem
                    key={i}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === i}
                    onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════
           12. CTA - V13 energy + contact form
           ══════════════════════════════════════ */}
        <section id="contact" className="py-28 md:py-40 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-coral/8 rounded-full blur-[150px]" />
            <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-sage/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
            <Reveal>
              <div className="text-center mb-14">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-cream leading-tight mb-6">
                  This is the part
                  <br />where you <span className="text-coral italic">reach out.</span>
                </h2>
                <p className="text-lg text-cream/50 max-w-lg mx-auto mb-3 leading-relaxed">
                  Every week you wait, leads go cold and revenue slips away. 20 minutes. You tell me where you want to grow, I&apos;ll show you how.
                </p>
                <p className="text-cream/25 text-sm">(Free. Honest. No slide deck.)</p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Schedule a call */}
              <Reveal delay={0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-display font-bold text-cream mb-3">Schedule a Growth Call</h3>
                  <p className="text-cream/50 text-sm mb-6">Book a free 20-minute conversation about growing your business.</p>

                  <ul className="space-y-3 mb-8">
                    {[
                      'Identify your biggest growth bottleneck',
                      'Honest assessment of what will move the needle',
                      'Zero pressure or commitment required',
                      'Clear next steps if we\u2019re a good fit',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-cream/60 text-sm">
                        <span className="text-sage flex-shrink-0 mt-0.5">&#x2713;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://calendly.com/benjamintpoon/20min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-coral text-white font-bold text-center text-lg rounded-full shadow-xl shadow-coral/25 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                  >
                    Let&apos;s Talk Growth &rarr;
                  </a>
                  <p className="text-cream/30 text-xs text-center mt-3">20 minutes &middot; No commitment</p>
                </div>
              </Reveal>

              {/* Send a message */}
              <Reveal delay={0.2}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-display font-bold text-cream mb-3">Send a Message</h3>
                  <p className="text-cream/50 text-sm mb-6">Prefer email? I&apos;ll respond within 24 hours.</p>
                  <ContactForm />
                  <p className="text-cream/30 text-xs text-center mt-3">
                    or email <a href="mailto:hello@goodrobotco.com" className="text-cream/50 hover:text-cream transition-colors underline underline-offset-2">hello@goodrobotco.com</a>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>
      <DesignSwitcher />
    </>
  )
}
