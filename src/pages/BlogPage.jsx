import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, CLINIC_INFO } from '../data/clinicData';
import { 
  BookOpen, Clock, Calendar, User, Search, ArrowRight, X, 
  Sparkles, CheckCircle2, ChevronRight, Tag, ShieldCheck, Phone, Heart
} from 'lucide-react';

export default function BlogPage({ onOpenBooking, onNavigatePage, onSelectTreatment }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamic SEO Structured Data for Medical & Beauty Blog
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Dermatology & Skin Radiance Journal | Medicare Skin Bengaluru";

    const scriptId = 'json-ld-blog';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": "https://www.medicareskin.com/blog/#blog",
      "name": "Medicare Skin Clinical Dermatology & Radiance Journal",
      "description": "Evidence-based beauty, glass skin radiance, laser treatments, chemical peels, and anti-ageing guides authored by Dr. (Mrs.) Sujay M, MBBS, DDVL.",
      "publisher": {
        "@type": "MedicalClinic",
        "name": "Medicare Skin & Cosmetic Clinic",
        "telephone": "+91-9242855707",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jyothi Layout, near Yelachenahalli Metro Station, Kanakapura Main Road",
          "addressLocality": "Bengaluru",
          "postalCode": "560078",
          "addressCountry": "IN"
        }
      },
      "blogPost": BLOG_POSTS.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "author": {
          "@type": "Person",
          "name": "Dr. (Mrs.) Sujay M",
          "jobTitle": "Consultant Dermatologist (MBBS, DDVL)"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Medicare Skin & Cosmetic Clinic"
        },
        "datePublished": post.date
      }))
    };

    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      document.title = originalTitle;
      const tag = document.getElementById(scriptId);
      if (tag) tag.remove();
    };
  }, []);

  const categories = [
    'All',
    'Beauty & Skin Radiance',
    'Laser Treatments',
    'Aesthetics & Glow',
    'Skin Care',
    'Treatment Guides',
    'Hair Restoration'
  ];

  const quickTopics = [
    { label: 'Glass Skin Radiance', query: 'glass skin' },
    { label: 'Bridal Countdown', query: 'bridal' },
    { label: 'Peels vs Bleach', query: 'bleach' },
    { label: 'Collagen & Anti-Ageing', query: 'collagen' },
    { label: 'Melasma Laser', query: 'melasma' },
    { label: 'HydraFacial Glow', query: 'hydrafacial' }
  ];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch = 
      !term ||
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term) ||
      (post.content && post.content.toLowerCase().includes(term));
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleReadTreatment = (tab) => {
    setSelectedPost(null);
    if (onNavigatePage) {
      onNavigatePage(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ padding: '48px 0 96px', background: 'transparent', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 36px' }}>
          <span style={{
            background: 'rgba(21, 63, 57, 0.08)',
            border: '1px solid rgba(197, 161, 116, 0.45)',
            color: '#153F39',
            padding: '7px 20px',
            borderRadius: '30px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <Sparkles size={14} color="#C5A174" />
            DOCTOR-REVIEWED DERMATOLOGY & BEAUTY JOURNAL
          </span>
          <h1 style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            color: '#153F39',
            margin: '0 0 16px',
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            fontWeight: 650
          }}>
            Clinical Skin, Beauty & Radiance Guides
          </h1>
          <p style={{
            fontFamily: "'Manrope', -apple-system, sans-serif",
            fontSize: '16.5px',
            color: '#34465B',
            lineHeight: 1.65,
            margin: 0
          }}>
            Authentic, evidence-based skin science, pre-event countdowns, glass skin barrier protocols, and advanced laser insights authored by Senior Dermatologist <strong>Dr. (Mrs.) Sujay M (MBBS, DDVL)</strong>.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '22px'
        }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchTerm('');
                }}
                style={{
                  padding: '9px 20px',
                  borderRadius: '26px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  fontFamily: "'Manrope', sans-serif",
                  border: isActive ? '1.5px solid #153F39' : '1.5px solid rgba(21, 63, 57, 0.16)',
                  background: isActive ? '#153F39' : 'rgba(255, 255, 255, 0.85)',
                  color: isActive ? '#FFFFFF' : '#253532',
                  cursor: 'pointer',
                  transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 6px 18px rgba(21, 63, 57, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.03)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Quick Topic Chips */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '28px'
        }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Popular Topics:
          </span>
          {quickTopics.map((qt, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSearchTerm(qt.query);
                setActiveCategory('All');
              }}
              style={{
                background: 'rgba(245, 239, 230, 0.75)',
                border: '1px solid rgba(197, 161, 116, 0.4)',
                borderRadius: '16px',
                padding: '4px 12px',
                fontSize: '12.5px',
                fontWeight: 650,
                color: '#153F39',
                cursor: 'pointer',
                transition: 'all 0.18s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#153F39';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(245, 239, 230, 0.75)';
                e.currentTarget.style.color = '#153F39';
              }}
            >
              {qt.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ maxWidth: '640px', margin: '0 auto 48px', position: 'relative' }}>
          <Search size={18} color="#C5A174" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            className="form-control"
            placeholder="Search beauty secrets, glass skin, bridal timeline, melasma, peels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              paddingLeft: '50px',
              paddingRight: searchTerm ? '44px' : '18px',
              height: '52px',
              fontSize: '14.5px',
              fontFamily: "'Manrope', sans-serif",
              borderRadius: '26px',
              background: '#FFFFFF',
              border: '1.5px solid rgba(21, 63, 57, 0.18)',
              boxShadow: '0 8px 24px rgba(21, 63, 57, 0.05)',
              width: '100%',
              boxSizing: 'border-box'
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(21, 63, 57, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#153F39'
              }}
              title="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid-responsive-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px',
            marginBottom: '60px'
          }}>
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(21, 63, 57, 0.1)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 12px 32px rgba(21, 63, 57, 0.06)',
                  transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedPost(post)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 48px rgba(21, 63, 57, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(21, 63, 57, 0.06)';
                }}
              >
                <div style={{ height: '225px', overflow: 'hidden', position: 'relative', background: '#F4EFEA' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onError={(e) => { e.target.src = '/images/luxury_indian_skin_model.png'; }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: post.category === 'Beauty & Skin Radiance' ? '#153F39' : 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(10px)',
                    color: post.category === 'Beauty & Skin Radiance' ? '#FFFFFF' : '#153F39',
                    border: post.category === 'Beauty & Skin Radiance' ? '1px solid #C5A174' : '1px solid rgba(21, 63, 57, 0.15)',
                    padding: '5px 13px',
                    borderRadius: '16px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}>
                    {post.category}
                  </span>
                </div>

                <div style={{ padding: '24px 26px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', color: '#64748B', marginBottom: '10px', fontWeight: 600 }}>
                      <Calendar size={13} color="#C5A174" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock size={13} color="#C5A174" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontSize: '20px',
                      color: '#153F39',
                      marginBottom: '10px',
                      lineHeight: 1.32,
                      fontWeight: 650
                    }}>
                      {post.title}
                    </h3>

                    <p style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: '13.5px',
                      color: '#34465B',
                      lineHeight: 1.62,
                      marginBottom: '20px'
                    }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(21, 63, 57, 0.08)', paddingTop: '16px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPost(post);
                      }}
                      style={{
                        background: '#153F39',
                        color: '#FFF',
                        padding: '9px 18px',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        fontFamily: "'Manrope', sans-serif",
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(21, 63, 57, 0.2)'
                      }}
                    >
                      Read Full Guide <ArrowRight size={13} />
                    </button>

                    {post.treatmentTab && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReadTreatment(post.treatmentTab);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#C5A174',
                          fontSize: '12px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}
                      >
                        Clinical Details →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '24px',
            marginBottom: '60px',
            border: '1.5px solid rgba(21, 63, 57, 0.12)'
          }}>
            <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '24px', color: '#153F39', marginBottom: '10px' }}>
              No Articles Found
            </h3>
            <p style={{ color: '#34465B', fontSize: '15px', marginBottom: '22px' }}>
              We couldn't find any articles matching "{searchTerm}". Try a broader keyword like "glow", "peel", "laser", or reset the filter.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}
              style={{
                background: '#153F39',
                color: '#FFFFFF',
                padding: '10px 24px',
                borderRadius: '20px',
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ── FULL ARTICLE MODAL READER ───────────────────────────────── */}
        {selectedPost && (
          <div className="modal-overlay" onClick={() => setSelectedPost(null)} style={{ zIndex: 1200, padding: '20px' }}>
            <div 
              className="modal-content-box" 
              onClick={(e) => e.stopPropagation()} 
              style={{
                maxWidth: '860px',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '28px',
                padding: '36px',
                background: '#FFFFFF',
                boxShadow: '0 24px 70px rgba(21, 63, 57, 0.28)',
                border: '1px solid rgba(21, 63, 57, 0.12)',
                position: 'relative'
              }}
            >
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedPost(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(21, 63, 57, 0.08)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#153F39'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ height: '320px', borderRadius: '20px', overflow: 'hidden', marginBottom: '24px', background: '#F4EFEA' }}>
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.src = '/images/luxury_indian_skin_model.png'; }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span style={{
                  background: '#153F39',
                  color: '#FFFFFF',
                  padding: '5px 14px',
                  borderRadius: '16px',
                  fontSize: '11.5px',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  {selectedPost.category}
                </span>
                <span style={{ fontSize: '12px', color: '#64748B' }}>•</span>
                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Published: {selectedPost.date}</span>
                <span style={{ fontSize: '12px', color: '#64748B' }}>•</span>
                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>{selectedPost.readTime}</span>
              </div>

              <h2 style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 'clamp(24px, 3.5vw, 32px)',
                color: '#153F39',
                margin: '0 0 14px',
                lineHeight: 1.24,
                fontWeight: 650
              }}>
                {selectedPost.title}
              </h2>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13.5px',
                color: '#153F39',
                fontWeight: 700,
                background: 'rgba(245, 239, 230, 0.7)',
                padding: '8px 16px',
                borderRadius: '12px',
                marginBottom: '22px',
                border: '1px solid rgba(197, 161, 116, 0.35)'
              }}>
                <ShieldCheck size={18} color="#C5A174" />
                <span>Medically Authored &amp; Reviewed by {selectedPost.author} · Medicare Skin &amp; Cosmetic Clinic</span>
              </div>

              <div style={{
                fontSize: '16px',
                fontFamily: "'Manrope', sans-serif",
                color: '#253532',
                lineHeight: 1.75,
                borderBottom: '1px solid rgba(21, 63, 57, 0.1)',
                paddingBottom: '22px',
                marginBottom: '26px'
              }}>
                <p style={{ margin: 0 }}>
                  {selectedPost.content}
                </p>
              </div>

              {/* Sub-sections rendering */}
              {selectedPost.sections && selectedPost.sections.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                  {selectedPost.sections.map((sec, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        background: '#FAF8F5',
                        borderRadius: '18px',
                        padding: '22px 26px',
                        border: '1px solid rgba(21, 63, 57, 0.08)'
                      }}
                    >
                      <h3 style={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontSize: '19px',
                        fontWeight: 650,
                        color: '#153F39',
                        margin: '0 0 10px',
                        lineHeight: 1.3
                      }}>
                        {sec.heading}
                      </h3>
                      <div style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '14.5px',
                        color: '#34465B',
                        lineHeight: 1.72,
                        margin: 0,
                        whiteSpace: 'pre-line'
                      }}>
                        {sec.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', borderTop: '1px solid rgba(21, 63, 57, 0.1)', paddingTop: '24px' }}>
                <button
                  onClick={() => { setSelectedPost(null); onOpenBooking(); }}
                  style={{
                    flex: '1 1 220px',
                    justifyContent: 'center',
                    background: '#153F39',
                    color: '#FFFFFF',
                    padding: '14px 24px',
                    borderRadius: '14px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 6px 18px rgba(21, 63, 57, 0.25)'
                  }}
                >
                  <Calendar size={17} /> Book Dermatologist Consultation
                </button>

                {selectedPost.treatmentTab && (
                  <button
                    onClick={() => handleReadTreatment(selectedPost.treatmentTab)}
                    style={{
                      flex: '1 1 200px',
                      padding: '14px 22px',
                      borderRadius: '14px',
                      background: 'rgba(245, 239, 230, 0.85)',
                      border: '1.5px solid rgba(197, 161, 116, 0.5)',
                      color: '#153F39',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    Explore Treatment Page <ArrowRight size={16} />
                  </button>
                )}

                <button
                  onClick={() => setSelectedPost(null)}
                  style={{
                    borderRadius: '14px',
                    padding: '14px 22px',
                    background: '#FFFFFF',
                    border: '1px solid rgba(21, 63, 57, 0.2)',
                    color: '#64748B',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
