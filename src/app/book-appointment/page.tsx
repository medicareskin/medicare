import Link from 'next/link';
import type { Metadata } from 'next';
import { meta } from '@/lib/metadata';
import { site, mapUrl, mapEmbedUrl, waLink } from '@/lib/site';
import { BookingForm } from '@/components/BookingForm';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export const metadata: Metadata = meta(
  'Book Dermatologist Consultation | Medicare Skin Bengaluru',
  'Request an in-person dermatology consultation with Dr. (Mrs.) Sujay M (MBBS, DDVL) at Medicare Skin near Yelachenahalli Metro Station, South Bengaluru. Call +91 92428 55707.',
  '/book-appointment/'
);

export default function BookingPage() {
  const whatsappMsg =
    'Hello Medicare Skin, I would like to book a dermatologist consultation with Dr. Sujay M. Please share available appointment slots.';

  return (
    <div className="booking-page-wrapper">
      {/* Breadcrumb Navigation */}
      <nav className="container breadcrumb-nav" aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Book Consultation</li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="booking-hero-header">
        <div className="container center">
          <span className="eyebrow-pill">PATIENT CARE · SOUTH BENGALURU</span>
          <h1 className="booking-hero-title">Request a Dermatologist Consultation</h1>
          <p className="booking-hero-desc">
            Consult personally with Dr. (Mrs.) Sujay M (MBBS, DDVL · 18+ Years Experience) for ethical, evidence-based dermatological care, laser treatments, and hair thinning solutions.
          </p>

          <div className="booking-quick-bar">
            <a className="btn primary" href={`tel:${site.phoneE164}`}>
              Call Desk: {site.phoneDisplay}
            </a>
            <a
              className="btn-whatsapp-pill"
              href={waLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation Request"
            >
              <WhatsAppIcon size={18} color="#25D366" />
              <span>WhatsApp Fast-Track</span>
              <span className="pill-arrow">→</span>
            </a>
            <span className="quick-badge">
              Metro Landmark: Opposite Yelachenahalli Metro Station
            </span>
          </div>
        </div>
      </header>

      {/* Main Two-Column Booking Experience */}
      <div className="container section-sm">
        <div className="booking-layout-grid">
          {/* Column 1: Interactive Consultation Booking Form */}
          <section className="booking-form-column" aria-label="Appointment Request Form">
            <div className="form-column-header">
              <span className="column-eyebrow">ONLINE ENQUIRY</span>
              <h2>Consultation Request Form</h2>
              <p className="column-desc">
                Select your clinical concern and preferred date. Our clinic desk will contact you to verify slot availability and confirm your scheduled timing.
              </p>
            </div>

            <BookingForm className="main-page-booking-card" />

            <div className="booking-disclaimer-box">
              <p className="micro">
                <strong>Medical Notice:</strong> This online form is for scheduling outpatient clinical consultations only. Please do not submit confidential photographs or detailed diagnostic histories here. All medical evaluations are performed in-person by Dr. Sujay M. For acute symptoms, severe allergic reactions, or medical emergencies, please visit an emergency casualty care hospital immediately.
              </p>
            </div>
          </section>

          {/* Column 2: Clinic Information, Doctor Credentials & Transit */}
          <aside className="booking-sidebar-column" aria-label="Clinic Details and Guidance">
            {/* Consulting Dermatologist */}
            <div className="sidebar-card doctor-summary-card">
              <div className="sidebar-doctor-row">
                <img
                  src="/images/dr_sujaya.jpeg"
                  alt="Dr. (Mrs.) Sujay M"
                  className="sidebar-doctor-img"
                  width={80}
                  height={80}
                />
                <div>
                  <span className="sidebar-badge">CONSULTING DERMATOLOGIST</span>
                  <h3 className="sidebar-doctor-name">Dr. (Mrs.) Sujay M</h3>
                  <p className="sidebar-doctor-qual">MBBS, DDVL · Dermatologist &amp; Dermatosurgeon</p>
                  <p className="sidebar-doctor-exp">18+ Years Medical Dermatology Practice</p>
                </div>
              </div>
              <p className="sidebar-doctor-text">
                At Medicare Skin, you are never handed off to non-medical staff or sales representatives for diagnosis. Dr. Sujay personally reviews your medical history, skin barrier health, and hormonal panels to design a customized care plan.
              </p>
            </div>

            {/* Timings and Schedule */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">Consultation Timings</h3>
              <div className="timings-list">
                <div className="timing-item">
                  <span className="timing-day">Monday – Saturday (Morning)</span>
                  <span className="timing-hours">10:30 AM – 1:30 PM</span>
                </div>
                <div className="timing-item">
                  <span className="timing-day">Monday – Saturday (Evening)</span>
                  <span className="timing-hours">5:30 PM – 8:30 PM</span>
                </div>
                <div className="timing-item">
                  <span className="timing-day">Sunday</span>
                  <span className="timing-hours">10:30 AM – 1:00 PM (By prior appointment)</span>
                </div>
              </div>
              <p className="timing-note">
                • Walk-ins are accommodated between scheduled appointments, though prior booking is strongly recommended to minimize waiting time.
              </p>
            </div>

            {/* How Your Consultation Works */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">How Your Consultation Works</h3>
              <div className="steps-vertical">
                <div className="vert-step">
                  <span className="vert-num">1</span>
                  <div>
                    <strong>Select Concern &amp; Date</strong>
                    <p>Choose your area of concern and preferred date window using the online form.</p>
                  </div>
                </div>
                <div className="vert-step">
                  <span className="vert-num">2</span>
                  <div>
                    <strong>Clinic Staff Confirmation</strong>
                    <p>Our front desk calls or messages you to confirm exact doctor availability.</p>
                  </div>
                </div>
                <div className="vert-step">
                  <span className="vert-num">3</span>
                  <div>
                    <strong>In-Person Clinical Diagnosis</strong>
                    <p>Visit the clinic for a thorough dermoscopic examination and tailored prescription.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Navigation */}
            <div className="sidebar-card">
              <h3 className="sidebar-title">Clinic Address &amp; Directions</h3>
              <p className="sidebar-address">
                #14, 1st Floor, 100 Feet Ring Road, Jyothi Layout, Yelachenahalli, Kanakapura Main Road, Bengaluru, Karnataka 560078
              </p>
              <div className="sidebar-landmark">
                <strong>Landmark:</strong> Directly opposite Yelachenahalli Metro Station (Pillar 100). Easy access from JP Nagar, Banashankari, and Kanakapura Road.
              </div>

              {/* Embedded Google Map */}
              <div className="sidebar-map-wrap">
                <iframe
                  title="Medicare Skin Clinic Google Map Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="sidebar-map-actions">
                <a
                  className="btn outline full-width"
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps App →
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Consultation FAQs Section */}
        <section className="booking-faq-section" aria-label="Appointment Frequently Asked Questions">
          <div className="section-head center">
            <span className="eyebrow-pill">PATIENT FAQ</span>
            <h2>Frequently Asked Questions About Appointments</h2>
            <p className="hero-lede center-block">
              Clear answers to help you prepare for your consultation at Medicare Skin Clinic.
            </p>
          </div>

          <div className="faq-cards-grid">
            <div className="faq-card-item">
              <h3>Is an advance appointment mandatory or can I walk in?</h3>
              <p>
                While walk-ins are welcomed during routine clinic hours, an advance appointment request is strongly advised. Scheduling in advance reserves your slot with Dr. Sujay and minimizes patient waiting times.
              </p>
            </div>

            <div className="faq-card-item">
              <h3>What happens during my first consultation?</h3>
              <p>
                Dr. Sujay conducts an in-depth dermatological examination, including magnified dermoscopic assessment of lesions or hair roots, review of medical/lifestyle history, and provides a clear medical prescription with transparent timelines.
              </p>
            </div>

            <div className="faq-card-item">
              <h3>Are clinical procedures performed on the same day?</h3>
              <p>
                Diagnostic assessments and non-invasive consultations are always completed during your first visit. If a procedural treatment (such as a chemical peel, comedone extraction, or laser session) is recommended and clinically suitable, it may be initiated the same day or scheduled at your convenience.
              </p>
            </div>

            <div className="faq-card-item">
              <h3>What should I bring to my appointment?</h3>
              <p>
                Please bring previous prescriptions, names of ongoing skincare or hair care products, recent blood work or hormonal reports (if available), and a valid photo ID.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
