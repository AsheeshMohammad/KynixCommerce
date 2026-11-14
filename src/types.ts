export type IconName =
  | 'arrow'
  | 'badge'
  | 'calendar'
  | 'cart'
  | 'check'
  | 'chevron'
  | 'clock'
  | 'drop'
  | 'eye'
  | 'filter'
  | 'headphones'
  | 'heart'
  | 'lock'
  | 'location'
  | 'mail'
  | 'menu'
  | 'minus'
  | 'plus'
  | 'rupee'
  | 'search'
  | 'shield'
  | 'star'
  | 'truck'
  | 'user'
  | 'wrench'

export type Page = 'login' | 'home' | 'shop' | 'service' | 'cart' | 'confirmation'

export type Product = {
  id: number
  name: string
  category: string
  description: string
  price: number
  oldPrice: number
  rating: string
  reviews: string
  badge?: string
  color: string
}

export type ServiceOption = {
  id: string
  name: string
  subtitle: string
  price: number
  priceLabel: string
  icon: IconName
}

export type Booking = {
  service: string
  date: string
  time: string
  customer: string
}
