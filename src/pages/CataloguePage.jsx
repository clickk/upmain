import React from 'react'
import { Placeholder, StatusBadge, GradingBadge } from '../components/Brand.jsx'
import { PRODUCTS, MARKETPLACE_ITEMS } from '../data/index.js'

const STAGE_LABELS = ['Announced', 'Confirmed', 'Factory sample', 'In production', 'Shipping', 'Arrived']

// Category metadata — title, eyebrow blurb, and a predicate over PRODUCTS.
const CATS = {
  all:             { title: 'All locomotives', blurb: 'Every Australian outline locomotive in the Up Main catalogue.', match: () => true },
  diesel:          { title: 'Diesel locomotives', blurb: 'Diesel-electric locomotives in HO, NSW through Victoria and South Australia.', match: p => /diesel/i.test(p.era) },
  steam:           { title: 'Steam locomotives', blurb: 'Steam prototypes in HO scale.', match: p => /steam/i.test(p.era) },
  electric:        { title: 'Electric locomotives', blurb: 'Electric locomotives in HO scale.', match: p => /^electric/i.test(p.era) },
  'rolling-stock': { title: 'Rolling stock', blurb: 'Wagons, hoppers, vans and passenger cars.', match: () => false },
  scenery:         { title: 'Scenery & track', blurb: 'Track, structures, scenery and detailing parts.', match: () => false },
}

const stockKind = (p) => {
  if (p.status === 'in-stock') return 'in'
  if (p.status === 'production') return 'pre'
  return 'pre'
}

function ProductGrid({ items, setPage }) {
  return (
    <div className="catalogue-grid">
      {items.map(p => (
        <article key={p.id} className="product-card catalogue-card" onClick={() => setPage('product-new', { id: p.id })} style={{ cursor: 'pointer' }}>
          <Placeholder label={`${p.class} · ${p.state}`} detail={p.liveries[0].livery} corner={`UM-${p.class.replace(/\D/g, '') || p.class}`} src={p.img} />
          <div className="eyebrow">{p.class} · {p.mfr}</div>
          <h4 className="title" style={{ fontSize: 20 }}>{p.title}</h4>
          <div className="sub" style={{ color: 'var(--steel)', fontSize: 12.5, fontFamily: 'var(--mono)' }}>
            {STAGE_LABELS[p.stage]} · {p.units} road number{p.units > 1 ? 's' : ''}
          </div>
          <div className="meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 'auto' }}>
            <StatusBadge kind={stockKind(p)} eta={p.status === 'in-stock' ? null : `${p.eta} ${p.year}`} />
            <span className="price tnum" style={{ fontSize: 16, fontWeight: 600 }}>A${p.dcPrice} – {p.soundPrice}</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function EmptyState({ title, message, cta, onCta }) {
  return (
    <div className="catalogue-empty">
      <div className="display" style={{ fontSize: 28, marginBottom: 10 }}>{title}</div>
      <p style={{ color: 'var(--steel)', maxWidth: '46ch', margin: '0 auto 22px', lineHeight: 1.55 }}>{message}</p>
      {cta && <button className="btn" onClick={onCta}>{cta}</button>}
    </div>
  )
}

export default function CataloguePage({ setPage, params = {} }) {
  const cat = params.cat || 'all'

  // ── Marketplace listing ──
  if (cat === 'marketplace') {
    return (
      <div className="tracker-shell">
        <div className="tracker-head" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
          <div>
            <div className="eyebrow">Marketplace</div>
            <h1 className="display">Second-hand, consigned and graded.</h1>
          </div>
          <p>Pre-owned Australian outline models, each inspected, bench-tested and graded by Up Main before listing. Funds held in trust until 14 days post-delivery.</p>
        </div>
        <div className="marketplace-list" style={{ marginTop: 8 }}>
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
      </div>
    )
  }

  // ── Guides / Estate intake info states ──
  if (cat === 'guides') {
    return (
      <div className="tracker-shell">
        <EmptyState
          title="Prototype guides"
          message="In-depth prototype and modelling guides are on the way — class histories, livery spotting and what to look for when buying. Check back soon."
          cta="Browse locomotives →"
          onCta={() => setPage('catalogue', { cat: 'all' })}
        />
      </div>
    )
  }
  if (cat === 'estate') {
    return (
      <div className="tracker-shell">
        <EmptyState
          title="Estate intake"
          message="Up Main buys and consigns single models and whole collections across Australia. Every model is inspected, photographed and graded in our Marrickville workshop. Get in touch to arrange an intake."
          cta="See the marketplace →"
          onCta={() => setPage('catalogue', { cat: 'marketplace' })}
        />
      </div>
    )
  }

  // ── Locomotive categories ──
  const meta = CATS[cat] || CATS.all
  const items = PRODUCTS.filter(meta.match)

  return (
    <div className="tracker-shell">
      <div className="tracker-head" style={{ gridTemplateColumns: '1.4fr 1fr' }}>
        <div>
          <div className="eyebrow">Shop</div>
          <h1 className="display">{meta.title}.</h1>
        </div>
        <p>{meta.blurb}</p>
      </div>

      {items.length > 0 ? (
        <div style={{ marginTop: 8 }}>
          <ProductGrid items={items} setPage={setPage} />
        </div>
      ) : (
        <EmptyState
          title={`No ${meta.title.toLowerCase()} listed yet`}
          message="We're adding to the catalogue all the time. In the meantime, browse our diesel locomotives — the heart of the Up Main range."
          cta="Browse diesel locomotives →"
          onCta={() => setPage('catalogue', { cat: 'diesel' })}
        />
      )}
    </div>
  )
}
