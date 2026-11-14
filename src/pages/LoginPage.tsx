import { useState, type FormEvent } from 'react'
import { serviceHighlights } from '../data/catalog'
import Icon from '../components/Icon'
import WaterPurifierIllustration from '../components/WaterPurifierIllustration'

export default function LoginPage({ onLogin }: { onLogin: (name: string) => void }) {
  const [isRegistering, setIsRegistering] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const accountValue = String(formData.get(isRegistering ? 'name' : 'email') ?? '')
    const name = isRegistering
      ? accountValue
      : accountValue.split('@')[0].replace(/[._-]/g, ' ')
    onLogin(name.trim() || 'AquaServe customer')
  }

  function changeMode(registering: boolean) {
    setIsRegistering(registering)
    setMessage('')
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="AquaServe home">
          <span className="brand-mark"><Icon name="drop" /></span>
          <span className="brand-copy">
            <strong>AquaServe</strong>
            <small>Water Purifiers · Products · Services</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#">Home</a>
          <a href="#">Shop <Icon name="chevron" /></a>
          <a href="#">Book a service <Icon name="chevron" /></a>
          <a href="#">AMC plans</a>
          <a href="#">Offers</a>
        </nav>

        <div className="header-actions">
          <label className="search-box">
            <span className="visually-hidden">Search products and services</span>
            <input type="search" placeholder="Search products, services..." />
            <Icon name="search" />
          </label>
          <button className="icon-button cart-button" type="button" aria-label="Shopping cart">
            <Icon name="cart" /><span className="cart-count">0</span>
          </button>
          <button className="icon-button favorite-button" type="button" aria-label="Favorites">
            <Icon name="heart" />
          </button>
          <a className="header-login" href="#account"><Icon name="user" /> Login</a>
        </div>
      </header>

      <main className="main-content">
        <section className="welcome-panel" aria-labelledby="welcome-heading">
          <div className="welcome-copy">
            <p className="eyebrow"><span /> CLEAN WATER, MADE SIMPLE</p>
            <h1 id="welcome-heading">Buy, Service &amp;<br />Maintain Your<br /><span>Water Purifier</span></h1>
            <p className="welcome-description">
              Shop genuine purifiers, filters and accessories, or book installation, repair and AMC at your convenience.
            </p>
            <ul className="service-list">
              {serviceHighlights.map(({ icon, title, copy }) => (
                <li key={title}>
                  <span className="service-icon"><Icon name={icon} /></span>
                  <span><strong>{title}</strong><small>{copy}</small></span>
                </li>
              ))}
            </ul>
          </div>
          <WaterPurifierIllustration />
        </section>

        <section className="account-card" id="account" aria-label="Your AquaServe account">
          <div className="account-tabs" role="tablist" aria-label="Account options">
            <button
              className={!isRegistering ? 'active' : ''}
              id="login-tab"
              type="button"
              role="tab"
              aria-selected={!isRegistering}
              aria-controls="account-form"
              onClick={() => changeMode(false)}
            >
              Login
            </button>
            <button
              className={isRegistering ? 'active' : ''}
              id="register-tab"
              type="button"
              role="tab"
              aria-selected={isRegistering}
              aria-controls="account-form"
              onClick={() => changeMode(true)}
            >
              Register
            </button>
          </div>

          <div className="account-heading">
            <h2>{isRegistering ? 'Create your account' : 'Welcome Back'} <span aria-hidden="true">{isRegistering ? '✨' : '👋'}</span></h2>
            <p>{isRegistering ? 'Join AquaServe for pure water and easy service.' : 'Login to shop, book services and manage your account.'}</p>
          </div>

          <form
            id="account-form"
            className="account-form"
            onSubmit={handleSubmit}
            aria-labelledby={isRegistering ? 'register-tab' : 'login-tab'}
          >
            {isRegistering && (
              <label className="field-label" htmlFor="full-name">
                <span className="field-title">Full name <span className="required-mark">*</span></span>
                <span className="input-wrap">
                  <Icon name="user" />
                  <input id="full-name" name="name" type="text" placeholder="Enter your full name" autoComplete="name" required />
                </span>
              </label>
            )}
            <label className="field-label" htmlFor="email">
              <span className="field-title">Email or mobile number <span className="required-mark">*</span></span>
              <span className="input-wrap">
                <Icon name="mail" />
                <input id="email" name="email" type="text" placeholder="Enter email or mobile number" autoComplete="username" required />
              </span>
            </label>
            <label className="field-label" htmlFor="password">
              <span className="field-title">Password <span className="required-mark">*</span></span>
              <span className="input-wrap">
                <Icon name="lock" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete={isRegistering ? 'new-password' : 'current-password'}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((shown) => !shown)}
                >
                  <Icon name="eye" />
                </button>
              </span>
            </label>
            {!isRegistering && (
              <button
                className="forgot-link"
                type="button"
                onClick={() => setMessage('For password help, please contact AquaServe customer support.')}
              >
                Forgot password?
              </button>
            )}
            <button className="submit-button" type="submit">{isRegistering ? 'Create account' : 'Login'}</button>
            <div className="or-divider"><span />or<span /></div>
            <button
              className="google-button"
              type="button"
              onClick={() => setMessage('Google sign-in is not connected yet. Use your email or mobile number instead.')}
            >
              <span className="google-g" aria-hidden="true">G</span>
              Continue with Google
            </button>
            <p className="form-message" aria-live="polite">{message}</p>
          </form>

          <p className="account-switch">
            {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button type="button" onClick={() => changeMode(!isRegistering)}>
              {isRegistering ? 'Login' : 'Register now'}
            </button>
          </p>
        </section>
      </main>

      <footer className="benefit-bar" aria-label="AquaServe benefits">
        <div className="benefit"><Icon name="truck" /><span><strong>Free delivery</strong><small>On selected products</small></span></div>
        <div className="benefit"><Icon name="shield" /><span><strong>Genuine products</strong><small>100% original &amp; branded</small></span></div>
        <div className="benefit"><Icon name="calendar" /><span><strong>Easy service booking</strong><small>Choose your date &amp; time slot</small></span></div>
        <div className="benefit"><Icon name="user" /><span><strong>Verified technicians</strong><small>Trained &amp; experienced</small></span></div>
        <div className="benefit"><Icon name="headphones" /><span><strong>Customer support</strong><small>Mon – Sat, 9 AM – 8 PM</small></span></div>
      </footer>
    </div>
  )
}
