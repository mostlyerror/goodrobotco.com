'use client'

import { Reveal } from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'

interface CTAProps {
  headline?: string
  subheadline?: string
}

export default function CTA({
  headline = "This is the part where you reach out.",
  subheadline = "Every week you wait, leads go cold and revenue slips away. 20 minutes. You tell me where you want to grow, I'll show you how."
}: CTAProps) {
  return (
    <section id="contact" className="py-28 md:py-40 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-[500px] h-[500px] bg-coral/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-sage/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <Reveal>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-cream leading-tight mb-6">
              {headline}
            </h2>
            <p className="text-lg text-cream/50 max-w-lg mx-auto leading-relaxed">
              {subheadline}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold text-cream mb-3">Schedule a Growth Call</h3>
              <p className="text-cream/50 text-sm mb-6">Book a free 20-minute conversation about growing your business.</p>

              <ul className="space-y-3 mb-8">
                {[
                  'Identify your biggest growth bottleneck',
                  'Honest assessment of what will move the needle',
                  'Zero pressure or commitment required',
                  'Clear next steps if we\'re a good fit',
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
  )
}
