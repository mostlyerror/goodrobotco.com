import { Metadata } from 'next'
import Image from 'next/image'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'
import { Reveal } from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'About | Good Robot Co.',
  description: 'Learn about Ben Poon and Good Robot Co. Your technology and growth partner. Honest assessment, practical solutions, and real business outcomes.',
  openGraph: {
    title: 'About | Good Robot Co.',
    description: 'Learn about Ben Poon and Good Robot Co. Your technology and growth partner. Honest assessment, practical solutions, and real business outcomes.',
    url: 'https://goodrobotco.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Good Robot Co.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Good Robot Co.',
    description: 'Learn about Ben Poon and Good Robot Co. Your technology and growth partner. Honest assessment, practical solutions, and real business outcomes.',
    images: ['/og-image.png'],
  },
}

export default function About() {
  return (
    <>
      <HeroSimple
        label="About"
        title="About Good Robot Co."
        subtitle="Your technology and growth partner. Honest assessment, practical solutions, and real business outcomes."
      />

      {/* My Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>My story</SectionLabel>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
            <Reveal delay={0.1} className="md:w-1/3 flex-shrink-0">
              <Image
                src="/ben-headshot-3.jpg"
                alt="Ben Poon"
                width={400}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </Reveal>
            <Reveal delay={0.2} className="md:w-2/3">
              <h2 className="text-3xl font-display font-bold mb-6">Hi, I'm Ben 👋</h2>
              <div className="space-y-4 text-charcoal-light">
                <p>
                  I spent years building systems at scale. AI platforms, automation workflows, and custom software for enterprise clients.
                  I saw how technology gets overcomplicated, oversold, and disconnected from what actually drives a business forward.
                </p>
                <p>
                  So I started Good Robot Co. to be the technology and growth partner that small and mid-size businesses actually need.
                  Not a vendor who drops off a deliverable and disappears, but a thought partner who understands your business goals
                  and builds the systems to get you there.
                </p>
                <p>
                  My focus: understanding where you want to grow, then using the right technology to unlock that growth. That might be AI
                  that qualifies your leads while you sleep. It might be automation that eliminates 10 hours of manual work per week.
                  It might be a custom platform that turns a bottleneck into a competitive advantage.
                </p>
                <p>
                  Every recommendation I make ties back to one question: does this help the business grow? I don't oversell, I don't
                  use jargon, and I stick around to make sure the results actually land. You work directly with me. No account
                  managers, no runaround, no surprises.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why I Started This */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>The origin</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Why I started Good Robot Co.</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-display font-bold mb-4 text-coral">The problem I kept seeing</h3>
                <div className="space-y-3 text-charcoal-light">
                  <p>Small businesses getting quoted $50K for software that should cost $5K.</p>
                  <p>Leads going cold because there's no system to follow up at scale.</p>
                  <p>Manual processes capping growth. The team can't take on more without burning out.</p>
                  <p>AI vendors promising magic without understanding the actual business problem.</p>
                  <p>Tech consultants building what was asked for, not what the business actually needed to grow.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-display font-bold mb-4 text-sage">What I decided to do differently</h3>
                <div className="space-y-3 text-charcoal-light">
                  <p>Transparent pricing. You know what you're paying before we start.</p>
                  <p>Honest assessment. I'll tell you if you don't need what you're asking for.</p>
                  <p>Right-sized solutions. Match the complexity to your actual needs.</p>
                  <p>Actually responsive. I answer emails, show up to calls, and stick around after launch.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>What sets us apart</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-12 text-center">What makes me different</h2>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl border-2 border-sage/30 bg-sage/5 flex items-center justify-center text-3xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Small client load by design</h3>
                  <p className="text-charcoal-light">
                    I only take 2-3 new projects per month. This isn't artificial scarcity, it's how I maintain quality
                    and responsiveness. You get personalized attention, not cookie-cutter templates.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl border-2 border-coral/30 bg-coral/5 flex items-center justify-center text-3xl flex-shrink-0">📈</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Growth-focused</h3>
                  <p className="text-charcoal-light">
                    Every recommendation ties back to revenue, efficiency, or capacity. I don't build tech for tech's sake.
                    If it doesn't help the business grow or run better, I'll tell you to skip it.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl border-2 border-mustard/30 bg-mustard/5 flex items-center justify-center text-3xl flex-shrink-0">💬</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">Plain English communication</h3>
                  <p className="text-charcoal-light">
                    No technical jargon unless you ask for it. I explain things clearly so you understand what you're getting,
                    why it costs what it costs, and what your options are.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl border-2 border-sky/30 bg-sky/5 flex items-center justify-center text-3xl flex-shrink-0">🤝</div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2">True partnership</h3>
                  <p className="text-charcoal-light">
                    I'm your ongoing partner, not a vendor. I stay close to your business, understand your goals as they
                    change, and keep finding ways technology can drive the next stage of growth. This is a relationship, not a transaction.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 md:py-32 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Tools of the trade</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-4 text-center">Tech stack I work with</h2>
            <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
              Modern, proven technologies that are actively maintained and well-documented. No legacy cruft.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-sage">Frontend & Web</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Next.js, React, TypeScript</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• Sanity, Contentful for CMS</li>
                  <li>• Vercel, Netlify for hosting</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-coral">AI & Automation</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• OpenAI, Anthropic (Claude) APIs</li>
                  <li>• LangChain, Vector databases</li>
                  <li>• Zapier, Make for workflows</li>
                  <li>• Custom Python/Node.js scripts</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-mustard">Backend & Data</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Node.js, Python</li>
                  <li>• PostgreSQL, MongoDB</li>
                  <li>• RESTful and GraphQL APIs</li>
                  <li>• Supabase, Firebase</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div>
                <h3 className="text-xl font-display font-bold mb-4 text-lavender">Tools & Platforms</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Git version control</li>
                  <li>• GitHub Actions for CI/CD</li>
                  <li>• Docker for containerization</li>
                  <li>• Linear, Notion for project management</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Ideal clients</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Who I work with</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h3 className="text-xl font-display font-bold mb-4">Small and mid-size businesses who want to grow smarter...</h3>
              <div className="space-y-3 text-charcoal-light">
                <div className="flex gap-3 items-start">
                  <span className="text-sage text-xl">✓</span>
                  <p>Know there's a better way to operate but need a partner to figure out the "how"</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sage text-xl">✓</span>
                  <p>Want to use technology to grow revenue, not just "modernize" for its own sake</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sage text-xl">✓</span>
                  <p>Are tired of being oversold by agencies and vendors who don't understand their business</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sage text-xl">✓</span>
                  <p>Need a long-term thought partner, not a one-off project vendor</p>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-sage text-xl">✓</span>
                  <p>Value transparency, plain-English communication, and results that show up in the numbers</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-center text-charcoal-light">
              <strong>Industries I've worked with:</strong> Professional services, local businesses,
              non-profits, agencies, education, healthcare, and e-commerce.
            </p>
          </Reveal>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>My process</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-12 text-center">How I approach client work</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-coral/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-coral">1</div>
                <h3 className="font-display font-bold mb-2">Listen first</h3>
                <p className="text-sm text-charcoal-light">
                  I don't pitch solutions on the first call. I listen, ask questions, and understand where your business is and where you want it to go.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-sage/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-sage">2</div>
                <h3 className="font-display font-bold mb-2">Assess honestly</h3>
                <p className="text-sm text-charcoal-light">
                  I'll tell you if you don't need what you're asking for. I map technology to growth opportunities, not the other way around.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-mustard/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-mustard">3</div>
                <h3 className="font-display font-bold mb-2">Build for growth</h3>
                <p className="text-sm text-charcoal-light">
                  I build systems designed to drive measurable outcomes. More leads, less manual work, higher capacity. Technology in service of your bottom line.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Ready to grow smarter?"
        subheadline="Book a free 20-minute call and let's talk about where your business is headed and how the right technology can get you there faster. No pitch, no pressure, just an honest conversation."
      />
    </>
  )
}
