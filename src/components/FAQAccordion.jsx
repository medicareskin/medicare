import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faqs-section" style={{ padding: '80px 0', background: 'transparent' }}>
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: '45px', textAlign: 'center' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', color: '#942876', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '10px', border: '1px solid rgba(255, 255, 255, 0.95)', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            <HelpCircle size={14} /> PATIENT CLARIFICATIONS
          </span>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '38px', fontWeight: 650, color: '#153F39', marginBottom: '12px' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '16px', color: '#5C5268', maxWidth: '650px', margin: '0 auto' }}>
            Common questions regarding clinical safety, downtime, post-care, and appointment scheduling.
          </p>
        </div>

        <div className="faq-container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-card-3d ${isOpen ? 'active-3d' : ''}`}
                onClick={() => toggleFaq(idx)}
                style={{
                  marginBottom: '16px',
                  borderRadius: '20px',
                  background: isOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(28px) saturate(190%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(190%)',
                  border: isOpen ? '1.5px solid rgba(200, 80, 155, 0.5)' : '1.5px solid rgba(255, 255, 255, 0.92)',
                  boxShadow: isOpen
                    ? '0 16px 40px rgba(148, 40, 118, 0.12), inset 0 2px 3px #FFFFFF'
                    : '0 8px 24px rgba(148, 40, 118, 0.05), inset 0 1.5px 2px #FFFFFF',
                  padding: '22px 26px',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isOpen ? 'translateY(-3px)' : 'translateY(0)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: isOpen ? 'linear-gradient(135deg, #942876 0%, #C8509B 100%)' : 'rgba(200, 80, 155, 0.12)',
                        color: isOpen ? '#FFFFFF' : '#942876',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13px',
                        fontWeight: '700',
                        flexShrink: 0,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontSize: '19px',
                        color: '#153F39',
                        margin: 0,
                        fontWeight: isOpen ? '700' : '650',
                        lineHeight: '1.4'
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.8)',
                      border: '1px solid rgba(148, 40, 118, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: '0 2px 6px rgba(148, 40, 118, 0.08)'
                    }}
                  >
                    <ChevronDown size={20} color="#942876" />
                  </div>
                </div>

                {isOpen && (
                  <div
                    style={{
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(148, 40, 118, 0.1)',
                      fontSize: '15px',
                      color: '#5C5268',
                      lineHeight: '1.7',
                      paddingLeft: '46px'
                    }}
                  >
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
