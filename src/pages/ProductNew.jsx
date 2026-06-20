import React from 'react'
import { Placeholder, StatusBadge } from '../components/Brand.jsx'
import { FEATURED_NEW } from '../data/index.js'

const P = FEATURED_NEW // 421 Class

export default function ProductNew({ setPage }) {
  const [tab, setTab] = React.useState('prototype')
  const [qty, setQty] = React.useState(1)
  const [sound, setSound] = React.useState(true)
  const [playing, setPlaying] = React.useState(false)
  const [lit, setLit] = React.useState(8)

  const unitPrice = sound ? P.soundPrice : P.dcPrice

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
        <a style={{ cursor: 'pointer' }}>{P.class}</a>
        <span className="sep">›</span>
        <span style={{ color: 'var(--smokebox)' }}>{P.liveries[0].road} · {P.liveries[0].livery}</span>
      </div>

      <div className="pd-grid">
        <div className="pd-gallery">
          <Placeholder label={`${P.class} three-quarter hero`} detail="studio · bone bg" corner={`UM-PRD-${P.class.replace(/\D/g, '')} / 01`} scaleRule className="hero-img" src={P.img} />
          <div className="grid-imgs">
            {P.gallery.map((g, i) => (
              <Placeholder key={i} label={`${P.class} livery`} detail="catalogue render" corner={String(i + 2).padStart(2, '0')} src={g} />
            ))}
          </div>
        </div>

        <div className="pd-info">
          <div className="class">{P.class} · {P.state} · #{P.liveries[0].road}</div>
          <h1 className="display">{P.title}</h1>
          <div className="mfr">{P.mfr} · HO 1:87 · Factory new · in stock</div>

          <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
            <StatusBadge kind="in" />
            <span className="badge stock-pre" style={{ background: 'var(--timetable)' }}>
              <span className="dot" /> DCC Sound option
            </span>
            <span className="badge stock-pre" style={{ background: 'var(--timetable)' }}>
              <span className="dot" /> {P.units} road numbers
            </span>
          </div>

          {/* DC / DCC Sound selector */}
          <div className="variant-toggle">
            <button className={!sound ? 'active' : ''} onClick={() => setSound(false)}>
              <span className="vt-label">Standard DC</span>
              <span className="vt-price tnum">A${P.dcPrice}.00</span>
              <span className="vt-note">DCC ready · 21-pin</span>
            </button>
            <button className={sound ? 'active' : ''} onClick={() => setSound(true)}>
              <span className="vt-label">DCC Sound</span>
              <span className="vt-price tnum">A${P.soundPrice}.00</span>
              <span className="vt-note">ESU LokSound 5 fitted</span>
            </button>
          </div>

          <div className="price-row">
            <div className="price tnum">A${unitPrice}.00 <small>excl. GST</small></div>
            <div style={{ textAlign: 'right', fontSize: 12, color: 'var(--steel)' }}>
              <div>or 4 × <strong className="tnum" style={{ color: 'var(--smokebox)' }}>A${(unitPrice / 4).toFixed(2)}</strong></div>
              <div style={{ marginTop: 2 }}>Afterpay available</div>
            </div>
          </div>

          <ul className="spec-list">
            <li><span className="k">Scale</span><span className="v">HO 1:87 · 16.5mm gauge</span></li>
            <li><span className="k">DCC</span><span className="v">{P.dcc}</span></li>
            <li><span className="k">Motor</span><span className="v">5-pole skew-wound · twin brass flywheels</span></li>
            <li><span className="k">Drive</span><span className="v">All-wheel drive &amp; electrical pickup</span></li>
            <li><span className="k">Lighting</span><span className="v">Operating directional LED headlights</span></li>
            <li><span className="k">Couplers</span><span className="v">Metal knuckle couplers</span></li>
            <li><span className="k">Wheels</span><span className="v">Blackened metal disc · RP25-110</span></li>
            <li><span className="k">Era</span><span className="v">{P.state} · {P.era}</span></li>
          </ul>

          <div className="pd-actions">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="val">{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="btn primary" style={{ flex: 1 }}>
              Add to cart · A${(unitPrice * qty).toFixed(2)}
            </button>
            <button className="btn ghost" aria-label="Save">♡</button>
          </div>

          <div className="pd-callout">
            <span className="ico">i</span>
            <div>
              <strong>In stock at Marrickville.</strong> Ships within one business day, packed in a foam-lined Auscision box inside a fitted outer carton. Free shipping over A$250.
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
                Sound demo · {P.class} idle → notch 4 → notch 8 · 0:42
              </div>
            </div>
            <div className="label">
              <span className="k">DCC Sound</span>
              ESU LokSound 5<br />
              {P.class} sound file
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {[
          ['prototype', 'Prototype notes'],
          ['liveries', `Liveries (${P.liveries.length})`],
          ['compat', 'Compatibility'],
          ['policy', 'Shipping & returns'],
        ].map(([k, l]) => (
          <button key={k} className={tab === k ? 'active' : ''} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {tab === 'prototype' && (
        <div className="pd-prose">
          <p><strong>{P.class}.</strong> {P.desc}</p>
          <p>Each model is factory painted and decorated with laser-sharp printing, with
          separately fitted metal detail parts, etched brass details and a highly detailed
          underframe. DCC Sound versions carry an ESU LokSound 5 decoder with Auscision power
          capacitors and a Vandersound speaker enclosure.</p>
        </div>
      )}

      {tab === 'liveries' && (
        <div className="related-grid" style={{ marginTop: 32 }}>
          {P.liveries.map((r, i) => (
            <article key={i} className="product-card">
              <Placeholder label={`${P.class} · #${r.road}`} detail={r.livery} corner={`L0${i + 1}`} />
              <div>
                <h4 className="title">{r.road} <span style={{ color: 'var(--steel)', fontWeight: 400, fontFamily: 'var(--body)', fontSize: 14 }}>· {r.livery}</span></h4>
                <div className="sub" style={{ marginTop: 6 }}>{P.mfr}</div>
              </div>
              <div className="meta">
                <StatusBadge kind={r.stock} />
                <span className="price tnum">A${P.dcPrice}</span>
              </div>
            </article>
          ))}
        </div>
      )}

      {tab === 'compat' && (
        <div className="pd-prose">
          <p><strong>Track:</strong> Code 75, 83, or 100. Minimum radius 457mm (18"). NEM pockets accept Kadee #158, #148, or #156.</p>
          <p><strong>DCC:</strong> {P.dcc}. Compatible with all NMRA DCC systems. DCC ready models ship with a 21-pin socket.</p>
          <p><strong>DC:</strong> Standard models operate on DC. Note that DCC Sound models will not function on standard DC.</p>
        </div>
      )}

      {tab === 'policy' && (
        <div className="pd-prose">
          <p><strong>Returns:</strong> 30 days, original box and decoder unprogrammed. Sound-fitted models are tested on our rolling road before despatch; if an issue is identified within 30 days we'll repair or refund.</p>
          <p><strong>Shipping:</strong> Free Australia-wide on orders over A$250. Models are packed in a foam-lined box inside a fitted outer carton.</p>
        </div>
      )}
    </div>
  )
}
