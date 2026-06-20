import React from 'react'
import { Placeholder, GradingBadge } from '../components/Brand.jsx'

export default function ProductUsed({ setPage }) {
  const [showOffer, setShowOffer] = React.useState(false)

  return (
    <div className="pd-shell">
      <div className="pd-crumb">
        <a onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Home</a>
        <span className="sep">›</span>
        <a style={{ cursor: 'pointer' }}>Marketplace</a>
        <span className="sep">›</span>
        <a style={{ cursor: 'pointer' }}>38 class</a>
        <span className="sep">›</span>
        <span style={{ color: 'var(--smokebox)' }}>3813 · Trainorama 2014 run</span>
      </div>

      <div className="pd-grid">
        <div className="pd-gallery">
          <Placeholder label="3813 three-quarter, consigned" detail="natural light · seller-supplied" corner="UM-MKT-3813 / 01" scaleRule className="hero-img" />
          <div className="grid-imgs">
            <Placeholder label="left side, full" detail="full broadside" corner="02" />
            <Placeholder label="tender, top down" detail="paint cond." corner="03" />
            <Placeholder label="original box" detail="incl. packing" corner="04" />
          </div>
        </div>

        <div className="pd-info">
          <div className="class">38 class · Streamlined · #3813</div>
          <h1 className="display">
            Trainorama 3813 in NSWGR Black, original sloping smokebox.
          </h1>
          <div className="mfr">Trainorama 2014 run · HO 1:87 · Consigned, Hornsby NSW</div>

          <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap', alignItems: 'center' }}>
            <GradingBadge grade="Near Mint" />
            <span className="badge stock-pre"><span className="dot" /> 1 of 1 available</span>
            <span className="badge stock-in"><span className="dot" /> Up Main inspected</span>
          </div>

          <div className="price-row">
            <div>
              <div className="price tnum">A$575.00</div>
              <div style={{ fontSize: 12, color: 'var(--steel)', marginTop: 4 }}>
                Original RRP A$629 · single unit, no further stock
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <button className="btn ghost small" onClick={() => setShowOffer(o => !o)}>Make an offer</button>
            </div>
          </div>

          {showOffer && (
            <div className="pd-callout" style={{ background: 'var(--bone)', borderColor: 'var(--smokebox)' }}>
              <span className="ico">$</span>
              <div style={{ flex: 1 }}>
                <strong>Offer the consignor.</strong> Offers under A$510 are auto-declined.
                <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, border: '1px solid var(--timetable-line)', padding: '8px 12px', background: 'var(--bone-warm)' }}>
                    <span style={{ color: 'var(--steel)' }}>A$</span>
                    <input defaultValue="525" style={{ border: 0, outline: 0, background: 'transparent', font: 'inherit', flex: 1, fontVariantNumeric: 'tabular-nums', fontWeight: 600 }} />
                  </div>
                  <button className="btn small">Send offer</button>
                </div>
              </div>
            </div>
          )}

          <h4 style={{ fontFamily: 'var(--display)', fontSize: 19, margin: '24px 0 10px', letterSpacing: '-0.01em' }}>
            Up Main condition report
          </h4>
          <ul className="spec-list">
            <li><span className="k">Grade</span><span className="v">Near Mint · run twice on rolling road</span></li>
            <li><span className="k">Box</span><span className="v">Original Trainorama box, foam insert, instructions</span></li>
            <li><span className="k">Decoder</span><span className="v">DCC Sound, ESU LokSound 4 fitted to 3801 file</span></li>
            <li><span className="k">Detail parts</span><span className="v">Complete; bagged spares included</span></li>
            <li><span className="k">Noted defects</span><span className="v">Light dust to tender top; cleaned before despatch</span></li>
            <li><span className="k">Wheels</span><span className="v">Clean, no flats. Tested on Code 75 &amp; 100</span></li>
            <li><span className="k">Provenance</span><span className="v">Single-owner since 2014, smoke-free home</span></li>
          </ul>

          <div className="pd-actions">
            <button className="btn primary" style={{ flex: 1 }}>Buy now · A$575.00</button>
            <button className="btn ghost" aria-label="Save">♡</button>
          </div>

          <div className="pd-callout">
            <span className="ico">✓</span>
            <div>
              <strong>Up Main inspected.</strong> Every consigned model is bench-tested,
              photographed in our studio, and graded against published standards before listing.
              <a style={{ display: 'block', marginTop: 4, borderBottom: '1px solid var(--smokebox)', width: 'fit-content', cursor: 'pointer' }}>
                Read our grading scale
              </a>
            </div>
          </div>

          <div style={{ marginTop: 22, padding: 16, border: '1px solid var(--timetable-line)', display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'repeating-linear-gradient(135deg, var(--timetable-deep) 0 6px, var(--bone) 6px 12px)' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Consigned by P. Walsh · Hornsby NSW</div>
              <div style={{ fontSize: 12, color: 'var(--steel)' }}>14 sales · joined 2024 · all funds held in trust until 14 days post-delivery</div>
            </div>
            <a style={{ fontSize: 13, borderBottom: '1px solid var(--smokebox)', cursor: 'pointer' }}>Other listings (3)</a>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className="active">Prototype notes</button>
        <button>Grading detail</button>
        <button>Q&amp;A (2)</button>
        <button>Returns</button>
      </div>
      <div className="pd-prose">
        <p><strong>3813.</strong> Streamlined Pacific, ex-Eveleigh April 1949, sister to the
        famous 3801. Differs from later 38s in retaining the original sloping smokebox door
        through to the 1957 reshopping. This Trainorama model represents her late-1949 condition,
        prior to the addition of a second whistle on the cab roof.</p>
        <p>The 2014 Trainorama run is sought-after for its accurate firebox shape and the
        slightly oversize but characterful Caledonian Green lining. A handful of these survive
        in Mint or Near Mint condition; expect to pay A$500 – 650 for a sound-fitted example.</p>
      </div>
    </div>
  )
}
