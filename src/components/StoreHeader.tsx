import type { Page } from '../types'
import Icon from './Icon'

type Props = {
  page: Page
  userName: string
  cartCount: number
  search: string
  onSearch: (value: string) => void
  onNavigate: (page: Page) => void
  onWishlist: () => void
}

export default function StoreHeader({
  page,
  userName,
  cartCount,
  search,
  onSearch,
  onNavigate,
  onWishlist,
}: Props) {
  return (
    <>
      <div className="store-topline">
        <span><Icon name="location" /> Hyderabad <Icon name="chevron" /></span>
        <span><Icon name="truck" /> Free delivery on orders above ₹1,999</span>
        <span><Icon name="shield" /> 1 year warranty</span>
        <span><Icon name="headphones" /> Support: +91 98765 43210</span>
      </div>
      <header className="store-header">
        <button className="store-brand" type="button" onClick={() => onNavigate('home')} aria-label="AquaServe home">
          <span className="store-brand-icon"><Icon name="drop" /></span>
          <span><strong>AquaServe</strong><small>Water Purifiers &amp; Services</small></span>
        </button>
        <label className="store-search">
          <span className="visually-hidden">Search products</span>
          <input
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Search water purifiers, filters, services..."
          />
          <Icon name="search" />
        </label>
        <div className="store-actions">
          <button type="button" onClick={onWishlist}><Icon name="heart" /><span>Wishlist</span></button>
          <button type="button" onClick={() => onNavigate('cart')} className="store-cart">
            <Icon name="cart" /><span>Cart</span><b>{cartCount}</b>
          </button>
          <span className="store-greeting"><Icon name="user" /> Hi, {userName.split(' ')[0]} <Icon name="chevron" /></span>
        </div>
      </header>
      <nav className="store-nav" aria-label="Store navigation">
        <button type="button" className="category-menu" onClick={() => onNavigate('shop')}><Icon name="menu" /> All Categories <Icon name="chevron" /></button>
        <button type="button" className={page === 'shop' ? 'selected' : ''} onClick={() => onNavigate('shop')}>Water Purifiers</button>
        <button type="button" onClick={() => onNavigate('shop')}>Filters &amp; Cartridges</button>
        <button type="button" onClick={() => onNavigate('shop')}>Spares &amp; Accessories</button>
        <button type="button" className={page === 'service' ? 'selected' : ''} onClick={() => onNavigate('service')}>Service Booking <Icon name="chevron" /></button>
        <button type="button" onClick={() => onNavigate('service')}>AMC Plans</button>
        <button type="button" onClick={() => onNavigate('shop')}>Offers <span className="hot-label">Hot</span></button>
      </nav>
    </>
  )
}
