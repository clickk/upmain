import React from 'react'
import { search } from '../data/index.js'

const TYPE_LABELS = {
  new: 'New',
  used: 'Marketplace',
  preorder: 'Pre-order',
  class: 'Class',
}

export default function SearchOverlay({ onNavigate, onClose }) {
  const [query, setQuery] = React.useState('')
  const [selectedIdx, setSelectedIdx] = React.useState(0)
  const inputRef = React.useRef(null)

  const results = React.useMemo(() => search(query), [query])

  React.useEffect(() => {
    inputRef.current?.focus()
  }, [])

  React.useEffect(() => {
    setSelectedIdx(0)
  }, [query])

  // Close on Escape key globally
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIdx(i => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIdx(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIdx]) {
      const r = results[selectedIdx]
      onNavigate(r.page, r.params)
      onClose()
    }
  }

  const handleResultClick = (item) => {
    onNavigate(item.page, item.params)
    onClose()
  }

  // Group results by type for display
  const grouped = results.reduce((acc, item, idx) => {
    if (!acc[item.type]) acc[item.type] = []
    acc[item.type].push({ ...item, idx })
    return acc
  }, {})

  const typeOrder = ['new', 'used', 'preorder', 'class']

  return (
    <>
      <div className="search-backdrop" onClick={onClose} />
      <div className="search-modal">
        <div className="search-modal-input">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" style={{ color: 'var(--steel)', flexShrink: 0 }}>
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Search by class, road number, manufacturer…"
          />
          <button className="search-esc" onClick={onClose}>Esc</button>
        </div>

        {results.length > 0 && (
          <div className="search-results">
            {typeOrder.filter(t => grouped[t]).map(type => (
              <div key={type}>
                <div className="search-group-label">{TYPE_LABELS[type]}</div>
                {grouped[type].map(item => (
                  <div
                    key={item.idx}
                    className={`search-result ${item.idx === selectedIdx ? 'selected' : ''}`}
                    onClick={() => handleResultClick(item)}
                    onMouseEnter={() => setSelectedIdx(item.idx)}
                  >
                    <span className={`search-result-type ${item.type}`}>{TYPE_LABELS[item.type]}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="search-result-title">{item.title}</div>
                      <div className="search-result-meta">{item.meta}</div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" style={{ color: 'var(--steel)', flexShrink: 0 }}>
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="search-empty">
            No results for <strong>"{query}"</strong> — try a class number, road number or manufacturer.
          </div>
        )}

        {!query && (
          <div className="search-empty" style={{ color: 'var(--steel-soft)' }}>
            Try: "81 class", "3813", "Auscision", "candy"…
          </div>
        )}

        <div className="search-hint">
          <span><kbd>↑↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Open</span>
          <span><kbd>Esc</kbd> Close</span>
        </div>
      </div>
    </>
  )
}
