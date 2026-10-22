import React, { useState, useRef, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, X, Send, Calendar, MapPin, Phone, UserCheck, Clock, CheckCheck } from 'lucide-react';

export default function FloatingWidgets({ onOpenBooking }) {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const messagesEndRef = useRef(null);

  const initialMessages = [
    {
      id: 1,
      text: "Welcome to Medicare Skin & Cosmetic Clinic. How can we assist you today?",
      isBot: true,
      time: "Just now",
      chips: [
        { label: "Dr. Sujay M Profile", query: "Tell me about Dr Sujay M" },
        { label: "Acne Scar Treatment", query: "Tell me about Acne Scar Treatment" },
        { label: "Laser Hair Removal", query: "Tell me about Laser Hair Removal" },
        { label: "Hair Fall & GFT", query: "Tell me about Hair Fall Growth Factor Therapy" },
        { label: "Clinic Location & Hours", query: "Where is the clinic located?" },
        { label: "Pricing & Fees", query: "What are the consultation fees?" },
        { label: "Book Consultation", isCta: true }
      ]
    }
  ];

  const [messages, setMessages] = useState(initialMessages);

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hello%20Medicare%20Skin%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Sujay%20M.`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiOpen) {
      scrollToBottom();
    }
  }, [messages, isAiOpen]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleProcessQuery = (userQuery) => {
    if (!userQuery.trim()) return;

    const userMsg = {
      id: Date.now(),
      text: userQuery,
      isBot: false,
      time: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    // Generate intelligent AI clinical reply
    setTimeout(() => {
      const lower = userQuery.toLowerCase();
      let replyText = "";
      let replyChips = [];
      let triggerBooking = false;

      if (lower.includes('doctor') || lower.includes('sujay') || lower.includes('profile')) {
        replyText = "Dr. (Mrs.) Sujay M (MBBS, DDVL) is a Senior Dermatologist & Cosmetologist with 18+ years of clinical experience from Bangalore Medical College (2005), providing individualised clinical assessment and evidence-based dermatology care.";
        replyChips = [
          { label: "Book Appointment with Dr. Sujay", isCta: true },
          { label: "Treatments Offered", query: "What treatments are offered?" }
        ];
      } else if (lower.includes('acne') || lower.includes('pimple') || lower.includes('scar')) {
        replyText = "For Acne Scars & Texture, care is planned according to scar type, depth, and skin tone:\n1. Subcision for selected tethered scars\n2. Device-assisted fractional or microneedling therapy\n3. Medical chemical peels\n\nIndividual assessment determines suitability. Realistic improvement varies with scar type.";
        replyChips = [
          { label: "Book Acne Scar Consultation", isCta: true },
          { label: "Laser Hair Removal", query: "Tell me about Laser Hair Removal" }
        ];
      } else if (lower.includes('laser') || lower.includes('hair removal')) {
        replyText = "Laser hair reduction is performed with selected parameters suited to Indian skin tones under dermatologist guidance. Number of sessions and response depend on hair density, cycle, and hormonal factors.";
        replyChips = [
          { label: "Book Laser Session", isCta: true },
          { label: "Hair Fall & GFT", query: "Tell me about Hair Fall" }
        ];
      } else if (lower.includes('hair fall') || lower.includes('thinning') || lower.includes('gft') || lower.includes('prp')) {
        replyText = "For hair fall and scalp thinning, Dr. Sujay M conducts clinical evaluation and trichoscopy to identify underlying causes, followed by personalised medical or regenerative supportive care.";
        replyChips = [
          { label: "Book Hair Consultation", isCta: true },
          { label: "Location & Directions", query: "Where is the clinic?" }
        ];
      } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('metro')) {
        replyText = `Medicare Skin & Cosmetic Clinic\nNear Yelachenahalli Metro Station, 2nd Main, 2nd Cross Jyothi Layout, Kanakapura Main Road, Bangalore – 560 078.\n\nPhone: ${CLINIC_INFO.phone}\nHours: Mon-Sat 10:00 AM - 7:00 PM`;
        replyChips = [
          { label: "Book Appointment Now", isCta: true }
        ];
      } else if (lower.includes('fee') || lower.includes('price') || lower.includes('cost') || lower.includes('charge')) {
        replyText = "We maintain affordable, transparent medical pricing. Consultation charges are modest and include a thorough digital skin/scalp diagnosis with Dr. Sujay M before any procedure starts.";
        replyChips = [
          { label: "Book Consultation", isCta: true }
        ];
      } else {
        replyText = "Thank you for asking. Medicare Skin Clinic provides evidence-based clinical dermatology, US-FDA laser care, and cosmetic procedures by Dr. Sujay M (MBBS, DDVL). Would you like to schedule a personal consultation?";
        replyChips = [
          { label: "Book Appointment", isCta: true },
          { label: "Clinic Location", query: "Where is the clinic?" }
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
    }, 500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleProcessQuery(inputVal);
  };

  return (
    <>
      {/* WhatsApp Style AI Assistant Chat Drawer Window */}
      {isAiOpen && (
        <div className="aichat-window active">
          {/* Header - Light Medicare Logo Aesthetic */}
          <div className="aichat-header" style={{ background: 'linear-gradient(135deg, #FAF4F8 0%, #F5ECF2 100%)', borderBottom: '1px solid #EBE0EA', color: '#2B1B4D' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ position: 'relative' }}>
                <img
                  src="/images/imageye___-_imgi_1_cropped-Medicare-Logo.webp"
                  onError={(e) => { e.target.src = "/images/imageye___-_imgi_6_dr-sujay.webp"; }}
                  alt="Medicare AI"
                  style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#FFF', padding: '2px', objectFit: 'contain' }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#C8509B',
                    border: '2px solid #FFF'
                  }}
                />
              </div>

              <div>
                <div style={{ fontWeight: '700', fontSize: '15px', color: '#2B1B4D', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Medicare AI <Sparkles size={14} style={{ color: '#FFB800' }} />
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsAiOpen(false)}
              style={{ background: 'none', border: 'none', color: '#942876', cursor: 'pointer', padding: '4px' }}
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="aichat-messages" style={{ background: '#FAF3F7' }}>
            {messages.map((m) => (
              <div key={m.id} style={{ display: 'flex', flexDirection: 'column', alignItems: m.isBot ? 'flex-start' : 'flex-end' }}>
                <div className={`chat-msg ${m.isBot ? 'bot' : 'user'}`} style={{ whiteSpace: 'pre-line' }}>
                  {m.text}
                </div>

                {/* Message Timestamp */}
                <span style={{ fontSize: '10px', color: '#8C8099', marginTop: '2px', marginHorizontal: '4px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                  {m.time} {m.isBot ? null : <CheckCheck size={12} style={{ color: '#942876' }} />}
                </span>

                {/* Question Chips */}
                {m.chips && m.chips.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px', maxWidth: '100%' }}>
                    {m.chips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        onClick={() => {
                          if (chip.isCta) {
                            setIsAiOpen(false);
                            onOpenBooking();
                          } else if (chip.query) {
                            handleProcessQuery(chip.query);
                          }
                        }}
                        style={{
                          background: chip.isCta ? 'linear-gradient(135deg, #942876 0%, #C8509B 100%)' : '#FFFFFF',
                          color: chip.isCta ? '#FFFFFF' : '#2B1B4D',
                          border: chip.isCta ? 'none' : '1px solid #EBE0EA',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 2px 6px rgba(148, 40, 118, 0.08)',
                          transition: 'all 0.2s ease'
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

          {/* Footer Input Bar */}
          <form className="aichat-input-area" onSubmit={handleFormSubmit} style={{ padding: '10px 14px' }}>
            <input
              type="text"
              className="aichat-input"
              placeholder="Ask about acne, laser, doctor..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              type="submit"
              className="aichat-send-btn"
              style={{ background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)', border: 'none', width: '38px', height: '38px', borderRadius: '50%', padding: '0', color: '#FFF' }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Strictly Vertical Floating Action Stack (AI Button on TOP, WhatsApp Button on BOTTOM) */}
      <div
        className="floating-action-stack"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
          zIndex: 9999
        }}
      >
        {/* AI Button on TOP */}
        <button
          className="floating-btn-circle btn-ai-chat"
          onClick={() => setIsAiOpen(!isAiOpen)}
          title="Ask Medicare AI Assistant"
          aria-label="AI Dermatology Assistant"
          style={{
            width: '52px',
            height: '52px',
            cursor: 'pointer'
          }}
        >
          <Sparkles size={22} style={{ color: '#FFD700', filter: 'drop-shadow(0 2px 6px rgba(255, 215, 0, 0.6))' }} />
        </button>

        {/* WhatsApp Button on BOTTOM */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="floating-btn-circle btn-whatsapp-chat"
          title="Chat with Medicare Skin Clinic on WhatsApp"
          aria-label="WhatsApp Chat"
          style={{
            width: '52px',
            height: '52px',
            cursor: 'pointer'
          }}
        >
          <img
            src="/images/WhatsApp.svg"
            onError={(e) => { e.target.src = "/WhatsApp.svg"; }}
            alt="WhatsApp"
            style={{ width: '28px', height: '28px', filter: 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
          />
        </a>
      </div>
    </>
  );
}
