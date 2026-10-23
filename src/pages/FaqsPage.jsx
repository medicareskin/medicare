import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { Search, ChevronUp, ChevronDown, Calendar, HelpCircle } from 'lucide-react';

export default function FaqsPage({ onOpenBooking }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIdx, setOpenIdx] = useState(0);

  const filteredFaqs = FAQS.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.95)', color: '#942876', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '12px', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            ❓ Clinical Information & Safety FAQs
          </span>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '46px', color: '#153F39', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Find medical answers regarding treatment safety, procedure recovery, session counts, downtime, and consultation fees answered by Dr. Sujay M.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '600px', margin: '0 auto 40px', position: 'relative' }}>
          <Search size={20} color="#942876" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            className="form-control"
            placeholder="Search FAQs (e.g. laser hair, acne scars, peels, appointment)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '48px', height: '48px', fontSize: '15px' }}
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-container" style={{ marginBottom: '60px' }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="faq-item">
                  <button className="faq-question" onClick={() => setOpenIdx(isOpen ? null : idx)}>
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={22} color="#942876" /> : <ChevronDown size={22} color="#2B1B4D" />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', background: '#FDF9FB', borderRadius: '14px' }}>
              <p style={{ color: '#5C5268' }}>No matching FAQs found. You can submit your question via our contact form or call our clinic desk.</p>
            </div>
          )}
        </div>

        {/* Call To Action Banner */}
        <div className="location-card-box" style={{ padding: '45px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '30px', marginBottom: '12px', color: '#153F39' }}>
            Have a Specific Skin or Hair Question?
          </h2>
          <p style={{ fontSize: '15px', color: '#5C4D68', maxWidth: '550px', margin: '0 auto 20px' }}>
            Schedule an in-person diagnostic consultation with Dr. Sujay M (MBBS, DDVL).
          </p>
          <button className="btn-primary" onClick={onOpenBooking} style={{ margin: '0 auto' }}>
            <Calendar size={18} /> Book Consultation Slot
          </button>
        </div>
      </div>
    </div>
  );
}
