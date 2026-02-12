import type { Metadata } from "next";
import Link from "next/link";
import HeroSimple from "@/components/HeroSimple";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Case Studies | Good Robot Co.",
  description: "Real projects, real growth. See how we help businesses generate leads, increase capacity, and optimize operations.",
};

const caseStudies = [
  {
    slug: "mayday",
    title: "Mayday: Automated Lead Generation Pipeline",
    tagline: "From 15 hours/week of manual prospecting to a pipeline that fills itself",
    description:
      "Built an automated lead generation system that runs 24/7, scanning local businesses and delivering daily digests of pre-qualified opportunities. Eliminated manual prospecting entirely and created a repeatable pipeline for growth.",
    highlights: [
      "~15 hours of manual prospecting eliminated weekly",
      "10-15k businesses scanned monthly within budget",
      "Intelligent classification into 3 high-value lead types",
      "24/7 continuous pipeline that never sleeps",
    ],
    tech: ["Next.js 14", "PostgreSQL", "Google Places API", "TypeScript"],
  },
  {
    slug: "swapp",
    title: "SWAPP: 15x Operational Capacity Growth",
    tagline: "From serving 500 to 8,300+ without adding headcount",
    description:
      "Built automated workflows and digital systems that unlocked 15x operational capacity for Adams County, Colorado's emergency response program. The team served dramatically more people with the same resources by eliminating manual bottlenecks.",
    highlights: [
      "80% reduction in processing time (11 min → 2.5 min)",
      "15x increase in capacity (8,300+ vs. 500)",
      "Weekend prototype to production in weeks",
      "560+ people served in one cold weather season",
    ],
    tech: ["Ruby on Rails", "PostgreSQL", "Twilio", "SendGrid"],
  },
  {
    slug: "llt",
    title: "Let's Learn Together: Operational Optimization",
    tagline: "From manual spreadsheets to scalable systems that enable growth",
    description:
      "Helped a Houston tutoring agency optimize billing operations and adopt the right business management platform. Evaluated three vendors, provided strategic guidance, and implemented a solution that saves hours weekly while enabling the business to scale.",
    highlights: [
      "Hours of weekly time savings from operational optimization",
      "3 vendors evaluated with strategic guidance",
      "2-month engagement from chaos to clarity",
      "Platform ready to scale with business growth",
    ],
    tech: ["Spreadsheet Optimization", "Vendor Evaluation", "Teachworks", "Operations Advisory"],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <HeroSimple
        title="Case Studies"
        subtitle="Real projects, real growth. See how the right technology drives measurable business outcomes."
        label="Case Studies"
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <Reveal>
            <SectionLabel>Real results</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-14">
              Projects that drive growth.
            </h2>
          </Reveal>

          <div className="space-y-12">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={i * 0.1}>
                <article className="bg-white border border-charcoal/10 overflow-hidden rounded-2xl hover:border-coral/30 transition-colors">
                  <div
                    className={
                      study.slug === "mayday"
                        ? "bg-gradient-to-br from-sage/20 to-sky/15 px-8 py-6"
                        : study.slug === "swapp"
                          ? "bg-gradient-to-br from-coral/20 to-mustard/15 px-8 py-6"
                          : "bg-gradient-to-br from-lavender/20 to-mustard/10 px-8 py-6"
                    }
                  >
                    <Link href={`/case-studies/${study.slug}`} className="group">
                      <h2 className="text-3xl font-display font-bold text-charcoal group-hover:text-coral transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-lg text-charcoal/70 mt-1">{study.tagline}</p>
                    </Link>
                  </div>

                  <div className="px-8 py-8">
                    <Link href={`/case-studies/${study.slug}`} className="group">
                      <p className="text-charcoal/80 leading-relaxed mb-6">
                        {study.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="font-bold text-charcoal mb-2">Key Results:</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {study.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start text-charcoal/80">
                              <span className="text-sage mr-2">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-bold text-charcoal mb-2">Technologies:</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-cream text-charcoal text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <span className="inline-flex items-center text-coral font-semibold group-hover:gap-2 transition-all">
                        Read full case study
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Full width section outside constrained container */}
      <CTA
        headline="Ready to see results like these?"
        subheadline="Let's discuss how we can drive growth for your business."
      />
    </>
  );
}
