import type { Metadata } from "next";
import Link from "next/link";
import HeroSimple from "@/components/HeroSimple";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case Study: SWAPP | Good Robot Co.",
  description: "How we built a rapid-response system that reduced intake time from 11 minutes to 2.5 minutes and prevented 8,300+ nights of unsheltered homelessness.",
};

export default function SwappCaseStudy() {
  return (
    <>
      <HeroSimple
        title="SWAPP: Severe Weather Emergency Response"
        subtitle="From weekend prototype to production—reducing intake time by 80% during Colorado's coldest winter"
      />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* The Challenge */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Challenge</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            During Colorado winters, people experiencing homelessness face life-threatening cold.
            Adams County&apos;s Severe Weather Action Plan (SWAP) distributed hotel vouchers, but the
            process was slow: a <strong>4-page paper intake form</strong> that took{" "}
            <strong>11 minutes per person</strong>, forcing people to wait in freezing temperatures
            while caseworkers processed paperwork.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed">
            Centralized intake meant people had to choose between their belongings and shelter—with
            no guarantee a room would still be available when they reached the front of the line. The
            program could only serve 60-80 people per night, leaving hundreds without help.
          </p>
        </section>

        {/* The Pivot */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Pivot</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
            As part of a Code for America fellowship team, we initially wanted to build a smartphone
            app for people experiencing homelessness. Then we learned the reality:{" "}
            <strong>only 10% had internet access</strong>. A &quot;cool, shiny app&quot; would exclude
            90% of the people who needed help.
          </p>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            After 21 caseworker interviews, 10 stakeholder meetings, and 5 outreach visits, we pivoted:
            build for the caseworkers instead. Give them tools to work faster, and they&apos;ll reach
            more people.
          </p>

          <div className="bg-cream/50 border-l-4 border-coral p-6 rounded-r-lg">
            <p className="text-lg text-charcoal/90 font-semibold mb-2">
              The Realization
            </p>
            <p className="text-charcoal/80">
              Technology alone can&apos;t solve homelessness. But it can free up caseworkers&apos; time
              so they can focus on what matters: connecting with people and getting them shelter fast.
            </p>
          </div>
        </section>

        {/* What We Built */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">What We Built</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            A web-based intake system that replaced the 4-page paper process with a streamlined
            digital form. Caseworkers could now work in the field with tablets, meeting people where
            they were instead of forcing them to come to city hall.
          </p>

          <div className="bg-gradient-to-br from-sage/20 to-sky/15 p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Key Features</h3>
            <div className="space-y-4 text-charcoal/80">
              <div className="flex items-start gap-3">
                <span className="text-sage text-xl flex-shrink-0">✓</span>
                <div>
                  <strong className="text-charcoal">Digital intake forms</strong> that store client
                  data for repeat visits—no more filling out paperwork every time
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sage text-xl flex-shrink-0">✓</span>
                <div>
                  <strong className="text-charcoal">Field-ready interface</strong> for tablets,
                  enabling decentralized intake anywhere
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sage text-xl flex-shrink-0">✓</span>
                <div>
                  <strong className="text-charcoal">Hotel portal</strong> that receives voucher
                  confirmations directly, eliminating lost paper vouchers
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sage text-xl flex-shrink-0">✓</span>
                <div>
                  <strong className="text-charcoal">CSV export</strong> for HMIS integration—no more
                  manual double-entry of client data
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-sage text-xl flex-shrink-0">✓</span>
                <div>
                  <strong className="text-charcoal">SMS/email notifications</strong> via Twilio and
                  SendGrid for hotel confirmations
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-charcoal/80 leading-relaxed">
            Built the first working prototype in a single weekend. Refined it based on caseworker
            feedback, then deployed to production within weeks.
          </p>
        </section>

        {/* The Impact */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Impact</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-charcoal/10">
              <div className="text-4xl font-bold text-coral mb-2">80%</div>
              <p className="text-charcoal/80">
                <strong>Faster intake:</strong> From 11 minutes to 2.5 minutes per person
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-charcoal/10">
              <div className="text-4xl font-bold text-coral mb-2">15x</div>
              <p className="text-charcoal/80">
                <strong>Increased capacity:</strong> 8,300+ nights of shelter provided vs. 500
                the previous year
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-charcoal/10">
              <div className="text-4xl font-bold text-sage mb-2">560+</div>
              <p className="text-charcoal/80">
                <strong>People served:</strong> During the 2020-2021 cold weather season
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-charcoal/10">
              <div className="text-4xl font-bold text-sage mb-2">422</div>
              <p className="text-charcoal/80">
                <strong>Record month:</strong> Vouchers distributed in February 2021 alone
              </p>
            </div>
          </div>

          <div className="bg-white border-l-4 border-sage p-6 rounded-r-lg">
            <p className="text-xl text-charcoal font-semibold mb-3">
              &quot;[The app] has allowed me to go through the line faster, and [our clients&apos;]
              anxiety has decreased because they don&apos;t have to fill out so much paperwork—and it
              has allowed them to speak up more on their needs.&quot;
            </p>
            <p className="text-charcoal/60">— Nubia Saenz, Almost Home caseworker</p>
          </div>
        </section>

        {/* The Engineering */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">The Engineering</h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            Built for speed and reliability under real-world constraints: caseworkers working in the
            field, spotty connectivity, and emergency response timelines.
          </p>

          <div className="bg-cream/50 border-l-4 border-coral p-6 rounded-r-lg space-y-4">
            <div>
              <h3 className="font-bold text-charcoal mb-2">Rapid Prototyping</h3>
              <p className="text-charcoal/80">
                Weekend sprint from concept to working demo. Showed it to stakeholders Monday morning,
                got approval, and iterated based on real caseworker feedback before cold weather hit.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-charcoal mb-2">Field-Ready Design</h3>
              <p className="text-charcoal/80">
                Mobile-responsive interface that works on tablets in freezing temperatures. Offline
                considerations for spotty connectivity. Fast load times when every second counts.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-charcoal mb-2">Integration Architecture</h3>
              <p className="text-charcoal/80">
                Connected to Twilio for SMS, SendGrid for email, and HMIS for data export. Built secure
                credential management for handling sensitive information about vulnerable populations.
              </p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-charcoal/80">
            <div>
              <h4 className="font-bold text-charcoal mb-2">Tech Stack</h4>
              <ul className="space-y-1">
                <li>• Ruby on Rails</li>
                <li>• PostgreSQL</li>
                <li>• Tailwind CSS</li>
                <li>• JavaScript/Webpack</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-charcoal mb-2">Integrations</h4>
              <ul className="space-y-1">
                <li>• Twilio (SMS)</li>
                <li>• SendGrid (Email)</li>
                <li>• HMIS (Data Export)</li>
                <li>• Heroku (Deployment)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section>
          <h2 className="text-3xl font-bold text-charcoal mb-6">What This Demonstrates</h2>

          <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
            <p>
              <strong>Know when NOT to build.</strong> The &quot;obvious&quot; solution (a smartphone
              app for people experiencing homelessness) would have failed. User research revealed the
              real need: tools for caseworkers.
            </p>
            <p>
              <strong>Rapid iteration under pressure.</strong> Went from weekend prototype to production
              system in weeks, during an active emergency. Shipping working software fast matters more
              than perfection.
            </p>
            <p>
              <strong>Government/civic stakeholder management.</strong> Worked with county staff,
              nonprofit organizations, and field workers to build something that actually fit their
              workflow instead of forcing them to adapt to our software.
            </p>
            <p>
              <strong>Building with constraints.</strong> No smartphones, no internet, field conditions,
              emergency timelines. Real-world software means working within real-world limitations.
            </p>
          </div>
        </section>

        {/* Context */}
        <section className="bg-gradient-to-br from-sage/20 to-sky/15 p-8 rounded-lg">
          <p className="text-sm text-charcoal/60 mb-4">
            <strong>About this project:</strong>
          </p>
          <p className="text-charcoal/80 leading-relaxed mb-4">
            Built as part of a{" "}
            <Link
              href="https://www.codeforamerica.org/"
              className="text-coral hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code for America
            </Link>{" "}
            fellowship with Adams County, Colorado. I served as technical lead and senior developer,
            leading the engineering effort from prototype to production deployment.
          </p>
          <p className="text-sm text-charcoal/60">
            Read more about the project:{" "}
            <Link
              href="https://github.com/JV-ADCOGOV/swapp"
              className="text-coral hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Link>
          </p>
        </section>
      </main>

      {/* CTA - Full width section outside constrained container */}
      <CTA
        headline="Need someone who can build under pressure?"
        subheadline="From rapid prototypes to production systems, we build software that works in the real world. Let's talk about your project."
      />
    </>
  );
}
