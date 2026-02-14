'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim() || formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

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
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name, email: formData.email, message: formData.message,
          subject: `New contact form submission from ${formData.name}`
        })
      })
      if (response.ok) { setSubmitStatus('success'); setFormData({ name: '', email: '', message: '' }) }
      else setSubmitStatus('error')
    } catch { setSubmitStatus('error') }
    finally { setIsSubmitting(false) }
  }

  if (submitStatus === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8">
        <div className="text-5xl mb-4">&#9993;</div>
        <h4 className="text-xl font-display font-bold text-cream mb-2">Message Sent!</h4>
        <p className="text-cream/60 mb-4 text-sm">I&apos;ll get back to you within 24 hours.</p>
        <button type="button" onClick={() => setSubmitStatus('idle')} className="text-coral font-medium hover:underline text-sm">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-cream/70 mb-1.5">Name</label>
        <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-white/10 rounded-lg border ${errors.name ? 'border-red-400' : 'border-white/20'} text-cream placeholder-cream/30 focus:border-coral focus:outline-none transition-colors`}
          disabled={isSubmitting} />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-cream/70 mb-1.5">Email</label>
        <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-white/10 rounded-lg border ${errors.email ? 'border-red-400' : 'border-white/20'} text-cream placeholder-cream/30 focus:border-coral focus:outline-none transition-colors`}
          disabled={isSubmitting} />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-cream/70 mb-1.5">Message</label>
        <textarea id="contact-message" name="message" rows={3} value={formData.message} onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-white/10 rounded-lg border ${errors.message ? 'border-red-400' : 'border-white/20'} text-cream placeholder-cream/30 focus:border-coral focus:outline-none transition-colors resize-none`}
          disabled={isSubmitting} />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>
      {submitStatus === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong. Try again or email <a href="mailto:hello@goodrobotco.com" className="underline">hello@goodrobotco.com</a></p>
      )}
      <button type="submit" disabled={isSubmitting}
        className="w-full px-6 py-3 bg-coral text-white font-bold rounded-full hover:bg-coral/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
