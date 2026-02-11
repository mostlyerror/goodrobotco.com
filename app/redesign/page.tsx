'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import DesignSwitcher from '@/components/DesignSwitcher'

const designs = [
  { num: 1, href: '/redesign/11', label: 'Editorial Narrative' },
  { num: 2, href: '/redesign/12', label: 'Colorful Dashboard' },
  { num: 3, href: '/redesign/13', label: 'Refined Warmth' },
  { num: 4, href: '/redesign/14', label: 'Data-Driven Proof' },
  { num: 5, href: '/redesign/15', label: 'Dark Bento Grid' },
  { num: 6, href: '/redesign/16', label: 'Bold Manifesto' },
  { num: 7, href: '/redesign/17', label: 'Scroll Theater' },
  { num: 8, href: '/redesign/18', label: 'The Blueprint' },
]

const STORAGE_KEY = 'redesign-review-state'

interface ReviewState {
  dismissed: number[]
  favorites: number[]
  feedback: Record<number, string>
}

const defaultState: ReviewState = {
  dismissed: [],
  favorites: [],
  feedback: {},
}

function loadState(): ReviewState {
  if (typeof window === 'undefined') return defaultState
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    const parsed = JSON.parse(raw)
    return {
      dismissed: parsed.dismissed ?? [],
      favorites: parsed.favorites ?? [],
      feedback: parsed.feedback ?? {},
    }
  } catch {
    return defaultState
  }
}

