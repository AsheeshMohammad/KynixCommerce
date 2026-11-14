import { useState } from 'react'
import { categories, products, serviceOptions, shoppingCategories } from '../data/catalog'
import type { Page } from '../types'
import Icon from '../components/Icon'
import ProductCard from '../components/ProductCard'
import ProductIllustration from '../components/ProductIllustration'
import WaterPurifierIllustration from '../components/WaterPurifierIllustration'

type Props = {
  page: 'home' | 'shop'
  search: string
  cart: Record<number, number>
  favorites: number[]
  showFavorites: boolean
  onNavigate: (page: Page) => void
  onAddToCart: (id: number) => void
  onToggleFavorite: (id: number) => void
  onToggleFavorites: () => void
}

export default function StorePage({
  page,
  search,
  cart,
  favorites,
  showFavorites,
  onNavigate,
  onAddToCart,
  onToggleFavorite,
  onToggleFavorites,
}: Props) {
  const [category, setCategory] = useState('All products')
  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All products' || product.category === category
    const matchesSearch = `${product.name} ${product.category} ${product.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesFavorite = !showFavorites || favorites.includes(product.id)
    return matchesCategory && matchesSearch && matchesFavorite
  })

  return (
    <main className={`commerce-main ${page === 'home' ? 'home-main' : 'shop-main'}`}>
      {page === 'home' ? (
        <>
          <section className="store-hero">
            <div className="store-hero-copy">
              <span className="hero-pill"><Icon name="drop" /> Pure water. Healthy living.</span>
              <h1>Advanced Water Purifiers<br />for Your Home &amp; Office</h1>
              <p>RO | UV | UF | Alkaline | Mineral</p>
              <div className="hero-promises">
                <span><Icon name="drop" /><small>100%<br />purified water</small></span>
                <span><Icon name="shield" /><small>6–12 month<br />warranty</small></span>
                <span><Icon name="truck" /><small>Free<br />delivery</small></span>
                <span><Icon name="wrench" /><small>Installation<br />at your doorstep</small></span>
              </div>
              <button className="hero-shop-button" type="button" onClick={() => onNavigate('shop')}>
                Shop water purifiers <Icon name="arrow" />
              </button>
            </div>
            <div className="store-hero-art">
              <WaterPurifierIllustration />
              <span className="hero-art-label">AquaServe Pure+</span>
            </div>
            <div className="hero-dots"><i className="active" /><i /><i /></div>
          </section>

          <section className="book-service-promo">
            <div className="section-title-icon"><Icon name="calendar" /></div>
            <h2>Book a Service</h2>
            <p>Quick, reliable and professional service at your doorstep.</p>
            <div className="service-shortcuts">
              {serviceOptions.map((service) => (
                <button type="button" key={service.id} onClick={() => onNavigate('service')}>
                  <Icon name={service.icon} /><span>{service.name}</span>
                </button>
              ))}
            </div>
            <button type="button" className="service-promo-button" onClick={() => onNavigate('service')}>
              Book a service now <Icon name="arrow" />
            </button>
          </section>

          <div className="home-discovery-grid">
            <section className="category-area">
              <div className="store-section-heading">
                <h2>Shop by category</h2>
                <button type="button" onClick={() => onNavigate('shop')}>
                  View all categories <Icon name="arrow" />
                </button>
              </div>
              <div className="category-grid" aria-label="Shop by category">
                {categories.map(({ name, icon }) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() => {
                      if (name === 'Service Booking') {
                        onNavigate('service')
                      } else {
                        setCategory(name)
                        onNavigate('shop')
                      }
                    }}
                  >
                    <Icon name={icon} /><strong>{name}</strong>
                  </button>
                ))}
              </div>
            </section>
            <section className="deal-banner">
              <div>
                <span>LIMITED TIME OFFER</span>
                <strong>Up to 40% OFF</strong>
                <small>on select water purifiers</small>
                <button type="button" onClick={() => onNavigate('shop')}>Shop now <Icon name="arrow" /></button>
              </div>
              <ProductIllustration color="sky" />
            </section>
          </div>

          <div className="store-section-heading products-heading">
            <h2>Best selling water purifiers</h2>
            <button type="button" onClick={() => onNavigate('shop')}>
              View all products <Icon name="arrow" />
            </button>
          </div>
        </>
      ) : (
        <>
          <section className="shop-heading">
            <div>
              <p className="commerce-eyebrow">AQUASERVE STORE</p>
              <h1>{showFavorites ? 'Your wishlist' : 'Shop water purifiers & more'}</h1>
              <p>Genuine products, great prices, and trusted AquaServe support.</p>
            </div>
            <button className="filter-button" type="button" onClick={onToggleFavorites}>
              <Icon name={showFavorites ? 'heart' : 'filter'} />
              {showFavorites ? 'Show all products' : 'Wishlist'}
            </button>
          </section>
          <div className="category-filters" aria-label="Filter products by category">
            {shoppingCategories.map((item) => (
              <button
                className={category === item ? 'active' : ''}
                key={item}
                type="button"
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </>
      )}

      {filteredProducts.length > 0 ? (
        <section className={`product-grid ${page === 'home' ? 'featured-products' : ''}`} aria-label="Products">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] ?? 0}
              favorite={favorites.includes(product.id)}
              onAdd={() => onAddToCart(product.id)}
              onFavorite={() => onToggleFavorite(product.id)}
            />
          ))}
        </section>
      ) : (
        <div className="empty-products">
          <Icon name={showFavorites ? 'heart' : 'search'} />
          <h2>{showFavorites ? 'Your wishlist is empty' : 'No products found'}</h2>
          <p>{showFavorites ? 'Save a product with the heart icon and it will appear here.' : 'Try a different search or product category.'}</p>
          {showFavorites && <button type="button" onClick={onToggleFavorites}>Browse all products</button>}
        </div>
      )}
    </main>
  )
}
