import React from 'react';
import { Calendar } from 'lucide-react';

export default function BeforeAfterBanner({ onOpenBooking }) {
  return (
    <section className="consultation-banner-section">
      <div className="container">
        <div className="consultation-banner-grid">
          <div className="before-after-card">
            <img src="/images/imageye___-_imgi_14_Hair-Treatment.webp" alt="Hair loss and scalp therapy before after results" />
          </div>

          <div className="consultation-banner-content">
            <h2 className="consultation-banner-title">
              Struggling with Stubborn Skin Concerns or Hair Issues?
            </h2>
            <p className="consultation-banner-desc">
              At <strong>Medicare Skin & Cosmetic Clinic</strong>, we bring together medical expertise and cutting-edge technology to offer advanced, result-oriented skin and hair treatments designed just for you.
            </p>
            <button
              className="btn-primary consultation-banner-btn"
              onClick={onOpenBooking}
            >
              <Calendar size={18} /> Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

