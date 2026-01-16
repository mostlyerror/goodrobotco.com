import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/CTA'
import { HEADSHOT_SRC } from '@/components/constants'

export default function Home() {
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
              ✨ Now taking on new clients
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight">
              Technology that <span className="text-coral italic">actually works</span> for your business.
            </h1>
            <p className="text-lg text-charcoal-light max-w-[550px] mb-8">
              You don&apos;t need more software. You need the right solution, and someone who&apos;ll tell you the truth about what that is.
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
                Let&apos;s Talk →
              </Link>
              <Link href="#services" className="inline-block px-8 py-4 bg-white text-charcoal font-bold text-lg rounded-full border-2 border-charcoal/30 shadow-lg hover:bg-charcoal hover:text-white hover:border-charcoal hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-center">
                See How We Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Familiar + Philosophy Combined */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Sound familiar?</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
              <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">😤</span>
              <p className="text-charcoal italic text-[15px]">&quot;We paid a developer $15K and now they&apos;ve ghosted us. Our website is broken.&quot;</p>
            </div>
            <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
              <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">🤯</span>
              <p className="text-charcoal italic text-[15px]">&quot;Everyone&apos;s talking about AI but I have no idea if it&apos;s actually useful for us.&quot;</p>
            </div>
            <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
              <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">💸</span>
              <p className="text-charcoal italic text-[15px]">&quot;I keep getting quoted $50K for custom software when I just need something simple.&quot;</p>
            </div>
            <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl shadow-sm">
              <span className="text-xl flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">😵‍💫</span>
              <p className="text-charcoal italic text-[15px]">&quot;Our team wastes hours every week on manual processes that should be automated.&quot;</p>
            </div>
          </div>
          
          {/* Philosophy */}
          <div className="border-l-4 border-coral pl-8 md:pl-12">
            <p className="text-2xl md:text-3xl font-display italic text-charcoal mb-6">
              &quot;The best solution is usually simpler than you think.&quot;
            </p>
            <div className="space-y-4 text-charcoal-light mb-8">
              <p>I&apos;m building my consulting practice and keeping things simple. I focus on finding the solution that fits your problem and budget—whether that&apos;s a quick automation, a simple website, or custom development.</p>
              <p>I won&apos;t overcomplicate things or sell you services you don&apos;t need. You&apos;ll get honest advice, fair pricing, and quality work.</p>
              <p>I&apos;m transparent about where I am: building my portfolio with real client projects. That means accessible pricing and personalized attention.</p>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src={HEADSHOT_SRC} 
                alt="Ben Poon" 
                className="w-16 h-16 rounded-full object-cover ring-2 ring-cream"
              />
              <div>
                <span className="font-semibold">Ben Poon</span>
                <span className="text-charcoal-light text-sm ml-1">· Founder, Good Robot Co.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[550px] mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">How we&apos;ll work together</h2>
            <p className="text-lg text-charcoal-light">No endless discovery phases. No surprise invoices. Just straightforward collaboration.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line - hidden on mobile */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[8%] h-1 z-0">
              <svg viewBox="0 0 1000 50" className="w-full h-12" preserveAspectRatio="none">
                <path 
                  d="M0,25 Q250,45 500,25 T1000,25" 
                  fill="none" 
                  stroke="#E8654A" 
                  strokeWidth="3"
                  strokeDasharray="12,8"
                  opacity="0.4"
                />
              </svg>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-2xl animate-[fly_2.5s_ease-in-out_infinite]">✈️</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl relative shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-11 h-11 bg-coral text-white rounded-full flex items-center justify-center text-lg font-bold mb-5">1</div>
              <h3 className="text-xl font-semibold mb-2.5">Free Intro Call</h3>
              <p className="text-charcoal-light text-[15px]">20 minutes. You tell me what&apos;s frustrating you about tech right now. I&apos;ll tell you if I can help.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl relative shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-11 h-11 bg-sage text-white rounded-full flex items-center justify-center text-lg font-bold mb-5">2</div>
              <h3 className="text-xl font-semibold mb-2.5">Assessment</h3>
              <p className="text-charcoal-light text-[15px]">I dig into your current setup and processes. Usually takes 2-3 days. You get a clear, prioritized action plan.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl relative shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-11 h-11 bg-mustard text-white rounded-full flex items-center justify-center text-lg font-bold mb-5">3</div>
              <h3 className="text-xl font-semibold mb-2.5">Implementation</h3>
              <p className="text-charcoal-light text-[15px]">Whether it&apos;s a quick fix or a bigger project, I handle it. Regular updates, no jargon, no surprises.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl relative shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
              <div className="w-11 h-11 bg-lavender text-white rounded-full flex items-center justify-center text-lg font-bold mb-5">4</div>
              <h3 className="text-xl font-semibold mb-2.5">Ongoing Support</h3>
              <p className="text-charcoal-light text-[15px]">I don&apos;t disappear after launch. Questions come up, things break, needs change. I&apos;m here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[550px] mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">How we can help</h2>
            <p className="text-lg text-white/70">Every business is different. Here are the most common ways I help my clients.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🔍', title: 'Tech Assessment', desc: "Not sure where to start? I'll audit your current setup and give you a prioritized roadmap of what's worth fixing, what's fine, and what's costing you money." },
              { emoji: '⚡', title: 'Process Automation', desc: "Those repetitive tasks eating up your team's time? I'll identify what can be automated and set it up using tools like Zapier, Make, or custom scripts." },
              { emoji: '🤖', title: 'AI Integration', desc: "Cut through the hype. I'll help you figure out if AI can actually help your business, then implement it in a way that's practical and maintainable." },
              { emoji: '🛠️', title: 'Custom Development', desc: "When off-the-shelf doesn't cut it, I build exactly what you need. Web apps, internal tools, integrations between systems." },
              { emoji: '🚑', title: 'Tech Rescue', desc: "Inherited a mess from a previous developer? Stuck with a half-finished project? I'll untangle it and get you back on track." },
              { emoji: '📋', title: 'Ongoing Support', desc: "Don't need a full-time tech person but want someone on call? I offer monthly retainers for businesses that need regular tech guidance." },
            ].map((service, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300">
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
            <p className="text-lg text-charcoal-light">You&apos;ll work directly with me—no account managers, no runaround. I&apos;m building my practice and keeping things personal and affordable.</p>
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

                    <p className="text-charcoal-light text-sm mb-5 leading-relaxed">
                      Led development of rapid-response system that reduced intake time by 80% during
                      severe weather emergencies, preventing 8,300+ nights of unsheltered homelessness.
                    </p>

                    {/* Key stats */}
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

                    <div className="mt-auto flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                      Read case study
                      <span>→</span>
                    </div>
                  </div>
                </Link>

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

                    <p className="text-charcoal-light text-sm mb-5 leading-relaxed">
                      Automated system that eliminates 15 hours/week of manual prospecting work by
                      continuously scanning businesses and delivering daily digests of pre-qualified leads.
                    </p>

                    {/* Key stats */}
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

                    <div className="mt-auto flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                      Read case study
                      <span>→</span>
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

                    <p className="text-charcoal-light text-sm mb-5 leading-relaxed">
                      Helped Houston tutoring agency optimize billing operations and adopt the right business
                      management platform, saving hours weekly while enabling growth.
                    </p>

                    {/* Key stats */}
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

                    <div className="mt-auto flex items-center gap-2 text-coral font-semibold text-sm group-hover:gap-3 transition-all">
                      Read case study
                      <span>→</span>
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

      {/* CTA */}
      <CTA />
    </>
  )
}
