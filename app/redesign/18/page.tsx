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

function ProgressBar({ value, label, delay = 0 }: { value: number; label: string; delay?: number }) {
  const { ref, inView } = useInView(0.5)
  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between text-xs mb-1.5">
        <span>{label}</span>
        <span className="font-bold">{value}%</span>
      </div>
      <div className="h-2 bg-charcoal/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-coral to-mustard rounded-full"
          style={{ width: inView ? `${value}%` : '0%', transition: `width 1.5s ease-out ${delay}s` }}
        />
      </div>
    </div>
  )
}

const dotGrid = {
  backgroundImage: 'radial-gradient(circle, #2A2A2A10 1px, transparent 1px)',
  backgroundSize: '24px 24px',
}

const dotGridLight = {
  backgroundImage: 'radial-gradient(circle, #FDF6E908 1px, transparent 1px)',
  backgroundSize: '24px 24px',
}

export default function Redesign18() {
  return (
    <>
      <main className="bg-cream min-h-screen">

        {/* ============================================ */}
        {/* HERO - "The Diagnosis"                       */}
        {/* ============================================ */}
        <section className="relative min-h-screen flex flex-col justify-center py-24 px-6 md:px-12" style={dotGrid}>
          {/* Annotation line */}
          <Reveal>
            <div className="flex items-center gap-3 mb-16">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-charcoal/30" />
              <div className="h-px flex-1 max-w-xs bg-charcoal/10" />
              <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-bold">
                Good Robot Co. / Growth + Technology Partner
              </span>
            </div>
          </Reveal>

          <div className="max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <Reveal delay={0.1}>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[0.95] mb-8">
                    Grow your business
                    <br />
                    <span className="text-coral">with the right tech.</span>
                  </h1>
                </Reveal>

                <Reveal delay={0.25}>
                  <p className="text-charcoal/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                    From lead generation to AI automation to custom tools. I help small businesses grow revenue, save time, and stop leaving money on the table.
                  </p>
                </Reveal>

                <Reveal delay={0.35}>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-coral/90 transition-colors shadow-lg shadow-coral/20"
                  >
                    Let&apos;s Talk Growth
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </Reveal>
              </div>

              {/* Status Card */}
              <Reveal delay={0.2} className="lg:col-span-5">
                <div className="bg-white border border-charcoal/10 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-5 pb-4 border-b border-charcoal/5">
                    <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                    <span className="text-sm font-bold text-charcoal">System Status</span>
                    <span className="text-xs text-sage ml-auto">Accepting Projects</span>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-charcoal/50">Availability</span>
                      <span className="text-charcoal font-bold">2-3 slots/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/50">Response time</span>
                      <span className="text-charcoal font-bold">&lt; 24h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal/50">Current queue</span>
                      <span className="text-sage font-bold">Low</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PAIN DIAGNOSIS - "Current Issues Detected"   */}
        {/* ============================================ */}
        <section className="relative bg-white py-24 md:py-32" style={dotGrid}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-3 h-3 bg-coral rounded-sm" />
                <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-bold">
                  Issue Log
                </span>
              </div>
            </Reveal>

            <div className="max-w-3xl space-y-6">
              <Reveal delay={0.1}>
                <div className="bg-cream border border-charcoal/8 rounded-xl overflow-hidden">
                  <div className="h-1 bg-coral" />
                  <div className="p-7 md:p-9">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-coral bg-coral/10 px-2 py-0.5 rounded">ISS-001</span>
                      <span className="font-mono text-xs text-charcoal/30">CRITICAL</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-charcoal mb-2">Overcharged</h3>
                    <p className="text-charcoal/60 leading-relaxed">Quoted $50K for something that should cost a fraction. Every agency you call quotes even higher.</p>
                    <div className="mt-4 pt-4 border-t border-charcoal/5">
                      <span className="text-xs text-charcoal/40">Impact: Budget drain, decision paralysis, delayed growth</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-cream border border-charcoal/8 rounded-xl overflow-hidden">
                  <div className="h-1 bg-coral" />
                  <div className="p-7 md:p-9">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-coral bg-coral/10 px-2 py-0.5 rounded">ISS-002</span>
                      <span className="font-mono text-xs text-charcoal/30">CRITICAL</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-charcoal mb-2">Abandoned</h3>
                    <p className="text-charcoal/60 leading-relaxed">Developer ghosted. Project half-built, fully broken. Every month the codebase rots a little more.</p>
                    <div className="mt-4 pt-4 border-t border-charcoal/5">
                      <span className="text-xs text-charcoal/40">Impact: Lost investment, growing technical debt, team frustration</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-cream border border-charcoal/8 rounded-xl overflow-hidden">
                  <div className="h-1 bg-coral" />
                  <div className="p-7 md:p-9">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-coral bg-coral/10 px-2 py-0.5 rounded">ISS-003</span>
                      <span className="font-mono text-xs text-charcoal/30">CRITICAL</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-charcoal mb-2">Manual Overload</h3>
                    <p className="text-charcoal/60 leading-relaxed">20 hours a week on tasks that should be automated. Every hour you spend is an hour you can&apos;t get back.</p>
                    <div className="mt-4 pt-4 border-t border-charcoal/5">
                      <span className="text-xs text-charcoal/40">Impact: Burnout, missed opportunities, scaling bottleneck</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* AMPLIFY - "Impact Analysis"                  */}
        {/* ============================================ */}
        <section className="bg-charcoal py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-coral rounded-sm" />
                <span className="text-xs tracking-[0.2em] uppercase text-cream/40 font-bold">
                  Impact Analysis
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-cream mb-16 tracking-tight">
                Projected cost of inaction
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <Reveal delay={0.15}>
                <div className="bg-cream rounded-lg p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-display font-black text-coral mb-2">
                    $<AnimatedCounter end={47} suffix="K" />
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/50 leading-snug">Avg. wasted on wrong solutions</p>
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="bg-cream rounded-lg p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-display font-black text-coral mb-2">
                    <AnimatedCounter end={15} suffix="h" /><span className="text-lg text-coral/60">/wk</span>
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/50 leading-snug">Lost to manual processes</p>
                </div>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="bg-cream rounded-lg p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-display font-black text-coral mb-2">
                    <AnimatedCounter end={68} suffix="%" />
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/50 leading-snug">Projects over budget</p>
                </div>
              </Reveal>
              <Reveal delay={0.45}>
                <div className="bg-cream rounded-lg p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-display font-black text-coral mb-2">
                    <AnimatedCounter end={6} suffix=" mo" />
                  </div>
                  <p className="text-xs md:text-sm text-charcoal/50 leading-snug">Avg. delay from bad decisions</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.5}>
              <div className="border-t border-cream/10 pt-6 mt-10">
                <p className="text-cream/60 italic text-lg mb-2">
                  These numbers compound every month.
                </p>
                <p className="text-cream/25 text-xs">
                  Source: Industry data, client assessments
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================ */}
        {/* THE FIX - Services                           */}
        {/* ============================================ */}
        <section className="relative bg-cream py-24 md:py-32" style={dotGrid}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-sage rounded-sm" />
                <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-bold">
                  Growth Architecture
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black mb-3 tracking-tight">
                The fix.
              </h2>
              <p className="text-charcoal/50 text-lg mb-16 max-w-xl">
                Five growth levers that directly drive revenue. One engineer. Zero runaround.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-5">
              {MESSAGING.growthServices.map((s, i) => (
                <Reveal key={s.title} delay={0.15 + i * 0.1}>
                  <div className="bg-white border border-charcoal/10 rounded-xl p-7 md:p-9 hover:border-charcoal/20 transition-colors h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-3 h-3 rounded-sm ${i === 0 ? 'bg-coral' : i === 1 ? 'bg-sage' : i === 2 ? 'bg-mustard' : i === 3 ? 'bg-sky' : 'bg-lavender'}`} />
                      <span className="font-mono text-xs font-bold text-charcoal/40">MOD-0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{s.emoji} {s.title}</h3>
                    <p className="text-charcoal/55 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROOF - Browser Dashboard                    */}
        {/* ============================================ */}
        <section className="relative bg-white py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-mustard rounded-sm" />
                <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-bold">
                  Verified Results
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-charcoal/10 rounded-xl overflow-hidden shadow-xl shadow-charcoal/5">
                <div className="bg-charcoal/[0.03] border-b border-charcoal/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-charcoal/10" />
                    <div className="w-3 h-3 rounded-full bg-charcoal/10" />
                    <div className="w-3 h-3 rounded-full bg-charcoal/10" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-charcoal/5 rounded-md px-4 py-1 text-xs text-charcoal/40 font-mono max-w-sm w-full text-center">
                      results-dashboard.goodrobot.co
                    </div>
                  </div>
                  <div className="w-[54px]" />
                </div>

                <div className="p-6 md:p-10 bg-white">
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-8 text-center">
                    Verified Client Outcomes
                  </h3>

                  <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
                    <div className="bg-cream/60 rounded-lg p-5 md:p-6 text-center border border-charcoal/5">
                      <div className="text-2xl md:text-3xl font-display font-black text-coral mb-1">
                        ~<AnimatedCounter end={15} suffix="h" />
                      </div>
                      <p className="text-xs text-charcoal/50">Saved weekly per client</p>
                    </div>
                    <div className="bg-cream/60 rounded-lg p-5 md:p-6 text-center border border-charcoal/5">
                      <div className="text-2xl md:text-3xl font-display font-black text-sage mb-1">
                        <AnimatedCounter end={80} suffix="%" />
                      </div>
                      <p className="text-xs text-charcoal/50">Faster processes</p>
                    </div>
                    <div className="bg-cream/60 rounded-lg p-5 md:p-6 text-center border border-charcoal/5">
                      <div className="text-2xl md:text-3xl font-display font-black text-mustard mb-1">
                        $<AnimatedCounter end={2} suffix="M+" />
                      </div>
                      <p className="text-xs text-charcoal/50">Client revenue impacted</p>
                    </div>
                    <div className="bg-cream/60 rounded-lg p-5 md:p-6 text-center border border-charcoal/5">
                      <div className="text-2xl md:text-3xl font-display font-black text-sky mb-1">
                        <AnimatedCounter end={15} suffix="x" />
                      </div>
                      <p className="text-xs text-charcoal/50">Capacity increase</p>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto">
                    <ProgressBar value={95} label="Client satisfaction" delay={0.2} />
                    <ProgressBar value={100} label="On-time delivery" delay={0.4} />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 bg-cream/60 border border-charcoal/5 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5 text-mustard">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] text-charcoal/30 font-mono uppercase tracking-wider ml-2">Verified Review</span>
                </div>
                <blockquote className="text-charcoal/70 italic leading-relaxed mb-4">
                  &ldquo;Ben took a broken, abandoned project and turned it into the backbone of our operations. Responsive, transparent, and delivered ahead of schedule.&rdquo;
                </blockquote>
                <div className="text-sm font-bold text-charcoal/50">
                  Nonprofit Executive Director
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHO AM I - "The Engineer"                    */}
        {/* ============================================ */}
        <section className="relative bg-white py-24 md:py-32" style={dotGrid}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <Reveal>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-3 h-3 bg-lavender rounded-sm" />
                <span className="text-xs tracking-[0.2em] uppercase text-charcoal/40 font-bold">
                  About / The Engineer
                </span>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <Reveal delay={0.1}>
                <div>
                  {/* Photo with crop marks */}
                  <div className="relative mb-8 max-w-sm mx-auto md:mx-0">
                    <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-charcoal/20 z-10" />
                    <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-charcoal/20 z-10" />
                    <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-charcoal/20 z-10" />
                    <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-charcoal/20 z-10" />

                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-charcoal/10">
                      <Image
                        src="/ben-headshot-3.jpg"
                        alt="Ben Poon - Senior Engineer, Good Robot Co."
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Spec sheet */}
                  <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto md:mx-0">
                    <div className="bg-cream/80 border border-charcoal/5 rounded-lg p-4 text-center">
                      <div className="text-xs text-charcoal/40 mb-1">Response</div>
                      <div className="font-display font-bold text-lg">&lt;24h</div>
                    </div>
                    <div className="bg-cream/80 border border-charcoal/5 rounded-lg p-4 text-center">
                      <div className="text-xs text-charcoal/40 mb-1">Delivery</div>
                      <div className="font-display font-bold text-lg">100%</div>
                    </div>
                    <div className="bg-cream/80 border border-charcoal/5 rounded-lg p-4 text-center">
                      <div className="text-xs text-charcoal/40 mb-1">Avg. saved</div>
                      <div className="font-display font-bold text-lg">~15h</div>
                    </div>
                    <div className="bg-cream/80 border border-charcoal/5 rounded-lg p-4 text-center">
                      <div className="text-xs text-charcoal/40 mb-1">Retention</div>
                      <div className="font-display font-bold text-lg">95%</div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div>
                <Reveal delay={0.2}>
                  <h2 className="text-3xl md:text-4xl font-display font-black mb-4 tracking-tight">
                    I&apos;m Ben. Your Technology &amp; Growth Partner.
                  </h2>
                  <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
                    Senior engineer who left enterprise to work directly with growing businesses. You talk to me, I do the work. No account managers. No handoffs. No layers.
                  </p>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="mb-4">
                    <span className="font-mono text-xs font-bold text-charcoal/30 uppercase tracking-widest">
                      Build Sequence
                    </span>
                  </div>
                </Reveal>

                <div className="space-y-0">
                  <Reveal delay={0.35}>
                    <div className="flex items-start gap-4 pb-6 relative">
                      <div className="absolute left-[18px] top-10 w-px h-full bg-charcoal/10" />
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-coral flex items-center justify-center text-white text-sm font-bold z-10">
                        1
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-display font-bold">Strategy Session</h4>
                          <div className="h-px flex-1 bg-coral/20" />
                        </div>
                        <p className="text-sm text-charcoal/50">20 min. You tell me what&apos;s holding your business back.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.4}>
                    <div className="flex items-start gap-4 pb-6 relative">
                      <div className="absolute left-[18px] top-10 w-px h-full bg-charcoal/10" />
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-sage flex items-center justify-center text-white text-sm font-bold z-10">
                        2
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-display font-bold">Growth Audit</h4>
                          <div className="h-px flex-1 bg-sage/20" />
                        </div>
                        <p className="text-sm text-charcoal/50">I dig into your lead flow, sales process, and operations.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.45}>
                    <div className="flex items-start gap-4 pb-6 relative">
                      <div className="absolute left-[18px] top-10 w-px h-full bg-charcoal/10" />
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-mustard flex items-center justify-center text-white text-sm font-bold z-10">
                        3
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-display font-bold">Build &amp; Launch</h4>
                          <div className="h-px flex-1 bg-mustard/20" />
                        </div>
                        <p className="text-sm text-charcoal/50">I build the systems. Regular updates, no jargon.</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={0.5}>
                    <div className="flex items-start gap-4 relative">
                      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-lavender flex items-center justify-center text-white text-sm font-bold z-10">
                        4
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-display font-bold">Grow Together</h4>
                          <div className="h-px flex-1 bg-lavender/20" />
                        </div>
                        <p className="text-sm text-charcoal/50">Continuous optimization and a partner invested in your growth.</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PRE-FOOTER CTA                               */}
        {/* ============================================ */}
        <section id="contact" className="relative bg-charcoal py-24 md:py-32 overflow-hidden" style={dotGridLight}>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

          <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
            <Reveal>
              <div className="text-5xl mb-8">&#9749;</div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-cream mb-6 tracking-tight leading-tight">
                This is the part where we{' '}
                <span className="text-coral italic">grab coffee.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-cream/60 text-lg md:text-xl mb-3 max-w-lg mx-auto">
                Those numbers above compound every month. 20 minutes. You describe the problem, I&apos;ll sketch the fix.
              </p>
              <p className="text-cream/35 text-sm mb-10">
                (Free. No pitch. Just an honest conversation.)
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col items-center gap-4">
                <Link
                  href="https://calendly.com/benjamintpoon/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-coral text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-coral/90 transition-colors shadow-lg shadow-coral/20"
                >
                  Let&apos;s Talk Growth
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <span className="text-cream/30 text-sm">
                  or email{' '}
                  <Link href="mailto:hello@goodrobotco.com" className="text-cream/50 hover:text-cream transition-colors underline underline-offset-2">
                    hello@goodrobotco.com
                  </Link>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================ */}
        {/* FOOTER                                       */}
        {/* ============================================ */}
        <footer className="bg-charcoal border-t border-cream/5 py-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-coral" />
                <span className="text-cream/40 text-sm">&copy; 2025 Good Robot Co.</span>
              </div>
              <Link
                href="mailto:hello@goodrobotco.com"
                className="text-cream/30 hover:text-cream/60 text-sm transition-colors"
              >
                hello@goodrobotco.com
              </Link>
            </div>
          </div>
        </footer>

      </main>
      <DesignSwitcher />
    </>
  )
}
