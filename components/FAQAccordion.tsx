'use client'

import { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

function FAQAccordionItem({ question, answer, isOpen, onToggle, variant = 'light' }: {
  question: string; answer: string; isOpen: boolean; onToggle: () => void; variant?: 'light' | 'dark'
}) {
  const isDark = variant === 'dark'

  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
      isDark
        ? isOpen ? 'bg-white/10 border-coral shadow-lg' : 'bg-white/5 border-white/10 hover:border-white/20'
        : isOpen ? 'bg-white border-coral shadow-lg' : 'bg-white border-charcoal/10 hover:border-charcoal/20'
    }`}>
      <button
        onClick={onToggle}
        className={`w-full text-left p-6 flex items-center justify-between gap-4 transition-colors duration-200 cursor-pointer ${
          isDark ? 'hover:bg-white/5' : 'hover:bg-cream/50'
        }`}
        aria-expanded={isOpen}
        type="button"
      >
        <span className={`font-semibold text-lg ${isDark ? 'text-cream' : 'text-charcoal'}`}>{question}</span>
        <svg
          className={`w-6 h-6 flex-shrink-0 text-coral transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`px-6 leading-relaxed transition-all duration-300 overflow-hidden ${
        isDark ? 'text-cream/70' : 'text-charcoal-light'
      } ${isOpen ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        {answer}
      </div>
    </div>
  )
}

export default function FAQAccordion({ items, variant = 'light' }: { items: readonly FAQItem[]; variant?: 'light' | 'dark' }) {
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
          variant={variant}
        />
      ))}
    </div>
  )
}
