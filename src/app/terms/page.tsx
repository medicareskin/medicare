import type { Metadata } from 'next';
import Link from 'next/link';
import { meta } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata: Metadata = meta(
  'Website Terms of Service & Clinic Policies | Medicare Skin Bengaluru',
  'Official website terms of service, appointment request policy, medical disclaimers, and consultation guidelines for Medicare Skin & Cosmetic Clinic in South Bengaluru.',
  '/terms/',
  true
);

export default function TermsPage() {
  return (
    <div className="terms-page-view" style={{ background: '#FAF7FA', minHeight: '100vh', padding: '50px 0 80px' }}>
      <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '20px', fontSize: '0.84rem', color: '#6F647E' }}>
          <Link href="/" style={{ color: '#942876', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>Terms of Service</span>
        </nav>

        {/* Header Block */}
        <div style={{ marginBottom: '36px', textAlign: 'left' }}>
          <span 
            style={{
              display: 'inline-block',
              fontSize: '0.78rem',
              fontWeight: 750,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#942876',
              background: 'rgba(148, 40, 118, 0.08)',
              padding: '6px 14px',
              borderRadius: '9999px',
              marginBottom: '12px',
            }}
          >
            CLINICAL POLICIES &amp; TERMS
          </span>
          <h1 
            style={{
              fontFamily: 'var(--font-serif), Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              color: '#2B1B4D',
              lineHeight: 1.25,
              margin: '0 0 12px',
            }}
          >
            Terms of Service &amp; Usage Policy
          </h1>
          <p style={{ fontSize: '1.02rem', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
            Official terms governing your access to <strong>https://www.medicareskin.com</strong>, consultation request workflows, and patient communication with Medicare Skin &amp; Cosmetic Clinic, Bengaluru.
          </p>
        </div>

        {/* Document Card */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #ECE7F2',
            padding: '40px 36px',
            boxShadow: '0 8px 30px rgba(43, 27, 77, 0.04)',
          }}
        >
          {/* Section 1: Clinic Identity & Scope */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>1.</span> Clinic Identity &amp; Platform Scope
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 10px' }}>
              This website (<strong>https://www.medicareskin.com</strong>) is operated by <strong>Medicare Skin &amp; Cosmetic Clinic</strong>, a clinical dermatology and aesthetic medical practice led by <strong>Dr. (Mrs.) Sujay M (MBBS, DDVL)</strong>, located near Yelachenahalli Metro Station, Kanakapura Main Road, South Bengaluru 560078.
            </p>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
              By accessing or using this website, submitting an appointment inquiry, or communicating with our reception desk via telephone or WhatsApp, you agree to abide by these terms. If you do not agree with any part of these terms, please refrain from using the website.
            </p>
          </section>

          {/* Section 2: Medical Information & Not Professional Advice */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>2.</span> Medical Information &amp; Absence of Doctor-Patient Relationship
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 10px' }}>
              All articles, procedure overviews, FAQs, and educational materials published on this website are provided strictly for general public health awareness. They do not constitute medical diagnosis, individualized treatment recommendations, or a binding doctor-patient relationship.
            </p>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
              Dermatological conditions (such as acne, scar types, melasma, hair loss, eczema, psoriasis, or suspicious skin lesions) require direct in-person evaluation by a qualified medical doctor. You should never delay seeking professional clinical consultation or discontinue prescribed medication based on information read on this website.
            </p>
          </section>

          {/* Section 3: Appointment Request Policy */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>3.</span> Online Appointment Request Policy
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 10px' }}>
              Submitting an appointment request through our online form or WhatsApp portal records an <strong>appointment request</strong>. It does <strong>not</strong> guarantee an immediate or confirmed time slot.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 10px' }}>
              <li>Our front desk team will contact you via phone call or WhatsApp to confirm physician availability and assign your dedicated consultation slot.</li>
              <li>Walk-in consultations are accommodated where scheduling permits, but advance bookings receive priority to ensure unhurried clinical evaluations.</li>
              <li>Consultation fees are payable at the clinic reception according to current approved tariffs.</li>
            </ul>
          </section>

          {/* Section 4: Cancellation & Rescheduling */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>4.</span> Cancellation &amp; Rescheduling Guidelines
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
              We understand schedules can change. If you are unable to attend your scheduled consultation with Dr. Sujay M, please inform our reception desk at least <strong>2 hours in advance</strong> by calling <strong>{site.phoneDisplay}</strong> or messaging our official WhatsApp desk. This allows us to offer the reserved time slot to patients waiting for acute dermatological care.
            </p>
          </section>

          {/* Section 5: Treatment Outcomes & Realistic Expectations */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>5.</span> Treatment Outcomes, Limitations &amp; Ethical Guarantees
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 10px' }}>
              In compliance with ethical medical standards and Indian clinical regulations, Medicare Skin &amp; Cosmetic Clinic does <strong>not</strong> make misleading claims of “100% cure”, “permanent hair elimination”, or “instant fairness”.
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
              <li>Every individual's response to medical therapy, chemical peels, Q-switched laser toning, or diode laser hair reduction depends on skin phototype (Fitzpatrick III–V), endocrine/hormonal balance, genetics, and adherence to aftercare.</li>
              <li>Procedural risks, including temporary erythema, shedding, mild swelling, or post-inflammatory pigment variations, are explained prior to any in-clinic treatment with informed consent.</li>
            </ul>
          </section>

          {/* Section 6: Intellectual Property */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>6.</span> Intellectual Property &amp; Content Use
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
              All original text, clinical article summaries, branding, and photography on this website are the proprietary intellectual property of Medicare Skin &amp; Cosmetic Clinic. Reproduction, republication, or automated scraping of our content without written authorization is prohibited.
            </p>
          </section>

          {/* Section 7: Official Communication Channels */}
          <section style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>7.</span> Official Clinic Contact &amp; Grievance
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 12px' }}>
              To ensure communication security and eliminate email discrepancies, please direct all formal inquiries, patient feedback, or legal notifications exclusively to our standardized clinic channels:
            </p>
            <div style={{ background: '#FAF7FA', padding: '20px 24px', borderRadius: '16px', border: '1px solid #ECE7F2', fontSize: '0.92rem', color: '#2B1B4D', lineHeight: 1.8 }}>
              <div><strong>Practice Name:</strong> Medicare Skin &amp; Cosmetic Clinic</div>
              <div><strong>Chief Dermatologist:</strong> Dr. (Mrs.) Sujay M, MBBS, DDVL</div>
              <div><strong>Official Clinic Email:</strong> <a href="mailto:medicareskin.cosmeticclinic@gmail.com" style={{ color: '#942876', textDecoration: 'none', fontWeight: 600 }}>medicareskin.cosmeticclinic@gmail.com</a></div>
              <div><strong>Official Telephone:</strong> <a href="tel:+919242855707" style={{ color: '#942876', textDecoration: 'none', fontWeight: 600 }}>+91 92428 55707</a></div>
              <div><strong>Postal Address:</strong> Jyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru 560078</div>
              <div><strong>Governing Law &amp; Jurisdiction:</strong> Bengaluru, Karnataka, India</div>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div style={{ marginTop: '28px', textAlign: 'center' }}>
          <Link 
            href="/book-appointment/" 
            className="btn primary"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              borderRadius: '9999px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.92rem',
            }}
          >
            Request Doctor Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}
