import { Metadata } from 'next'
import HeroSimple from '@/components/HeroSimple'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Can AI Actually Help My Business? | Good Robot Co.',
  description: 'A practical guide to understanding if and how AI can help your small or mid-size business save time, reduce costs, and serve customers better.',
}

export default function AIForBusiness() {
  return (
    <>
      <HeroSimple 
        title="Can AI actually help my business?"
        subtitle="Everyone's talking about AI. But for most small and mid-size business owners, it's unclear what's real, what's hype, and whether any of it applies to them. This guide will help you figure that out."
      />

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

      {/* Use Cases */}
      <section className="py-20 bg-white">
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
                <p className="text-2xl font-semibold text-charcoal">Hours of manual analysis per week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When NOT to use AI */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">When AI is NOT the answer</h2>
          <p className="text-lg text-charcoal-light mb-6">AI isn&apos;t right for everything. Here&apos;s when I&apos;d steer you away from it:</p>
          
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-coral">✗</span> When accuracy is critical and errors are costly
              </h3>
              <p className="text-charcoal-light">AI makes mistakes. If you&apos;re in healthcare, legal, or finance where a wrong answer could cause real harm, AI should assist humans, not replace them.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-coral">✗</span> When you don&apos;t have clear processes yet
              </h3>
              <p className="text-charcoal-light">AI automates what exists. If your processes are chaotic or undefined, fix that first. AI won&apos;t magically create order from chaos.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-coral">✗</span> When the human touch is the whole point
              </h3>
              <p className="text-charcoal-light">Some customer interactions need empathy and judgment that AI can&apos;t provide. Know where to draw the line.</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-coral">✗</span> When a simpler solution exists
              </h3>
              <p className="text-charcoal-light">Sometimes a spreadsheet, a Zapier automation, or just a better process is all you need. I&apos;ll tell you if that&apos;s the case.</p>
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
              <p className="text-lg text-charcoal-light">I&apos;ll tell you honestly if AI could help. If it can&apos;t, I&apos;ll say so. If a simpler solution exists, I&apos;ll point you there.</p>
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
