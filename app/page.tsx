import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/CTA'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
import { JsonLd } from '@/components/JsonLd'

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What if a developer ghosted us and our website is broken?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Good Robot Co. specializes in tech rescue services, helping businesses recover from abandoned projects and fixing broken websites.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AI actually help my business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Good Robot Co. provides practical AI integration services, cutting through the hype to implement AI solutions that are actually useful and maintainable for your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why am I being quoted $50K for simple software?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Good Robot Co. offers right-sized solutions that match the problem to your actual needs and budget, with fair pricing and no overselling.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I automate manual processes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Good Robot Co. specializes in process automation using tools like Zapier, Make, or custom scripts to eliminate repetitive tasks.',
        },
      },
    ],
  }

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-cream via-cream to-sage/10">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large blurred gradient blobs */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-mustard/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -right-48 w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-coral/5 rounded-full blur-3xl"></div>

          {/* SVG decorative elements */}
          <svg className="absolute top-32 left-[8%] w-24 h-24 text-coral/15 max-lg:hidden" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6"/>
          </svg>
          <svg className="absolute bottom-1/4 right-[8%] w-40 h-40 text-sage/15 max-lg:hidden" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <svg className="absolute top-[20%] left-[12%] w-10 h-10 text-lavender/20 max-lg:hidden" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" rx="20" fill="currentColor"/>
          </svg>
          <svg className="absolute bottom-32 left-[18%] w-8 h-8 text-coral/20 max-lg:hidden" viewBox="0 0 100 100">
            <rect x="15" y="15" width="70" height="70" rx="15" fill="currentColor"/>
          </svg>

          {/* Dot grid patterns */}
          <div className="absolute top-40 left-[5%] grid grid-cols-4 gap-4 opacity-20 max-lg:hidden">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-charcoal/60 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Floating shapes (animated) */}
        <div className="absolute top-[20%] left-[8%] w-14 h-14 bg-sage/80 rounded-2xl animate-float max-lg:hidden shadow-lg"></div>
        <div className="absolute top-[55%] left-[15%] w-10 h-10 bg-mustard/80 rounded-full animate-float-delayed max-lg:hidden shadow-lg"></div>
        <div className="absolute top-[35%] left-[5%] w-6 h-6 bg-lavender/80 rounded-xl animate-float-fast max-lg:hidden shadow-md"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-sm font-medium mb-5 shadow-sm border border-mustard/30">
              💻 Modern Tech Consulting
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Tech consulting that actually <span className="text-coral italic">makes sense.</span>
            </h1>
            <p className="text-lg text-charcoal-light max-w-[550px] mb-8">
              From AI integration to custom development to tech rescue. I build solutions that work for small businesses. No jargon, no overselling, no outdated tech.
            </p>

            {/* Illustration */}
            <div className="mb-0 md:mb-8 md:mt-4">
              <Image
                src="/good_robot_hero.png"
                alt="Person working collaboratively with a friendly robot assistant"
                width={600}
                height={400}
                priority
                className="w-full h-auto max-w-full md:max-w-2xl"
              />
            </div>

            <div className="flex gap-4 flex-wrap max-md:flex-col">
              <Link href="#contact" className="inline-block px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/40 hover:bg-coral-hover hover:-translate-y-1 hover:shadow-2xl hover:shadow-coral/50 transition-all duration-300 text-center">
                Let&apos;s Talk Tech →
              </Link>
              <Link href="#services" className="inline-block px-8 py-4 bg-white text-charcoal font-semibold text-base rounded-full border border-charcoal/20 shadow-md hover:bg-charcoal hover:text-white hover:border-charcoal hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Approach Tech */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">How we approach tech for your business</h2>
            <p className="text-lg text-charcoal-light">Assessment first, then implementation with the right tools for your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-5xl mb-5">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Assessment First</h3>
              <p className="text-charcoal-light">I&apos;ll audit your processes and tell you what will actually work for your specific business. No sales pitch, just honest assessment of your options.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-5xl mb-5">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Modern Tools</h3>
              <p className="text-charcoal-light">I use AI, automation, and latest frameworks, not legacy tech from 2010. You get solutions built with current best practices and proven technologies.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="text-5xl mb-5">🛠️</div>
              <h3 className="text-xl font-semibold mb-3">Practical & Maintainable</h3>
              <p className="text-charcoal-light">Solutions that your team can actually use and maintain, not impressive demos that break after launch or require constant hand-holding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial
              quote="[The app] has allowed me to go through the line faster, and [our clients'] anxiety has decreased because they don't have to fill out so much paperwork, and it has allowed them to speak up more on their needs."
              author="Nubia Saenz"
              title="Caseworker"
              company="Almost Home"
              size="large"
            />
            <Testimonial
              quote="LOVING this new system! Saves me so many hours of tedious work!"
              author="Sara Ho"
              title="Founder"
              company="Let's Learn Together"
              size="large"
            />
          </div>
        </div>
      </section>

      {/* Sound Familiar + Philosophy Combined */}
      <section className="py-20 bg-white">
        <JsonLd data={faqSchema} />
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Sound familiar?</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
              <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">👻</span>
              <p className="text-charcoal italic text-[15px]">&quot;What if a developer ghosted us and our website is broken?&quot;</p>
            </div>
            <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
              <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">🤔</span>
              <p className="text-charcoal italic text-[15px]">&quot;Can AI actually help my business?&quot;</p>
            </div>
            <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
              <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">💸</span>
              <p className="text-charcoal italic text-[15px]">&quot;Why am I being quoted $50K for simple software?&quot;</p>
            </div>
            <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
              <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">⏰</span>
              <p className="text-charcoal italic text-[15px]">&quot;How can I automate manual processes?&quot;</p>
            </div>
          </div>
          
          {/* Philosophy */}
          <div className="border-l-4 border-coral pl-8 md:pl-12">
            <p className="text-2xl md:text-3xl font-display italic text-charcoal mb-6">
              &quot;Most tech is oversold. Here&apos;s what actually works.&quot;
            </p>
            <div className="space-y-4 text-charcoal-light mb-8">
              <p>I bring senior-level experience from building systems at scale, now working directly with small and mid-size businesses. My focus: understanding your real problem, then using the right tool to solve it.</p>
              <p>That might be AI. It might be simple automation. It might be fixing technical debt that&apos;s been slowing you down. I won&apos;t overcomplicate things or sell you solutions you don&apos;t need.</p>
              <p>You&apos;ll get honest assessment, modern tools applied practically, and tech solutions that are actually maintainable. Not demos that break after launch.</p>
              <p>Currently accepting 2-3 new projects per month. That means accessible pricing and highly personalized attention to your specific needs. Whether that&apos;s custom development, tech rescue, AI implementation, or just auditing whether your current tech stack makes sense.</p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/ben-headshot-3.jpg"
                alt="Ben Poon"
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-4 ring-cream shadow-lg"
              />
              <div>
                <span className="font-bold text-lg">Ben Poon</span>
                <span className="text-charcoal-light ml-1 block md:inline">· Technology Consultant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[550px] mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">How we can help</h2>
            <p className="text-lg text-white/70">Real solutions that have saved clients 15+ hours weekly and cut costs by 80%. Here&apos;s how I can help you.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: '💻', title: 'Custom Development', desc: "When off-the-shelf doesn't cut it, I build what you need. Web apps, internal tools, APIs, integrations using modern frameworks and AI capabilities when they add value." },
              { emoji: '🚑', title: 'Tech Rescue', desc: "Inherited a broken project? Developer ghosted you? I'll assess the damage, fix what's broken, and get you back on track." },
              { emoji: '🤖', title: 'AI Integration', desc: "AI chatbots, document processing, intelligent assistants implemented practically when they're the right tool for your problem. No hype, just honest assessment." },
              { emoji: '⚡', title: 'Process Automation', desc: "Eliminate repetitive tasks with smart automation. Whether it's AI-powered or simple workflows, whichever saves you the most time." },
              { emoji: '🔍', title: 'Tech Assessment', desc: "Not sure where to start? I'll audit your current setup and give you a prioritized roadmap of what's worth fixing, what's fine, and what's costing you money." },
              { emoji: '🛠️', title: 'Ongoing Support', desc: "I don't disappear after launch. Questions come up, requirements change, things break. I'm here for maintenance, updates, and evolution of your systems." },
            ].map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
                <span className="text-4xl mb-5 block">{service.emoji}</span>
                <h3 className="text-xl font-semibold mb-2.5">{service.title}</h3>
                <p className="text-white/70 text-[15px]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[550px] mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">Why work with me?</h2>
            <p className="text-lg text-charcoal-light">I work with service businesses, agencies, and local businesses who need AI assessed and implemented properly. You&apos;ll work directly with me. No account managers, no runaround.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="w-16 h-16 bg-sage-light rounded-2xl flex items-center justify-center text-2xl mb-5">🎯</div>
              <h3 className="text-xl font-semibold mb-2.5">Right-Sized Solutions</h3>
              <p className="text-charcoal-light text-[15px]">I match the solution to your actual problem, whether that&apos;s a quick fix or a larger build. No overselling, no overengineering.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-mustard-light rounded-2xl flex items-center justify-center text-2xl mb-5">💬</div>
              <h3 className="text-xl font-semibold mb-2.5">No Jargon</h3>
              <p className="text-charcoal-light text-[15px]">I explain things in plain English. You&apos;ll always understand what you&apos;re getting and why.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-lavender-light rounded-2xl flex items-center justify-center text-2xl mb-5">📱</div>
              <h3 className="text-xl font-semibold mb-2.5">Actually Responsive</h3>
              <p className="text-charcoal-light text-[15px]">I answer emails. I show up to calls. You&apos;ll never wonder where your project stands.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-sky-light rounded-2xl flex items-center justify-center text-2xl mb-5">💰</div>
              <h3 className="text-xl font-semibold mb-2.5">Fair Pricing</h3>
              <p className="text-charcoal-light text-[15px]">I&apos;m building my portfolio, so my rates are accessible. You get quality work without the agency markup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Invest in Tech */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">When to invest in tech</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Custom dev vs off-the-shelf */}
            <div className="bg-gradient-to-br from-sage/10 to-sage/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-sage">Build custom when...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">Off-the-shelf tools require workarounds that cost more than building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">Your process is unique enough that generic tools don&apos;t fit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">You need specific integrations that SaaS tools can&apos;t provide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">Monthly SaaS costs add up to more than one-time custom development</span>
                </li>
              </ul>
            </div>

            {/* When to rescue vs start fresh */}
            <div className="bg-gradient-to-br from-sky/10 to-sky/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-sky">Rescue existing tech when...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-sky text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">The core structure is sound but implementation is broken</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">You&apos;ve already invested significantly in the current system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">Your data and workflows are already in the system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sky text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">Fixing it costs less than rebuilding from scratch</span>
                </li>
              </ul>
            </div>

            {/* When automation makes sense */}
            <div className="bg-gradient-to-br from-mustard/10 to-mustard/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-mustard">Automate processes when...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-mustard text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">You&apos;re doing the same manual task more than 5 times/week</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mustard text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">The process is clearly defined and doesn&apos;t change often</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mustard text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">Manual work is costing more than automation would</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mustard text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">Errors in manual work are causing problems downstream</span>
                </li>
              </ul>
            </div>

            {/* When AI fits */}
            <div className="bg-gradient-to-br from-coral/10 to-coral/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-coral">Use AI when...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-coral text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">You need to process unstructured data (documents, emails, images)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">The task requires understanding context, not just following rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">You need 24/7 availability for customer questions or support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-coral text-xl mt-0.5">✓</span>
                  <span className="text-charcoal-light">Simple automation isn&apos;t flexible enough for your use case</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-lg text-charcoal-light mb-6">Not sure which approach fits your situation?</p>
            <Link href="#contact" className="inline-block px-8 py-4 bg-coral text-white font-bold text-lg rounded-full shadow-xl shadow-coral/40 hover:bg-coral-hover hover:-translate-y-1 hover:shadow-2xl hover:shadow-coral/50 transition-all duration-300">
              Book a Free Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">Common Questions</h2>
            <p className="text-lg text-charcoal-light">Here&apos;s what most people want to know before we start working together.</p>
          </div>
          <FAQ items={[
            {
              question: "What if a developer ghosted us and our website is broken?",
              answer: "This happens more often than you'd think. I specialize in tech rescue: assessing the damage, fixing what's broken, and getting you back on track. First, I'll audit what you have and give you an honest assessment of what's salvageable, what needs rebuilding, and what it'll cost. Then I'll fix it in a way that's maintainable so you're not stuck in this situation again."
            },
            {
              question: "Can AI actually help my business?",
              answer: "Maybe. I cut through the hype and assess whether AI makes sense for your specific situation. In our discovery call, I'll audit your processes, show you real examples of what works (and what doesn't), and give you honest guidance. If AI fits, I'll implement it practically. If it doesn't, I'll tell you what would work better, whether that's simple automation, custom development, or something else entirely."
            },
            {
              question: "Why am I being quoted $50K for simple software?",
              answer: "Because many agencies overcomplicate things or pad their estimates. I focus on right-sized solutions that match the complexity to your actual needs. A $50K quote might be justified for a complex system, but often it's overkill. I'll give you an honest assessment of what you actually need and what it should cost, with transparent pricing and no hidden fees."
            },
            {
              question: "How can I automate manual processes?",
              answer: "Depends on what you're trying to automate. Simple repetitive tasks often just need workflow automation (Zapier, Make, or custom scripts). More complex tasks involving documents, customer questions, or unstructured data might benefit from AI. I'll assess your specific processes and recommend the simplest solution that actually works, whether that's automation, AI, or a combination."
            }
          ]} />
        </div>
      </section>

      {/* Recent Work */}
      <section id="work" className="py-20 bg-gradient-to-br from-cream via-white to-sage/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">Recent Work</h2>
              <p className="text-lg text-charcoal-light">Real projects, real results</p>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-charcoal hover:text-coral font-medium transition-colors"
            >
              View all case studies
              <span className="transition-transform hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Horizontal Scrolling Carousel */}
          <div className="relative">
            <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-6 px-6">
              <div className="flex gap-6 w-max">
                {/* Mayday Case Study Card */}
                <Link
                  href="/case-studies/mayday"
                  className="flex-shrink-0 w-[70vw] md:w-[340px] bg-white rounded-2xl border border-charcoal/10 overflow-hidden hover:border-coral/30 hover:shadow-2xl transition-all duration-300 group snap-start"
                >
                  {/* Icon/Header */}
                  <div className="relative bg-gradient-to-br from-sage/20 to-sky/15 h-28 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-1">🎯</div>
                      <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Case Study</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col h-[calc(100%-7rem)]">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-coral transition-colors">
                        Mayday: Lead Generation
                      </h3>
                    </div>

                    <p className="text-charcoal-light text-sm leading-relaxed">
                      AI-powered lead generation system that eliminates 15 hours/week of manual prospecting by
                      intelligently scanning businesses and delivering daily digests of pre-qualified leads.
                    </p>

                    {/* Key stats and CTA - pushed to bottom */}
                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <div className="text-2xl font-bold text-coral mb-0.5">~15 hours</div>
                          <div className="text-xs text-charcoal/60">Eliminated weekly</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-sage mb-0.5">10-15k</div>
                          <div className="text-xs text-charcoal/60">Businesses scanned/month</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                        Read case study
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* SWAPP Case Study Card */}
                <Link
                  href="/case-studies/swapp"
                  className="flex-shrink-0 w-[70vw] md:w-[340px] bg-white rounded-2xl border border-charcoal/10 overflow-hidden hover:border-coral/30 hover:shadow-2xl transition-all duration-300 group snap-start"
                >
                  {/* Icon/Header */}
                  <div className="relative bg-gradient-to-br from-coral/20 to-mustard/15 h-28 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-1">🏔️</div>
                      <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Case Study</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col h-[calc(100%-7rem)]">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-coral transition-colors">
                        SWAPP: Emergency Response
                      </h3>
                    </div>

                    <p className="text-charcoal-light text-sm leading-relaxed">
                      Intelligent emergency response system that reduced intake time by 80% using automated workflows and
                      digital forms, preventing 8,300+ nights of unsheltered homelessness.
                    </p>

                    {/* Key stats and CTA - pushed to bottom */}
                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <div className="text-2xl font-bold text-coral mb-0.5">80%</div>
                          <div className="text-xs text-charcoal/60">Faster intake time</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-sage mb-0.5">15x</div>
                          <div className="text-xs text-charcoal/60">Capacity increase</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                        Read case study
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* LLT Case Study Card */}
                <Link
                  href="/case-studies/llt"
                  className="flex-shrink-0 w-[70vw] md:w-[340px] bg-white rounded-2xl border border-charcoal/10 overflow-hidden hover:border-coral/30 hover:shadow-2xl transition-all duration-300 group snap-start"
                >
                  {/* Icon/Header */}
                  <div className="relative bg-gradient-to-br from-lavender/20 to-mustard/10 h-28 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-1">📚</div>
                      <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider">Case Study</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col h-[calc(100%-7rem)]">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-charcoal group-hover:text-coral transition-colors">
                        Let&apos;s Learn Together
                      </h3>
                    </div>

                    <p className="text-charcoal-light text-sm leading-relaxed">
                      Helped Houston tutoring agency optimize billing operations and adopt the right business
                      management platform, saving hours weekly while enabling growth.
                    </p>

                    {/* Key stats and CTA - pushed to bottom */}
                    <div className="mt-auto">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div>
                          <div className="text-2xl font-bold text-coral mb-0.5">Hours</div>
                          <div className="text-xs text-charcoal/60">Saved weekly</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-sage mb-0.5">3</div>
                          <div className="text-xs text-charcoal/60">Vendors evaluated</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                        Read case study
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="text-center mt-6 text-sm text-charcoal/40">
              <span className="md:hidden">← Swipe to see more →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Contact Steps */}
      <section className="py-12 bg-white border-t border-charcoal/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-coral text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-semibold mb-1">Free Intro Call</h3>
                <p className="text-sm text-charcoal-light">20 minutes. You tell me what&apos;s frustrating you. I&apos;ll tell you if I can help.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-sage text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-semibold mb-1">Assessment</h3>
                <p className="text-sm text-charcoal-light">I dig into your setup. You get a clear, prioritized action plan.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-mustard text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-semibold mb-1">Implementation</h3>
                <p className="text-sm text-charcoal-light">I handle it. Regular updates, no jargon, no surprises.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-7 h-7 bg-lavender text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-semibold mb-1">Ongoing Support</h3>
                <p className="text-sm text-charcoal-light">I don&apos;t disappear after launch. I&apos;m here when you need me.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </>
  )
}
