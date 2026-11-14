import type { Booking, Page } from '../types'
import Icon from '../components/Icon'

type Props = {
  booking: Booking
  onNavigate: (page: Page) => void
}

export default function BookingConfirmationPage({ booking, onNavigate }: Props) {
  const date = new Date(`${booking.date}T12:00:00`).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="booking-confirmation">
      <div className="confirmation-icon"><Icon name="check" /></div>
      <p className="commerce-eyebrow">YOU’RE ALL SET</p>
      <h1>Service booking confirmed</h1>
      <p className="confirmation-copy">
        Thanks, {booking.customer}. Your AquaServe service request has been scheduled.
      </p>
      <div className="confirmation-details">
        <p><span>Service</span><strong>{booking.service}</strong></p>
        <p><span>Date</span><strong>{date}</strong></p>
        <p><span>Time</span><strong>{booking.time}</strong></p>
      </div>
      <p className="confirmation-note">
        A service coordinator will contact you to confirm your appointment details.
      </p>
      <button type="button" onClick={() => onNavigate('home')}>Back to home</button>
    </main>
  )
}
