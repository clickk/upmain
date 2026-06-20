import React from 'react'
import { Placeholder } from '../components/Brand.jsx'
import { TRACKER_DATA } from '../data/index.js'

const STAGES = ['Announced', 'Confirmed', 'Sample', 'Production', 'Shipping', 'Arrived']

export default function TrackerPage() {
  const [filters, setFilters] = React.useState({ class: 'all', mfr: 'all', scale: 'all', stage: 'all' })
  const [sort, setSort] = React.useState('eta')

  const filtered = TRACKER_DATA
    .filter(d => {
      if (filters.class !== 'all' && d.class !== filters.class) return false
      if (filters.mfr !== 'all' && d.mfr !== filters.mfr) return false
      if (filters.scale !== 'all' && d.scale !== filters.scale) return false
      if (filters.stage !== 'all' && d.stage !== filters.stage) return false
      return true
    })
    .slice()
    .sort((a, b) => {
      if (sort === 'stage') return b.stage - a.stage
      if (sort === 'class') return a.class.localeCompare(b.class, undefined, { numeric: true })
      // 'eta' — soonest first, by year then quarter
      return (a.year + a.quarter).localeCompare(b.year + b.quarter)
    })

  const clearFilters = () => setFilters({ class: 'all', mfr: 'all', scale: 'all', stage: 'all' })
  const hasFilters = Object.values(filters).some(v => v !== 'all')

  // Derive filter options from the live data
  const classOptions = [...new Set(TRACKER_DATA.map(d => d.class))]
  const scaleOptions = [...new Set(TRACKER_DATA.map(d => d.scale))]

  return (
    <div className="tracker-shell">
      <div className="tracker-head">
        <div>
          <div className="eyebrow">Pre-order tracker</div>
          <h1 className="display">Every Australian outline release, in batch order.</h1>
        </div>
        <p>
          What's announced, confirmed, sampled, and on the water — for HO and N scale,
          across every Australian manufacturer we follow. Updated weekly. Reserve a slot
          with a refundable A$50 deposit; balance charged on despatch.
        </p>
      </div>

      <div className="tracker-filters">
        <span className="eyebrow" style={{ alignSelf: 'center', marginRight: 8 }}>Filter</span>

        {classOptions.map(full => {
          const active = filters.class === full
          return (
            <button key={full} className={`chip ${active ? 'active' : ''}`}
              onClick={() => setFilters(f => ({ ...f, class: active ? 'all' : full }))}>
              {full}
              <span className="count tnum">{TRACKER_DATA.filter(d => d.class === full).length}</span>
            </button>
          )
        })}

        <span style={{ width: 1, background: 'var(--timetable-line)', alignSelf: 'stretch', margin: '0 4px' }} />

        {scaleOptions.map(s => {
          const active = filters.scale === s
          return (
            <button key={s} className={`chip ${active ? 'active' : ''}`}
              onClick={() => setFilters(f => ({ ...f, scale: active ? 'all' : s }))}>
              {s} scale
              <span className="count tnum">{TRACKER_DATA.filter(d => d.scale === s).length}</span>
            </button>
          )
        })}

        <span style={{ width: 1, background: 'var(--timetable-line)', alignSelf: 'stretch', margin: '0 4px' }} />

        {STAGES.slice(0, 5).map((s, i) => {
          const active = filters.stage === i
          return (
            <button key={s} className={`chip ${active ? 'active' : ''}`}
              onClick={() => setFilters(f => ({ ...f, stage: active ? 'all' : i }))}>
              {s}
            </button>
          )
        })}

        {hasFilters && (
          <button className="chip" style={{ borderColor: 'var(--indian)', color: 'var(--indian)' }} onClick={clearFilters}>
            Clear all ×
          </button>
        )}

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12, color: 'var(--steel)', fontSize: 12.5 }}>
          <span>Showing <strong className="tnum" style={{ color: 'var(--smokebox)' }}>{filtered.length}</strong> of <span className="tnum">{TRACKER_DATA.length}</span></span>
          <span style={{ color: 'var(--timetable-line)' }}>·</span>
          <span>Sort: </span>
          <select value={sort} onChange={e => setSort(e.target.value)}
            style={{ font: 'inherit', border: '1px solid var(--timetable-line)', padding: '4px 8px', background: 'var(--bone)', borderRadius: 2 }}>
            <option value="eta">ETA, soonest</option>
            <option value="stage">Stage</option>
            <option value="class">Class number</option>
          </select>
        </div>
      </div>

      <div className="tracker-legend">
        <span className="s-announced"><i />Announced</span>
        <span className="s-confirmed"><i />Confirmed</span>
        <span className="s-sample"><i />Factory sample</span>
        <span className="s-production"><i />In production</span>
        <span className="s-shipping"><i />Shipping</span>
      </div>

      <div>
        {filtered.map((r, i) => (
          <div key={i} className="tracker-row">
            <div className="eta">
              <span className="tnum">{r.eta}</span>
              <small>{r.year}</small>
            </div>
            <Placeholder className="thumb" label={r.class} detail={r.mfr.split(' ')[0]} corner={`PRE-${String(i + 1).padStart(2, '0')}`} src={r.img} />
            <div>
              <div className="eyebrow" style={{ marginBottom: 6 }}>{r.class} · {r.mfr} · {r.scale}</div>
              <h3 className="title">{r.title}</h3>
              <div className="sub" style={{ marginTop: 6 }}>{r.note}</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 8 }}>{STAGES[r.stage]}</div>
              <div className="stage-line">
                {STAGES.slice(0, 5).map((_, j) => (
                  <div key={j} className={`seg ${j < r.stage ? 'done' : ''} ${j === r.stage ? 'now' : ''}`} />
                ))}
              </div>
              <div style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '0.04em', color: 'var(--steel)', marginTop: 8 }}>
                <span className="tnum">{r.units}</span> road number{r.units > 1 ? 's' : ''} · {r.quarter} {r.year}
              </div>
            </div>
            <div className="price-bracket">
              <span className="tnum">{r.price}</span>
              <small>indicative</small>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {r.stage >= 4 ? (
                <button className="btn small">Notify on arrival</button>
              ) : r.stage === 0 ? (
                <button className="btn ghost small">Register interest</button>
              ) : (
                <button className="btn primary small">Reserve · A$50</button>
              )}
              <button className="btn ghost small" style={{ padding: '6px 14px', fontSize: 12 }}>Details →</button>
            </div>
          </div>
        ))}
      </div>

      <section style={{ marginTop: 80, padding: 48, background: 'var(--smokebox)', color: 'var(--timetable)' }}>
        <div className="eyebrow on-dark">How pre-orders work at Up Main</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32, marginTop: 28 }}>
          {[
            ['01', 'Announced', 'A new project is publicly announced. We list expected scale, road numbers, and ballpark price.'],
            ['02', 'Confirmed', 'Manufacturer locks in run size and pricing. Pre-orders open. A$50 deposit holds your slot.'],
            ['03', 'Factory sample', 'Hand-built sample arrives at Up Main for inspection. Changes are negotiated with the factory.'],
            ['04', 'In production', 'Tooling is final. Factory is running the batch. ETAs firm up to the month.'],
            ['05', 'Shipping', 'On the water from China. Customs and inspection at Port Botany. Balance charged on despatch.'],
          ].map(([n, t, d]) => (
            <div key={n}>
              <div className="display tnum" style={{ fontSize: 36, color: 'var(--indian)' }}>{n}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 22, margin: '8px 0 10px' }}>{t}</div>
              <div style={{ fontSize: 13.5, color: 'rgba(241,233,216,0.65)', lineHeight: 1.55 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
