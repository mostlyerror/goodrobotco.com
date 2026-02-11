'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { MESSAGING } from '@/lib/messaging.constants'

function useInView(threshold = 0.1) {
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

function BentoCell({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`rounded-3xl overflow-hidden ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.95)',
        transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function Redesign8() {
  return (
    <main className="bg-charcoal min-h-screen p-3 md:p-4 pt-24 md:pt-28">
      {/* Hero Bento Grid */}
      <section className="max-w-7xl mx-auto mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[120px] md:auto-rows-[140px]">
          {/* Main headline - large cell */}
          <BentoCell className="col-span-2 md:col-span-3 lg:col-span-4 row-span-3 bg-cream p-8 md:p-12 flex flex-col justify-between" delay={0}>
            <div>
              <div className="inline-flex items-center gap-2 bg-charcoal/5 px-3 py-1.5 rounded-full mb-6">
                <div className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                <span className="text-xs font-medium text-charcoal/60">Accepting projects</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-charcoal leading-[0.95]">
                Grow your business<br />
                with the right<br />
                <span className="text-coral">tech.</span>
              </h1>
            </div>
            <p className="text-charcoal-light text-base md:text-lg max-w-md mt-6">
              From lead generation to AI automation to custom tools. Helping small businesses grow revenue and save time.
            </p>
          </BentoCell>

          {/* Photo cell */}
          <BentoCell className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 bg-sage/20" delay={0.1}>
            <Image
              src="/ben-headshot-3.jpg"
              alt="Ben Poon"
              width={400}
              height={400}
              priority
              className="w-full h-full object-cover"
            />
          </BentoCell>

          {/* CTA cell */}
          <BentoCell className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 bg-coral flex items-center justify-center hover:bg-coral-hover transition-colors duration-300 cursor-pointer" delay={0.15}>
            <a href="https://calendly.com/benjamintpoon/20min" target="_blank" rel="noopener noreferrer" className="text-cream font-bold text-center px-4">
              <span className="block text-lg">Let&apos;s Talk Growth</span>
              <span className="text-cream/70 text-xs">Free &bull; 20 min</span>
            </a>
          </BentoCell>

          {/* Stats cells */}
          <BentoCell className="col-span-1 row-span-1 bg-white/5 p-5 flex flex-col justify-center" delay={0.2}>
            <span className="text-3xl font-display font-black text-coral">~15h</span>
            <span className="text-xs text-cream/50 mt-1">saved weekly</span>
          </BentoCell>

          <BentoCell className="col-span-1 row-span-1 bg-white/5 p-5 flex flex-col justify-center" delay={0.25}>
            <span className="text-3xl font-display font-black text-sage">80%</span>
            <span className="text-xs text-cream/50 mt-1">faster intake</span>
          </BentoCell>

          <BentoCell className="col-span-1 row-span-1 bg-white/5 p-5 flex flex-col justify-center" delay={0.3}>
            <span className="text-3xl font-display font-black text-mustard">15x</span>
            <span className="text-xs text-cream/50 mt-1">capacity gain</span>
          </BentoCell>

          <BentoCell className="col-span-1 row-span-1 bg-white/5 p-5 flex flex-col justify-center" delay={0.35}>
            <span className="text-3xl font-display font-black text-sky">2-3</span>
            <span className="text-xs text-cream/50 mt-1">projects/month</span>
          </BentoCell>
        </div>
      </section>

      {/* Services Bento */}
      <section className="max-w-7xl mx-auto mb-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[180px]">
          {/* Section label */}
          <BentoCell className="col-span-2 md:col-span-3 lg:col-span-2 row-span-1 bg-cream p-6 flex items-end" delay={0}>
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40">What I Do</span>
              <h2 className="text-3xl font-display font-black text-charcoal mt-1">Services</h2>
            </div>
          </BentoCell>

          {/* Service cells */}
          {MESSAGING.growthServices.map((s, i) => {
            const bgClasses = ['bg-coral/90 text-cream', 'bg-sage/90 text-cream', 'bg-mustard/90 text-cream', 'bg-sky/90 text-cream', 'bg-lavender/90 text-cream']
            return (
              <BentoCell key={s.title} className={`col-span-1 row-span-1 ${bgClasses[i] || 'bg-charcoal text-cream'} p-5 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300`} delay={i * 0.06}>
                <span className="text-3xl">{s.emoji}</span>
                <div>
                  <h3 className="font-bold text-sm mb-0.5">{s.title}</h3>
                  <p className="text-xs opacity-70">{s.desc}</p>
                </div>
              </BentoCell>
            )
          })}
        </div>
      </section>

      {/* Testimonials + Case Studies Bento */}
      <section className="max-w-7xl mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {/* Testimonial 1 - large */}
          <BentoCell className="col-span-1 lg:col-span-2 bg-cream p-8 md:p-10" delay={0}>
            <div className="flex flex-col h-full justify-between min-h-[200px]">
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-mustard rounded-full" />
                  ))}
                </div>
                <blockquote className="text-lg font-display italic text-charcoal leading-relaxed">
                  &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork.&rdquo;
                </blockquote>
              </div>
              <div className="mt-6">
                <span className="font-bold text-charcoal text-sm">Nubia Saenz</span>
                <span className="text-charcoal/50 text-sm block">Caseworker, Almost Home</span>
              </div>
            </div>
          </BentoCell>

          {/* Testimonial 2 */}
          <BentoCell className="col-span-1 bg-sage text-cream p-8" delay={0.1}>
            <div className="flex flex-col h-full justify-between min-h-[200px]">
              <blockquote className="text-xl font-display italic leading-relaxed">
                &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
              </blockquote>
              <div className="mt-4">
                <span className="font-bold text-sm">Sara Ho</span>
                <span className="text-cream/70 text-sm block">Founder, LLT</span>
              </div>
            </div>
          </BentoCell>

          {/* Email cell */}
          <BentoCell className="col-span-1 bg-white/5 p-8 flex flex-col justify-center items-center text-center" delay={0.15}>
            <span className="text-3xl mb-3">📧</span>
            <a href="mailto:hello@goodrobotco.com" className="text-cream/80 text-sm font-medium hover:text-coral transition-colors">
              hello@goodrobotco.com
            </a>
          </BentoCell>
        </div>
      </section>

      {/* Case Studies Bento */}
      <section id="work" className="max-w-7xl mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
          {[
            {
              title: 'Mayday',
              subtitle: 'AI Lead Generation',
              stat: '~15 hrs',
              statLabel: 'saved weekly',
              desc: 'AI system scans 10-15K businesses monthly, delivering daily digests of pre-qualified leads.',
              bg: 'bg-gradient-to-br from-coral/20 to-mustard/10',
              href: '/case-studies/mayday',
            },
            {
              title: 'SWAPP',
              subtitle: 'Emergency Response',
              stat: '80%',
              statLabel: 'faster intake',
              desc: 'Digital workflows preventing 8,300+ nights of unsheltered homelessness.',
              bg: 'bg-gradient-to-br from-sage/20 to-sky/10',
              href: '/case-studies/swapp',
            },
            {
              title: "Let's Learn Together",
              subtitle: 'Billing Optimization',
              stat: 'Hours',
              statLabel: 'saved weekly',
              desc: 'Optimized billing operations for a growing Houston tutoring agency.',
              bg: 'bg-gradient-to-br from-lavender/20 to-mustard/10',
              href: '/case-studies/llt',
            },
          ].map((study, i) => (
            <BentoCell key={study.title} className={`${study.bg} bg-cream hover:scale-[1.01] transition-transform duration-300`} delay={i * 0.08}>
              <Link href={study.href} className="block p-8 h-full min-h-[280px] flex flex-col justify-between group">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40">{study.subtitle}</span>
                  <h3 className="text-2xl font-display font-bold text-charcoal mt-1 mb-3 group-hover:text-coral transition-colors">{study.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">{study.desc}</p>
                </div>
                <div className="flex items-end justify-between mt-6">
                  <div>
                    <span className="text-3xl font-display font-black text-coral">{study.stat}</span>
                    <span className="text-xs text-charcoal/40 block">{study.statLabel}</span>
                  </div>
                  <span className="text-charcoal/30 group-hover:text-coral group-hover:translate-x-1 transition-all text-lg">&rarr;</span>
                </div>
              </Link>
            </BentoCell>
          ))}
        </div>
      </section>

      {/* About + Philosophy Bento */}
      <section className="max-w-7xl mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
          {/* Philosophy - wide */}
          <BentoCell className="col-span-1 lg:col-span-2 bg-cream p-8 md:p-10" delay={0}>
            <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 block mb-4">Philosophy</span>
            <h2 className="text-2xl md:text-3xl font-display font-black text-charcoal mb-6 leading-tight">
              Your tech should drive growth,<br />not hold it back.
            </h2>
            <div className="text-charcoal-light leading-relaxed space-y-3 text-[15px]">
              <p>
                Senior-level experience from building systems at scale, now applied directly to small businesses. Every recommendation ties back to revenue &mdash; more leads, better conversion, happier customers.
              </p>
              <p>
                I&apos;m not a vendor you hire and forget. I&apos;m a long-term partner who understands your business and keeps improving things over time.
              </p>
            </div>
          </BentoCell>

          {/* Differentiators column */}
          <BentoCell className="col-span-1 bg-white/5 p-8" delay={0.1}>
            <span className="text-xs tracking-[0.2em] uppercase text-cream/40 block mb-6">Why Me</span>
            <div className="space-y-5">
              {[
                { icon: '🎯', label: 'Right-sized solutions' },
                { icon: '💬', label: 'Plain English, no jargon' },
                { icon: '📱', label: 'Actually responsive' },
                { icon: '💰', label: 'Fair, accessible pricing' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-cream/80 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </BentoCell>
        </div>
      </section>

      {/* Process Bento */}
      <section className="max-w-7xl mx-auto mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px]">
          {[
            { num: '01', title: 'Strategy Session', desc: '20 min. You talk, I listen.', bg: 'bg-coral' },
            { num: '02', title: 'Growth Audit', desc: 'Deep dive. Clear plan.', bg: 'bg-sage' },
            { num: '03', title: 'Build & Launch', desc: 'Regular updates. No surprises.', bg: 'bg-mustard' },
            { num: '04', title: 'Grow Together', desc: "I stick around.", bg: 'bg-lavender' },
          ].map((step, i) => (
            <BentoCell key={step.num} className={`${step.bg} text-cream p-6 flex flex-col justify-between`} delay={i * 0.08}>
              <span className="text-3xl font-display font-black text-cream/30">{step.num}</span>
              <div>
                <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                <p className="text-cream/70 text-xs">{step.desc}</p>
              </div>
            </BentoCell>
          ))}
        </div>
      </section>

      {/* CTA Bento */}
      <section id="contact" className="max-w-7xl mx-auto mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
          {/* Main CTA */}
          <BentoCell className="col-span-1 md:col-span-2 bg-cream p-10 md:p-14" delay={0}>
            <h2 className="text-3xl md:text-5xl font-display font-black text-charcoal mb-4 leading-tight">
              Let&apos;s figure out how<br />to grow your business.
            </h2>
            <p className="text-charcoal-light text-lg mb-8 max-w-md">
              Free 20-minute strategy session. No pitch, no pressure. Just honesty.
            </p>
            <a
              href="https://calendly.com/benjamintpoon/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-coral text-cream font-bold text-lg rounded-2xl hover:bg-coral-hover transition-colors duration-300 shadow-xl shadow-coral/25"
            >
              Let&apos;s Talk Growth &rarr;
            </a>
          </BentoCell>

          {/* Hero image cell */}
          <BentoCell className="col-span-1 bg-gradient-to-br from-sage/20 to-mustard/10 overflow-hidden" delay={0.1}>
            <Image
              src="/good_robot_hero.png"
              alt="Person working with a robot"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </BentoCell>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-4" />
    </main>
  )
}
