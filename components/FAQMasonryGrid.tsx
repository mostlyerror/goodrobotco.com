'use client'

import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import type { FAQItem } from '@/components/FAQAccordion'

const cardAccents = [
  'border-t-coral',
  'border-t-sage',
  'border-t-sky',
  'border-t-mustard',
  'border-t-lavender',
]

function FAQCard({ question, answer, accent, index }: {
  question: string; answer: string; accent: string; index: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={index * 0.04}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`break-inside-avoid w-full text-left bg-white border-t-[3px] ${accent} rounded-2xl p-6 md:p-7 hover:shadow-lg transition-all duration-300 cursor-pointer`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-bold text-charcoal text-lg leading-snug">{question}</h3>
          <svg
            className={`w-5 h-5 flex-shrink-0 text-charcoal/30 transition-transform duration-300 mt-1 ${open ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className={`text-charcoal-light text-[15px] leading-relaxed transition-all duration-300 overflow-hidden ${open ? 'mt-3 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          {answer}
        </div>
      </button>
    </Reveal>
  )
}

function distributeItems<T>(items: readonly T[], colCount: number): T[][] {
  const cols: T[][] = Array.from({ length: colCount }, () => [])
  items.forEach((item, i) => cols[i % colCount].push(item))
  return cols
}

function ColumnLayout({ items, colCount }: { items: readonly FAQItem[]; colCount: number }) {
  const cols = distributeItems(items, colCount)
  return (
    <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))` }}>
      {cols.map((col, c) => (
        <div key={c} className="flex flex-col gap-8">
          {col.map((faq, r) => {
            const originalIndex = r * colCount + c
            return (
              <FAQCard
                key={originalIndex}
                question={faq.question}
                answer={faq.answer}
                accent={cardAccents[originalIndex % cardAccents.length]}
                index={originalIndex}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default function FAQMasonryGrid({ items }: { items: readonly FAQItem[] }) {
  return (
    <>
      {/* Mobile: 1 column */}
      <div className="md:hidden">
        <ColumnLayout items={items} colCount={1} />
      </div>
      {/* Tablet: 2 columns */}
      <div className="hidden md:block lg:hidden">
        <ColumnLayout items={items} colCount={2} />
      </div>
      {/* Desktop: 3 columns */}
      <div className="hidden lg:block">
        <ColumnLayout items={items} colCount={3} />
      </div>
    </>
  )
}
