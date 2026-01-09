interface CTAProps {
  headline?: string
  subheadline?: string
  gradientFrom?: string
  gradientTo?: string
}

export default function CTA({ 
  headline = "Let's figure out what you actually need.",
  subheadline = "Book a free 20-minute call. No pitch, no pressure. Just an honest conversation about what's not working and how to fix it.",
  gradientFrom = "coral/5",
  gradientTo = "mustard/10"
}: CTAProps) {
  return (
    <section id="contact" className={`py-28 text-center relative overflow-hidden bg-gradient-to-br from-${gradientFrom} via-cream to-${gradientTo}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Large gradient blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-coral/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sage/10 rounded-full blur-3xl"></div>
        
        {/* SVG decorative circles */}
        <svg className="absolute top-10 left-[10%] w-20 h-20 text-coral/20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5"/>
        </svg>
        <svg className="absolute bottom-20 right-[15%] w-32 h-32 text-sage/20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-1/3 right-[8%] w-12 h-12 text-mustard/30" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor"/>
        </svg>
        <svg className="absolute bottom-1/4 left-[12%] w-8 h-8 text-lavender/30" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" rx="20" fill="currentColor"/>
        </svg>
        
        {/* Dotted pattern */}
        <div className="absolute top-20 right-[25%] grid grid-cols-5 gap-3 opacity-20 max-md:hidden">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-charcoal rounded-full"></div>
          ))}
        </div>

        {/* Floating shapes (animated) */}
        <div className="absolute top-[15%] left-[8%] w-14 h-14 bg-coral/80 rounded-2xl animate-float max-md:hidden shadow-lg"></div>
        <div className="absolute bottom-[20%] left-[15%] w-10 h-10 bg-sage/80 rounded-full animate-float-delayed max-md:hidden shadow-lg"></div>
        <div className="absolute top-[40%] right-[12%] w-12 h-12 bg-mustard/80 rounded-2xl animate-float-fast max-md:hidden shadow-lg"></div>
        <div className="absolute bottom-[30%] right-[8%] w-8 h-8 bg-lavender/80 rounded-xl animate-float max-md:hidden shadow-md"></div>
      </div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">{headline}</h2>
        <p className="text-lg text-charcoal-light max-w-xl mx-auto mb-10">{subheadline}</p>
        <a 
          href="https://calendly.com/benjamintpoon/20min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-coral text-white font-semibold text-lg rounded-full hover:bg-coral-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-coral/30 transition-all duration-300 mb-8"
        >
          Book Your Free Call →
        </a>
        <p className="text-[15px] text-charcoal-light">
          Or email me directly at{' '}
          <a href="mailto:ben@goodrobotco.com" className="text-coral font-medium hover:underline">
            ben@goodrobotco.com
          </a>
        </p>
      </div>
    </section>
  )
}
