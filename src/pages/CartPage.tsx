import { useState } from 'react'
import { products } from '../data/catalog'
import type { Page } from '../types'
import { formatPrice } from '../utils/commerce'
import Icon from '../components/Icon'
import ProductIllustration from '../components/ProductIllustration'

type Props = {
  cart: Record<number, number>
  onChangeQuantity: (id: number, change: number) => void
  onNavigate: (page: Page) => void
}

export default function CartPage({ cart, onChangeQuantity, onNavigate }: Props) {
  const [checkoutMessage, setCheckoutMessage] = useState('')
  const cartProducts = products.filter(({ id }) => (cart[id] ?? 0) > 0)
  const subtotal = cartProducts.reduce(
    (total, product) => total + product.price * (cart[product.id] ?? 0),
    0,
  )

  return (
    <main className="commerce-main cart-page">
      <div className="shop-heading">
        <div>
          <p className="commerce-eyebrow">YOUR AQUASERVE CART</p>
          <h1>Shopping cart</h1>
          <p>Review your items before checkout.</p>
        </div>
        <button className="filter-button" type="button" onClick={() => onNavigate('shop')}>
          <Icon name="arrow" /> Continue shopping
        </button>
      </div>
      {cartProducts.length === 0 ? (
        <div className="empty-products">
          <Icon name="cart" />
          <h2>Your cart is empty</h2>
          <p>Find a purifier or replacement filter for your home.</p>
          <button type="button" onClick={() => onNavigate('shop')}>Explore the store</button>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {cartProducts.map((product) => (
              <article className="cart-item" key={product.id}>
                <ProductIllustration color={product.color} />
                <div className="cart-item-info">
                  <small>{product.category}</small>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
                <div className="quantity-control">
                  <button
                    type="button"
                    aria-label={`Decrease ${product.name} quantity`}
                    onClick={() => onChangeQuantity(product.id, -1)}
                  >
                    <Icon name="minus" />
                  </button>
                  <span>{cart[product.id]}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${product.name} quantity`}
                    onClick={() => onChangeQuantity(product.id, 1)}
                  >
                    <Icon name="plus" />
                  </button>
                </div>
                <strong>{formatPrice(product.price * cart[product.id])}</strong>
              </article>
            ))}
          </section>
          <aside className="cart-summary">
            <h2>Order summary</h2>
            <p><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></p>
            <p><span>Delivery</span><strong>{subtotal >= 1999 ? 'Free' : 'Calculated at checkout'}</strong></p>
            <p className="cart-total"><span>Total</span><strong>{formatPrice(subtotal)}</strong></p>
            <button
              type="button"
              onClick={() => setCheckoutMessage('Checkout is a demo. Payment processing is not connected yet.')}
            >
              Proceed to checkout
            </button>
            <small>Secure checkout · Genuine AquaServe products</small>
            <p className="checkout-message" aria-live="polite">{checkoutMessage}</p>
          </aside>
        </div>
      )}
    </main>
  )
}
