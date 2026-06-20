import React from 'react'
import { Placeholder, StatusBadge, GradingBadge } from '../components/Brand.jsx'
import { IN_STOCK, TRACKER_DATA, MARKETPLACE_ITEMS, CLASS_INDEX, PRODUCTS } from '../data/index.js'

const STAGE_LABELS = ['Announced', 'Confirmed', 'Sample', 'Production', 'Shipping']

// Hero = the headline in-stock 45 Class
const HERO = PRODUCTS.find(p => p.id === '45-class')

// Live pre-orders strip = the three soonest upcoming releases
const PREORDERS = TRACKER_DATA.slice(0, 3)

export default function HomePage({ setPage }) {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="copy">
          <div className="eyebrow">Latest release · Auscision Models</div>
          <h1 className="display">
            {HERO.class}<br />
            <em>diesel-electric</em>,<br />
            in original red.
          </h1>
          <p>{HERO.desc}</p>
          <div className="row">
            <button className="btn primary" onClick={() => setPage('product-new', { id: HERO.id })}>
              Shop · from A${HERO.dcPrice}
            </button>
            <button className="btn ghost" onClick={() => setPage('product-new', { id: HERO.id })}>Read prototype notes</button>
          </div>
          <div className="specs">
            <div>
              <span className="k">Scale</span>
              <span className="v tnum display">HO 1:87</span>
            </div>
            <div>
              <span className="k">DCC</span>
              <span className="v display">Sound</span>
            </div>
            <div>
              <span className="k">Road numbers</span>
              <span className="v tnum display">{HERO.units}</span>
            </div>
          </div>
        </div>
        <div className="visual">
          <Placeholder label={`${HERO.class} three-quarter hero`} detail="studio · bone bg · scale rule" corner="UM-45 / 01" scaleRule src={HERO.img} priority />
        </div>
      </section>

      {/* ─── Live pre-orders ─── */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Live pre-orders</div>
            <h2>On the books, in batch.</h2>
          </div>
          <div className="meta">
            <span>Refreshed weekly</span>
            <a onClick={() => setPage('tracker')} style={{ cursor: 'pointer' }}>See the full tracker →</a>
          </div>
        </div>

        <div className="preorder-strip">
          {PREORDERS.map((p, i) => (
            <article key={i} className="preorder-card">
              <Placeholder label={`${p.class} pre-order`} detail={`render · ${p.mfr.split(' ')[0]}`} corner={`PRE-0${i + 1}`} />
              <div className="eyebrow">{p.class} · {p.mfr}</div>
              <h3>{p.title}</h3>
              <div className="progress">
                <div className="fill" style={{ width: `${((p.stage + 1) / 5) * 100}%` }} />
              </div>
              <div className="stages">
                {STAGE_LABELS.map((s, j) => (
                  <span key={s} className={p.stage >= j ? 'on' : ''}>{s}</span>
                ))}
              </div>
              <div className="row">
                <div>
                  <div className="eyebrow" style={{ marginBottom: 2 }}>Status</div>
                  <StatusBadge kind="pre" eta={`${p.eta} ${p.year}`} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="eyebrow" style={{ marginBottom: 2 }}>Indicative</div>
                  <strong className="tnum" style={{ fontSize: 16 }}>{p.price}</strong>
                </div>
              </div>
              <button className="btn ghost small" onClick={() => setPage('tracker')}>Reserve a slot</button>
              <div style={{ fontSize: 12, color: 'var(--steel)', marginTop: -4 }}>
                <span className="tnum">{p.units}</span> road numbers · A$50 deposit, refundable to release
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── In stock now ─── */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>In stock now</div>
            <h2>Ready to run, on the shelf.</h2>
          </div>
          <div className="meta">
            <a onClick={() => setPage('product-new')} style={{ cursor: 'pointer' }}>Browse all locomotives →</a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--gutter)' }}>
          {IN_STOCK.map((p, i) => (
            <article key={p.id} className="product-card" style={{ border: '1px solid var(--timetable-line)', background: 'var(--bone)', padding: 22 }}>
              <Placeholder label={`${p.class} · ${p.state}`} detail={p.liveries[0].livery} corner={`UM-${p.class.replace(/\D/g, '') || p.class}`} src={p.img} />
              <div className="eyebrow">{p.class} · {p.mfr}</div>
              <h4 className="title" style={{ fontSize: 22 }}>{p.title}</h4>
              <div className="meta">
                <StatusBadge kind="in" />
                <span className="price tnum" style={{ fontSize: 16 }}>A${p.dcPrice} – {p.soundPrice}</span>
              </div>
              <button className="btn small" onClick={() => setPage('product-new', { id: p.id })}>View</button>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Marketplace (demo) ─── */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Marketplace</div>
            <h2>Just listed by collectors.</h2>
          </div>
          <div className="meta">
            <span>32 new this week</span>
            <a style={{ cursor: 'pointer' }}>Browse all 184 listings →</a>
          </div>
        </div>

        <div className="marketplace-list">
          {MARKETPLACE_ITEMS.map((m, i) => (
            <div key={i} className="marketplace-row">
              <Placeholder label={m.class} detail={`#${m.road}`} className="thumb" corner="" />
              <div>
                <div className="eyebrow" style={{ marginBottom: 6 }}>{m.class} · #{m.road}</div>
                <h4 className="title">{m.title}</h4>
                <div className="sub">{m.mfr}</div>
              </div>
              <div className="col">
                <span className="k">Condition</span>
                <GradingBadge grade={m.grade} />
                <div style={{ color: 'var(--steel)', fontSize: 12, marginTop: 6 }}>{m.box}</div>
              </div>
              <div className="col">
                <span className="k">Scale</span>
                {m.scale}
              </div>
              <div className="col">
                <span className="k">Listed by</span>
                {m.seller}
              </div>
              <div className="col">
                <span className="k">Price</span>
                <span className="price tnum">{m.price}</span>
              </div>
              <button className="btn small" onClick={() => setPage('product-used', { id: m.road })}>View</button>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Editorial ─── */}
      <section className="section tight" style={{ padding: '80px 0 0' }}>
        <div className="editorial" style={{ maxWidth: 'var(--shell-max)', margin: '0 auto' }}>
          <Placeholder dark label="archival · b&w prototype" detail="NSWGR negative · licensed" corner="GUIDE 18 / 26" />
          <div className="copy">
            <div className="eyebrow on-dark">Prototype guide № 18</div>
            <h3 className="display-italic">
              Reading the 44: how to tell a MK2 from a MK3 at twenty paces.
            </h3>
            <p>
              Number boards, marker lights, handrail arrangement and roof detail —
              the small differences that mark out the earlier 44 Class road numbers from
              the later run. With detail crops, a comparison table, and what to look
              for when buying secondhand.
            </p>
            <div className="byline">
              <span className="avatar" />
              <span>Words by Hamish Tory · 12 min read · Updated May 2026</span>
            </div>
            <div style={{ marginTop: 28 }}>
              <button className="btn ghost-light small">Read the guide →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Class index ─── */}
      <section className="section">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Browse by class</div>
            <h2>Australian outline class index.</h2>
          </div>
          <div className="meta">
            <a style={{ cursor: 'pointer' }}>The full index →</a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--gutter)' }}>
          {CLASS_INDEX.map(c => (
            <a key={c.n} className="product-card" style={{ background: 'var(--bone)', padding: 20, border: '1px solid var(--timetable-line)', cursor: 'pointer' }}>
              <div className="tnum display" style={{ fontSize: 48, lineHeight: 0.9, marginTop: 4 }}>{c.n}</div>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 16, marginTop: 6 }}>{c.sub}</div>
                <div style={{ color: 'var(--steel)', fontSize: 12.5, fontFamily: 'var(--mono)', marginTop: 4 }}>
                  {c.count} run{c.count > 1 ? 's' : ''} · {c.liveries} liveries
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
