import React from 'react'
import { Header, Footer } from './components/Brand.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductNew from './pages/ProductNew.jsx'
import ProductUsed from './pages/ProductUsed.jsx'
import TrackerPage from './pages/TrackerPage.jsx'
import CataloguePage from './pages/CataloguePage.jsx'
import { useRouter, pathToState, stateToPath } from './router.js'

export default function App() {
  const [path, navigate] = useRouter()
  const { page, params } = pathToState(path)

  // setPage(page) or setPage(page, params) — translated to a real URL
  const setPage = React.useCallback(
    (p, pr = {}) => navigate(stateToPath(p, pr)),
    [navigate]
  )

  // Scroll to top on navigation
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [path])

  return (
    <div className="app-shell">
      <Header page={page} params={params} setPage={setPage} />

      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'catalogue' && <CataloguePage setPage={setPage} params={params} />}
      {page === 'product-new' && <ProductNew setPage={setPage} params={params} />}
      {page === 'product-used' && <ProductUsed setPage={setPage} params={params} />}
      {page === 'tracker' && <TrackerPage setPage={setPage} />}

      <Footer />
    </div>
  )
}
