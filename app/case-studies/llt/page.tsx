import type { Metadata } from "next";
import Link from "next/link";
import HeroSimple from "@/components/HeroSimple";
import CTA from "@/components/CTA";
import { SEO } from "@/lib/seo.constants";
import { buildBreadcrumbSchema } from "@/lib/schema-builders";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Case Study: Let's Learn Together | Good Robot Co.",
  description: "How we helped a growing tutoring agency streamline operations, evaluate business software, and implement the right platform for long-term growth.",
  openGraph: {
    title: "Let's Learn Together: Operations & Technology Advisory | Good Robot Co.",
    description: "From manual spreadsheets to scalable systems—saving hours weekly and setting up a tutoring agency for growth.",
    url: `${SEO.baseUrl}/case-studies/llt`,
    type: 'article',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Good Robot Co. - Technology That Works For Your Business",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Let's Learn Together: Operations & Technology Advisory",
    description: "From manual spreadsheets to scalable systems—saving hours weekly and setting up a tutoring agency for growth.",
    images: ['/og-image.png'],
  },
};

export default function LLTCaseStudy() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', url: SEO.baseUrl },
          { name: 'Case Studies', url: `${SEO.baseUrl}/case-studies` },
          { name: "Let's Learn Together", url: `${SEO.baseUrl}/case-studies/llt` },
        ])}
      />
      <HeroSimple
        title="Let's Learn Together: Operations & Technology Advisory"
        subtitle="From manual spreadsheets to scalable systems—saving hours weekly and setting up a tutoring agency for growth"
      />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* The Challenge */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Challenge</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            <Link
              href="https://letslearntogetherhtx.com"
              className="text-coral hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&apos;s Learn Together
            </Link>{" "}
            is a Houston-based tutoring agency providing personalized in-home academic support for
            children ages 3-18. As the business grew, their operations became increasingly complex:
            tracking tutors, managing schedules, invoicing families, and reconciling payments.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            Everything ran through manual spreadsheets. Billing calculations were done by hand.
            Invoice generation was copy-paste. Every week, <strong>hours disappeared</strong> into
            tedious administrative work that could be automated—but the team didn&apos;t have the
            technical background to know where to start.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            They needed two things: immediate relief from the spreadsheet chaos, and a long-term
            plan to adopt software that could scale with the business.
          </p>
        </section>

        {/* What We Did */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">What We Did</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            This was a <strong>2-month advisory engagement</strong> focused on optimizing operations
            and guiding technology decisions.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Phase 1: Immediate Relief</h3>
              <p className="text-charcoal/80 leading-relaxed mb-3">
                First, we fixed the spreadsheets. Rebuilt the billing and invoicing workbooks with
                proper formulas, automated calculations, and clearer organization. Not a complete
                solution, but enough to buy back hours every week while we planned the long-term fix.
              </p>
              <div className="bg-white border-l-4 border-sage p-6 rounded-r-lg shadow-sm">
                <p className="text-lg text-charcoal/90 mb-2">
                  &quot;I still have a lot of work to do, but your simple formulas and set up are
                  saving me hours and so much stress.&quot;
                </p>
                <p className="text-charcoal/60 text-sm">— Sara Ho, Founder</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Phase 2: Vendor Evaluation</h3>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Evaluated three business management platforms designed for tutoring agencies:{" "}
                <strong>Teachworks</strong>, <strong>Sawyer</strong>, and{" "}
                <strong>TutorCruncher</strong>. Sat in vendor demos, asked technical questions, and
                helped the team understand trade-offs between features, pricing, and complexity.
              </p>
              <div className="bg-cream/50 border-l-4 border-coral p-6 rounded-r-lg">
                <h4 className="font-bold text-charcoal mb-2">Key Decision Factors</h4>
                <ul className="space-y-2 text-charcoal/80">
                  <li className="flex items-start">
                    <span className="text-coral mr-2">•</span>
                    <span>
                      <strong>Fit with internal processes:</strong> Which platform matched their
                      existing workflow vs. forcing them to change
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-2">•</span>
                    <span>
                      <strong>Team size and simplicity:</strong> Avoiding over-engineered solutions
                      with features they didn&apos;t need
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-2">•</span>
                    <span>
                      <strong>Pricing and scalability:</strong> Cost-effective now, but able to grow
                      with the business
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-2">•</span>
                    <span>
                      <strong>Client and customer experience:</strong> Easy for families to book,
                      pay, and communicate
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-coral mr-2">•</span>
                    <span>
                      <strong>Ease of adoption:</strong> How quickly the team could learn the new
                      system and start using it
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Phase 3: Implementation Support</h3>
              <p className="text-charcoal/80 leading-relaxed mb-3">
                After evaluating all three platforms, <strong>Teachworks</strong> emerged as the
                clear choice. It matched their processes, scaled appropriately for their team size,
                and provided the best balance of features and simplicity.
              </p>
              <p className="text-charcoal/80 leading-relaxed">
                Provided technical guidance during onboarding: data migration planning, workflow
                setup, and troubleshooting integration questions. The platform is now ready to
                launch and replace the manual spreadsheet process entirely.
              </p>
            </div>
          </div>
        </section>

        {/* The Result */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Result</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-charcoal/10">
              <div className="text-3xl font-bold text-coral mb-2">Hours</div>
              <p className="text-charcoal/80">
                <strong>Weekly time savings</strong> from optimized spreadsheets—immediate relief
                before platform adoption
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-charcoal/10">
              <div className="text-3xl font-bold text-coral mb-2">3</div>
              <p className="text-charcoal/80">
                <strong>Vendors evaluated</strong> with technical guidance to make an informed
                decision
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-charcoal/10">
              <div className="text-3xl font-bold text-sage mb-2">2 months</div>
              <p className="text-charcoal/80">
                <strong>From chaos to clarity</strong>—spreadsheet optimization to vendor selection
                to implementation
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-charcoal/10">
              <div className="text-3xl font-bold text-sage mb-2">Ready</div>
              <p className="text-charcoal/80">
                <strong>Platform launching soon</strong> to replace manual processes with scalable
                automation
              </p>
            </div>
          </div>

          <div className="bg-white border-l-4 border-sage p-6 rounded-r-lg shadow-sm">
            <p className="text-xl text-charcoal font-semibold mb-3">
              &quot;...and am LOVING this new system! Saves me so many hours of tedious work!&quot;
            </p>
            <p className="text-charcoal/60">— Sara Ho, Founder</p>
          </div>
        </section>

        {/* What This Demonstrates */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">What This Demonstrates</h2>

          <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
            <p>
              <strong>Technical advisory for non-technical clients.</strong> Not every business
              needs custom software—sometimes they need someone who can evaluate off-the-shelf
              solutions, ask the right questions, and guide them to the best choice for their
              situation.
            </p>
            <p>
              <strong>Understanding operations, not just code.</strong> Optimizing spreadsheets
              isn&apos;t glamorous work, but it solved an immediate problem while buying time for
              the real solution. Good consulting means solving the problem in front of you first.
            </p>
            <p>
              <strong>Vendor evaluation with business context.</strong> Led technical conversations
              in vendor demos, translated features into business value, and helped a non-technical
              team make a confident decision between competing platforms.
            </p>
            <p>
              <strong>Two-phase approach: quick wins + long-term fix.</strong> Immediate relief
              (spreadsheet optimization) while planning the sustainable solution (platform adoption).
              This keeps the business moving while building the right foundation.
            </p>
          </div>
        </section>
      </main>

      {/* CTA - Full width section outside constrained container */}
      <CTA
        headline="Need help choosing the right technology?"
        subheadline="From vendor evaluation to custom solutions, we help businesses make smart technology decisions. Let's talk about your operations."
      />
    </>
  );
}
