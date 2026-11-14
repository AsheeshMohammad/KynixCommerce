import type { Product } from '../types'
import { formatPrice } from '../utils/commerce'
import Icon from './Icon'
import ProductIllustration from './ProductIllustration'

type Props = {
  product: Product
  quantity: number
  favorite: boolean
  onAdd: () => void
  onFavorite: () => void
}

export default function ProductCard({
  product,
  quantity,
  favorite,
  onAdd,
  onFavorite,
}: Props) {
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)

  return (
    <article className="product-card">
      <div className="product-card-art">
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          className={`favorite-product ${favorite ? 'is-favorite' : ''}`}
          type="button"
          aria-label={favorite ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          onClick={onFavorite}
        >
          <Icon name="heart" />
        </button>
        <ProductIllustration color={product.color} />
      </div>
      <div className="product-card-info">
        <small className="product-category">{product.category}</small>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-rating"><Icon name="star" /><strong>{product.rating}</strong><span>({product.reviews})</span></div>
        <div className="product-prices">
          <strong>{formatPrice(product.price)}</strong>
          <del>{formatPrice(product.oldPrice)}</del>
          <span>{discount}% OFF</span>
        </div>
        <button className="add-cart-button" type="button" onClick={onAdd}>
          <Icon name={quantity > 0 ? 'check' : 'cart'} />
          {quantity > 0 ? `Added · ${quantity} in cart` : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}
