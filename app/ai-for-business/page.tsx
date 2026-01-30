import { Metadata } from 'next'
import Link from 'next/link'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Can AI Actually Help My Business? | Good Robot Co.',
  description: 'A practical guide to understanding if and how AI can help your small or mid-size business save time, reduce costs, and serve customers better.',
  openGraph: {
    title: 'Can AI Actually Help My Business? | Good Robot Co.',
    description: 'A practical guide to understanding if and how AI can help your small or mid-size business save time, reduce costs, and serve customers better.',
    url: 'https://goodrobotco.com/ai-for-business',
    type: 'article',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Can AI Actually Help My Business? - Good Robot Co.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can AI Actually Help My Business? | Good Robot Co.',
    description: 'A practical guide to understanding if and how AI can help your small or mid-size business save time, reduce costs, and serve customers better.',
    images: ['/og-image.png'],
  },
}

export default function AIForBusiness() {
  return (
    <>
      <HeroSimple
        title="Can AI actually help my business?"
        subtitle="Everyone's talking about AI. But for most small and mid-size business owners, it's unclear what's real, what's hype, and whether any of it applies to them. This guide will help you figure that out."
      />

      {/* Prominent CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-sage/10 to-sky/10 p-8 rounded-2xl border-2 border-sage/20">
            <h3 className="text-2xl font-semibold mb-3">Want to know if this applies to your business?</h3>
            <p className="text-charcoal-light mb-6">Book a free 20-minute AI assessment. I&apos;ll audit your processes and tell you what&apos;s actually worth implementing—with no obligation to hire me.</p>
            <Link href="/#contact" className="inline-block px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/40 hover:bg-coral-hover hover:-translate-y-1 transition-all duration-300">
              Book Your Free AI Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* Cut through the hype */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">First, let&apos;s cut through the hype</h2>
          <p className="text-lg text-charcoal-light mb-5">AI isn&apos;t magic. It&apos;s a tool, and like any tool, it&apos;s great for some jobs and useless for others.</p>
          <p className="text-lg text-charcoal-light mb-5">The AI that&apos;s useful for most businesses right now falls into two categories:</p>
          <p className="text-lg text-charcoal-light mb-5"><strong>1. Assistants that can understand and generate text.</strong> Think ChatGPT. These can write, summarize, answer questions, and have conversations. They can be trained on your specific business information so they actually know your products, policies, and procedures.</p>
          <p className="text-lg text-charcoal-light mb-5"><strong>2. Automation that handles repetitive tasks.</strong> Sorting emails, extracting data from documents, categorizing support requests, generating reports. Things that used to require a human clicking and copying can often be automated.</p>
          <p className="text-lg text-charcoal-light">If your business problem doesn&apos;t fit into one of those buckets, AI probably isn&apos;t the answer (yet). And that&apos;s fine.</p>
        </div>
      </section>

      {/* RAG Chatbots */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">RAG Chatbots: AI That Knows Your Business</h2>
          <p className="text-lg text-charcoal-light mb-5">One of the most practical AI implementations for businesses is called RAG (Retrieval-Augmented Generation). Don&apos;t worry about the technical term—here&apos;s what it actually means:</p>

          <div className="bg-sage-light rounded-2xl p-8 mb-6">
            <p className="text-lg text-charcoal mb-4"><strong>Think of it like this:</strong> A regular AI chatbot is like an intern who&apos;s really good at conversation but doesn&apos;t know anything about your company. A RAG chatbot is like that same intern, but now they have access to all your manuals, FAQs, policies, and documentation—and they can look up the exact answer before responding.</p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Why RAG matters for your business</h3>
          <p className="text-lg text-charcoal-light mb-4">Standard AI chatbots can make things up or give generic answers. RAG chatbots:</p>

          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-start">
              <span className="text-coral text-xl">✓</span>
              <p className="text-charcoal-light"><strong>Pull from your actual documents</strong> – Product specs, return policies, troubleshooting guides, internal wikis</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-coral text-xl">✓</span>
              <p className="text-charcoal-light"><strong>Cite their sources</strong> – &quot;According to your shipping policy document, page 3...&quot;</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-coral text-xl">✓</span>
              <p className="text-charcoal-light"><strong>Stay up to date</strong> – Update your docs, the chatbot instantly knows the new information</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-coral text-xl">✓</span>
              <p className="text-charcoal-light"><strong>Reduce hallucinations</strong> – They stick to what&apos;s in your knowledge base instead of making things up</p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Common use cases</h3>
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
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-semibold mb-4">Where AI actually makes sense</h2>
            <p className="text-lg text-charcoal-light">Real examples of how businesses like yours are using AI today.</p>
          </div>
          
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="text-3xl">💬</span> Customer Support That Scales
                </h3>
                <p className="text-charcoal-light mb-4">An AI assistant trained on your FAQs, product docs, and policies can answer customer questions 24/7, instantly. It handles the repetitive stuff so your team can focus on complex issues.</p>
                <p className="text-charcoal-light"><strong>Real example:</strong> A 15-person e-commerce company reduced support tickets by 40% with an AI chatbot that handles shipping questions, return policies, and product recommendations.</p>
              </div>
              <div className="bg-sage-light rounded-2xl p-8">
                <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                <p className="text-2xl font-semibold text-charcoal">$3,000-8,000/month in support costs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="text-3xl">📄</span> Document Processing
                </h3>
                <p className="text-charcoal-light mb-4">Invoices, contracts, applications, forms. AI can extract the data you need and put it where it belongs, without someone manually copying and pasting.</p>
                <p className="text-charcoal-light"><strong>Real example:</strong> A property management company automated lease data extraction. What took 2 hours per lease now takes 5 minutes of review.</p>
              </div>
              <div className="bg-mustard-light rounded-2xl p-8">
                <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                <p className="text-2xl font-semibold text-charcoal">15-20 hours/week of admin time</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="text-3xl">✍️</span> Content & Communication
                </h3>
                <p className="text-charcoal-light mb-4">First drafts of emails, blog posts, product descriptions, social media. AI won&apos;t replace your voice, but it can get you 70% of the way there in seconds.</p>
                <p className="text-charcoal-light"><strong>Real example:</strong> A marketing agency uses AI to generate initial drafts for client content. Writers now edit and refine instead of starting from scratch.</p>
              </div>
              <div className="bg-lavender-light rounded-2xl p-8">
                <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                <p className="text-2xl font-semibold text-charcoal">30-50% reduction in content creation time</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-cream rounded-3xl p-8 md:p-10">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <span className="text-3xl">📊</span> Data Analysis & Reporting
                </h3>
                <p className="text-charcoal-light mb-4">Upload a spreadsheet, ask questions in plain English, get answers. AI can find patterns, summarize trends, and generate reports without you learning Excel formulas.</p>
                <p className="text-charcoal-light"><strong>Real example:</strong> A retail business owner asks &quot;What were my best-selling products last quarter by region?&quot; and gets the answer in seconds.</p>
              </div>
              <div className="bg-sky-light rounded-2xl p-8">
                <p className="text-sm uppercase tracking-wider text-charcoal-light font-semibold mb-2">Typical Savings</p>
                <p className="text-2xl font-semibold text-charcoal">50-70% reduction in analysis time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When NOT to use AI */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Where to be thoughtful</h2>
          <p className="text-lg text-charcoal-light mb-6">AI works best when you understand its limitations. Here&apos;s what to keep in mind:</p>
          
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-mustard">→</span> High-stakes decisions need human oversight
              </h3>
              <p className="text-charcoal-light">In healthcare, legal, or finance, AI works best as an assistant, not a replacement. We build in the right guardrails and review processes.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-mustard">→</span> Clear processes come first
              </h3>
              <p className="text-charcoal-light">AI amplifies what you already do well. If processes need work, we can tackle that together before layering in automation.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-mustard">→</span> Some moments need a human
              </h3>
              <p className="text-charcoal-light">AI handles the routine so your team can focus on the interactions that matter most. We&apos;ll design the handoff points together.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-mustard">→</span> Right tool for the job
              </h3>
              <p className="text-charcoal-light">Sometimes AI is the answer, sometimes it&apos;s a simpler automation. Part of my job is helping you figure out which.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Ready to explore?</h2>
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
              <p className="text-lg text-charcoal-light">If it makes sense, we&apos;ll talk about a small pilot project. Low risk, clear outcomes, so you can see results before committing to anything bigger.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        headline="Want to know if AI makes sense for your business?"
        subheadline="Book a free 20-minute call. I'll ask about your specific situation and tell you honestly whether AI can help."
      />
    </>
  )
}
