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

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function Redesign1() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Editorial Hero */}
      <section className="min-h-screen relative flex flex-col justify-end pb-16 md:pb-24 pt-32 overflow-hidden">
        {/* Giant background text */}
        <div className="absolute top-[12%] left-0 right-0 pointer-events-none select-none overflow-hidden">
          <p className="text-[12vw] md:text-[10vw] font-display font-black text-charcoal/[0.04] leading-[0.9] whitespace-nowrap">
            GOOD ROBOT CO.
          </p>
        </div>

        {/* Vertical accent line */}
        <div className="absolute top-0 left-[8%] md:left-[12%] w-px h-full bg-gradient-to-b from-transparent via-coral/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end">
            {/* Left column: headline */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-coral border border-coral/30 px-4 py-2">
                  Growth + Technology Partner
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black leading-[0.88] tracking-tight text-charcoal mb-8">
                Grow your
                <br />
                business
                <br />
                <span className="italic text-coral">with the</span>
                <br />
                <span className="italic text-coral">right tech.</span>
              </h1>

              <div className="max-w-md">
                <p className="text-lg md:text-xl text-charcoal-light leading-relaxed mb-10">
                  {MESSAGING.hero.subheadline}
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-3 bg-charcoal text-cream px-8 py-4 font-bold text-sm tracking-wide uppercase hover:bg-coral transition-colors duration-300"
                  >
                    <span>Let&apos;s Talk Growth</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </Link>
                  <Link
                    href="#work"
                    className="text-sm font-bold tracking-wide uppercase text-charcoal-light hover:text-coral transition-colors border-b-2 border-charcoal-light hover:border-coral pb-1"
                  >
                    See Work
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column: editorial image block */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-sage/15 -rotate-3" />
                <Image
                  src="/good_robot_hero.png"
                  alt="Person working collaboratively with a friendly robot assistant"
                  width={600}
                  height={400}
                  priority
                  className="relative w-full h-auto"
                />
              </div>
              {/* Caption */}
              <p className="mt-6 text-xs tracking-[0.2em] uppercase text-charcoal-light text-right">
                Your tech should drive growth, not hold it back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-charcoal/15" />
      </div>

      {/* Approach Section - Magazine Column Layout */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6">
              {/* Section label */}
              <div className="lg:col-span-3">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">01 / Approach</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-charcoal mt-4 leading-tight">
                  How we<br />work.
                </h2>
              </div>

              {/* Three columns */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                {[
                  {
                    num: '01',
                    title: MESSAGING.approach[0].title,
                    text: MESSAGING.approach[0].desc,
                  },
                  {
                    num: '02',
                    title: MESSAGING.approach[1].title,
                    text: MESSAGING.approach[1].desc,
                  },
                  {
                    num: '03',
                    title: MESSAGING.approach[2].title,
                    text: MESSAGING.approach[2].desc,
                  },
                ].map((item) => (
                  <div key={item.num} className="border-t-2 border-charcoal pt-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-charcoal/40 block mb-4">{item.num}</span>
                    <h3 className="text-xl font-display font-bold text-charcoal mb-3">{item.title}</h3>
                    <p className="text-charcoal-light leading-relaxed text-[15px]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pull Quote - Full Width */}
      <section className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
        {/* Decorative oversized quote mark */}
        <div className="absolute top-8 left-8 md:left-16 text-[20rem] leading-none font-display font-black text-white/[0.03] select-none pointer-events-none">
          &ldquo;
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-display italic text-cream leading-snug mb-10">
              &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-coral" />
              <div>
                <span className="text-cream font-bold block">Nubia Saenz</span>
                <span className="text-cream/60 text-sm">Caseworker, Almost Home</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services - Asymmetric Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 mb-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">02 / Services</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-charcoal mt-4 leading-tight">
                  How we<br />can help.
                </h2>
                <p className="text-charcoal-light mt-6 leading-relaxed">
                  Real solutions that have saved clients 20 hours a week and cut costs by 80%.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal/10">
                  {MESSAGING.growthServices.map((service, i) => (
                    <Reveal key={service.title} delay={i * 0.08}>
                      <div className="bg-cream p-8 md:p-10 hover:bg-white transition-colors duration-500 h-full">
                        <span className="text-xs font-bold tracking-[0.2em] text-coral/60 block mb-4">0{i + 1}</span>
                        <h3 className="text-lg font-display font-bold text-charcoal mb-3">{service.title}</h3>
                        <p className="text-charcoal-light text-sm leading-relaxed">{service.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Studies - Editorial Cards */}
      <section id="work" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">03 / Work</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-charcoal mt-4">Selected Work</h2>
              </div>
              <Link href="/case-studies" className="text-sm font-bold tracking-wide uppercase text-charcoal-light hover:text-coral transition-colors border-b-2 border-charcoal-light hover:border-coral pb-1 hidden md:block">
                All Case Studies
              </Link>
            </div>
          </Reveal>

          <div className="space-y-0 divide-y divide-charcoal/10">
            {[
              { title: 'Mayday', subtitle: 'AI Lead Generation', stat: '~15 hrs', statLabel: 'saved weekly', desc: 'AI-powered lead generation that eliminates manual prospecting by scanning businesses and delivering daily digests of pre-qualified leads.', href: '/case-studies/mayday' },
              { title: 'SWAPP', subtitle: 'Emergency Response', stat: '80%', statLabel: 'faster intake', desc: 'Intelligent emergency response that reduced intake time using automated workflows, preventing 8,300+ nights of unsheltered homelessness.', href: '/case-studies/swapp' },
              { title: 'LLT', subtitle: 'Billing Optimization', stat: 'Hours', statLabel: 'saved weekly', desc: 'Helped Houston tutoring agency optimize billing operations and adopt the right business management platform.', href: '/case-studies/llt' },
            ].map((study, i) => (
              <Reveal key={study.title} delay={i * 0.1}>
                <Link href={study.href} className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 md:py-14 items-center">
                  <div className="md:col-span-2">
                    <span className="text-6xl md:text-7xl font-display font-black text-charcoal/10 group-hover:text-coral/20 transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-charcoal group-hover:text-coral transition-colors duration-300">
                      {study.title}
                    </h3>
                    <span className="text-sm text-charcoal-light">{study.subtitle}</span>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-sm text-charcoal-light leading-relaxed">{study.desc}</p>
                  </div>
                  <div className="md:col-span-2 text-left md:text-right">
                    <span className="text-3xl font-display font-black text-coral">{study.stat}</span>
                    <span className="block text-xs text-charcoal-light mt-1">{study.statLabel}</span>
                  </div>
                  <div className="md:col-span-1 text-right hidden md:block">
                    <span className="text-charcoal-light group-hover:text-coral group-hover:translate-x-2 transition-all duration-300 inline-block text-xl">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Second Testimonial */}
      <section className="py-16 md:py-20 bg-sage/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <blockquote className="text-2xl md:text-3xl font-display italic text-charcoal leading-snug mb-8">
              &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-coral" />
              <span className="text-charcoal font-bold">Sara Ho</span>
              <span className="text-charcoal-light text-sm">/ Founder, Let&apos;s Learn Together</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About - Magazine Feature */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-3 bg-mustard/15 rotate-2" />
                  <Image
                    src="/ben-headshot-3.jpg"
                    alt="Ben Poon"
                    width={400}
                    height={400}
                    className="relative w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 order-1 lg:order-2">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">04 / Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-charcoal mt-4 mb-8 leading-tight">
                  Your tech should<br />drive growth, not<br />hold it back.
                </h2>
                <div className="space-y-5 text-charcoal-light leading-relaxed max-w-2xl">
                  <p>
                    I bring senior-level experience from building systems at scale, now working directly with small and mid-size businesses. My focus: understanding your real problem, then using the right tool to solve it.
                  </p>
                  <p>
                    That might be AI. It might be simple automation. It might be fixing technical debt that&apos;s been slowing you down. I won&apos;t overcomplicate things or sell you solutions you don&apos;t need.
                  </p>
                  <p>
                    I only take on a few clients at a time so I can give each one real attention. Right now I have 2 spots open.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <span className="text-xl font-display font-bold text-charcoal">Ben Poon</span>
                  <span className="w-8 h-px bg-charcoal/30" />
                  <span className="text-sm text-charcoal-light">{MESSAGING.founderTitle}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Me - Horizontal Scroll */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">05 / Why Us</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-charcoal mt-4 mb-16">
              Why work with me?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10">
            {[
              { title: 'Right-Sized Solutions', desc: "I match the solution to your actual problem. No overselling, no overengineering." },
              { title: 'No Jargon', desc: "I explain things in plain English. You'll always understand what you're getting and why." },
              { title: 'Actually Responsive', desc: "I answer emails. I show up to calls. You'll never wonder where your project stands." },
              { title: 'Fair Pricing', desc: "Quality work without the agency markup. Accessible rates with personalized attention." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="bg-cream p-8 md:p-10 h-full hover:bg-white transition-colors duration-500">
                  <span className="text-4xl font-display font-black text-coral/20 block mb-6">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-lg font-display font-bold text-charcoal mb-3">{item.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Numbered Steps */}
      <section className="py-24 md:py-32 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral">06 / Process</span>
              <h2 className="text-4xl md:text-5xl font-display font-black mt-4">How it works</h2>
            </div>
          </Reveal>

          <div className="space-y-0">
            {MESSAGING.processSteps.map((s) => ({ step: String(s.num).padStart(2, '0'), title: s.title, desc: s.desc })).map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-4 py-8 border-t border-cream/10 items-baseline">
                  <span className="col-span-2 md:col-span-1 text-xl font-display font-black text-coral">{item.step}</span>
                  <h3 className="col-span-4 md:col-span-3 text-lg font-display font-bold">{item.title}</h3>
                  <p className="col-span-6 md:col-span-8 text-cream/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-28 md:py-36 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
          <div className="absolute top-[10%] right-[5%] text-[15vw] font-display font-black text-charcoal/[0.02] select-none">GO</div>
          <div className="absolute bottom-[10%] left-[5%] text-[15vw] font-display font-black text-charcoal/[0.02] select-none">OD</div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Reveal>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-coral mb-6 block">07 / Contact</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-charcoal mb-6 leading-tight">
              Let&apos;s figure out what<br />you actually need.
            </h2>
            <p className="text-lg text-charcoal-light max-w-xl mx-auto mb-12">
              Book a free 20-minute call. No pitch, no pressure. Just an honest conversation about what&apos;s not working and how to fix it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-coral text-cream px-10 py-5 font-bold text-sm tracking-wide uppercase hover:bg-charcoal transition-colors duration-300"
              >
                <span>Book Your Free Call</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
              <a
                href="mailto:hello@goodrobotco.com"
                className="text-sm font-bold tracking-wide uppercase text-charcoal-light hover:text-coral transition-colors border-b-2 border-charcoal-light hover:border-coral pb-1"
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
