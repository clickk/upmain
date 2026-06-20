import React from 'react'
import { Header, Footer } from './components/Brand.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductNew from './pages/ProductNew.jsx'
import ProductUsed from './pages/ProductUsed.jsx'
import TrackerPage from './pages/TrackerPage.jsx'

export default function App() {
  const [page, setPage] = React.useState('home')

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  return (
    <div className="app-shell">
      <Header page={page} setPage={setPage} />

      {page === 'home' && <HomePage setPage={setPage} />}
      {page === 'product-new' && <ProductNew setPage={setPage} />}
      {page === 'product-used' && <ProductUsed setPage={setPage} />}
      {page === 'tracker' && <TrackerPage setPage={setPage} />}

      <Footer />
    </div>
  )
}
