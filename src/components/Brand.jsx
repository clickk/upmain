import React from 'react'
import SearchOverlay from './Search.jsx'

export const Wordmark = ({ size = 26 }) => (
  <span className="wordmark" style={{ fontSize: size }}>
    Up <span className="ital">Main</span>
  </span>
)

export const UMMono = ({ large = false }) => (
  <span className={`um-mono ${large ? 'lg' : ''}`}>UM</span>
)

export const Lockup = ({ large = false, onClick }) => (
  <a className="lockup" aria-label="Up Main home" onClick={onClick} style={{ cursor: 'pointer' }}>
    <UMMono large={large} />
    <Wordmark size={large ? 38 : 26} />
  </a>
)

// ─── Status / grade badges ────────────────────────────────────────────────────

export const StatusBadge = ({ kind, label, eta }) => {
  const map = {
    'in':     { cls: 'stock-in',     text: 'In Stock' },
    'low':    { cls: 'stock-low',    text: 'Low Stock' },
    'pre':    { cls: 'stock-pre',    text: 'Pre-order' },
    'out':    { cls: 'stock-out',    text: 'Sold Out' },
    'notify': { cls: 'stock-notify', text: 'Notify Me' },
  }
  const m = map[kind]
  return (
    <span className={`badge ${m.cls}`}>
      <span className="dot" />
      {label || m.text}
      {eta ? <span style={{ opacity: 0.7, fontWeight: 500 }}>· {eta}</span> : null}
    </span>
  )
}

export const GradingBadge = ({ grade }) => {
  const map = {
    'Mint':      { cls: 'mint',    n: 4 },
    'Near Mint': { cls: 'nm',      n: 3 },
    'Used':      { cls: 'used',    n: 2 },
    'Project':   { cls: 'project', n: 1 },
  }
  const m = map[grade]
  return (
    <span className={`grade ${m.cls}`} title={`Grade: ${grade}`}>
      <span className="pip">
        {[0, 1, 2, 3].map(i => <i key={i} className={i < m.n ? 'on' : ''} />)}
      </span>
      {grade}
    </span>
  )
}

// ─── Striped placeholder ──────────────────────────────────────────────────────

export const Placeholder = ({
  label = 'product shot',
  detail = 'studio · smokebox bg',
  dark = false,
  scaleRule = false,
  corner,
  src,
  style,
  className = '',
}) => {
  if (src) {
    return (
      <div className={`ph has-img ${className}`} style={style}>
        {corner ? <div className="corner">{corner}</div> : null}
        <img src={src} alt={label} loading="lazy" />
      </div>
    )
  }
  return (
  <div className={`ph ${dark ? 'dark' : ''} ${className}`} style={style}>
    {corner ? <div className="corner">{corner}</div> : null}
    {scaleRule ? (
      <div className="scale-rule">
        <div className="ticks" style={{ height: 18 }}>
          <i style={{ height: 18 }} />
          <i style={{ height: 10 }} />
          <i style={{ height: 14 }} />
          <i style={{ height: 10 }} />
          <i style={{ height: 18 }} />
        </div>
        <span>HO · 1:87</span>
      </div>
    ) : null}
    <div className="label">
      <span>{label}</span>
      <span style={{ opacity: 0.6 }}>{detail}</span>
    </div>
  </div>
  )
}

// ─── Header / nav ─────────────────────────────────────────────────────────────

const UtilityBar = () => (
  <div className="utility-bar">
    <div className="inner">
      <span>Free Australia-wide shipping on orders over A$250</span>
      <div className="right">
        <a>Track an order</a>
        <a>Estate intake</a>
        <a>Sign in</a>
      </div>
    </div>
  </div>
)

