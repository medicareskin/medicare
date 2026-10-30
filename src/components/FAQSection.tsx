'use client';

import { useState } from 'react';

interface FaqItem {
  id: string;
  num: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    num: '01',
    question: 'Can Q-Switched laser safely treat melasma and dark spots on Indian skin?',
    answer:
      'Yes, when performed with low-fluence Nd:YAG protocols. Indian skin tones (Fitzpatrick IV–VI) have higher melanin content and can experience rebound darkening if treated with high heat. Dr. Sujay M utilizes calibrated sub-thermolytic energy parameters to gently shatter melanin clusters without heat buildup, backed by strict photoprotection protocols.'
  },
  {
    id: 'faq-2',
    num: '02',
    question: 'What is HydraFacial and how does it differ from a regular beauty parlour facial?',
    answer:
      'HydraFacial is a medical device treatment combining vortex vacuum suction, gentle chemical exfoliation, painless extraction, and concentrated antioxidant-peptide infusion. Unlike salon facials that involve manual steaming and physical pinching that can cause micro-tears or broken capillaries, HydraFacial uses calibrated fluidics to purify pores and restore dewy hydration with zero downtime.'
  },
  {
    id: 'faq-3',
    num: '03',
    question: 'Is Laser Hair Reduction permanent and safe for Indian skin tones?',
    answer:
      'Laser hair reduction achieves significant long-term reduction (typically 70% to 90% over a recommended series of 6 to 8 sessions). Our clinic utilizes US-FDA cleared Diode Laser technology operating at 808nm with integrated sapphire contact cooling, specifically calibrated to protect Indian skin phototypes (Fitzpatrick III to V) while targeting melanin in actively growing follicles.'
  },
  {
    id: 'faq-4',
    num: '04',
    question: 'What is the expected recovery time after Acne Scar Subcision?',
    answer:
      'Subcision combined with fractional microneedling RF may cause mild swelling or pinpoint redness for 24-48 hours. Most patients resume regular work and daily activities the very next day with broad-spectrum sunscreen and doctor-prescribed barrier recovery creams.'
  },
  {
    id: 'faq-5',
    num: '05',
    question: 'How does Growth Factor Therapy (GFT) treat severe hair fall?',
    answer:
      'GFT concentrates natural autologous growth factors from your own blood plasma and micro-infuses them into dormant hair follicles, halting shedding and triggering thick hair shaft regrowth within 3 to 4 clinical sessions.'
  },
  {
    id: 'faq-6',
    num: '06',
    question: 'Do I need a prior appointment before visiting Medicare Skin Clinic?',
    answer:
      'While walk-ins are accommodated based on doctor availability, prior booking via our website or WhatsApp (+91 92428 55707) is strongly recommended to eliminate waiting times and guarantee your dedicated consultation slot with Dr. Sujay M.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-numbered-section" id="faqs" aria-label="Frequently Asked Questions">
      <div className="container">
        {/* Section Header */}
        <div className="faq-section-head">
          <h2 className="faq-main-title">Frequently Asked Questions</h2>
          <p className="faq-main-subtitle">
            Clear, evidence-based answers to common questions about treatment safety, laser technology for Indian skin, downtime, and consultation appointments with Dr. Sujay M.
          </p>
        </div>

        {/* Numbered Accordion List */}
        <div className="faq-accordion-stack">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`faq-accordion-card ${isOpen ? 'active-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-accordion-header"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="faq-header-left">
                    <span className="faq-number-badge">{faq.num}</span>
                    <span className="faq-question-text">{faq.question}</span>
                  </div>

                  <span className={`faq-chevron-circle ${isOpen ? 'chevron-up' : 'chevron-down'}`}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="faq-accordion-body"
                    role="region"
                  >
                    <div className="faq-divider-line" />
                    <p className="faq-answer-text">{faq.answer}</p>
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

export default FAQSection;