export default function RedesignIndex() {
  const [state, setState] = useState<ReviewState>(defaultState)
  const [loaded, setLoaded] = useState(false)
  const [expandedFeedback, setExpandedFeedback] = useState<Set<number>>(new Set())
  const [showDismissed, setShowDismissed] = useState(false)
  const [generateCount, setGenerateCount] = useState(3)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setState(loadState())
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    }
  }, [state, loaded])

  const toggleFavorite = useCallback((num: number) => {
    setState(prev => ({
      ...prev,
      favorites: prev.favorites.includes(num)
        ? prev.favorites.filter(n => n !== num)
        : [...prev.favorites, num],
    }))
  }, [])

  const dismiss = useCallback((num: number) => {
    setState(prev => ({
      ...prev,
      dismissed: [...prev.dismissed, num],
      favorites: prev.favorites.filter(n => n !== num),
    }))
  }, [])

  const undoDismiss = useCallback((num: number) => {
    setState(prev => ({
      ...prev,
      dismissed: prev.dismissed.filter(n => n !== num),
    }))
  }, [])

  const updateFeedback = useCallback((num: number, text: string) => {
    setState(prev => ({
      ...prev,
      feedback: { ...prev.feedback, [num]: text },
    }))
  }, [])

  const toggleFeedbackPanel = useCallback((num: number) => {
    setExpandedFeedback(prev => {
      const next = new Set(prev)
      if (next.has(num)) next.delete(num)
      else next.add(num)
      return next
    })
  }, [])

  const activeDesigns = designs.filter(d => !state.dismissed.includes(d.num))
  const favDesigns = activeDesigns.filter(d => state.favorites.includes(d.num))
  const otherDesigns = activeDesigns.filter(d => !state.favorites.includes(d.num))
  const sortedActive = [...favDesigns, ...otherDesigns]
  const dismissedDesigns = designs.filter(d => state.dismissed.includes(d.num))

  const copyPrompt = useCallback(async () => {
    const lines: string[] = [`Generate ${generateCount} more homepage design variations for goodrobotco.com.`]

    const favsWithNotes = favDesigns.filter(d => state.feedback[d.num]?.trim())
    const favsNoNotes = favDesigns.filter(d => !state.feedback[d.num]?.trim())
    const keptWithNotes = otherDesigns.filter(d => state.feedback[d.num]?.trim())
    const keptNoNotes = otherDesigns.filter(d => !state.feedback[d.num]?.trim())

    if (favsWithNotes.length || favsNoNotes.length) {
      lines.push('', 'Favorites:')
      for (const d of favsWithNotes) {
        lines.push(`- Design ${d.num} (${d.label}): "${state.feedback[d.num].trim()}"`)
      }
      for (const d of favsNoNotes) {
        lines.push(`- Design ${d.num} (${d.label})`)
      }
    }

    if (keptWithNotes.length || keptNoNotes.length) {
      lines.push('', 'Kept (no strong opinion):')
      for (const d of keptWithNotes) {
        lines.push(`- Design ${d.num} (${d.label}): "${state.feedback[d.num].trim()}"`)
      }
      for (const d of keptNoNotes) {
        lines.push(`- Design ${d.num} (${d.label})`)
      }
    }

    if (dismissedDesigns.length) {
      lines.push('', 'Dismissed:')
      for (const d of dismissedDesigns) {
        const fb = state.feedback[d.num]?.trim()
        lines.push(`- Design ${d.num} (${d.label})${fb ? `: "${fb}"` : ''}`)
      }
    }

    await navigator.clipboard.writeText(lines.join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [generateCount, favDesigns, otherDesigns, dismissedDesigns, state.feedback])

  if (!loaded) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-white/40 text-sm">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-neutral-950 p-6 md:p-10 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Active designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedActive.map(d => {
              const isFav = state.favorites.includes(d.num)
              const hasFeedback = expandedFeedback.has(d.num)
              return (
                <div key={d.num} className="flex flex-col">
                  <div className={`relative rounded-lg overflow-hidden border transition-colors bg-neutral-900 ${isFav ? 'border-emerald-500/60 ring-1 ring-emerald-500/20' : 'border-white/10 hover:border-white/30'}`}>
                    {/* Action buttons */}
                    <div className="absolute top-1.5 right-1.5 z-10 flex gap-1">
                      <button
                        onClick={() => toggleFeedbackPanel(d.num)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${hasFeedback ? 'bg-blue-500/80 text-white' : 'bg-black/60 text-white/60 hover:text-white hover:bg-black/80'}`}
                        title="Add feedback"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => toggleFavorite(d.num)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${isFav ? 'bg-emerald-500/80 text-white' : 'bg-black/60 text-white/60 hover:text-white hover:bg-black/80'}`}
                        title={isFav ? 'Unstar' : 'Star as favorite'}
                      >
                        {isFav ? (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => dismiss(d.num)}
                        className="w-7 h-7 rounded-full bg-black/60 text-white/60 hover:text-red-400 hover:bg-black/80 flex items-center justify-center transition-all"
                        title="Dismiss"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>

                    {/* Favorite badge */}
                    {isFav && (
                      <div className="absolute top-1.5 left-1.5 z-10 bg-emerald-500/90 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full leading-tight">
                        Favorite
                      </div>
                    )}

                    {/* Preview iframe — cropped to top portion of page */}
                    <Link href={d.href} className="block">
                      <div className="w-full h-[140px] overflow-hidden">
                        <iframe
                          src={d.href}
                          className="w-[1440px] h-[900px] origin-top-left pointer-events-none"
                          style={{ transform: 'scale(0.28)' }}
                          tabIndex={-1}
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Label */}
                  <div className="mt-2 flex items-center gap-2">
                    <Link href={d.href} className="text-xs text-white/50 hover:text-white/90 transition-colors">
                      <span className="text-white/80 font-semibold">{d.num}</span> &mdash; {d.label}
                    </Link>
                    {state.feedback[d.num]?.trim() && (
                      <span className="text-blue-400/60 text-[10px]">(has notes)</span>
                    )}
                  </div>

                  {/* Feedback textarea */}
                  {hasFeedback && (
                    <textarea
                      value={state.feedback[d.num] ?? ''}
                      onChange={e => updateFeedback(d.num, e.target.value)}
                      placeholder="Add feedback for this design..."
                      className="mt-1.5 w-full bg-white/5 border border-white/10 rounded-md px-2.5 py-1.5 text-xs text-white/80 placeholder-white/30 focus:outline-none focus:border-white/30 resize-y min-h-[48px]"
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Empty state */}
          {sortedActive.length === 0 && (
            <div className="text-center py-20 text-white/30 text-sm">
              All designs dismissed. Expand the dismissed section below to undo.
            </div>
          )}

          {/* Dismissed section */}
          {dismissedDesigns.length > 0 && (
            <div className="mt-12">
              <button
                onClick={() => setShowDismissed(prev => !prev)}
                className="flex items-center gap-2 text-white/30 hover:text-white/50 transition-colors text-sm mb-4"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${showDismissed ? 'rotate-90' : ''}`}
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                Dismissed ({dismissedDesigns.length})
              </button>

              {showDismissed && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {dismissedDesigns.map(d => (
                    <div key={d.num} className="flex flex-col opacity-50">
                      <div className="relative rounded-md overflow-hidden border border-white/5 bg-neutral-900">
                        <button
                          onClick={() => undoDismiss(d.num)}
                          className="absolute top-1 right-1 z-10 bg-black/70 text-white/60 hover:text-white text-[10px] px-1.5 py-0.5 rounded-full transition-colors"
                        >
                          Undo
                        </button>
                        <Link href={d.href} className="block">
                          <div className="w-full h-[80px] overflow-hidden">
                            <iframe
                              src={d.href}
                              className="w-[1440px] h-[900px] origin-top-left pointer-events-none"
                              style={{ transform: 'scale(0.17)' }}
                              tabIndex={-1}
                              loading="lazy"
                            />
                          </div>
                        </Link>
                      </div>
                      <p className="mt-1.5 text-[10px] text-white/30">
                        <span className="font-semibold">{d.num}</span> &mdash; {d.label}
                      </p>
                      {state.feedback[d.num]?.trim() && (
                        <p className="mt-0.5 text-[10px] text-white/20 italic truncate">&quot;{state.feedback[d.num].trim()}&quot;</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar — generate more + copy prompt */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-neutral-900/95 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white/50 text-sm">Generate</span>
            <div className="flex items-center bg-white/5 rounded-lg border border-white/10">
              <button
                onClick={() => setGenerateCount(c => Math.max(1, c - 1))}
                className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                &minus;
              </button>
              <span className="w-8 text-center text-white text-sm font-semibold">{generateCount}</span>
              <button
                onClick={() => setGenerateCount(c => Math.min(5, c + 1))}
                className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              >
                +
              </button>
            </div>
            <span className="text-white/50 text-sm">more</span>
          </div>

          <button
            onClick={copyPrompt}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-white text-neutral-900 hover:bg-white/90'}`}
          >
            {copied ? 'Copied!' : 'Copy prompt'}
          </button>
        </div>
      </div>

      <DesignSwitcher />
    </>
  )
}
