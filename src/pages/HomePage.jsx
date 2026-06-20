import React from 'react'
import { Placeholder, StatusBadge, GradingBadge } from '../components/Brand.jsx'
import { MARKETPLACE_ITEMS, CLASS_INDEX } from '../data/index.js'

const PREORDER_CARDS = [
  {
    class: '421 / 422 class',
    title: 'Auscision 422 class in Reverse Indian Red',
    mfr: 'Auscision Models · HO',
    stage: 'Factory sample', stageIdx: 2,
    price: 'A$589 – 639', eta: 'Q3 2026',
    taken: 78, cap: 120,
  },
  {
    class: '81 class',
    title: 'SDS 81 class candy livery, original Brunswick roof',
    mfr: 'SDS Models · HO',
    stage: 'In production', stageIdx: 3,
    price: 'A$525', eta: 'August 2026',
    taken: 142, cap: 200,
  },
  {
    class: '86 class',
    title: 'Casula 86 class, Indian Red with grey roof',
    mfr: 'Casula Hobbies · HO',
    stage: 'Confirmed', stageIdx: 1,
    price: 'A$695', eta: 'Q1 2027',
    taken: 31, cap: 150,
  },
]

export default function HomePage({ setPage }) {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="copy">
          <div className="eyebrow">This week's release · No. 142</div>
          <h1 className="display">
            Eureka 38 class<br />
            <em>streamliner</em>, 3801<br />
            in original green.
          </h1>
          <p>
            A factory-correct 1943 build of New South Wales' most photographed locomotive,
            in Caledonian Green with red-and-yellow lining. Sound-fitted with the
            revised ESU LokSound 5 file recorded off 3801 herself on the Picton bank.
          </p>
          <div className="row">
            <button className="btn primary">Reserve · A$1,395</button>
            <button className="btn ghost">Read prototype notes</button>
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
              <span className="k">Edition</span>
              <span className="v tnum display">340</span>
            </div>
          </div>
        </div>
        <div className="visual">
          <Placeholder label="3801 three-quarter hero" detail="studio · bone bg · scale rule" corner="UM-142 / 01" scaleRule />
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
            <span>Refreshed Tuesday, 12 May</span>
            <a onClick={() => setPage('tracker')} style={{ cursor: 'pointer' }}>See the full tracker →</a>
          </div>
        </div>

        <div className="preorder-strip">
          {PREORDER_CARDS.map((p, i) => (
            <article key={i} className="preorder-card">
              <Placeholder label={`${p.class} pre-order`} detail={`render · ${p.mfr.split(' · ')[0]}`} corner={`PRE-0${i + 1}`} />
              <div className="eyebrow">{p.class} · {p.mfr}</div>
              <h3>{p.title}</h3>
              <div className="progress">
                <div className="fill" style={{ width: `${(p.taken / p.cap) * 100}%` }} />
              </div>
              <div className="stages">
                {['Announced', 'Confirmed', 'Sample', 'Production', 'Shipping'].map((s, j) => (
                  <span key={s} className={p.stageIdx >= j ? 'on' : ''}>{s}</span>
                ))}
              </div>
              <div className="row">
                <div>
                  <div className="eyebrow" style={{ marginBottom: 2 }}>Status</div>
                  <StatusBadge kind="pre" eta={p.eta} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="eyebrow" style={{ marginBottom: 2 }}>Indicative</div>
                  <strong className="tnum" style={{ fontSize: 16 }}>{p.price}</strong>
                </div>
              </div>
              <button className="btn ghost small">Reserve a slot</button>
              <div style={{ fontSize: 12, color: 'var(--steel)', marginTop: -4 }}>
                <span className="tnum">{p.taken}</span> of <span className="tnum">{p.cap}</span> reserved · A$50 deposit, refundable to release
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Marketplace ─── */}
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
              <button className="btn small" onClick={() => setPage('product-used')}>View</button>
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
              Reading the 422: how to tell a Phase I from a Phase II at twenty paces.
            </h3>
            <p>
              Sandbox positioning, exhaust stack, dynamic brake bulge, fan grille spacing —
              the small details that mark out the four pre-production 422 class units from
              the production run. With detail crops, a comparison table, and what to look
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
            <h2>NSWGR class index.</h2>
          </div>
          <div className="meta">
            <a style={{ cursor: 'pointer' }}>The full index, 38 → 86 →</a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--gutter)' }}>
          {CLASS_INDEX.map(c => (
            <a key={c.n} className="product-card" style={{ background: 'var(--bone)', padding: 20, border: '1px solid var(--timetable-line)', cursor: 'pointer' }}>
              <div className="tnum display" style={{ fontSize: 56, lineHeight: 0.9, marginTop: 4 }}>{c.n}</div>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 16, marginTop: 6 }}>{c.sub}</div>
                <div style={{ color: 'var(--steel)', fontSize: 12.5, fontFamily: 'var(--mono)', marginTop: 4 }}>
                  {c.era} · {c.count} liveries
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
