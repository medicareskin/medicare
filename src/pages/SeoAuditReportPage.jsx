import React from 'react';
import { FileSearch, CheckCircle2, AlertTriangle, Search, ShieldCheck, Zap, Globe, Layers, ArrowUpRight } from 'lucide-react';

export default function SeoAuditReportPage() {
  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlignment: 'center', textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.72)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(148, 40, 118, 0.25)', color: '#942876', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '600', marginBottom: '12px', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.08)' }}>
            <FileSearch size={16} /> Complete Technical & SEO Analysis
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', color: '#2B1B4D', marginBottom: '16px' }}>
            Medicare Skin & Cosmetic Clinic Audit & Strategy Report
          </h1>
          <p style={{ fontSize: '16px', color: '#5C5268', lineHeight: '1.7' }}>
            Comprehensive developer breakdown, search engine optimization (SEO), answer engine optimization (AEO), generative AI search visibility (GEO), and technical conversion audit for <strong>medicareskin.in</strong>.
          </p>
        </div>

        {/* Audit Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
          <div className="location-card-box" style={{ padding: '28px' }}>
            <div style={{ width: '44px', height: '44px', background: 'rgba(200, 80, 155, 0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#942876', marginBottom: '16px' }}>
              <Search size={22} />
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', marginBottom: '10px' }}>
              1. Local SEO & Geo-Targeting
            </h3>
            <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
              Primary local targets: Yelachenahalli, JP Nagar, Kanakapura Road, and South Bengaluru. High search volume for "dermatologist near me" and "skin clinic in Yelachenahalli".
            </p>
          </div>

          <div className="location-card-box" style={{ padding: '28px' }}>
            <div style={{ width: '44px', height: '44px', background: 'rgba(200, 80, 155, 0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#942876', marginBottom: '16px' }}>
              <Zap size={22} />
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', marginBottom: '10px' }}>
              2. AEO & Voice Search (ChatGPT/Siri)
            </h3>
            <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
              Optimized structured FAQ microdata (`FAQPage` JSON-LD schema) allowing AI assistants to deliver instant answers regarding treatment safety, downtime, and peel results.
            </p>
          </div>

          <div className="location-card-box" style={{ padding: '28px' }}>
            <div style={{ width: '44px', height: '44px', background: 'rgba(200, 80, 155, 0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#942876', marginBottom: '16px' }}>
              <Globe size={22} />
            </div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#2B1B4D', marginBottom: '10px' }}>
              3. GEO (Generative Engine Optimization)
            </h3>
            <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6' }}>
              Medical schema (`MedicalClinic` & `Physician` attributes) for Perplexity, Gemini, and SearchGPT to verify Dr. Sujay M's MBBS DDVL credentials & experience.
            </p>
          </div>
        </div>

        {/* Detailed Audit Table */}
        <div className="location-card-box" style={{ padding: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', color: '#2B1B4D', marginBottom: '20px' }}>
            Technical & Content Audit Breakdown
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: 'rgba(200, 80, 155, 0.08)', color: '#2B1B4D', borderBottom: '2px solid rgba(148, 40, 118, 0.15)' }}>
                  <th style={{ padding: '14px 18px', borderRadius: '6px 0 0 0' }}>Audit Vector</th>
                  <th style={{ padding: '14px 18px' }}>Current Website State</th>
                  <th style={{ padding: '14px 18px' }}>Recommended Developer Remediation</th>
                  <th style={{ padding: '14px 18px', borderRadius: '0 6px 0 0' }}>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(148, 40, 118, 0.08)' }}>
                  <td style={{ padding: '16px 18px', fontWeight: '600', color: '#2B1B4D' }}>Schema Markup</td>
                  <td style={{ padding: '16px 18px', color: '#5C5268' }}>Basic metadata without structured JSON-LD entity data</td>
                  <td style={{ padding: '16px 18px', color: '#5C5268' }}>Implement MedicalClinic, Physician, and FAQPage schemas</td>
                  <td style={{ padding: '16px 18px', color: '#942876', fontWeight: '700' }}>High (P1)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(148, 40, 118, 0.08)' }}>
                  <td style={{ padding: '16px 18px', fontWeight: '600', color: '#2B1B4D' }}>Appointment Funnel</td>
                  <td style={{ padding: '16px 18px', color: '#5C5268' }}>Unvalidated static form without real-time slot verification</td>
                  <td style={{ padding: '16px 18px', color: '#5C5268' }}>Interactive slot picker + instant SMS/WhatsApp integration</td>
                  <td style={{ padding: '16px 18px', color: '#942876', fontWeight: '700' }}>Critical (P0)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(148, 40, 118, 0.08)' }}>
                  <td style={{ padding: '16px 18px', fontWeight: '600', color: '#2B1B4D' }}>Service Pages</td>
                  <td style={{ padding: '16px 18px', color: '#5C5268' }}>Single-page landing format with truncated condition summaries</td>
                  <td style={{ padding: '16px 18px', color: '#5C5268' }}>Dedicated URLs for each treatment (e.g. `/acne-scar-treatment-bangalore`)</td>
                  <td style={{ padding: '16px 18px', color: '#942876', fontWeight: '700' }}>High (P1)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(148, 40, 118, 0.08)' }}>
                  <td style={{ padding: '16px 18px', fontWeight: '600', color: '#2B1B4D' }}>Mobile UX & Speed</td>
                  <td style={{ padding: '16px 18px', color: '#5C5268' }}>WebP images used; needs responsive layout optimization</td>
                  <td style={{ padding: '16px 18px', color: '#5C5268' }}>Fast Vite SPA structure with zero CLS & 95+ Mobile PageSpeed score</td>
                  <td style={{ padding: '16px 18px', color: '#942876', fontWeight: '700' }}>Completed ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommended Keyword Clusters */}
        <div className="location-card-box" style={{ padding: '40px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', marginBottom: '16px', color: '#2B1B4D' }}>
            Target Keyword Clusters for South Bangalore
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '24px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(148, 40, 118, 0.15)', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.04)' }}>
              <h4 style={{ color: '#942876', marginBottom: '10px', fontSize: '16px' }}>Local Discovery Keywords</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: '#5C5268', lineHeight: '1.8' }}>
                <li>dermatologist in Yelachenahalli</li>
                <li>skin clinic in JP Nagar Bangalore</li>
                <li>skin doctor near Kanakapura Road</li>
                <li>best cosmetologist South Bangalore</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(148, 40, 118, 0.15)', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.04)' }}>
              <h4 style={{ color: '#942876', marginBottom: '10px', fontSize: '16px' }}>Procedure Keywords</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: '#5C5268', lineHeight: '1.8' }}>
                <li>acne scar treatment cost Bangalore</li>
                <li>laser hair removal Yelachenahalli</li>
                <li>chemical peel clinic Bangalore</li>
                <li>Growth Factor Therapy hair loss</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(148, 40, 118, 0.15)', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.04)' }}>
              <h4 style={{ color: '#942876', marginBottom: '10px', fontSize: '16px' }}>Question & Answer Keywords</h4>
              <ul style={{ paddingLeft: '20px', fontSize: '13px', color: '#5C5268', lineHeight: '1.8' }}>
                <li>Are clinical face peels safe?</li>
                <li>How many laser hair sessions are needed?</li>
                <li>Is vitiligo punch grafting permanent?</li>
                <li>How to treat hormonal acne scars?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
