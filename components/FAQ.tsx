'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  description?: string
}

export default function FAQ({ items, title, description }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && <h2 className="text-3xl md:text-4xl font-semibold mb-3.5">{title}</h2>}
          {description && <p className="text-lg text-charcoal-light">{description}</p>}
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'border-coral shadow-lg' : 'border-charcoal/10 hover:border-charcoal/20'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-cream/50 transition-colors duration-200 cursor-pointer"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              type="button"
            >
              <span className="font-semibold text-lg text-charcoal">{item.question}</span>
              <svg
                className={`w-6 h-6 flex-shrink-0 text-coral transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`px-6 text-charcoal-light leading-relaxed transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
              role="region"
              aria-hidden={openIndex !== index}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
