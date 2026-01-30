import { Metadata } from 'next'
import Image from 'next/image'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'About | Good Robot Co.',
  description: 'Learn about Ben Poon and Good Robot Co. Modern tech consulting built on honest assessment, practical solutions, and no BS.',
  openGraph: {
    title: 'About | Good Robot Co.',
    description: 'Learn about Ben Poon and Good Robot Co. Modern tech consulting built on honest assessment, practical solutions, and no BS.',
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
    description: 'Learn about Ben Poon and Good Robot Co. Modern tech consulting built on honest assessment, practical solutions, and no BS.',
    images: ['/og-image.png'],
  },
}

export default function About() {
  return (
    <>
      <HeroSimple
        title="About Good Robot Co."
        subtitle="Modern tech consulting built on honest assessment, practical solutions, and no BS."
      />

      {/* My Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
            <div className="md:w-1/3 flex-shrink-0">
              <Image
                src="/ben-headshot-2.jpg"
                alt="Ben Poon"
                width={400}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-semibold mb-6">Hi, I'm Ben 👋</h2>
              <div className="space-y-4 text-charcoal-light">
                <p>
                  I spent years building systems at scale. AI platforms, automation workflows, and custom software for enterprise clients.
                  I saw how technology gets overcomplicated, oversold, and over-engineered when it doesn't need to be.
                </p>
                <p>
                  So I started Good Robot Co. to work directly with small and mid-size businesses who need practical tech solutions,
                  not enterprise bloat or sales pitches.
                </p>
                <p>
                  My focus: understanding your actual problem, then using the right tool to solve it. That might be AI. It might be
                  simple automation. It might be custom development. It might just be fixing what's broken.
                </p>
                <p>
                  I don't oversell, I don't use jargon, and I don't disappear after launch. You work directly with me. No account
                  managers, no runaround, no surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Started This */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why I started Good Robot Co.</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-coral">The problem I kept seeing</h3>
              <div className="space-y-3 text-charcoal-light">
                <p>Small businesses getting quoted $50K for software that should cost $5K.</p>
                <p>AI vendors promising magic without understanding the actual business problem.</p>
                <p>Developers ghosting clients mid-project, leaving broken systems behind.</p>
                <p>Tech consultants using jargon to justify inflated budgets.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-sage">What I decided to do differently</h3>
              <div className="space-y-3 text-charcoal-light">
                <p>Transparent pricing. You know what you're paying before we start.</p>
                <p>Honest assessment. I'll tell you if you don't need what you're asking for.</p>
                <p>Right-sized solutions. Match the complexity to your actual needs.</p>
                <p>Actually responsive. I answer emails, show up to calls, and stick around after launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">What makes me different</h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-sage-light rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Small client load by design</h3>
                <p className="text-charcoal-light">
                  I only take 2-3 new projects per month. This isn't artificial scarcity, it's how I maintain quality
                  and responsiveness. You get personalized attention, not cookie-cutter templates.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-coral/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Modern tech stack</h3>
                <p className="text-charcoal-light">
                  I use current best practices and proven technologies. Next.js, React, TypeScript, modern AI frameworks.
                  Not legacy systems from 2010 that will be impossible to maintain.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-mustard-light rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">💬</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Plain English communication</h3>
                <p className="text-charcoal-light">
                  No technical jargon unless you ask for it. I explain things clearly so you understand what you're getting,
                  why it costs what it costs, and what your options are.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 bg-sky-light rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">🛠️</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">I don't disappear after launch</h3>
                <p className="text-charcoal-light">
                  Things break. Requirements change. Questions come up. I'm here for ongoing support, maintenance, and
                  evolution of your systems, not just the initial build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center">Tech stack I work with</h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">
            Modern, proven technologies that are actively maintained and well-documented. No legacy cruft.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-sage">Frontend & Web</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Next.js, React, TypeScript</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Sanity, Contentful for CMS</li>
                <li>• Vercel, Netlify for hosting</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-coral">AI & Automation</h3>
              <ul className="space-y-2 text-white/80">
                <li>• OpenAI, Anthropic (Claude) APIs</li>
                <li>• LangChain, Vector databases</li>
                <li>• Zapier, Make for workflows</li>
                <li>• Custom Python/Node.js scripts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-mustard">Backend & Data</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Node.js, Python</li>
                <li>• PostgreSQL, MongoDB</li>
                <li>• RESTful and GraphQL APIs</li>
                <li>• Supabase, Firebase</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-lavender">Tools & Platforms</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Git version control</li>
                <li>• GitHub Actions for CI/CD</li>
                <li>• Docker for containerization</li>
                <li>• Linear, Notion for project management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">Who I work with</h2>

          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h3 className="text-xl font-semibold mb-4">Small and mid-size businesses who...</h3>
            <div className="space-y-3 text-charcoal-light">
              <div className="flex gap-3 items-start">
                <span className="text-sage text-xl">✓</span>
                <p>Need honest guidance on whether tech solutions make sense for them</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-sage text-xl">✓</span>
                <p>Want modern tools but don't have in-house technical expertise</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-sage text-xl">✓</span>
                <p>Are tired of being oversold by agencies and vendors</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-sage text-xl">✓</span>
                <p>Need someone who actually responds and sticks around</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-sage text-xl">✓</span>
                <p>Value transparency and plain-English communication</p>
              </div>
            </div>
          </div>

          <p className="text-center text-charcoal-light">
            <strong>Industries I've worked with:</strong> Professional services, local businesses,
            non-profits, agencies, education, healthcare, and e-commerce.
          </p>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center">How I approach client work</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-coral/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-coral">1</div>
              <h3 className="font-semibold mb-2">Listen first</h3>
              <p className="text-sm text-charcoal-light">
                I don't pitch solutions on the first call. I listen, ask questions, and understand your actual problem.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-sage/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-sage">2</div>
              <h3 className="font-semibold mb-2">Assess honestly</h3>
              <p className="text-sm text-charcoal-light">
                I'll tell you if you don't need what you're asking for. Sometimes the answer is simpler than you think.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-mustard/10 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-mustard">3</div>
              <h3 className="font-semibold mb-2">Build practically</h3>
              <p className="text-sm text-charcoal-light">
                I use the right tool for your problem. Whether that's custom dev, automation, AI, or fixing what's broken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Want to work together?"
        subheadline="Book a free 20-minute call and let's talk about what you need. No pitch, no pressure, just an honest conversation."
      />
    </>
  )
}
