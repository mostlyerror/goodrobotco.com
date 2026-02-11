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
        <div className="h-full bg-gradient-to-r from-coral to-mustard rounded-full" style={{ width: inView ? `${value}%` : '0%', transition: `width 1.5s ease-out ${delay}s` }} />
      </div>
    </div>
  )
}

export default function Redesign17() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-charcoal overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-coral/8 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-sage/8 blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal/80 pointer-events-none" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <Reveal>
            <p className="text-cream/40 uppercase tracking-[0.3em] text-sm font-body mb-8">Growth + Technology Partner</p>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="font-display font-black text-5xl md:text-7xl text-cream leading-tight mb-2">Your tech should drive growth.</h1>
            <p className="font-display font-black text-5xl md:text-7xl text-cream/50 leading-tight">Not hold it back.</p>
          </Reveal>
          <Reveal delay={0.5}><div className="w-24 h-px bg-cream/20 mx-auto mt-10 mb-10" /></Reveal>
          <Reveal delay={0.7}>
            <p className="text-cream/50 text-lg md:text-xl font-body max-w-lg mx-auto leading-relaxed">From lead generation to AI automation to custom tools. I help small businesses grow revenue and save time.</p>
          </Reveal>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-cream/20 animate-pulse" />
          <svg className="w-4 h-4 text-cream/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ animation: 'bounceDown 2s ease-in-out infinite' }}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
        <style jsx>{`@keyframes bounceDown { 0%, 100% { transform: translateY(0); opacity: 0.3; } 50% { transform: translateY(8px); opacity: 0.7; } }`}</style>
      </section>

      <section className="relative min-h-screen flex flex-col items-center justify-center bg-charcoal/95 py-24 md:py-32 px-6 overflow-hidden">
        <Reveal><h2 className="font-display font-bold text-3xl md:text-4xl text-cream text-center mb-16">Sound familiar?</h2></Reveal>
        <div className="max-w-2xl mx-auto w-full space-y-8">
          <Reveal delay={0}><div className="bg-charcoal/60 border border-cream/8 rounded-xl p-8 md:p-10"><span className="font-display font-black text-4xl text-coral/70 block mb-4">01</span><p className="font-display font-bold text-xl md:text-2xl text-cream leading-snug mb-3">You&apos;ve been quoted $50K for something that should cost a fraction of that.</p><p className="text-cream/40 font-body text-sm italic">And every agency you call quotes higher.</p></div></Reveal>
          <Reveal delay={0.15}><div className="bg-charcoal/60 border border-cream/8 rounded-xl p-8 md:p-10"><span className="font-display font-black text-4xl text-coral/70 block mb-4">02</span><p className="font-display font-bold text-xl md:text-2xl text-cream leading-snug mb-3">Your last developer vanished. Your project is half-built and fully broken.</p><p className="text-cream/40 font-body text-sm italic">And every month the codebase rots a little more.</p></div></Reveal>
          <Reveal delay={0.3}><div className="bg-charcoal/60 border border-cream/8 rounded-xl p-8 md:p-10"><span className="font-display font-black text-4xl text-coral/70 block mb-4">03</span><p className="font-display font-bold text-xl md:text-2xl text-cream leading-snug mb-3">You&apos;re drowning in manual work while your competitors automate.</p><p className="text-cream/40 font-body text-sm italic">And every hour you spend is an hour you can&apos;t get back.</p></div></Reveal>
        </div>
      </section>

      <section className="relative min-h-screen flex flex-col items-center justify-center py-24 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-charcoal via-charcoal to-charcoal/90">
        <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-transparent to-coral/3 pointer-events-none" />
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <Reveal><h2 className="font-display font-bold text-3xl md:text-4xl text-cream mb-16">Every week you wait:</h2></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <Reveal delay={0.1}><div className="text-center"><p className="font-display font-black text-5xl md:text-6xl text-coral">$<AnimatedCounter end={47} suffix="K" /></p><p className="text-cream/50 text-sm mt-3 font-body">wasted on average</p></div></Reveal>
            <Reveal delay={0.2}><div className="text-center"><p className="font-display font-black text-5xl md:text-6xl text-coral"><AnimatedCounter end={15} suffix="h" /></p><p className="text-cream/50 text-sm mt-3 font-body">lost to manual work weekly</p></div></Reveal>
            <Reveal delay={0.3}><div className="text-center"><p className="font-display font-black text-5xl md:text-6xl text-coral"><AnimatedCounter end={68} suffix="%" /></p><p className="text-cream/50 text-sm mt-3 font-body">of projects over budget</p></div></Reveal>
            <Reveal delay={0.4}><div className="text-center"><p className="font-display font-black text-5xl md:text-6xl text-coral"><AnimatedCounter end={6} suffix=" mo" /></p><p className="text-cream/50 text-sm mt-3 font-body">average delay</p></div></Reveal>
          </div>
          <Reveal delay={0.6}><p className="text-cream/60 italic font-body text-lg mb-10">It compounds.</p></Reveal>
          <Reveal delay={0.7}><div className="w-64 h-px mx-auto bg-gradient-to-r from-transparent via-coral/40 to-transparent" /></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="bg-charcoal py-24 md:py-32 px-6 text-center">
          <Reveal><h2 className="font-display font-bold text-4xl md:text-5xl text-cream max-w-3xl mx-auto leading-tight">But what if it didn&apos;t have to be this way?</h2></Reveal>
        </div>
        <div className="h-32 md:h-48 bg-gradient-to-b from-charcoal to-cream" />
        <div className="bg-cream py-16 md:py-24 px-6 text-center">
          <Reveal><p className="font-display font-semibold text-2xl md:text-3xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed mb-4">What if you had a senior engineer in your corner?</p></Reveal>
          <Reveal delay={0.15}><p className="font-body text-xl text-charcoal/60 max-w-lg mx-auto">Someone who fixes the $47K mistakes, eliminates the 15-hour weeks, and actually finishes what they start.</p></Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal><p className="text-coral uppercase tracking-[0.25em] text-sm font-body font-semibold text-center mb-4">What I Do</p></Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-14">
            {MESSAGING.growthServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}><div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative"><div className={`absolute top-0 left-0 right-0 h-1 ${i === 0 ? 'bg-coral' : i === 1 ? 'bg-sage' : i === 2 ? 'bg-mustard' : i === 3 ? 'bg-sky' : 'bg-lavender'}`} /><h3 className="font-display font-bold text-xl text-charcoal mb-3">{s.emoji} {s.title}</h3><p className="font-body text-charcoal/60 leading-relaxed">{s.desc}</p></div></Reveal>
            ))}
          </div>
          <Reveal delay={0.5}><p className="text-center font-body text-charcoal/50 mt-12 text-lg">All delivered by one senior engineer. No handoffs. No runaround.</p></Reveal>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-charcoal/10 overflow-hidden shadow-xl shadow-charcoal/5">
              <div className="bg-charcoal/5 px-5 py-3.5 flex items-center gap-3 border-b border-charcoal/10">
                <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-coral" /><div className="w-3 h-3 rounded-full bg-sage" /><div className="w-3 h-3 rounded-full bg-mustard" /></div>
                <p className="text-charcoal/40 text-xs font-body ml-2 tracking-wide">Client Results Dashboard</p>
              </div>
              <div className="p-6 md:p-10 bg-white">
                <div className="grid grid-cols-2 gap-6 md:gap-8 mb-10">
                  <div className="text-center p-4"><p className="font-display font-black text-4xl md:text-5xl text-coral">~<AnimatedCounter end={15} suffix="h" /></p><p className="text-charcoal/50 text-sm mt-2 font-body">saved weekly</p></div>
                  <div className="text-center p-4"><p className="font-display font-black text-4xl md:text-5xl text-sage"><AnimatedCounter end={80} suffix="%" /></p><p className="text-charcoal/50 text-sm mt-2 font-body">faster processes</p></div>
                  <div className="text-center p-4"><p className="font-display font-black text-4xl md:text-5xl text-mustard">$<AnimatedCounter end={2} suffix="M+" /></p><p className="text-charcoal/50 text-sm mt-2 font-body">Client revenue impacted</p></div>
                  <div className="text-center p-4"><p className="font-display font-black text-4xl md:text-5xl text-sky"><AnimatedCounter end={15} suffix="x" /></p><p className="text-charcoal/50 text-sm mt-2 font-body">capacity increase</p></div>
                </div>
                <div className="border-t border-charcoal/10 pt-6"><ProgressBar value={95} label="Client satisfaction" delay={0} /><ProgressBar value={100} label="Projects on time" delay={0.2} /></div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}><blockquote className="mt-12 text-center"><p className="font-body italic text-charcoal/60 text-lg leading-relaxed max-w-xl mx-auto">&ldquo;Ben didn&apos;t just build what we asked for. He showed us what we actually needed. Our team saves 20 hours a week now.&rdquo;</p><footer className="mt-4 text-charcoal/40 text-sm font-body">Nonprofit Director</footer></blockquote></Reveal>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal><p className="text-coral uppercase tracking-[0.25em] text-sm font-body font-semibold text-center mb-12">Who You&apos;re Working With</p></Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-charcoal/10"><Image src="/ben-headshot-3.jpg" alt="Ben Poon" width={600} height={700} className="object-cover w-full" /></div>
                <div className="absolute -bottom-4 -right-4 md:-right-6 bg-white rounded-xl shadow-lg shadow-charcoal/10 px-5 py-3 border border-charcoal/5"><p className="font-display font-black text-2xl text-coral">2-3</p><p className="text-charcoal/50 text-xs font-body">projects/mo</p></div>
                <div className="grid grid-cols-2 gap-3 mt-8">
                  <div className="bg-white rounded-lg px-4 py-3 text-center border border-charcoal/5"><p className="font-display font-bold text-lg text-charcoal">&lt;24h</p><p className="text-charcoal/40 text-xs font-body">Response</p></div>
                  <div className="bg-white rounded-lg px-4 py-3 text-center border border-charcoal/5"><p className="font-display font-bold text-lg text-charcoal">100%</p><p className="text-charcoal/40 text-xs font-body">Delivered</p></div>
                  <div className="bg-white rounded-lg px-4 py-3 text-center border border-charcoal/5"><p className="font-display font-bold text-lg text-charcoal">~15h</p><p className="text-charcoal/40 text-xs font-body">Saved</p></div>
                  <div className="bg-white rounded-lg px-4 py-3 text-center border border-charcoal/5"><p className="font-display font-bold text-lg text-charcoal">95%</p><p className="text-charcoal/40 text-xs font-body">Retention</p></div>
                </div>
              </div>
            </Reveal>
            <div>
              <Reveal delay={0.2}><h3 className="font-display font-bold text-3xl md:text-4xl text-charcoal leading-snug mb-6">I&apos;m Ben. Your Technology &amp; Growth Partner.</h3></Reveal>
              <Reveal delay={0.3}><p className="font-body text-charcoal/60 text-lg leading-relaxed mb-10">Senior engineer who left enterprise to work directly with growing businesses. When you hire me, you get me. Not a junior. Not an outsourced team. Me.</p></Reveal>
              <div className="space-y-6">
                <Reveal delay={0.35}><div className="flex gap-4 items-start"><div className="w-3 h-3 rounded-full bg-coral mt-2 flex-shrink-0" /><div><p className="font-display font-bold text-charcoal text-lg">1. Strategy Session</p><p className="font-body text-charcoal/50 text-sm mt-0.5">20 min. You tell me what&apos;s holding your business back.</p></div></div></Reveal>
                <Reveal delay={0.45}><div className="flex gap-4 items-start"><div className="w-3 h-3 rounded-full bg-sage mt-2 flex-shrink-0" /><div><p className="font-display font-bold text-charcoal text-lg">2. Growth Audit</p><p className="font-body text-charcoal/50 text-sm mt-0.5">I dig into your lead flow, sales process, and operations.</p></div></div></Reveal>
                <Reveal delay={0.55}><div className="flex gap-4 items-start"><div className="w-3 h-3 rounded-full bg-mustard mt-2 flex-shrink-0" /><div><p className="font-display font-bold text-charcoal text-lg">3. Build &amp; Launch</p><p className="font-body text-charcoal/50 text-sm mt-0.5">I build the systems. Regular updates, no jargon, no surprises.</p></div></div></Reveal>
                <Reveal delay={0.65}><div className="flex gap-4 items-start"><div className="w-3 h-3 rounded-full bg-lavender mt-2 flex-shrink-0" /><div><p className="font-display font-bold text-charcoal text-lg">4. Grow Together</p><p className="font-body text-charcoal/50 text-sm mt-0.5">Continuous optimization and a partner invested in your growth.</p></div></div></Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-charcoal py-28 md:py-40 px-6 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-coral/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[15%] w-[300px] h-[300px] rounded-full bg-sage/8 blur-[100px] pointer-events-none" />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <Reveal><p className="text-5xl mb-8">&#9749;</p></Reveal>
          <Reveal delay={0.1}><h2 className="font-display font-bold text-3xl md:text-5xl text-cream leading-tight mb-6">This is the part where we{' '}<em className="text-coral">grab coffee</em>.</h2></Reveal>
          <Reveal delay={0.2}><p className="font-body text-cream/60 text-lg md:text-xl leading-relaxed mb-3">Every week you wait, the numbers above get worse. 20 minutes. You tell me the problem, I&apos;ll show you the fix.</p></Reveal>
          <Reveal delay={0.3}><p className="font-body text-cream/35 text-sm mb-10">(Free. No pitch. No deck. Just honesty.)</p></Reveal>
          <Reveal delay={0.4}><Link href="https://calendly.com/benjamintpoon/20min" target="_blank" rel="noopener noreferrer" className="inline-block bg-coral hover:bg-coral/90 text-white font-body font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-coral/25">Let&apos;s Talk Growth &rarr;</Link></Reveal>
          <Reveal delay={0.5}><p className="font-body text-cream/40 text-sm mt-6">or email{' '}<a href="mailto:hello@goodrobotco.com" className="text-cream/60 underline underline-offset-2 hover:text-cream transition-colors">hello@goodrobotco.com</a></p></Reveal>
        </div>
      </section>

      <footer className="bg-charcoal border-t border-cream/8 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-cream/30 text-sm font-body">
          <p>&copy; 2025 Good Robot Co.</p>
          <a href="mailto:hello@goodrobotco.com" className="hover:text-cream/60 transition-colors">hello@goodrobotco.com</a>
        </div>
      </footer>

      <DesignSwitcher />
    </>
  )
}
