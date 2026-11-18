'use client';

import { useState, useRef, useEffect } from 'react';
import { site, waLink } from '@/lib/site';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AiSparkleIcon } from './AiSparkleIcon';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  time: string;
  chips?: Array<{ label: string; query?: string; isCta?: boolean }>;
}

export function FloatingWidgets() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const initialMessages: Message[] = [
    {
      id: 1,
      text: "Welcome to Medicare Skin & Cosmetic Clinic. How can Dr. Sujay M's clinical team assist you today?",
      isBot: true,
      time: 'Just now',
      chips: [
        { label: 'Dr. Sujay M Profile', query: 'Tell me about Dr Sujay M' },
        { label: 'Acne Scar Treatment', query: 'Tell me about Acne Scar Treatment' },
        { label: 'Melasma & Pigmentation', query: 'How is melasma treated?' },
        { label: 'Laser Hair Removal', query: 'Tell me about Laser Hair Removal' },
        { label: 'Hair Fall & GFT', query: 'Tell me about Hair Fall Growth Factor Therapy' },
        { label: 'Clinic Location & Timings', query: 'Where is the clinic located?' },
        { label: 'Book Consultation', isCta: true }
      ]
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const whatsappUrl = waLink(
    'Hello Medicare Skin Clinic, I would like to book a consultation with Dr. Sujay M.'
  );

  useEffect(() => {
    if (isAiOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isAiOpen]);

  useEffect(() => {
    const handleOpenAi = () => setIsAiOpen(true);
    window.addEventListener('open-medicare-ai', handleOpenAi);
    return () => window.removeEventListener('open-medicare-ai', handleOpenAi);
  }, []);

  const handleProcessQuery = (userQuery: string) => {
    if (!userQuery.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: userQuery,
      isBot: false,
      time: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    setTimeout(() => {
      const lower = userQuery.toLowerCase();
      let replyText = '';
      let replyChips: Array<{ label: string; query?: string; isCta?: boolean }> = [];

      if (lower.includes('doctor') || lower.includes('sujay') || lower.includes('profile')) {
        replyText =
          'Dr. (Mrs.) Sujay M (MBBS, DDVL) is a Senior Dermatologist & Dermatosurgeon with over 18 years of clinical experience (Bangalore Medical College postgraduate, 2005). Every patient receives individual diagnosis without non-medical technician delegation.';
        replyChips = [
          { label: 'Book Appointment with Dr. Sujay', isCta: true },
          { label: 'Clinic Location & Timings', query: 'Where is the clinic located?' }
        ];
      } else if (lower.includes('acne') || lower.includes('pimple') || lower.includes('scar')) {
        replyText =
          'For Acne Scars & Breakouts, Dr. Sujay tailors protocols according to scar morphology, depth, and skin phototype:\n• Subcision for tethered rolling scars\n• Fractional resurfacing & MNRF\n• Medical chemical peels\nIndividual assessment determines suitability.';
        replyChips = [
          { label: 'Book Acne Scar Consultation', isCta: true },
          { label: 'Melasma & Pigmentation', query: 'How is melasma treated?' }
        ];
      } else if (lower.includes('melasma') || lower.includes('pigment')) {
        replyText =
          'Melasma and dermal pigmentation are treated with low-fluence Q-Switched Nd:YAG laser toning and doctor-formulated chemical peels, avoiding heat rebound on Indian skin types.';
        replyChips = [
          { label: 'Book Pigmentation Consultation', isCta: true },
          { label: 'Laser Hair Removal', query: 'Tell me about Laser Hair Removal' }
        ];
      } else if (lower.includes('laser') || lower.includes('hair removal')) {
        replyText =
          'Laser hair reduction is performed with US-FDA cleared diode cooling lasers calibrated safely for Indian skin phototypes (Fitzpatrick III-V) under dermatologist supervision.';
        replyChips = [
          { label: 'Book Laser Session', isCta: true },
          { label: 'Hair Fall & GFT', query: 'Tell me about Hair Fall' }
        ];
      } else if (lower.includes('hair') || lower.includes('fall') || lower.includes('prp') || lower.includes('gft')) {
        replyText =
          'For hair thinning and hair fall, Dr. Sujay conducts trichoscopic scalp diagnostics followed by medical therapies and autologous Growth Factor Therapy (GFT/PRP) to revive dormant hair roots.';
        replyChips = [
          { label: 'Book Hair Consultation', isCta: true },
          { label: 'Clinic Location & Timings', query: 'Where is the clinic located?' }
        ];
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('metro')) {
        replyText = `Medicare Skin & Cosmetic Clinic\nJyothi Kendriya Vidyalaya Back Gate, 2nd Main, 2nd Cross, Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road, Bengaluru 560078.\nLandmark: Directly Opposite Yelachenahalli Metro Station (Pillar 100).\nPhone: ${site.phoneDisplay}\nConsultation Hours: Mon-Sat 10:30 AM - 1:30 PM & 5:30 PM - 8:30 PM`;
        replyChips = [{ label: 'Book Appointment Now', isCta: true }];
      } else {
        replyText =
          'Thank you for reaching out. Dr. Sujay M personally reviews all clinical consultations at Medicare Skin Clinic in South Bengaluru.';
        replyChips = [
          { label: 'Book Consultation', isCta: true },
          { label: 'Dr. Sujay M Profile', query: 'Tell me about Dr Sujay M' }
        ];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: replyText,
          isBot: true,
          time: getCurrentTime(),
          chips: replyChips
        }
      ]);
    }, 450);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleProcessQuery(inputVal);
  };

  return (
    <>
      {/* AI Assistant Chat Modal */}
      {isAiOpen && (
        <div className="floating-aichat-window" role="dialog" aria-label="Medicare AI Dermatology Assistant">
          {/* Header */}
          <div className="aichat-header">
            <div className="aichat-header-left">
              <div className="aichat-avatar-circle">
                <AiSparkleIcon size={18} color="#FFFFFF" />
              </div>
              <div>
                <strong className="aichat-title">Medicare AI Assistant</strong>
                <span className="aichat-status">Clinical Guidance &bull; Online</span>
              </div>
            </div>
            <button
              type="button"
              className="aichat-close-btn"
              onClick={() => setIsAiOpen(false)}
              aria-label="Close Assistant"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div className="aichat-messages-box">
            {messages.map((m) => (
              <div key={m.id} className={`chat-message-row ${m.isBot ? 'bot-row' : 'user-row'}`}>
                <div className={`chat-bubble ${m.isBot ? 'bot-bubble' : 'user-bubble'}`}>
                  {m.text}
                </div>
                <span className="chat-timestamp">{m.time}</span>

                {/* Chips */}
                {m.chips && m.chips.length > 0 && (
                  <div className="aichat-chips-container">
                    {m.chips.map((chip, cIdx) => (
                      <button
                        type="button"
                        key={cIdx}
                        className={`aichat-chip-btn ${chip.isCta ? 'cta-chip' : ''}`}
                        onClick={() => {
                          if (chip.isCta) {
                            setIsAiOpen(false);
                            window.location.href = '/book-appointment/';
                          } else if (chip.query) {
                            handleProcessQuery(chip.query);
                          }
                        }}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <form className="aichat-input-bar" onSubmit={handleFormSubmit}>
            <input
              type="text"
              className="aichat-text-input"
              placeholder="Ask about acne, melasma, lasers, timings..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button type="submit" className="aichat-send-button" aria-label="Send query">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Buttons: AI Button on Top, WhatsApp on Bottom */}
      <div className="floating-action-stack" aria-label="Quick contact and assistance actions">
        {/* Floating AI Button (Top) */}
        <button
          type="button"
          className="floating-action-circle btn-ai-assistant"
          onClick={() => setIsAiOpen(!isAiOpen)}
          title="Medicare AI Dermatology Assistant"
          aria-label="Ask Medicare AI Assistant"
        >
          <AiSparkleIcon size={24} color="#FFFFFF" className="ai-sparkle-icon" />
          <span className="ai-online-indicator" aria-hidden="true" />
        </button>

        {/* Floating WhatsApp Button (Bottom) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-circle btn-whatsapp-direct"
          title="Chat with Medicare Skin Clinic on WhatsApp"
          aria-label="Contact Medicare Skin Clinic on WhatsApp"
        >
          <WhatsAppIcon size={28} color="#FFFFFF" />
        </a>
      </div>
    </>
  );
}

export default FloatingWidgets;
