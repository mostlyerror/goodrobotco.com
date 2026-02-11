'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
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

function FadeUp({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function ChatBubble({ text, author, role, company, align = 'left', delay = 0 }: {
  text: string; author: string; role: string; company: string; align?: 'left' | 'right'; delay?: number
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={`flex ${align === 'right' ? 'justify-end' : 'justify-start'} max-w-3xl ${align === 'right' ? 'ml-auto' : 'mr-auto'}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : `translateY(16px) scale(0.97)`,
        transition: `all 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      <div className={`max-w-lg ${align === 'right' ? 'bg-coral text-white rounded-3xl rounded-br-lg' : 'bg-white text-charcoal rounded-3xl rounded-bl-lg'} p-6 md:p-8 shadow-lg`}>
        <p className={`text-lg md:text-xl leading-relaxed italic ${align === 'right' ? '' : ''}`}>
          &ldquo;{text}&rdquo;
        </p>
        <div className={`mt-4 flex items-center gap-2 ${align === 'right' ? 'text-white/80' : 'text-charcoal-light'}`}>
          <span className="font-bold text-sm">{author}</span>
          <span className="text-sm">/ {role}, {company}</span>
        </div>
      </div>
    </div>
  )
}

export default function Redesign2() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-cream min-h-screen overflow-x-hidden">
      {/* Hero - Friendly & Personal */}
      <section className="min-h-screen flex items-center relative pt-24 pb-20">
        {/* Soft animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full bg-mustard/10 blur-3xl -top-20 -right-20"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full bg-sage/10 blur-3xl bottom-20 -left-32"
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          />
          <div
            className="absolute w-[300px] h-[300px] rounded-full bg-coral/5 blur-3xl top-1/3 left-1/3"
            style={{ transform: `translateY(${scrollY * 0.04}px)` }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Waving hand */}
          <div className="text-5xl mb-6" style={{ display: 'inline-block', animation: 'wave 2.5s ease-in-out infinite' }}>
            <style>{`@keyframes wave { 0%,100% { transform: rotate(0deg); } 15% { transform: rotate(14deg); } 30% { transform: rotate(-8deg); } 40% { transform: rotate(14deg); } 50% { transform: rotate(-4deg); } 60% { transform: rotate(10deg); } 70% { transform: rotate(0deg); } }`}</style>
            👋
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-charcoal leading-tight mb-6">
            Hey! I&apos;m Ben.
            <br />
            <span className="text-charcoal-light">I help small businesses</span>
            <br />
            <span className="text-coral">grow with the right tech.</span>
          </h1>

          <p className="text-xl md:text-2xl text-charcoal-light leading-relaxed max-w-2xl mb-10">
            {MESSAGING.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/25 hover:shadow-2xl hover:shadow-coral/40 hover:-translate-y-1 transition-all duration-300"
            >
              Let&apos;s Talk Growth <span className="text-xl">☕</span>
            </Link>
            <span className="text-charcoal-light text-sm self-center mt-1 sm:mt-0">(It&apos;s free. 20 min. No sales pitch.)</span>
          </div>

          {/* Friendly hero image */}
          <div className="mt-12 md:mt-16 relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-sage/20 via-mustard/10 to-coral/10 rounded-3xl blur-sm" />
            <Image
              src="/good_robot_hero.png"
              alt="Person working collaboratively with a friendly robot assistant"
              width={600}
              height={400}
              priority
              className="relative w-full max-w-xl h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* "Sound familiar?" - Conversational */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4 text-center">
              Sound familiar?
            </h2>
            <p className="text-center text-charcoal-light text-lg mb-14">
              These are real things I hear from business owners every week:
            </p>
          </FadeUp>

          <div className="space-y-4">
            {[
              { emoji: '👻', text: '"Our developer just... disappeared. Now the website is broken and nobody knows how to fix it."' },
              { emoji: '🤯', text: '"Everyone says we need AI but I have no idea if it\'s actually worth the money."' },
              { emoji: '💸', text: '"I got quoted $50K for what seems like a pretty simple app. Is that normal?!"' },
              { emoji: '😩', text: '"We spend hours every week on stuff that feels like it should be automatic."' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 p-5 md:p-6 bg-cream rounded-2xl hover:bg-cream-dark transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                  <p className="text-charcoal text-lg leading-relaxed">{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-xl md:text-2xl font-display text-charcoal leading-relaxed">
                If any of that hit home &mdash; you&apos;re in the right place.
                <br />
                <span className="text-coral font-bold">Let me tell you how I can help.</span>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services as a Conversation */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-3 text-center">
              Here&apos;s what I actually do
            </h2>
            <p className="text-center text-charcoal-light text-lg mb-16">
              (in plain English, I promise)
            </p>
          </FadeUp>

          <div className="space-y-8">
            {MESSAGING.growthServices.map((service, i) => {
              const colorMap = ['bg-sage/15 border-sage/30', 'bg-coral/10 border-coral/20', 'bg-sky/15 border-sky/30', 'bg-mustard/15 border-mustard/30', 'bg-lavender/15 border-lavender/30']
              return { icon: service.emoji, title: service.title, desc: service.desc, color: colorMap[i] || 'bg-sage/15 border-sage/30' }
            }).map((service, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className={`p-8 md:p-10 rounded-3xl border-2 ${service.color} hover:shadow-lg transition-shadow duration-300`}>
                  <div className="flex items-start gap-5">
                    <span className="text-4xl flex-shrink-0">{service.icon}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-charcoal mb-3">{service.title}</h3>
                      <p className="text-charcoal-light text-[16px] leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof - Chat Style */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-3 text-center">
              Don&apos;t take my word for it
            </h2>
            <p className="text-center text-charcoal-light text-lg mb-14">
              Here&apos;s what actual clients say:
            </p>
          </FadeUp>

          <div className="space-y-6">
            <ChatBubble
              text="[The app] has allowed me to go through the line faster, and [our clients'] anxiety has decreased because they don't have to fill out so much paperwork, and it has allowed them to speak up more on their needs."
              author="Nubia Saenz"
              role="Caseworker"
              company="Almost Home"
              align="left"
              delay={0.1}
            />
            <ChatBubble
              text="LOVING this new system! Saves me so many hours of tedious work!"
              author="Sara Ho"
              role="Founder"
              company="Let's Learn Together"
              align="right"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Results - Friendly Stats */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-sage/10 via-cream to-mustard/10">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-14 text-center">
              Some numbers I&apos;m proud of
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: '~15 hrs', label: 'saved per week', context: 'for Mayday\'s lead gen team', color: 'bg-coral' },
              { stat: '80%', label: 'faster intake time', context: 'for SWAPP emergency response', color: 'bg-sage' },
              { stat: '8,300+', label: 'nights of homelessness', context: 'prevented through tech', color: 'bg-sky' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <div className="bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl mx-auto mb-5 flex items-center justify-center`}>
                    <span className="text-white text-2xl font-bold">{item.stat.charAt(0) === '~' ? '~' : item.stat.charAt(0)}</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-display font-black text-charcoal mb-2">{item.stat}</div>
                  <div className="text-charcoal font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-charcoal-light text-xs">{item.context}</div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/case-studies" className="text-coral font-bold text-lg hover:underline underline-offset-4">
                Read the full case studies &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* About Me - Personal */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
            <FadeUp className="md:col-span-2">
              <div className="relative mx-auto w-56 md:w-full max-w-xs">
                <div className="absolute -inset-3 bg-gradient-to-br from-coral/20 to-mustard/20 rounded-full blur-lg" />
                <Image
                  src="/ben-headshot-3.jpg"
                  alt="Ben Poon"
                  width={300}
                  height={300}
                  className="relative w-full aspect-square object-cover rounded-full ring-4 ring-cream shadow-xl"
                />
              </div>
            </FadeUp>

            <FadeUp className="md:col-span-3" delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-6">
                A little about me
              </h2>
              <div className="space-y-4 text-charcoal-light text-[16px] leading-relaxed">
                <p>
                  I used to build systems at scale for big companies. Now I take that same experience and work directly with small businesses who need someone they can actually talk to.
                </p>
                <p>
                  My thing is figuring out what you <em>actually</em> need. Sometimes that&apos;s AI. Sometimes it&apos;s a simple workflow fix. Sometimes it&apos;s telling you your current setup is fine and you don&apos;t need to change anything.
                </p>
                <p>
                  I only take on 2-3 projects at a time so I can give each one real attention. No account managers, no being passed around. Just me.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-charcoal/10 flex flex-wrap gap-3">
                {['Lead Generation', 'Sales Conversion', 'Customer Retention', 'Operational Efficiency', 'Growth Partnership'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-cream rounded-full text-sm font-medium text-charcoal">{tag}</span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process - Friendly Steps */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-4 text-center">
              How this usually goes
            </h2>
            <p className="text-center text-charcoal-light text-lg mb-14">
              Spoiler: it&apos;s pretty chill.
            </p>
          </FadeUp>

          <div className="space-y-6 relative">
            {/* Connection line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-coral via-sage via-mustard to-lavender hidden md:block" />

            {[
              { step: 1, title: MESSAGING.processSteps[0].title, desc: MESSAGING.processSteps[0].desc, emoji: '📞', color: 'bg-coral' },
              { step: 2, title: MESSAGING.processSteps[1].title, desc: MESSAGING.processSteps[1].desc, emoji: '🔍', color: 'bg-sage' },
              { step: 3, title: MESSAGING.processSteps[2].title, desc: MESSAGING.processSteps[2].desc, emoji: '🛠️', color: 'bg-mustard' },
              { step: 4, title: MESSAGING.processSteps[3].title, desc: MESSAGING.processSteps[3].desc, emoji: '🤝', color: 'bg-lavender' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="flex items-start gap-5 md:gap-8">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg relative z-10`}>
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-display font-bold text-charcoal mb-2">
                      <span className="text-charcoal/30 mr-2">{item.step}.</span>
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Warm & Inviting */}
      <section id="contact" className="py-28 md:py-36 bg-gradient-to-br from-coral/5 via-cream to-sage/10 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-coral/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-sage/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <FadeUp>
            <p className="text-5xl mb-6">☕</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-charcoal mb-6 leading-tight">
              Wanna grab a (virtual) coffee?
            </h2>
            <p className="text-lg text-charcoal-light max-w-xl mx-auto mb-10 leading-relaxed">
              20 minutes. You tell me what&apos;s frustrating you. I tell you if I can help. No pitch, no pressure, just real talk about your tech.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-5 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/25 hover:shadow-2xl hover:shadow-coral/40 hover:-translate-y-1 transition-all duration-300"
              >
                Book a Free Chat &rarr;
              </a>
              <span className="text-charcoal-light text-sm">or email me at{' '}
                <a href="mailto:hello@goodrobotco.com" className="text-coral font-bold hover:underline">
                  hello@goodrobotco.com
                </a>
              </span>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
