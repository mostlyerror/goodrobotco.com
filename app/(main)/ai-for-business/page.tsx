import { Metadata } from 'next'
import Link from 'next/link'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'
import { Reveal } from '@/components/Reveal'
import SectionLabel from '@/components/SectionLabel'

export const metadata: Metadata = {
  title: 'AI for Business Growth | Good Robot Co.',
  description: 'A practical guide to using AI for business growth - lead generation, speed-to-lead, customer retention, and revenue-driving automation for small and mid-size businesses.',
  openGraph: {
    title: 'AI for Business Growth | Good Robot Co.',
    description: 'A practical guide to using AI for business growth - lead generation, speed-to-lead, customer retention, and revenue-driving automation for small and mid-size businesses.',
    url: 'https://goodrobotco.com/ai-for-business',
    type: 'article',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI for Business Growth - Good Robot Co.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Business Growth | Good Robot Co.',
    description: 'A practical guide to using AI for business growth - lead generation, speed-to-lead, customer retention, and revenue-driving automation for small and mid-size businesses.',
    images: ['/og-image.png'],
  },
}

export default function AIForBusiness() {
  return (
    <>
      <HeroSimple
        label="AI Guide"
        title="Can AI actually grow my business?"
        subtitle="Everyone's talking about AI. But for most small business owners, the real question isn't whether AI works - it's whether it can help you get more leads, close more sales, and keep more customers. This guide will help you figure that out."
      />

      {/* Prominent CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Start here</SectionLabel>
            <div className="bg-gradient-to-br from-sage/10 to-sky/10 p-8 rounded-2xl border-2 border-sage/20">
              <h3 className="text-2xl font-display font-bold mb-3">Want to know how AI can drive growth for your business?</h3>
              <p className="text-charcoal-light mb-6">Book a free 20-minute growth audit. I&apos;ll assess your lead generation, speed-to-lead, and customer retention and tell you where AI can drive real revenue, with no obligation to hire me.</p>
              <Link href="/#contact" className="inline-block px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/40 hover:bg-coral-hover hover:-translate-y-1 transition-all duration-300">
                Book Your Free Growth Assessment →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cut through the hype */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>The basics</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-6">First, let&apos;s cut through the hype</h2>
            <p className="text-lg text-charcoal-light mb-5">AI isn&apos;t magic. It&apos;s a tool, and like any tool, it&apos;s great for some jobs and useless for others.</p>
            <p className="text-lg text-charcoal-light mb-5">The AI that&apos;s useful for most businesses right now falls into two categories:</p>
            <p className="text-lg text-charcoal-light mb-5"><strong>1. Assistants that can understand and generate text.</strong> Think ChatGPT. These can write, summarize, answer questions, and have conversations. They can be trained on your specific business information so they actually know your products, policies, and procedures.</p>
            <p className="text-lg text-charcoal-light mb-5"><strong>2. Automation that handles repetitive tasks.</strong> Sorting emails, extracting data from documents, categorizing support requests, generating reports. Things that used to require a human clicking and copying can often be automated.</p>
            <p className="text-lg text-charcoal-light mb-5"><strong>3. Growth engines that work while you sleep.</strong> Automated lead generation, speed-to-lead systems, review solicitation, and re-engagement campaigns that run 24/7. These are the AI use cases that directly impact your top line.</p>
            <p className="text-lg text-charcoal-light">If your business problem doesn&apos;t fit into one of those buckets, AI probably isn&apos;t the answer (yet). And that&apos;s fine.</p>
          </Reveal>
        </div>
      </section>

      {/* RAG Chatbots */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Smart assistants</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-6">RAG Chatbots: AI That Knows Your Business</h2>
            <p className="text-lg text-charcoal-light mb-5">One of the most practical AI implementations for businesses is called RAG (Retrieval-Augmented Generation). Don&apos;t worry about the technical term, here&apos;s what it actually means:</p>

            <div className="bg-sage-light rounded-2xl p-8 mb-6">
              <p className="text-lg text-charcoal mb-4"><strong>Think of it like this:</strong> A regular AI chatbot is like an intern who&apos;s really good at conversation but doesn&apos;t know anything about your company. A RAG chatbot is like that same intern, but now they have access to all your manuals, FAQs, policies, and documentation so they can look up the exact answer before responding.</p>
            </div>

            <h3 className="text-2xl font-display font-bold mb-4">Why RAG matters for your business</h3>
            <p className="text-lg text-charcoal-light mb-4">Standard AI chatbots can make things up or give generic answers. RAG chatbots:</p>

            <div className="space-y-3 mb-6">
              <div className="flex gap-3 items-start">
                <span className="text-coral text-xl">✓</span>
                <p className="text-charcoal-light"><strong>Pull from your actual documents</strong>. Product specs, return policies, troubleshooting guides, internal wikis</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-coral text-xl">✓</span>
                <p className="text-charcoal-light"><strong>Cite their sources</strong>. &quot;According to your shipping policy document, page 3...&quot;</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-coral text-xl">✓</span>
                <p className="text-charcoal-light"><strong>Stay up to date</strong>. Update your docs, the chatbot instantly knows the new information</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-coral text-xl">✓</span>
                <p className="text-charcoal-light"><strong>Reduce hallucinations</strong>. They stick to what&apos;s in your knowledge base instead of making things up</p>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold mb-4">Common use cases</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-coral pl-6">
                <p className="font-semibold text-lg mb-2">Customer Support</p>
                <p className="text-charcoal-light">Answer questions about your products, services, policies, and procedures 24/7 with accurate information from your support docs.</p>
              </div>
              <div className="border-l-4 border-sage pl-6">
                <p className="font-semibold text-lg mb-2">Internal Knowledge Base</p>
                <p className="text-charcoal-light">Help your team find answers in company wikis, process documentation, or technical manuals without digging through folders.</p>
              </div>
              <div className="border-l-4 border-mustard pl-6">
                <p className="font-semibold text-lg mb-2">Onboarding Assistant</p>
                <p className="text-charcoal-light">New employees can ask questions about benefits, processes, and policies and get instant, accurate answers from your employee handbook.</p>
              </div>
              <div className="border-l-4 border-sky pl-6">
                <p className="font-semibold text-lg mb-2">Lead Qualification</p>
                <p className="text-charcoal-light">Automatically qualify incoming leads, respond instantly, and route hot opportunities to your sales team before they go cold.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <SectionLabel>Real use cases</SectionLabel>
              <h2 className="text-3xl font-display font-bold mb-4">Where AI actually makes sense</h2>
              <p className="text-lg text-charcoal-light">Real examples of how businesses like yours are using AI today.</p>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="text-3xl">🎯</span> Lead Generation & Speed-to-Lead
                  </h3>
                  <p className="text-charcoal-light mb-4">AI-powered prospecting that scans for your ideal customers, qualifies leads instantly, and responds in minutes instead of hours. Stop losing leads to slow follow-up.</p>
                  <p className="text-charcoal-light"><strong>Real example:</strong> A service business automated lead qualification and reduced response time from 4 hours to 3 minutes. Conversion rate increased 40% in the first month.</p>
                </div>
                <div className="bg-coral-light rounded-2xl p-8">
                  <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                  <p className="text-2xl font-display font-bold text-charcoal">40-60% increase in lead conversion</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="text-3xl">⭐</span> Customer Retention & Reputation
                  </h3>
                  <p className="text-charcoal-light mb-4">Automated review solicitation after service delivery, intelligent re-engagement campaigns for past customers, and reputation monitoring that alerts you to issues before they spread.</p>
                  <p className="text-charcoal-light"><strong>Real example:</strong> A local business automated review requests and went from 12 Google reviews to 85 in three months, dramatically improving local search visibility.</p>
                </div>
                <div className="bg-mustard-light rounded-2xl p-8">
                  <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                  <p className="text-2xl font-display font-bold text-charcoal">3-5x increase in review volume</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="text-3xl">💬</span> Customer Support That Scales
                  </h3>
                  <p className="text-charcoal-light mb-4">An AI assistant trained on your FAQs, product docs, and policies can answer customer questions 24/7, instantly. It handles the repetitive stuff so your team can focus on complex issues.</p>
                  <p className="text-charcoal-light"><strong>Real example:</strong> A 15-person e-commerce company reduced support tickets by 40% with an AI chatbot that handles shipping questions, return policies, and product recommendations.</p>
                </div>
                <div className="bg-sage-light rounded-2xl p-8">
                  <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                  <p className="text-2xl font-display font-bold text-charcoal">$3,000-8,000/month in support costs</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="text-3xl">📄</span> Document Processing
                  </h3>
                  <p className="text-charcoal-light mb-4">Invoices, contracts, applications, forms. AI can extract the data you need and put it where it belongs, without someone manually copying and pasting.</p>
                  <p className="text-charcoal-light"><strong>Real example:</strong> A property management company automated lease data extraction. What took 2 hours per lease now takes 5 minutes of review.</p>
                </div>
                <div className="bg-mustard-light rounded-2xl p-8">
                  <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                  <p className="text-2xl font-display font-bold text-charcoal">15-20 hours/week of admin time</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="text-3xl">✍️</span> Content & Communication
                  </h3>
                  <p className="text-charcoal-light mb-4">First drafts of emails, blog posts, product descriptions, social media. AI won&apos;t replace your voice, but it can get you 70% of the way there in seconds.</p>
                  <p className="text-charcoal-light"><strong>Real example:</strong> A marketing agency uses AI to generate initial drafts for client content. Writers now edit and refine instead of starting from scratch.</p>
                </div>
                <div className="bg-lavender-light rounded-2xl p-8">
                  <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                  <p className="text-2xl font-display font-bold text-charcoal">30-50% reduction in content creation time</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.40}>
              <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-3">
                    <span className="text-3xl">📊</span> Data Analysis & Reporting
                  </h3>
                  <p className="text-charcoal-light mb-4">Upload a spreadsheet, ask questions in plain English, get answers. AI can find patterns, summarize trends, and generate reports without you learning Excel formulas.</p>
                  <p className="text-charcoal-light"><strong>Real example:</strong> A retail business owner asks &quot;What were my best-selling products last quarter by region?&quot; and gets the answer in seconds.</p>
                </div>
                <div className="bg-sky-light rounded-2xl p-8">
                  <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                  <p className="text-2xl font-display font-bold text-charcoal">50-70% reduction in analysis time</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* When NOT to use AI */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Know the limits</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-6">Where to be thoughtful about AI</h2>
            <p className="text-lg text-charcoal-light mb-6">AI works best when you understand its limitations. Here&apos;s what to keep in mind:</p>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-mustard">→</span> High-stakes decisions need human oversight
                </h3>
                <p className="text-charcoal-light">In healthcare, legal, or finance, AI works best as an assistant, not a replacement. We build in the right guardrails and review processes.</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-mustard">→</span> Clear processes come first
                </h3>
                <p className="text-charcoal-light">AI amplifies what you already do well. If processes need work, we can tackle that together before layering in automation.</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-mustard">→</span> Some moments need a human
                </h3>
                <p className="text-charcoal-light">AI handles the routine so your team can focus on the interactions that matter most. We&apos;ll design the handoff points together.</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <span className="text-mustard">→</span> Right tool for the job
                </h3>
                <p className="text-charcoal-light">Sometimes AI is the answer, sometimes it&apos;s a simpler automation. Part of my job is helping you figure out which.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Get started</SectionLabel>
            <h2 className="text-3xl font-display font-bold mb-6">Ready to explore?</h2>
            <p className="text-lg text-charcoal-light mb-8">Here&apos;s how I&apos;d suggest approaching this:</p>

            <div className="space-y-4 mb-10">
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                <p className="text-lg text-charcoal-light">Book a free call. 20 minutes, no pitch. Tell me what&apos;s frustrating you about your current processes.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                <p className="text-lg text-charcoal-light">I&apos;ll give you an honest assessment of whether AI fits your situation and what approach makes the most sense.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 bg-coral text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                <p className="text-lg text-charcoal-light">If it makes sense, we&apos;ll start with a quick win that shows measurable growth impact. Low risk, clear ROI, so you can see results before committing to anything bigger.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTA
        headline="Want to know how AI can grow your business?"
        subheadline="Book a free 20-minute growth assessment. I'll look at your specific situation and tell you honestly where AI can drive revenue."
      />
    </>
  )
}
