import Icon from './Icon'

export default function WaterPurifierIllustration() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-glow" />
      <div className="art-spark spark-one" />
      <div className="art-spark spark-two" />
      <div className="plant">
        <span />
        <span />
        <span />
        <span />
        <i />
      </div>
      <div className="countertop" />
      <div className="purifier">
        <div className="purifier-face">
          <div className="purifier-screen">88:88</div>
          <div className="purifier-mark"><Icon name="drop" /></div>
          <div className="purifier-spout" />
        </div>
        <div className="purifier-side" />
        <div className="purifier-base" />
        <div className="water-glass"><span /></div>
      </div>
      <div className="filter-stack"><i /><i /><i /></div>
      <div className="service-bag">
        <div className="bag-handle" />
        <Icon name="drop" />
        <strong>AquaServe</strong>
      </div>
      <div className="art-caption">
        <span className="caption-dot" />
        Pure water, peace of mind
      </div>
    </div>
  )
}
