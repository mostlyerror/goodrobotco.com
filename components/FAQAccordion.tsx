'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

function FAQAccordionItem({ question, answer, isOpen, onToggle }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void
}) {
  return (
    <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-coral shadow-lg' : 'border-charcoal/10 hover:border-charcoal/20'}`}>
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-cream/50 transition-colors duration-200 cursor-pointer"
        aria-expanded={isOpen}
        type="button"
      >
        <span className="font-semibold text-lg text-charcoal">{question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 text-coral transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`px-6 text-charcoal-light leading-relaxed transition-all duration-300 overflow-hidden ${isOpen ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {answer}
      </div>
    </div>
  )
}

export default function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((faq, i) => (
        <FAQAccordionItem
          key={i}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
