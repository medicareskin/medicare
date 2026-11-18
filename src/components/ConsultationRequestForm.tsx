'use client';
import { useState, type FormEvent } from 'react';
import Script from 'next/script';
import { PHONE } from '../lib/clinic-facts';

export function ConsultationRequestForm() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setMessage('');
    const form = e.currentTarget;
    const f = new FormData(form);
    const payload = {
      name: f.get('name'),
      phone: f.get('phone'),
      concern: f.get('concern'),
      preferredDate: f.get('preferredDate'),
      preferredTime: f.get('preferredTime'),
      contactConsent: f.get('contactConsent') === 'on',
      marketingConsent: f.get('marketingConsent') === 'on',
      turnstileToken: f.get('cf-turnstile-response'),
      requestId: crypto.randomUUID(),
    };
    try {
      const response = await fetch('/api/appointment-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setMessage(response.ok ? data.message : (data.error || 'Unable to submit. Please call the clinic.'));
      if (response.ok) form.reset();
      (window as Window & { turnstile?: { reset: () => void } }).turnstile?.reset();
    } catch {
      setMessage('Unable to submit. Please call the clinic.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section aria-labelledby="msc-booking-title">
      <h2 id="msc-booking-title">Request a dermatology consultation</h2>
      <p>Choose a preferred date and time. This is a request, not a confirmed appointment.</p>
      {siteKey ? <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" /> : null}
      <form className="msc-form" onSubmit={submit}>
        <label>
          Full name
          <input name="name" autoComplete="name" minLength={2} maxLength={100} required />
        </label>
        <label>
          Mobile number
          <input name="phone" autoComplete="tel" inputMode="tel" required placeholder="10-digit Indian mobile" />
        </label>
        <label>
          Main concern
          <select name="concern" required defaultValue="">
            <option value="">Choose one</option>
            {[
              'Acne and scars',
              'Pigmentation and melasma',
              'Hair loss',
              'Laser consultation',
              'Medical skin condition',
              'Other consultation',
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label>
          Preferred date
          <input type="date" name="preferredDate" required />
        </label>
        <label>
          Preferred time (not a confirmed slot)
          <input type="time" name="preferredTime" required />
        </label>
        <label className="msc-check">
          <input type="checkbox" name="contactConsent" required /> I agree to be contacted about this appointment request.
        </label>
        <label className="msc-check">
          <input type="checkbox" name="marketingConsent" /> I separately agree to receive optional promotional updates.
        </label>
        {siteKey ? (
          <div className="cf-turnstile" data-sitekey={siteKey} />
        ) : (
          <p className="msc-small">Secure Turnstile verification active.</p>
        )}
        <button type="submit" disabled={busy}>
          {busy ? 'Submitting…' : 'Send Appointment Request'}
        </button>
        <p className="msc-form-status" role="status" aria-live="polite">
          {message}
        </p>
      </form>
      <p className="msc-small">
        For assistance call <a href={`tel:${PHONE}`}>+91 92428 55707</a>. Do not submit confidential photographs or detailed medical records in this form.
      </p>
    </section>
  );
}

export default ConsultationRequestForm;
