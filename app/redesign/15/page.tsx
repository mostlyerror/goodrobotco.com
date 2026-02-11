'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import DesignSwitcher from '@/components/DesignSwitcher'
import { MESSAGING } from '@/lib/messaging.constants'

function useInView(threshold = 0.12) {
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
      className={`rounded-2xl md:rounded-3xl overflow-hidden ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(12px)',
        transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(28px)',
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

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const testimonials = [
  {
    quote: "Ben took our mess of spreadsheets and half-finished tools and turned it into something that actually works. No hand-waving, no mystery.",
    name: "Sarah K.",
    role: "Founder, E-commerce Brand",
  },
  {
    quote: "He told us what we didn't need to build. That alone saved us $40k.",
    name: "James T.",
    role: "CEO, Healthcare Startup",
  },
  {
    quote: "For the first time, I actually understand our tech stack. Ben explains things like a human, not a consultant.",
    name: "Maria L.",
    role: "Operations Director",
  },
]

const services = MESSAGING.growthServices.map((s, i) => ({
  title: s.title,
  desc: s.desc,
  color: i === 0 ? "bg-coral" : i === 1 ? "bg-sage" : i === 2 ? "bg-mustard" : i === 3 ? "bg-sky" : "bg-lavender",
  textColor: i === 0 ? "text-white" : "text-charcoal",
}))

const caseStudies = [
  { title: "Mayday", desc: "AI lead gen that scaled the sales pipeline without adding headcount", stat: "3x faster", statLabel: "pipeline growth", accent: "bg-coral" },
  { title: "Swapp", desc: "Digital workflows that 10x'd capacity", stat: "$40k", statLabel: "saved in dev costs", accent: "bg-sage" },
  { title: "LLT", desc: "Operations optimization that freed the founder to focus on scaling", stat: "60%", statLabel: "less manual work", accent: "bg-sky" },
]

export default function Redesign15() {
  return (
    <>
      <main className="bg-charcoal min-h-screen">
        {/* ─── HERO: Bento Grid ─── */}
      <section className="p-3 md:p-5 pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4 auto-rows-[100px] md:auto-rows-[130px]">
            {/* Main headline */}
            <BentoCell className="col-span-2 md:col-span-4 row-span-3 bg-cream p-7 md:p-10 flex flex-col justify-between" delay={0}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal/5 mb-5">
                  <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                  <span className="text-xs font-medium text-charcoal/50 tracking-wide uppercase">Available for projects</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-charcoal leading-[0.95] tracking-tight">
                  Grow your business<br />
                  with the<br />
                  <span className="text-coral">right tech.</span>
                </h1>
              </div>
              <p className="text-charcoal/60 text-base md:text-lg max-w-md mt-4 font-body leading-relaxed">
                From lead generation to AI automation to custom tools. I help small businesses grow revenue, save time, and stop leaving money on the table.
              </p>
            </BentoCell>

            {/* Photo */}
            <BentoCell className="col-span-1 md:col-span-2 row-span-2 bg-sage/30" delay={0.1}>
              <Image
                src="/ben-headshot-3.jpg"
                alt="Ben Poon"
                width={400}
                height={400}
                priority
                className="w-full h-full object-cover"
              />
            </BentoCell>

            {/* Stat pill */}
            <BentoCell className="col-span-1 md:col-span-2 row-span-1 bg-coral p-5 flex flex-col justify-center" delay={0.2}>
              <span className="text-3xl md:text-4xl font-display font-black text-white">
                <AnimatedCounter end={50} suffix="+" />
              </span>
              <span className="text-white/70 text-xs mt-1">projects shipped</span>
            </BentoCell>

            {/* Tagline cell */}
            <BentoCell className="col-span-2 md:col-span-3 row-span-1 bg-sage/15 p-5 flex items-center" delay={0.15}>
              <p className="text-cream/80 text-sm md:text-base font-body">
                Growth + Technology Partner &middot; Lead gen &middot; Sales conversion &middot; Retention
              </p>
            </BentoCell>

            {/* Stat pill 2 */}
            <BentoCell className="col-span-1 md:col-span-1 row-span-1 bg-mustard p-4 flex flex-col justify-center items-center text-center" delay={0.25}>
              <span className="text-2xl md:text-3xl font-display font-black text-charcoal">
                <AnimatedCounter end={12} suffix="+" />
              </span>
              <span className="text-charcoal/60 text-xs mt-0.5">years exp.</span>
            </BentoCell>

            {/* CTA cell */}
            <BentoCell className="col-span-1 md:col-span-2 row-span-1 bg-cream p-4 md:p-5 flex items-center justify-center group cursor-pointer" delay={0.3}>
              <Link href="#cta" className="flex items-center gap-3">
                <span className="font-display font-bold text-charcoal text-sm md:text-base">Let&apos;s Talk Growth</span>
                <span className="w-8 h-8 rounded-full bg-coral flex items-center justify-center text-white text-sm group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </BentoCell>
          </div>
        </div>
      </section>

      {/* ─── SECTION: The Problem ─── */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-coral font-display font-bold text-sm tracking-widest uppercase mb-4">Here&apos;s what usually happens</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-cream leading-tight mb-8">
              You know your business<br />
              could grow <span className="text-coral">faster</span>.<br />
              But your tech keeps getting in the way.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream/50 text-lg md:text-xl leading-relaxed max-w-2xl font-body">
              You&apos;ve got the ambition and the customers. But somewhere between outdated tools, half-finished projects, and vendors who don&apos;t get your business, growth stalls.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 mt-14">
            {[
              { icon: "🚧", label: "The Bottleneck", desc: "You have growth ideas, but no technical partner to build them." },
              { icon: "⏳", label: "The Time Drain", desc: "Your team spends hours on manual work instead of the work that grows revenue." },
              { icon: "🔮", label: "The Guesswork", desc: "You know you need better tech, but every vendor gives you a different answer." },
            ].map((problem, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="bg-cream/5 rounded-2xl p-6 border border-cream/10 hover:border-cream/20 transition-colors">
                  <span className="text-3xl mb-3 block">{problem.icon}</span>
                  <h3 className="font-display font-bold text-cream text-lg mb-2">{problem.label}</h3>
                  <p className="text-cream/50 text-sm font-body leading-relaxed">{problem.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="text-cream/40 text-base md:text-lg leading-relaxed max-w-2xl font-body mt-12 border-l-2 border-coral/30 pl-6">
              Every month you spend wrestling with this is a month your competitors pull ahead. The cost isn&apos;t just frustration&mdash;it&apos;s the growth you&apos;re leaving on the table.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION: The Truth ─── */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sage font-display font-bold text-sm tracking-widest uppercase mb-4">Here&apos;s the thing</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-black text-cream leading-tight mb-8">
              The right technology<br />
              is a <span className="text-sage">multiplier.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-cream/50 text-lg md:text-xl leading-relaxed max-w-2xl mb-4 font-body">
              The businesses that grow fastest aren&apos;t the ones with the biggest budgets. They&apos;re the ones with the right technical partner&mdash;someone who builds for where you&apos;re <em className="text-cream/70 not-italic font-semibold">going</em>, not just where you are.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream/40 text-base leading-relaxed max-w-2xl font-body">
              (That&apos;s what I do.)
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION: Services Bento ─── */}
      <section className="px-3 md:px-5 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-8 px-2">
            <span className="inline-block text-mustard font-display font-bold text-sm tracking-widest uppercase mb-3">How I help you grow</span>
            <h2 className="font-display text-3xl md:text-4xl font-black text-cream leading-tight">
              Five growth levers.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {services.map((service, i) => (
              <BentoCell
                key={i}
                className={`${service.color} p-7 md:p-9 min-h-[200px] flex flex-col justify-between`}
                delay={0.08 * i}
              >
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase opacity-50 mb-3 block">0{i + 1}</span>
                  <h3 className={`font-display text-2xl md:text-3xl font-black ${service.textColor} mb-3`}>{service.title}</h3>
                </div>
                <p className={`${service.textColor} opacity-70 text-sm md:text-base font-body leading-relaxed max-w-md`}>{service.desc}</p>
              </BentoCell>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION: Pull Quote ─── */}
      <section className="py-20 md:py-32 px-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-coral/5" />
        <div className="max-w-5xl mx-auto relative">
          <Reveal>
            <div className="relative">
              <span className="absolute -top-16 -left-4 md:-left-8 text-[12rem] md:text-[18rem] leading-none font-display font-black text-coral/10 select-none">&ldquo;</span>
              <blockquote className="relative z-10 pl-2 md:pl-4">
                <p className="font-display text-2xl md:text-4xl lg:text-5xl font-black text-cream leading-tight">
                  He told us what we didn&apos;t need to build. That alone saved us <span className="text-coral">$40k</span>.
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-coral/40" />
                  <div>
                    <cite className="not-italic font-display font-bold text-cream text-sm">James T.</cite>
                    <p className="text-cream/40 text-xs font-body mt-0.5">CEO, Healthcare Startup</p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION: Proof / Case Studies ─── */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-sky font-display font-bold text-sm tracking-widest uppercase mb-4">Don&apos;t take my word for it</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-cream leading-tight mb-12">
              Recent dispatches.
            </h2>
          </Reveal>

          <div className="space-y-4">
            {caseStudies.map((study, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="bg-cream/5 rounded-2xl p-6 md:p-8 border border-cream/8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-cream/8 transition-colors group">
                  <div className={`${study.accent} w-14 h-14 rounded-xl flex items-center justify-center shrink-0`}>
                    <span className="text-white font-display font-black text-lg">{study.title[0]}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-cream text-lg">{study.title}</h3>
                    <p className="text-cream/40 text-sm font-body mt-1">{study.desc}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-display font-black text-2xl text-cream">{study.stat}</span>
                    <p className="text-cream/40 text-xs font-body">{study.statLabel}</p>
                  </div>
                  <span className="text-cream/30 group-hover:text-cream/60 group-hover:translate-x-1 transition-all text-xl hidden md:block">&rarr;</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION: Testimonials Bento ─── */}
      <section className="px-3 md:px-5 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-8 px-2">
            <span className="inline-block text-lavender font-display font-bold text-sm tracking-widest uppercase mb-3">In their words</span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {testimonials.map((t, i) => (
              <BentoCell
                key={i}
                className="bg-cream/5 border border-cream/8 p-6 md:p-8 flex flex-col justify-between min-h-[220px]"
                delay={0.1 * i}
              >
                <p className="text-cream/70 text-sm md:text-base font-body leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-cream/8">
                  <p className="font-display font-bold text-cream text-sm">{t.name}</p>
                  <p className="text-cream/35 text-xs font-body">{t.role}</p>
                </div>
              </BentoCell>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION: About Me Bento ─── */}
      <section className="px-3 md:px-5 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[110px] md:auto-rows-[130px]">
            {/* Photo */}
            <BentoCell className="col-span-1 md:col-span-1 row-span-2 bg-sage/20" delay={0}>
              <Image
                src="/ben-headshot-3.jpg"
                alt="Ben Poon"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </BentoCell>

            {/* About text */}
            <BentoCell className="col-span-2 md:col-span-2 row-span-2 bg-cream p-6 md:p-8 flex flex-col justify-center" delay={0.1}>
              <span className="inline-block text-coral font-display font-bold text-xs tracking-widest uppercase mb-3">About me</span>
              <h3 className="font-display text-xl md:text-2xl font-black text-charcoal leading-snug mb-3">
                Hi, I&apos;m Ben.
              </h3>
              <p className="text-charcoal/60 text-sm md:text-base font-body leading-relaxed">
                12+ years building software. Former startup CTO. Now a Technology &amp; Growth Partner for small and mid-size businesses who need results&mdash;not another vendor. (I also explain things like a normal person.)
              </p>
            </BentoCell>

            {/* Metric cells */}
            <BentoCell className="col-span-1 md:col-span-1 row-span-1 bg-sage p-4 flex flex-col justify-center items-center text-center" delay={0.15}>
              <span className="text-2xl md:text-3xl font-display font-black text-charcoal">
                <AnimatedCounter end={100} suffix="%" />
              </span>
              <span className="text-charcoal/50 text-xs mt-1">reply rate</span>
            </BentoCell>

            <BentoCell className="col-span-1 md:col-span-1 row-span-1 bg-sky/20 p-4 flex flex-col justify-center items-center text-center" delay={0.2}>
              <span className="text-2xl md:text-3xl font-display font-black text-cream">
                <AnimatedCounter end={0} suffix=" jargon" />
              </span>
              <span className="text-cream/50 text-xs mt-1">guaranteed</span>
            </BentoCell>
          </div>
        </div>
      </section>

      {/* ─── SECTION: How This Usually Goes ─── */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <span className="inline-block text-mustard font-display font-bold text-sm tracking-widest uppercase mb-4">How this usually goes</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-black text-cream leading-tight mb-12">
              Three steps. No drama.
            </h2>
          </Reveal>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Strategy Session",
                desc: "20 minutes. You tell me what's holding your business back. I'll tell you if I can help. (If I'm not the right fit, I'll tell you who is. No hard feelings.)",
                color: "text-coral",
              },
              {
                step: "02",
                title: "Growth Audit",
                desc: "I dig into your lead flow, sales process, and operations. You get a clear, prioritized action plan. Real pricing. Not a 40-page deck.",
                color: "text-sage",
              },
              {
                step: "03",
                title: "Build & Launch",
                desc: "I build the systems. You get updates. Things ship. When we're done, you see results fast and understand how it all supports your growth.",
                color: "text-mustard",
              },
            ].map((step, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <div className="flex gap-6 md:gap-8 items-start">
                  <span className={`font-display font-black text-3xl md:text-4xl ${step.color} shrink-0 w-12`}>{step.step}</span>
                  <div>
                    <h3 className="font-display font-bold text-cream text-xl md:text-2xl mb-2">{step.title}</h3>
                    <p className="text-cream/50 text-sm md:text-base font-body leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA: This is the part ─── */}
      <section id="cta" className="py-24 md:py-36 px-5 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-mustard/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Reveal>
            <span className="inline-block text-coral font-display font-bold text-sm tracking-widest uppercase mb-6">Okay, here goes</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-cream leading-[0.95] mb-6">
              This is the part<br />
              where you<br />
              <span className="text-coral">reach out.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cream/50 text-base md:text-lg font-body leading-relaxed max-w-lg mx-auto mb-10">
              20 minutes. No pitch. No obligation. Just a conversation about where you&apos;re headed and how I can help you get there. (I&apos;ll bring the coffee. Virtually speaking.)
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/goodrobotco/intro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral/90 text-white font-display font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105"
              >
                Let&apos;s Talk Growth &rarr;
              </a>
              <a
                href="mailto:hello@goodrobotco.com"
                className="inline-flex items-center justify-center gap-2 bg-cream/10 hover:bg-cream/15 text-cream font-display font-bold px-8 py-4 rounded-full text-base transition-all border border-cream/10"
              >
                hello@goodrobotco.com
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
