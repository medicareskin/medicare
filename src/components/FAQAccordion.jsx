import React, { useState } from 'react';
import { FAQS } from '../data/clinicData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section" id="faqs-section">
      <div className="container">
        <div className="section-header-center">
          <h2>FAQ's</h2>
          <p>Common questions about clinical procedures, recovery, safety, and results</p>
        </div>

        <div className="faq-container">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
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
          })}
        </div>
      </div>
    </section>
  );
}
