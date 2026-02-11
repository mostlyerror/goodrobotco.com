'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { MESSAGING } from '@/lib/messaging.constants'

function useInView(threshold = 0.25) {
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

function StoryBlock({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, inView } = useInView(0.2)
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.98)',
        transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function ProgressDot({ active, label }: { active: boolean; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${active ? 'bg-coral border-coral scale-125' : 'border-cream/30 bg-transparent'}`} />
      <span className={`text-xs uppercase tracking-wider transition-colors duration-500 ${active ? 'text-cream' : 'text-cream/30'}`}>{label}</span>
    </div>
  )
}

export default function Redesign5() {
  const [activeChapter, setActiveChapter] = useState(0)
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.4
      let current = 0
      chapterRefs.current.forEach((ref, i) => {
        if (ref && ref.offsetTop <= scrollY) current = i
      })
      setActiveChapter(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const setChapterRef = (i: number) => (el: HTMLDivElement | null) => {
    chapterRefs.current[i] = el
  }

  const chapters = ['Problem', 'Approach', 'Services', 'Proof', 'About', 'Action']

  return (
    <main className="bg-cream min-h-screen">
      {/* Fixed side navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {chapters.map((ch, i) => (
          <ProgressDot key={ch} active={activeChapter >= i} label={ch} />
        ))}
      </nav>

      {/* Chapter 0: The Hook */}
      <section ref={setChapterRef(0)} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        {/* Cinematic gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal to-charcoal/95" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-coral/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-sage/6 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <StoryBlock>
            <p className="text-cream/40 text-sm tracking-[0.3em] uppercase mb-8">Chapter One</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-cream leading-tight mb-8">
              Grow your business
              <br />
              <span className="text-cream/30">with the right tech.</span>
            </h1>
            <p className="text-xl text-cream/50 max-w-xl mx-auto leading-relaxed mb-12">
              {MESSAGING.hero.subheadline}
            </p>
            <div className="flex items-center justify-center gap-2 text-cream/30 animate-bounce">
              <span className="text-sm">Scroll to continue</span>
              <span>&darr;</span>
            </div>
          </StoryBlock>
        </div>
      </section>

      {/* Chapter 1: The Problems (Cards that feel real) */}
      <section ref={setChapterRef(1)} className="py-28 md:py-36 bg-charcoal relative">
        <div className="max-w-4xl mx-auto px-6">
          <StoryBlock>
            <p className="text-coral text-sm tracking-[0.3em] uppercase mb-6">Sound familiar?</p>
          </StoryBlock>

          <div className="space-y-6">
            {[
              {
                emoji: '👻',
                quote: '"A developer ghosted us and our website is broken."',
                context: 'This happens more than you think. Projects abandoned mid-build, no documentation, no handoff.',
              },
              {
                emoji: '💸',
                quote: '"We got quoted $50K for what seems like a simple app."',
                context: 'Agencies overcomplicate things. Sometimes a $5K solution does exactly what a $50K quote promised.',
              },
              {
                emoji: '🤖',
                quote: '"Can AI actually help my business, or is it all hype?"',
                context: 'Most of it is hype. But some of it is genuinely transformative. The trick is knowing the difference.',
              },
              {
                emoji: '😩',
                quote: '"We spend hours every week on tasks that should be automatic."',
                context: 'If you\'re doing the same thing manually more than 5 times a week, there\'s a better way.',
              },
            ].map((item, i) => (
              <StoryBlock key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-white/[0.08] transition-colors duration-300">
                  <div className="flex items-start gap-5">
                    <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                    <div>
                      <p className="text-xl md:text-2xl font-display italic text-cream mb-3">{item.quote}</p>
                      <p className="text-cream/40 leading-relaxed">{item.context}</p>
                    </div>
                  </div>
                </div>
              </StoryBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 2: The Turn */}
      <section ref={setChapterRef(2)} className="py-28 md:py-36 bg-gradient-to-b from-charcoal to-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <StoryBlock>
            <p className="text-coral text-sm tracking-[0.3em] uppercase mb-8">The Solution</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-cream leading-tight mb-8">
              What if someone just
              <br />
              <span className="text-coral">told you the truth?</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-lg mx-auto leading-relaxed">
              Assessment first. Then implementation with the right tools. Not the most expensive tools. Not the trendiest tools. The <em>right</em> tools.
            </p>
          </StoryBlock>
        </div>
      </section>

      {/* Chapter 2b: Services */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <StoryBlock>
            <p className="text-coral text-sm tracking-[0.3em] uppercase mb-6">What I Do</p>
            <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-16">
              How I drive growth.
            </h2>
          </StoryBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MESSAGING.growthServices.map((gs, i) => {
              const accents = ['border-l-coral', 'border-l-sage', 'border-l-sky', 'border-l-mustard', 'border-l-lavender']
              return { num: String(i + 1).padStart(2, '0'), title: gs.title, desc: gs.desc, accent: accents[i] || 'border-l-coral' }
            }).map((service, i) => (
              <StoryBlock key={service.num} delay={i * 0.06}>
                <div className={`bg-white border-l-4 ${service.accent} p-8 rounded-r-xl hover:shadow-xl transition-shadow duration-300`}>
                  <span className="text-xs text-charcoal/25 font-mono block mb-3">{service.num}</span>
                  <h3 className="text-lg font-display font-bold text-charcoal mb-2">{service.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{service.desc}</p>
                </div>
              </StoryBlock>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 3: The Proof */}
      <section ref={setChapterRef(3)} className="py-28 md:py-36 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto px-6">
          <StoryBlock>
            <p className="text-coral text-sm tracking-[0.3em] uppercase mb-6">The Proof</p>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-6">
              Don&apos;t take my word for it.
            </h2>
            <p className="text-cream/50 text-lg max-w-lg mb-16">
              Real projects. Real businesses. Measurable results.
            </p>
          </StoryBlock>

          {/* Story-style case studies */}
          <div className="space-y-20">
            {/* Mayday */}
            <StoryBlock>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8">
                  <span className="text-xs text-coral tracking-[0.2em] uppercase block mb-4">Case Study 01</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-cream mb-4">Mayday: AI Lead Generation</h3>
                  <p className="text-cream/60 leading-relaxed mb-6">
                    A sales team was spending 20 hours a week manually searching for potential clients. I built an AI system that scans 10-15K businesses monthly and delivers daily digests of pre-qualified leads. The manual prospecting? Gone.
                  </p>
                  <Link href="/case-studies/mayday" className="text-coral font-medium hover:underline underline-offset-4">
                    Read full case study &rarr;
                  </Link>
                </div>
                <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                  <div className="text-5xl font-display font-black text-coral mb-2">~15h</div>
                  <div className="text-sm text-cream/50">eliminated weekly</div>
                  <div className="w-full h-px bg-white/10 my-6" />
                  <div className="text-3xl font-display font-black text-sage mb-2">10-15K</div>
                  <div className="text-sm text-cream/50">businesses scanned/month</div>
                </div>
              </div>
            </StoryBlock>

            {/* SWAPP */}
            <StoryBlock>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8">
                  <span className="text-xs text-coral tracking-[0.2em] uppercase block mb-4">Case Study 02</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-cream mb-4">SWAPP: Emergency Response</h3>
                  <p className="text-cream/60 leading-relaxed mb-6">
                    An emergency shelter&apos;s intake process was painfully slow, 45 minutes per person while families waited in crisis. I built a digital system that cut intake by 80% and helped prevent 8,300+ nights of unsheltered homelessness.
                  </p>
                  <Link href="/case-studies/swapp" className="text-coral font-medium hover:underline underline-offset-4">
                    Read full case study &rarr;
                  </Link>
                </div>
                <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                  <div className="text-5xl font-display font-black text-coral mb-2">80%</div>
                  <div className="text-sm text-cream/50">faster intake time</div>
                  <div className="w-full h-px bg-white/10 my-6" />
                  <div className="text-3xl font-display font-black text-sage mb-2">8,300+</div>
                  <div className="text-sm text-cream/50">nights prevented</div>
                </div>
              </div>
            </StoryBlock>

            {/* LLT */}
            <StoryBlock>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-8">
                  <span className="text-xs text-coral tracking-[0.2em] uppercase block mb-4">Case Study 03</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-cream mb-4">Let&apos;s Learn Together</h3>
                  <p className="text-cream/60 leading-relaxed mb-6">
                    A growing tutoring agency in Houston was drowning in billing and operations. I evaluated 3 vendors, found the right platform, and optimized their workflows. Hours of tedious work? Automated.
                  </p>
                  <Link href="/case-studies/llt" className="text-coral font-medium hover:underline underline-offset-4">
                    Read full case study &rarr;
                  </Link>
                </div>
                <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-xl p-8 text-center">
                  <div className="text-5xl font-display font-black text-coral mb-2">Hours</div>
                  <div className="text-sm text-cream/50">saved weekly</div>
                  <div className="w-full h-px bg-white/10 my-6" />
                  <div className="text-3xl font-display font-black text-sage mb-2">3</div>
                  <div className="text-sm text-cream/50">vendors evaluated</div>
                </div>
              </div>
            </StoryBlock>
          </div>

          {/* Testimonials woven in */}
          <div className="mt-20 space-y-8">
            <StoryBlock>
              <div className="border-l-4 border-coral pl-8 py-2">
                <blockquote className="text-xl md:text-2xl font-display italic text-cream/90 leading-relaxed mb-4">
                  &ldquo;[The app] has allowed me to go through the line faster, and [our clients&apos;] anxiety has decreased because they don&apos;t have to fill out so much paperwork.&rdquo;
                </blockquote>
                <span className="text-cream/50 text-sm">Nubia Saenz, Caseworker at Almost Home</span>
              </div>
            </StoryBlock>

            <StoryBlock delay={0.1}>
              <div className="border-l-4 border-sage pl-8 py-2">
                <blockquote className="text-xl md:text-2xl font-display italic text-cream/90 leading-relaxed mb-4">
                  &ldquo;LOVING this new system! Saves me so many hours of tedious work!&rdquo;
                </blockquote>
                <span className="text-cream/50 text-sm">Sara Ho, Founder of Let&apos;s Learn Together</span>
              </div>
            </StoryBlock>
          </div>
        </div>
      </section>

      {/* Chapter 4: Who */}
      <section ref={setChapterRef(4)} className="py-28 md:py-36 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <StoryBlock>
            <p className="text-coral text-sm tracking-[0.3em] uppercase mb-8">Who Am I</p>
          </StoryBlock>

          <StoryBlock delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-4">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-coral/10 to-sage/10 rounded-2xl rotate-2" />
                  <Image
                    src="/ben-headshot-3.jpg"
                    alt="Ben Poon"
                    width={400}
                    height={400}
                    className="relative w-full aspect-square object-cover rounded-xl shadow-xl"
                  />
                </div>
              </div>

              <div className="md:col-span-8">
                <h2 className="text-3xl md:text-4xl font-display font-black text-charcoal mb-6 leading-tight">
                  I&apos;m Ben Poon.
                  <span className="text-charcoal/30 block">I build things that work.</span>
                </h2>

                <div className="space-y-4 text-charcoal-light leading-relaxed">
                  <p>
                    Senior-level experience building systems at scale. Now I work directly with small and mid-size businesses who need someone they can actually talk to, and who will tell them the truth about what they need.
                  </p>
                  <p>
                    I only take 2-3 projects at a time. That means you get my full attention, accessible pricing, and direct access, no account managers, no runaround.
                  </p>
                </div>

                {/* Process as a narrative */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { step: '01', label: MESSAGING.processSteps[0].title, desc: '20 min' },
                    { step: '02', label: MESSAGING.processSteps[1].title, desc: 'Deep dive' },
                    { step: '03', label: MESSAGING.processSteps[2].title, desc: 'No surprises' },
                    { step: '04', label: MESSAGING.processSteps[3].title, desc: "I'm here" },
                  ].map((item) => (
                    <div key={item.step} className="bg-white p-4 rounded-lg text-center">
                      <span className="text-xs text-coral font-bold block mb-1">{item.step}</span>
                      <span className="text-sm font-display font-bold text-charcoal block">{item.label}</span>
                      <span className="text-xs text-charcoal-light">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StoryBlock>
        </div>
      </section>

      {/* Chapter 5: The Ask */}
      <section ref={setChapterRef(5)} id="contact" className="min-h-screen flex items-center justify-center bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-coral/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-sage/6 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 py-28">
          <StoryBlock>
            <p className="text-coral text-sm tracking-[0.3em] uppercase mb-8">The Next Chapter</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-cream leading-tight mb-6">
              This is the part
              <br />
              where you
              <br />
              <span className="text-coral">reach out.</span>
            </h2>
            <p className="text-lg text-cream/50 max-w-md mx-auto leading-relaxed mb-12">
              20 minutes. Free. No pitch. Just an honest conversation about what&apos;s not working and whether I can help fix it.
            </p>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 bg-coral text-white font-bold text-lg rounded-full shadow-2xl shadow-coral/30 hover:shadow-coral/50 hover:-translate-y-1 transition-all duration-300"
              >
                Book Your Free Call &rarr;
              </a>
              <span className="text-cream/30 text-sm">or write me at{' '}
                <a href="mailto:hello@goodrobotco.com" className="text-cream/50 hover:text-cream transition-colors">
                  hello@goodrobotco.com
                </a>
              </span>
            </div>
          </StoryBlock>
        </div>
      </section>
    </main>
  )
}
