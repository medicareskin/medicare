import type { Metadata } from 'next';
import Link from 'next/link';
import { meta } from '@/lib/metadata';
import { site } from '@/lib/site';

export const metadata: Metadata = meta(
  'Privacy Policy & Analytics Preferences | Medicare Skin Clinic Bengaluru',
  'Information about appointment form data, patient confidentiality, and website analytics preferences at Medicare Skin & Cosmetic Clinic.',
  '/privacy-policy/',
  false
);

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-view" style={{ background: '#FAF7FA', minHeight: '100vh', padding: '50px 0 80px' }}>
      <div className="container" style={{ maxWidth: '840px', margin: '0 auto', padding: '0 20px' }}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '20px', fontSize: '0.84rem', color: '#6F647E' }}>
          <Link href="/" style={{ color: '#942876', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>Privacy Policy</span>
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
            PATIENT CONFIDENTIALITY &amp; TRUST
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
            Privacy Policy &amp; Data Preferences
          </h1>
          <p style={{ fontSize: '1.02rem', color: '#5C5268', lineHeight: 1.6, margin: 0 }}>
            How Medicare Skin &amp; Cosmetic Clinic protects your personal health records, consultation triage details, and website privacy preferences.
          </p>
        </div>


        {/* Content Document Card */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #ECE7F2',
            padding: '40px 36px',
            boxShadow: '0 8px 30px rgba(43, 27, 77, 0.04)',
          }}
        >
          {/* Section 1 */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.28rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>1.</span> Information We Collect
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 10px' }}>
              When you submit a consultation request through our online booking form, we collect only the necessary details required to coordinate your medical triage and schedule an appointment with Dr. (Mrs.) Sujay M:
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
              <li>Full Name and Contact Mobile Number for SMS/WhatsApp appointment confirmations.</li>
              <li>Broad dermatological or cosmetic concern category (e.g., Acne, Scar Revision, Melasma, Hair Loss).</li>
              <li>Preferred consultation date and time slot.</li>
              <li>Optional referral attribution (e.g., family physician, patient recommendation, or web search).</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.28rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>2.</span> Why Your Data is Processed
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 10px' }}>
              Your consultation request is processed exclusively to:
            </p>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
              <li>Verify physician calendar availability at our Yelachenahalli clinic.</li>
              <li>Contact you via phone call or WhatsApp to confirm your appointment time and clinical instructions.</li>
              <li>Comply with clinical governance guidelines and patient record management requirements.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.28rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>3.</span> Zero Third-Party Selling or Brokerage
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
              We uphold strict medical confidentiality. Medicare Skin &amp; Cosmetic Clinic <strong>never</strong> sells, leases, rents, or commercializes your personal contact information or clinical background to advertising networks, pharmaceutical distributors, or data brokers.
            </p>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.28rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>4.</span> Website Analytics &amp; Cookie Preferences
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 12px' }}>
              Our website uses strictly minimal, privacy-centric telemetry. Non-essential usage analytics runs only if you explicitly provide affirmative consent.
            </p>
            <div style={{ background: '#FAF7FA', padding: '16px 20px', borderRadius: '14px', border: '1px solid #ECE7F2', fontSize: '0.88rem', color: '#5C5268', lineHeight: 1.6 }}>
              <strong style={{ color: '#2B1B4D', display: 'block', marginBottom: '4px' }}>
                Strict Medical Shielding
              </strong>
              No personal health data, appointment submissions, medical photos, or triage forms are ever shared with analytics engines or external advertising trackers.
            </div>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.28rem', color: '#2B1B4D', marginBottom: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#942876' }}>5.</span> Clinic Contact &amp; Grievance Officer
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#5C5268', lineHeight: 1.7, margin: '0 0 12px' }}>
              For any questions regarding patient privacy, data retention, or updating your records, contact our clinic administration:
            </p>
            <div style={{ fontSize: '0.9rem', color: '#2B1B4D', lineHeight: 1.8 }}>
              <div><strong>Clinic:</strong> Medicare Skin &amp; Cosmetic Clinic</div>
              <div><strong>Physician:</strong> Dr. (Mrs.) Sujay M (MBBS, DDVL)</div>
              <div><strong>Telephone:</strong> {site.phoneDisplay}</div>
              <div><strong>Location:</strong> 1st Floor, Opp. Yelachenahalli Metro Station, Kanakapura Main Road, South Bengaluru - 560078</div>
            </div>
          </section>
        </div>

        {/* Back link */}
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
            Book Dermatologist Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}
