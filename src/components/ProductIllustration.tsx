export default function ProductIllustration({ color }: { color: string }) {
  return (
    <div className={`product-illustration ${color}`} aria-hidden="true">
      {color === 'filters' ? (
        <div className="filter-illustration"><i /><i /><i /><i /></div>
      ) : (
        <div className="product-purifier">
          <span className="product-light" />
          <span className="product-screen">88</span>
          <span className="product-tap" />
          <span className="product-water" />
        </div>
      )}
    </div>
  )
}
