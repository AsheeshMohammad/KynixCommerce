import type { IconName, Product, ServiceOption } from '../types'

export const products: Product[] = [
  {
    id: 1,
    name: 'AquaPure RO+UV+UF Water Purifier',
    category: 'RO Purifiers',
    description: '10 L · 7-stage purification',
    price: 13499,
    oldPrice: 16999,
    rating: '4.8',
    reviews: '2,348',
    badge: 'Bestseller',
    color: 'midnight',
  },
  {
    id: 2,
    name: 'PureLife RO+UF Water Purifier',
    category: 'UV Purifiers',
    description: '8 L · copper enriched',
    price: 9999,
    oldPrice: 12999,
    rating: '4.6',
    reviews: '1,126',
    color: 'pearl',
  },
  {
    id: 3,
    name: 'HydroFresh Alkaline RO Purifier',
    category: 'Alkaline Purifiers',
    description: '10 L · mineral balance',
    price: 15999,
    oldPrice: 19999,
    rating: '4.7',
    reviews: '4,032',
    color: 'slate',
  },
  {
    id: 4,
    name: 'AquaSense UV+UF Water Purifier',
    category: 'UV Purifiers',
    description: '7 L · smart indicators',
    price: 7499,
    oldPrice: 9499,
    rating: '4.5',
    reviews: '982',
    color: 'sky',
  },
  {
    id: 5,
    name: 'PureFlow RO+UV Water Purifier',
    category: 'RO Purifiers',
    description: '12 L · family capacity',
    price: 17999,
    oldPrice: 22999,
    rating: '4.8',
    reviews: '1,764',
    color: 'graphite',
  },
  {
    id: 6,
    name: 'RO+UV Annual Filter Kit',
    category: 'Filters & Cartridges',
    description: 'Genuine 4-stage filter set',
    price: 2499,
    oldPrice: 3199,
    rating: '4.6',
    reviews: '756',
    color: 'filters',
  },
  {
    id: 7,
    name: 'AquaServe Smart Booster Pump',
    category: 'Spares & Accessories',
    description: 'Quiet, energy-efficient purifier pump',
    price: 1899,
    oldPrice: 2499,
    rating: '4.4',
    reviews: '328',
    color: 'pearl',
  },
]

export const categories: { name: string; icon: IconName }[] = [
  { name: 'RO Purifiers', icon: 'drop' },
  { name: 'UV Purifiers', icon: 'shield' },
  { name: 'Alkaline Purifiers', icon: 'badge' },
  { name: 'Filters & Cartridges', icon: 'filter' },
  { name: 'Spares & Accessories', icon: 'wrench' },
  { name: 'Service Booking', icon: 'calendar' },
]

export const shoppingCategories = [
  'All products',
  ...categories.slice(0, 5).map(({ name }) => name),
]

export const serviceOptions: ServiceOption[] = [
  {
    id: 'installation',
    name: 'Installation',
    subtitle: 'New purifier setup & demonstration',
    price: 499,
    priceLabel: '₹499',
    icon: 'wrench',
  },
  {
    id: 'repair',
    name: 'Repair Service',
    subtitle: 'Diagnosis & repair with genuine parts',
    price: 299,
    priceLabel: 'From ₹299',
    icon: 'filter',
  },
  {
    id: 'filter',
    name: 'Filter Replacement',
    subtitle: 'RO / UV / UF / Carbon filter change',
    price: 699,
    priceLabel: 'From ₹699',
    icon: 'drop',
  },
  {
    id: 'amc',
    name: 'AMC Plan',
    subtitle: 'Annual maintenance contract',
    price: 1999,
    priceLabel: 'From ₹1,999 / year',
    icon: 'shield',
  },
]

export const serviceHighlights = [
  { icon: 'cart', title: 'Shop online', copy: 'Purifiers, filters & accessories' },
  { icon: 'calendar', title: 'Book a service', copy: 'Installation, repair & filter replacement' },
  { icon: 'shield', title: 'AMC plans', copy: 'Hassle-free annual maintenance' },
  { icon: 'truck', title: 'Quick & reliable', copy: 'Trusted experts at your doorstep' },
] as const
