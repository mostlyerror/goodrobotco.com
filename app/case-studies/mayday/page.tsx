import type { Metadata } from "next";
import Image from "next/image";
import HeroSimple from "@/components/HeroSimple";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case Study: Mayday | Good Robot Co.",
  description: "How we built an intelligent lead generation system that automatically discovers and qualifies web development opportunities.",
};

export default function MaydayCaseStudy() {
  return (
    <>
      <HeroSimple
        title="Mayday: Intelligent Lead Generation"
        subtitle="Automating the hunt for web development clients—from 15 hours/week of manual work to zero"
      />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* Overview */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Challenge</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            Finding web development clients the traditional way: spending <strong>10-15 hours per week</strong> manually
            scrolling through Google Maps, checking websites one by one, and keeping spreadsheets of
            broken sites. Pure grunt work that could be automated.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Worse, the manual process was inconsistent. Good leads were missed, bad ones
            were pursued, and there was no way to catch businesses whose websites went from working to
            broken overnight.
          </p>
        </section>

        {/* What We Built */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">What We Built</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            <strong>Mayday</strong> is an automated lead generation system that runs in the background,
            continuously scanning local businesses and flagging opportunities the moment they appear.
            Instead of spending hours prospecting, the agency now gets a daily digest of qualified
            leads ready for outreach.
          </p>
          <div className="bg-gradient-to-br from-sage/20 to-sky/15 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-charcoal mb-4">What It Does</h3>
            <div className="grid md:grid-cols-2 gap-6 text-charcoal/80">
              <div>
                <div className="text-3xl font-bold text-coral mb-1">~15 hours</div>
                <p>Of manual work eliminated weekly</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-1">24/7</div>
                <p>Continuous monitoring and lead discovery</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-1">10-15k</div>
                <p>Businesses scanned monthly within budget</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral mb-1">3 types</div>
                <p>Intelligent lead classification and prioritization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section>
          <div className="relative rounded-lg overflow-hidden border border-charcoal/10 shadow-xl">
            <Image
              src="/case-studies/mayday/dashboard.png"
              alt="Mayday dashboard showing qualified leads organized by type"
              width={2910}
              height={3148}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="text-sm text-charcoal/60 text-center mt-3">
            The Mayday dashboard showing real-time lead discovery and classification
          </p>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">How It Works</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            The system automatically categorizes opportunities into three high-value lead types:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-charcoal/10 hover:border-coral/30 transition-colors">
              <h3 className="text-xl font-bold text-coral mb-2">Fix Leads</h3>
              <p className="text-charcoal/70 mb-3">
                Businesses with broken websites—SSL errors, expired hosting, parked domains.
                <strong className="block mt-2 text-charcoal">The pitch: &quot;Your site is down. I can fix it today.&quot;</strong>
              </p>
              <p className="text-sm text-charcoal/60 mt-3">
                High urgency = high close rate. These businesses are losing revenue every hour their site is broken.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-charcoal/10 hover:border-sage/30 transition-colors">
              <h3 className="text-xl font-bold text-sage mb-2">Build Leads</h3>
              <p className="text-charcoal/70 mb-3">
                Established businesses with no website at all.
                <strong className="block mt-2 text-charcoal">The pitch: &quot;Your competitors are online. You should be too.&quot;</strong>
              </p>
              <p className="text-sm text-charcoal/60 mt-3">
                Clear value proposition. These are leaving money on the table every day without a web presence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-charcoal/10 hover:border-sky/30 transition-colors">
              <h3 className="text-xl font-bold text-sky mb-2">Social Only</h3>
              <p className="text-charcoal/70 mb-3">
                Businesses using only Facebook/Instagram as their website.
                <strong className="block mt-2 text-charcoal">The pitch: &quot;A real site builds trust and drives more business.&quot;</strong>
              </p>
              <p className="text-sm text-charcoal/60 mt-3">
                Easier sell than cold outreach. They already understand digital presence matters.
              </p>
            </div>
          </div>

          <p className="text-lg text-charcoal/80 leading-relaxed">
            Every morning, the system delivers a CSV export with business details, contact info, and
            exactly what&apos;s wrong with their current setup. No guesswork, just actionable leads.
          </p>
        </section>

        {/* The Engineering */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Engineering</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            Three key design decisions make this system <strong>accurate, scalable, and cost-effective</strong>:
          </p>

          <div className="bg-cream/50 border-l-4 border-coral p-6 rounded-r-lg space-y-4">
            <div>
              <h3 className="font-bold text-charcoal mb-2">Smart Retry Logic</h3>
              <p className="text-charcoal/80">
                Progressive timeout strategy distinguishes between slow sites and broken sites. The system
                retries with increasing timeouts before marking anything as down—eliminates false positives
                without missing genuinely broken sites.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-charcoal mb-2">Adaptive Scheduling</h3>
              <p className="text-charcoal/80">
                Intelligent scan frequency based on site status. Working sites get checked weekly, broken sites
                get adaptive monitoring, and static situations get monthly scans. Scans 10-15k businesses monthly
                within the $200 API free tier.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-charcoal mb-2">Platform-Specific Detection</h3>
              <p className="text-charcoal/80">
                Pattern recognition for 15+ error types across Squarespace, GoDaddy, Wix, and other platforms.
                The system knows exactly what&apos;s broken and provides the specific context needed for outreach.
              </p>
            </div>
          </div>
        </section>

        {/* The Bottom Line */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Result</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            Mayday eliminates <strong>10-15 hours per week</strong> of manual prospecting work. The system
            runs continuously in the background, scanning businesses and flagging opportunities the moment
            they appear.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            Daily digest of pre-qualified leads with business details, contact info, and the exact issue
            to reference in your outreach. Broken sites, missing websites, businesses relying only on
            social media—all categorized and ready for immediate follow-up.
          </p>
          <div className="bg-gradient-to-br from-sage/20 to-sky/15 p-6 rounded-lg">
            <p className="text-lg text-charcoal/90 font-semibold mb-2">
              What This Demonstrates
            </p>
            <p className="text-charcoal/80">
              Building production automation requires solving real problems: false positive prevention,
              cost-effective scaling, and accurate detection across multiple platforms. This project shows
              our capability to design systems that work reliably in the wild, not just in demos.
            </p>
          </div>
        </section>
      </main>

      {/* CTA - Full width section outside constrained container */}
      <CTA
        headline="Need a custom solution like this?"
        subheadline="We build intelligent automation systems that solve real business problems. Let's talk about your project."
      />
    </>
  );
}
