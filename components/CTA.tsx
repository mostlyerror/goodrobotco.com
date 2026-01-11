'use client'

import { useState } from 'react'

interface CTAProps {
  headline?: string
  subheadline?: string
  gradientFrom?: string
  gradientTo?: string
}

export default function CTA({
  headline = "Let's figure out what you actually need.",
  subheadline = "Book a free 20-minute call or send me a message. No pitch, no pressure. Just an honest conversation about what's not working and how to fix it.",
  gradientFrom = "coral/5",
  gradientTo = "mustard/10"
}: CTAProps) {
  // Form state management
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '52da23ac-e8a4-4f34-bee4-4d47e100fd89',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New contact form submission from ${formData.name}`
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Headline section */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">{headline}</h2>
        <p className="text-lg text-charcoal-light max-w-2xl mx-auto mb-12">{subheadline}</p>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-6 text-left">

          {/* Left Column: Calendly Card */}
          <article className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">Schedule a Call</h3>
            <p className="text-charcoal-light mb-6">
              Book a free 20-minute conversation. No pitch, no pressure—just an honest discussion about your needs.
            </p>

            {/* Benefit bullets */}
            <div className="mb-6 flex-grow">
              <p className="text-sm font-medium text-charcoal mb-3">What to expect:</p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-charcoal-light text-[15px]">
                  <span className="text-sage text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span>Quick discussion about your specific needs</span>
                </li>
                <li className="flex items-start gap-2.5 text-charcoal-light text-[15px]">
                  <span className="text-sage text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span>Honest assessment of what will actually work</span>
                </li>
                <li className="flex items-start gap-2.5 text-charcoal-light text-[15px]">
                  <span className="text-sage text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span>Zero pressure or commitment required</span>
                </li>
                <li className="flex items-start gap-2.5 text-charcoal-light text-[15px]">
                  <span className="text-sage text-lg flex-shrink-0 mt-0.5">✓</span>
                  <span>Clear next steps if we're a good fit</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href="https://calendly.com/benjamintpoon/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-coral text-white font-semibold text-center rounded-full hover:bg-coral-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-coral/30 transition-all duration-300"
              >
                Book Your Free Call →
              </a>
              <p className="text-sm text-charcoal-light text-center mt-4">
                20 minutes • No commitment
              </p>
            </div>
          </article>

          {/* Right Column: Contact Form Card */}
          <article className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <h3 className="text-2xl font-semibold mb-3">Send a Message</h3>
            <p className="text-charcoal-light mb-6">
              Prefer email? Send me a message and I&apos;ll respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
              {submitStatus === 'success' ? (
                // Success state with paper airplane
                <div className="flex-grow flex flex-col items-center justify-center text-center py-8 animate-fade-in">
                  {/* Paper airplane SVG */}
                  <svg
                    className="w-24 h-24 mb-6 text-coral animate-float"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 10L90 50L10 90L30 50L10 10Z"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <path
                      d="M10 10L90 50L10 90L30 50L10 10Z"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 50L90 50"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>

                  <h4 className="text-2xl font-semibold text-charcoal mb-3">Message Sent!</h4>
                  <p className="text-charcoal-light mb-6 max-w-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitStatus('idle')
                      setFormData({ name: '', email: '', message: '' })
                    }}
                    className="text-coral font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {/* Name field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-cream rounded-lg border-2 ${
                          errors.name ? 'border-red-500' : 'border-charcoal/20'
                        } focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors`}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-cream rounded-lg border-2 ${
                          errors.email ? 'border-red-500' : 'border-charcoal/20'
                        } focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors`}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Message field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-cream rounded-lg border-2 ${
                          errors.message ? 'border-red-500' : 'border-charcoal/20'
                        } focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/20 transition-colors resize-none`}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Error message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 mb-4">
                      Something went wrong. Please try again or email{' '}
                      <a href="mailto:ben@goodrobotco.com" className="underline font-medium">
                        ben@goodrobotco.com
                      </a>
                    </div>
                  )}

                  {/* Submit button section - aligns with left card button */}
                  <div className="mt-auto">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-coral text-white font-semibold rounded-full hover:bg-coral-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-coral/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message →'}
                    </button>
                    <p className="text-sm text-charcoal-light text-center mt-4">
                      Prefer to email directly?{' '}
                      <a href="mailto:ben@goodrobotco.com" className="text-coral font-medium hover:underline">
                        ben@goodrobotco.com
                      </a>
                    </p>
                  </div>
                </>
              )}
            </form>
          </article>

        </div>
      </div>
    </section>
  )
}
