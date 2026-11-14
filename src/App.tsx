import { useState } from 'react'
import './App.css'
import './Commerce.css'
import StoreFooter from './components/StoreFooter'
import StoreHeader from './components/StoreHeader'
import Icon from './components/Icon'
import BookingConfirmationPage from './pages/BookingConfirmationPage'
import BookingPage from './pages/BookingPage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import StorePage from './pages/StorePage'
import type { Booking, Page } from './types'

export default function App() {
  const [page, setPage] = useState<Page>('login')
  const [userName, setUserName] = useState('AquaServe customer')
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState<Record<number, number>>({})
  const [favorites, setFavorites] = useState<number[]>([])
  const [showFavorites, setShowFavorites] = useState(false)
  const [booking, setBooking] = useState<Booking | null>(null)
  const [notice, setNotice] = useState('')
  const cartCount = Object.values(cart).reduce((total, quantity) => total + quantity, 0)

  function navigate(nextPage: Page) {
    setPage(nextPage)
    if (nextPage === 'home') setShowFavorites(false)
    setNotice('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function addToCart(id: number) {
    setCart((current) => ({ ...current, [id]: (current[id] ?? 0) + 1 }))
    setNotice('Added to your cart.')
    window.setTimeout(() => setNotice(''), 2200)
  }

  function changeQuantity(id: number, change: number) {
    setCart((current) => {
      const quantity = (current[id] ?? 0) + change
      if (quantity <= 0) {
        const next = { ...current }
        delete next[id]
        return next
      }
      return { ...current, [id]: quantity }
    })
  }

  function toggleFavorite(id: number) {
    setFavorites((current) => current.includes(id)
      ? current.filter((productId) => productId !== id)
      : [...current, id])
  }

  function completeBooking(nextBooking: Booking) {
    setBooking(nextBooking)
    navigate('confirmation')
  }

  function renderStorePage(storePage: 'home' | 'shop') {
    return (
      <StorePage
        page={storePage}
        search={search}
        cart={cart}
        favorites={favorites}
        showFavorites={showFavorites}
        onNavigate={navigate}
        onAddToCart={addToCart}
        onToggleFavorite={toggleFavorite}
        onToggleFavorites={() => setShowFavorites((current) => !current)}
      />
    )
  }

  function renderPage() {
    switch (page) {
      case 'home':
      case 'shop':
        return renderStorePage(page)
      case 'service':
        return <BookingPage onComplete={completeBooking} />
      case 'cart':
        return <CartPage cart={cart} onChangeQuantity={changeQuantity} onNavigate={navigate} />
      case 'confirmation':
        return booking
          ? <BookingConfirmationPage booking={booking} onNavigate={navigate} />
          : renderStorePage('home')
      case 'login':
        return null
    }
  }

  if (page === 'login') {
    return (
      <LoginPage
        onLogin={(name) => {
          setUserName(name)
          navigate('home')
        }}
      />
    )
  }

  return (
    <div className="store-app">
      <StoreHeader
        page={page}
        userName={userName}
        cartCount={cartCount}
        search={search}
        onSearch={setSearch}
        onNavigate={navigate}
        onWishlist={() => {
          setShowFavorites(true)
          navigate('shop')
        }}
      />
      {renderPage()}
      {notice && <div className="store-toast" role="status"><Icon name="check" /> {notice}</div>}
      <StoreFooter />
    </div>
  )
}
