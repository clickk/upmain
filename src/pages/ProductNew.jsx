import React from 'react'
import { Placeholder, StatusBadge } from '../components/Brand.jsx'
import { NEW_PRODUCTS } from '../data/index.js'

export default function ProductNew({ setPage }) {
  const [tab, setTab] = React.useState('prototype')
  const [qty, setQty] = React.useState(1)
  const [playing, setPlaying] = React.useState(false)
  const [lit, setLit] = React.useState(8)

  React.useEffect(() => {
    if (!playing) return
    const t = setInterval(() => setLit(l => (l + 1) % 36), 100)
    return () => clearInterval(t)
  }, [playing])

  return (
    <div className="pd-shell">
      <div className="pd-crumb">
        <a onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Home</a>
        <span className="sep">›</span>
        <a style={{ cursor: 'pointer' }}>Diesel</a>
        <span className="sep">›</span>
        <a style={{ cursor: 'pointer' }}>422 class</a>
        <span className="sep">›</span>
        <span style={{ color: 'var(--smokebox)' }}>422.6 in Reverse Indian Red</span>
      </div>

      <div className="pd-grid">
        <div className="pd-gallery">
          <Placeholder label="422.6 three-quarter hero" detail="studio · bone bg" corner="UM-PRD-422 / 01" scaleRule className="hero-img" />
          <div className="grid-imgs">
            <Placeholder label="side elevation" detail="full broadside" corner="02" />
            <Placeholder label="cab detail" detail="number boards" corner="03" />
            <Placeholder label="underframe" detail="bogie crop" corner="04" />
          </div>
        </div>

        <div className="pd-info">
          <div className="class">422 class · Phase II · #422.6</div>
          <h1 className="display">
            Auscision 422.6 in <span style={{ fontStyle: 'italic' }}>Reverse</span> Indian Red
          </h1>
          <div className="mfr">Auscision Models · HO 1:87 · Factory new · 2026 production run</div>

          <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
            <StatusBadge kind="in" />
            <span className="badge stock-pre" style={{ background: 'var(--timetable)' }}>
              <span className="dot" /> DCC Sound
            </span>
            <span className="badge stock-pre" style={{ background: 'var(--timetable)' }}>
              <span className="dot" /> Edition of 220
            </span>
          </div>

          <div className="price-row">
            <div className="price tnum">A$639.00 <small>incl. GST</small></div>
            <div style={{ textAlign: 'right', fontSize: 12, color: 'var(--steel)' }}>
              <div>or 4 × <strong className="tnum" style={{ color: 'var(--smokebox)' }}>A$159.75</strong></div>
              <div style={{ marginTop: 2 }}>Afterpay available</div>
            </div>
          </div>

          <ul className="spec-list">
            <li><span className="k">Scale</span><span className="v">HO 1:87 · 16.5mm gauge</span></li>
            <li><span className="k">DCC</span><span className="v">ESU LokSound 5 · 21-pin · sugar cube speaker</span></li>
            <li><span className="k">Motor</span><span className="v">5-pole skew-wound · flywheels both ends</span></li>
            <li><span className="k">Lighting</span><span className="v">Directional LED · cab interior · marker lights</span></li>
            <li><span className="k">Couplers</span><span className="v">Kadee #158 fitted · NEM pockets</span></li>
            <li><span className="k">Minimum radius</span><span className="v">457mm (18")</span></li>
            <li><span className="k">Weight</span><span className="v">428g</span></li>
            <li><span className="k">Era</span><span className="v">IV · 1980 – 1995</span></li>
          </ul>

          <div className="pd-actions">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="val">{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="btn primary" style={{ flex: 1 }}>
              Add to cart · A${(639 * qty).toFixed(2)}
            </button>
            <button className="btn ghost" aria-label="Save">♡</button>
          </div>

          <div className="pd-callout">
            <span className="ico">i</span>
            <div>
              <strong>Three left in stock at Marrickville.</strong> Ships within one business day, packed in a foam-lined Auscision box inside a fitted outer carton. Free shipping over A$250.
            </div>
          </div>

          <div className="dcc-player">
            <button className="play" onClick={() => setPlaying(p => !p)} aria-label="Play sound demo">
              {playing ? '❚❚' : '▶'}
            </button>
            <div style={{ flex: 1 }}>
              <div className="wave">
                {Array.from({ length: 36 }, (_, i) => (
                  <i key={i} className={playing && Math.abs(i - lit) < 4 ? 'lit' : ''}
                    style={{ height: `${20 + (Math.sin(i * 0.7) + 1.5) * 10}px` }} />
                ))}
              </div>
              <div style={{ fontSize: 11, opacity: 0.6, marginTop: 6, letterSpacing: '0.04em' }}>
                Sound demo · 422.6 idle → notch 4 → notch 8 · 0:42
              </div>
            </div>
            <div className="label">
              <span className="k">DCC Sound</span>
              ESU LokSound 5<br />
              recorded on 422.6
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {[
          ['prototype', 'Prototype notes'],
          ['liveries', 'Related liveries (4)'],
          ['compat', 'Compatibility'],
          ['policy', 'Pre-order & returns'],
        ].map(([k, l]) => (
          <button key={k} className={tab === k ? 'active' : ''} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {tab === 'prototype' && (
        <div className="pd-prose">
          <p><strong>422 class, Phase II.</strong> The 422 class entered service in 1969 as the
          NSWGR's first six-axle diesel-electric, ordered from Clyde Engineering with EMD 645E3
          prime movers in a then-novel 12-cylinder configuration. 422.6 was outshopped in
          April 1970, and ran out her first six years in standard Indian Red before being
          reshopped at Eveleigh in 1976 in the inverted scheme this model captures.</p>
          <p>Auscision's tooling is to the Phase II body, distinguished from the four
          pre-production units by the spaced fan grilles, the relocated sandboxes ahead of
          the lead bogie, and the squared dynamic brake bulge. Lining is tampo-printed,
          handrails are pre-fitted from chemically-blackened brass, and the number boards
          are translucent for prototypically-lit operation.</p>
          <p>The included LokSound 5 file was recorded by Hamish Tory at Junee in 2024 from
          422.6 herself, recently returned to service with Southern Shorthaul Railroad and
          still in this livery.</p>
        </div>
      )}

      {tab === 'liveries' && (
        <div className="related-grid" style={{ marginTop: 32 }}>
          {NEW_PRODUCTS.map((r, i) => (
            <article key={i} className="product-card">
              <Placeholder label={`422 class · #${r.road}`} detail={r.livery} corner={`L0${i + 1}`} />
              <div>
                <h4 className="title">{r.road} <span style={{ color: 'var(--steel)', fontWeight: 400, fontFamily: 'var(--body)', fontSize: 14 }}>· {r.livery}</span></h4>
                <div className="sub" style={{ marginTop: 6 }}>Auscision Models</div>
              </div>
              <div className="meta">
                <StatusBadge kind={r.stock} eta={r.eta} />
                <span className="price tnum">{r.price}</span>
              </div>
            </article>
          ))}
        </div>
      )}

      {tab === 'compat' && (
        <div className="pd-prose">
          <p><strong>Track:</strong> Code 75, 83, or 100. Minimum radius 457mm in DCC, 380mm in DC. NEM pockets accept Kadee #158, #148, or #156.</p>
          <p><strong>DCC:</strong> Pre-fitted ESU LokSound 5, 21-pin, with sugar-cube speaker baffled in the bunker. Compatible with all NMRA DCC systems. CV29 default for long address.</p>
          <p><strong>DC:</strong> Operates from 6V on the rolling road. Cab and marker lights are LED-fed via the decoder; on pure DC, lights are not directional.</p>
        </div>
      )}

      {tab === 'policy' && (
        <div className="pd-prose">
          <p><strong>Returns:</strong> 30 days, original box and decoder unprogrammed. Sound-fitted models are tested on our rolling road before despatch; if an issue is identified within 30 days we'll repair or refund.</p>
          <p><strong>Pre-orders:</strong> A$50 deposit at reservation, balance charged at despatch. Cancel any time before factory sample approval for a full refund.</p>
        </div>
      )}
    </div>
  )
}
