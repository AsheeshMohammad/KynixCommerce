import { useState, type FormEvent } from 'react'
import { serviceOptions } from '../data/catalog'
import type { Booking } from '../types'
import { formatPrice, localDateOffset } from '../utils/commerce'
import Icon from '../components/Icon'
import WaterPurifierIllustration from '../components/WaterPurifierIllustration'

const timeSlots = [
  '9:00 AM – 11:00 AM',
  '11:00 AM – 1:00 PM',
  '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM',
]

export default function BookingPage({
  onComplete,
}: {
  onComplete: (booking: Booking) => void
}) {
  const [selectedService, setSelectedService] = useState(serviceOptions[1].id)
  const [selectedTime, setSelectedTime] = useState(timeSlots[1])
  const selected = serviceOptions.find(({ id }) => id === selectedService) ?? serviceOptions[0]

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onComplete({
      service: selected.name,
      date: String(formData.get('date')),
      time: selectedTime,
      customer: String(formData.get('customer')),
    })
  }

  return (
    <main className="booking-main">
      <section className="booking-hero">
        <div className="booking-hero-copy">
          <p className="commerce-eyebrow">PROFESSIONAL HELP, RIGHT AT HOME</p>
          <h1>Book a <span>Service</span></h1>
          <p>Professional water purifier care from certified technicians at your doorstep.</p>
          <div className="booking-trust">
            <span><Icon name="shield" /> Certified technicians</span>
            <span><Icon name="clock" /> On-time service</span>
            <span><Icon name="rupee" /> Transparent pricing</span>
            <span><Icon name="badge" /> Service warranty</span>
          </div>
        </div>
        <WaterPurifierIllustration />
      </section>

      <h2 className="booking-section-title">Select a service</h2>
      <form className="booking-layout" onSubmit={submitBooking}>
        <div className="booking-form-column">
          <section className="service-options" aria-label="Available services">
            {serviceOptions.map((service) => (
              <button
                type="button"
                key={service.id}
                className={`service-option ${selectedService === service.id ? 'selected' : ''}`}
                onClick={() => setSelectedService(service.id)}
                aria-pressed={selectedService === service.id}
              >
                <span className="service-option-top"><Icon name={service.icon} /><i /></span>
                <strong>{service.name}</strong>
                <small>{service.subtitle}</small>
                <b>{service.priceLabel}</b>
              </button>
            ))}
          </section>

          <div className="booking-detail-grid">
            <section className="booking-field-card">
              <h3><Icon name="menu" /> Service details</h3>
              <label>
                Select product <span>*</span>
                <select name="product" defaultValue="RO Water Purifier (10L)">
                  <option>RO Water Purifier (10L)</option>
                  <option>UV Water Purifier (8L)</option>
                  <option>Alkaline RO Purifier (10L)</option>
                  <option>Other / not sure</option>
                </select>
              </label>
              <label>
                Issue / description <span>*</span>
                <textarea name="issue" placeholder="Tell us what you need help with..." rows={3} required maxLength={500} />
              </label>
            </section>
            <section className="booking-field-card">
              <h3><Icon name="calendar" /> Choose date &amp; time</h3>
              <label>
                Preferred date <span>*</span>
                <input type="date" name="date" min={localDateOffset(1)} defaultValue={localDateOffset(1)} required />
              </label>
              <fieldset className="time-fieldset">
                <legend>Preferred time slot <span>*</span></legend>
                <div className="time-slots">
                  {timeSlots.map((time) => (
                    <button
                      className={selectedTime === time ? 'selected' : ''}
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      aria-pressed={selectedTime === time}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </fieldset>
            </section>
          </div>

          <section className="booking-field-card customer-card">
            <h3><Icon name="user" /> Your information</h3>
            <div className="customer-fields">
              <label>Full name <span>*</span><input name="customer" type="text" placeholder="Enter your full name" autoComplete="name" required /></label>
              <label>Mobile number <span>*</span><input name="phone" type="tel" placeholder="+91 98765 43210" autoComplete="tel" required /></label>
              <label>Email <input name="email" type="email" placeholder="you@example.com" autoComplete="email" /></label>
              <label className="address-field">Service address <span>*</span><input name="address" type="text" placeholder="House, street, area, city and PIN code" autoComplete="street-address" required /></label>
              <label className="address-field">Additional instructions <small>(optional)</small><input name="instructions" type="text" placeholder="Landmark, gate instructions, or anything else" /></label>
            </div>
          </section>
        </div>

        <aside className="booking-summary">
          <h2><Icon name="calendar" /> Booking summary</h2>
          <div className="summary-service">
            <Icon name={selected.icon} />
            <span><strong>{selected.name}</strong><small>{selected.subtitle}</small></span>
            <b>{formatPrice(selected.price)}</b>
          </div>
          <div className="summary-row"><span>Service fee</span><strong>{formatPrice(selected.price)}</strong></div>
          <div className="summary-row"><span>Convenience fee</span><strong>₹0</strong></div>
          <div className="summary-total"><span>Total payable</span><strong>{formatPrice(selected.price)}</strong></div>
          <div className="included-list">
            <h3><Icon name="shield" /> What’s included?</h3>
            <p><Icon name="check" /> On-site inspection &amp; diagnosis</p>
            <p><Icon name="check" /> Basic service labour</p>
            <p><Icon name="check" /> Genuine parts, if required</p>
            <p><Icon name="check" /> Service report &amp; recommendations</p>
          </div>
          <button className="confirm-booking" type="submit"><Icon name="calendar" /> Confirm booking</button>
          <p className="booking-secure"><Icon name="shield" /> No payment required to book</p>
        </aside>
      </form>
    </main>
  )
}