export const Header = ({ page, params = {}, setPage }) => {
  const [searchOpen, setSearchOpen] = React.useState(false)

  // active helper — a catalogue category link is active when page+cat match
  const isCat = (cat) => page === 'catalogue' && (params.cat || 'all') === cat

  // ⌘K / Ctrl+K global shortcut
  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <UtilityBar />
      <div className="header">
        <div className="inner">
          <Lockup onClick={() => setPage('home')} />
          <div className="search" onClick={() => setSearchOpen(true)} style={{ cursor: 'text' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" style={{ color: 'var(--steel)', flexShrink: 0 }}>
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
            <span style={{ flex: 1, color: 'var(--steel-soft)', fontSize: 14, userSelect: 'none' }}>
              Search by class, road number, manufacturer…
            </span>
            <span className="kbd">⌘K</span>
          </div>
          <div className="header-actions">
            <a>Account</a>
            <span className="pill">
              Cart <span className="count tnum">2</span>
            </span>
          </div>
        </div>
      </div>
      <nav className="primary-nav">
        <div className="inner">
          <a className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Home</a>
          <a className={isCat('steam') ? 'active' : ''} onClick={() => setPage('catalogue', { cat: 'steam' })} style={{ cursor: 'pointer' }}>Steam</a>
          <a className={isCat('diesel') ? 'active' : ''} onClick={() => setPage('catalogue', { cat: 'diesel' })} style={{ cursor: 'pointer' }}>Diesel</a>
          <a className={isCat('electric') ? 'active' : ''} onClick={() => setPage('catalogue', { cat: 'electric' })} style={{ cursor: 'pointer' }}>Electric</a>
          <a className={isCat('rolling-stock') ? 'active' : ''} onClick={() => setPage('catalogue', { cat: 'rolling-stock' })} style={{ cursor: 'pointer' }}>Rolling Stock</a>
          <a className={isCat('scenery') ? 'active' : ''} onClick={() => setPage('catalogue', { cat: 'scenery' })} style={{ cursor: 'pointer' }}>Scenery &amp; Track</a>
          <a className={page === 'tracker' ? 'active' : ''} onClick={() => setPage('tracker')} style={{ cursor: 'pointer' }}>
            Pre-orders <span className="new-dot" />
          </a>
          <a className={isCat('marketplace') ? 'active' : ''} onClick={() => setPage('catalogue', { cat: 'marketplace' })} style={{ cursor: 'pointer' }}>Marketplace</a>
          <a className={isCat('guides') ? 'active' : ''} onClick={() => setPage('catalogue', { cat: 'guides' })} style={{ cursor: 'pointer' }}>Guides</a>
          <a className={isCat('estate') ? 'active' : ''} onClick={() => setPage('catalogue', { cat: 'estate' })} style={{ marginLeft: 'auto', color: 'var(--steel)', cursor: 'pointer' }}>Estate Intake</a>
        </div>
      </nav>

      {searchOpen && (
        <SearchOverlay
          onNavigate={(p) => setPage(p)}
          onClose={() => setSearchOpen(false)}
        />
      )}
    </>
  )
}

export const Footer = () => (
  <footer className="footer">
    <div className="inner">
      <div className="top">
        <div className="col">
          <div style={{ marginBottom: 18 }}>
            <Lockup />
          </div>
          <p style={{ maxWidth: '32ch', color: 'rgba(241,233,216,0.7)', fontSize: 13.5, lineHeight: 1.55, margin: 0 }}>
            The mainline for Australian outline. NSW-led specialist for prototype model railways, in HO and N. Operating from Sydney since 2026.
          </p>
        </div>
        <div className="col">
          <h5>Shop</h5>
          <a>Steam locomotives</a>
          <a>Diesel locomotives</a>
          <a>Electric locomotives</a>
          <a>Rolling stock</a>
          <a>Scenery &amp; track</a>
          <a>DCC &amp; decoders</a>
        </div>
        <div className="col">
          <h5>Specialist</h5>
          <a>Pre-order tracker</a>
          <a>Marketplace</a>
          <a>Consignment</a>
          <a>Estate intake</a>
          <a>Prototype guides</a>
          <a>NSWGR class index</a>
        </div>
        <div className="col">
          <h5>Help</h5>
          <a>Shipping &amp; returns</a>
          <a>Grading standards</a>
          <a>Pre-order policy</a>
          <a>Sound demos</a>
          <a>Contact</a>
        </div>
        <div className="col">
          <h5>Workshop</h5>
          <p style={{ color: 'rgba(241,233,216,0.7)', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 12px' }}>
            By appointment, Marrickville NSW.<br />Tuesday – Saturday.
          </p>
          <a>Book a visit →</a>
        </div>
      </div>
      <div className="bottom">
        <span>© 2026 Up Main Pty Ltd · ABN 00 000 000 000</span>
        <span>The mainline for Australian outline.</span>
      </div>
    </div>
  </footer>
)
