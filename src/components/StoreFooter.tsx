import Icon from './Icon'

const benefits = [
  { icon: 'truck', title: 'Free delivery', copy: 'On orders above ₹1,999' },
  { icon: 'shield', title: 'Genuine products', copy: '100% original and branded' },
  { icon: 'calendar', title: 'Easy service booking', copy: 'Choose your date and time' },
  { icon: 'headphones', title: 'Expert support', copy: 'Mon–Sat, 9 AM–8 PM' },
] as const

export default function StoreFooter() {
  return (
    <footer className="store-footer">
      {benefits.map(({ icon, title, copy }) => (
        <div key={title}>
          <Icon name={icon} />
          <span><strong>{title}</strong><small>{copy}</small></span>
        </div>
      ))}
    </footer>
  )
}
