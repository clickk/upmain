import React from 'react'

// ─── URL ↔ app-state mapping ─────────────────────────────────────────────────
// Real, shareable URLs backed by the History API. Cloudflare serves index.html
// for unknown paths (wrangler.jsonc not_found_handling: single-page-application),
// so deep links and refreshes resolve correctly.

export function pathToState(path) {
  const clean = (path || '/').replace(/\/+$/, '') || '/'
  const seg = clean.split('/').filter(Boolean)
  if (clean === '/') return { page: 'home', params: {} }
  switch (seg[0]) {
    case 'shop':          return { page: 'catalogue', params: { cat: seg[1] || 'all' } }
    case 'marketplace':   return { page: 'catalogue', params: { cat: 'marketplace' } }
    case 'guides':        return { page: 'catalogue', params: { cat: 'guides' } }
    case 'estate-intake': return { page: 'catalogue', params: { cat: 'estate' } }
    case 'pre-orders':    return { page: 'tracker', params: {} }
    case 'locomotive':    return { page: 'product-new', params: { id: seg[1] } }
    case 'secondhand':    return { page: 'product-used', params: { id: seg[1] } }
    default:              return { page: 'home', params: {} }
  }
}

export function stateToPath(page, params = {}) {
  switch (page) {
    case 'home':         return '/'
    case 'tracker':      return '/pre-orders'
    case 'product-new':  return `/locomotive/${params.id || '421-class'}`
    case 'product-used': return `/secondhand/${params.id || '3813'}`
    case 'catalogue': {
      const c = params.cat || 'all'
      if (c === 'marketplace') return '/marketplace'
      if (c === 'guides') return '/guides'
      if (c === 'estate') return '/estate-intake'
      if (c === 'all') return '/shop'
      return `/shop/${c}`
    }
    default: return '/'
  }
}

export function useRouter() {
  const [path, setPath] = React.useState(() => window.location.pathname)
  React.useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const navigate = React.useCallback((to) => {
    if (to !== window.location.pathname) window.history.pushState({}, '', to)
    setPath(to)
  }, [])
  return [path, navigate]
}
