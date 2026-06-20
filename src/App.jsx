import React from 'react'
import { Header, Footer } from './components/Brand.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductNew from './pages/ProductNew.jsx'
import ProductUsed from './pages/ProductUsed.jsx'
import TrackerPage from './pages/TrackerPage.jsx'
import CataloguePage from './pages/CataloguePage.jsx'

export default function App() {
  const [page, setPageState] = React.useState('home')
  const [params, setParams] = React.useState({})

  // setPage(page) or setPage(page, params) — params carry e.g. catalogue category
  const setPage = React.useCallback((p, pr = {}) => {
    setParams(pr)
    setPageState(p)
  }, [])

  // Scroll to top on navigation
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page, params])

  return (
    <div className="app-shell">
      <Header page={page} params={params} setPage={setPage} />

      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'catalogue' && <CataloguePage setPage={setPage} params={params} />}
      {page === 'product-new' && <ProductNew setPage={setPage} />}
      {page === 'product-used' && <ProductUsed setPage={setPage} />}
      {page === 'tracker' && <TrackerPage setPage={setPage} />}

      <Footer />
    </div>
  )
}
