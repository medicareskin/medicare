import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../data/clinicData';
import { 
  BookOpen, Clock, Calendar, User, Search, ArrowRight, X, 
  Sparkles, CheckCircle2, ChevronRight, Tag, ShieldCheck, Phone
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function BlogPage({ onOpenBooking, onNavigatePage, onSelectTreatment }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Dynamic SEO Structured Data for Medical Blog
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Dermatology Guides & Clinical Articles | Medicare Skin Bengaluru";

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
      "name": "Medicare Skin Clinical Dermatology Journal",
      "description": "Evidence-based skin care, laser treatments, and hair restoration guides authored by Dr. Sujay M, MBBS, DDVL.",
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
          "name": "Dr. Sujay M",
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

  const categories = ['All', 'Laser Treatments', 'Aesthetics & Glow', 'Treatment Guides', 'Skin Care', 'Hair Restoration'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
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
    <div style={{ padding: '60px 0 90px', background: 'transparent' }}>
      <div className="container">
        
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
          <span style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid #EBE0EA',
            color: '#942876',
            padding: '6px 20px',
            borderRadius: '30px',
            fontSize: '12.5px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '14px',
            boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)'
          }}>
            <Sparkles size={14} color="#942876" />
            DOCTOR-REVIEWED DERMATOLOGY GUIDES
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', margin: '0 0 16px', lineHeight: 1.2 }}>
            Skin, Laser &amp; Hair Care Journal
          </h1>
          <p style={{ fontSize: '16.5px', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
            In-depth patient guides, procedure comparisons, and post-treatment protocols authored by Senior Dermatologist <strong>Dr. Sujay M (MBBS, DDVL)</strong> to help you make evidence-based decisions about your skin health.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '24px',
                fontSize: '13.5px',
                fontWeight: 700,
                border: activeCategory === cat ? '1.5px solid #942876' : '1.5px solid #EBE0EA',
                background: activeCategory === cat ? '#942876' : '#FFFFFF',
                color: activeCategory === cat ? '#FFFFFF' : '#5C5268',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(148, 40, 118, 0.2)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ maxWidth: '600px', margin: '0 auto 46px', position: 'relative' }}>
          <Search size={18} color="#942876" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            className="form-control"
            placeholder="Search guides by topic (melasma, laser, hydrafacial, acne scars)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              paddingLeft: '48px',
              paddingRight: searchTerm ? '44px' : '16px',
              height: '50px',
              fontSize: '14.5px',
              borderRadius: '25px',
              background: '#FFFFFF',
              border: '1.5px solid #EBE0EA',
              boxShadow: '0 6px 20px rgba(43, 27, 77, 0.04)'
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(148, 40, 118, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#942876'
              }}
              title="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid-responsive-3" style={{ gap: '28px', marginBottom: '60px' }}>
            {filteredPosts.map((post) => (
              <div 
                key={post.id} 
                style={{
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  border: '1.5px solid #EBE0EA',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 10px 30px rgba(43, 27, 77, 0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    color: '#942876',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '11.5px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
                  }}>
                    {post.category}
                  </span>
                </div>

                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', color: '#8C8099', marginBottom: '10px' }}>
                      <Calendar size={13} color="#942876" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock size={13} color="#942876" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '21px', color: '#2B1B4D', marginBottom: '10px', lineHeight: 1.3, fontWeight: 700 }}>
                      {post.title}
                    </h3>

                    <p style={{ fontSize: '13.5px', color: '#5C5268', lineHeight: 1.6, marginBottom: '20px' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F2ECF2', paddingTop: '16px' }}>
                    <button
                      onClick={() => setSelectedPost(post)}
                      style={{
                        background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                        color: '#FFF',
                        padding: '9px 18px',
                        borderRadius: '20px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(148, 40, 118, 0.2)'
                      }}
                    >
                      Read Full Article <ArrowRight size={14} />
                    </button>

                    {post.treatmentTab && (
                      <button
                        onClick={() => handleReadTreatment(post.treatmentTab)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#2B73AF',
                          fontSize: '12px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}
                      >
                        Procedure Details →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '22px', marginBottom: '60px', border: '1.5px solid #EBE0EA' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', marginBottom: '10px' }}>
              No Guides Found
            </h3>
            <p style={{ color: '#5C5268', fontSize: '15px', marginBottom: '20px' }}>
              We couldn't find any articles matching "{searchTerm}". Try another keyword or reset the filter.
            </p>
            <button className="btn-primary" onClick={() => { setSearchTerm(''); setActiveCategory('All'); }} style={{ display: 'inline-flex', margin: '0 auto' }}>
              Reset Filters
            </button>
          </div>
        )}

        {/* ── FULL ARTICLE MODAL READER ───────────────────────────────── */}
        {selectedPost && (
          <div className="modal-overlay" onClick={() => setSelectedPost(null)} style={{ zIndex: 1200 }}>
            <div 
              className="modal-content-box" 
              onClick={(e) => e.stopPropagation()} 
              style={{
                maxWidth: '820px',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '26px',
                padding: '36px',
                background: '#FFFFFF',
                boxShadow: '0 24px 60px rgba(43, 27, 77, 0.25)'
              }}
            >
              <button 
                className="modal-close-btn" 
                onClick={() => setSelectedPost(null)}
                style={{ top: '20px', right: '20px' }}
              >
                <X size={22} />
              </button>

              <div style={{ height: '300px', borderRadius: '18px', overflow: 'hidden', marginBottom: '24px' }}>
                <img src={selectedPost.image} alt={selectedPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <span style={{ background: '#FAF0F6', color: '#942876', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 800 }}>
                  {selectedPost.category}
                </span>
                <span style={{ fontSize: '12px', color: '#7E7288' }}>•</span>
                <span style={{ fontSize: '12.5px', color: '#7E7288' }}>Published: {selectedPost.date}</span>
                <span style={{ fontSize: '12px', color: '#7E7288' }}>•</span>
                <span style={{ fontSize: '12.5px', color: '#7E7288' }}>{selectedPost.readTime}</span>
              </div>

              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', color: '#2B1B4D', margin: '0 0 14px', lineHeight: 1.25 }}>
                {selectedPost.title}
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#2B73AF', fontWeight: 700, marginBottom: '22px' }}>
                <ShieldCheck size={16} />
                <span>Reviewed by {selectedPost.author} · Medicare Skin &amp; Cosmetic Clinic</span>
              </div>

              <div style={{ fontSize: '15.5px', color: '#3A2E47', lineHeight: 1.75, borderBottom: '1px solid #ECE3EC', paddingBottom: '20px', marginBottom: '24px' }}>
                <p style={{ margin: 0 }}>
                  {selectedPost.content}
                </p>
              </div>

              {/* Sub-sections rendering */}
              {selectedPost.sections && selectedPost.sections.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '32px' }}>
                  {selectedPost.sections.map((sec, sIdx) => (
                    <div key={sIdx} style={{ background: '#FAF8FB', borderRadius: '16px', padding: '20px 24px', border: '1px solid #EBE2EB' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#2B1B4D', margin: '0 0 8px' }}>
                        {sec.heading}
                      </h3>
                      <p style={{ fontSize: '14.5px', color: '#5C5268', lineHeight: 1.7, margin: 0 }}>
                        {sec.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons Row */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', borderTop: '1px solid #ECE3EC', paddingTop: '24px' }}>
                <button
                  className="btn-primary"
                  onClick={() => { setSelectedPost(null); onOpenBooking(); }}
                  style={{
                    flex: '1 1 200px',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)',
                    padding: '13px 22px',
                    borderRadius: '12px'
                  }}
                >
                  <Calendar size={17} /> Book Dermatologist Consultation
                </button>

                {selectedPost.treatmentTab && (
                  <button
                    onClick={() => handleReadTreatment(selectedPost.treatmentTab)}
                    style={{
                      flex: '1 1 200px',
                      padding: '13px 22px',
                      borderRadius: '12px',
                      background: '#F0F6FA',
                      border: '1.5px solid #D2E4F2',
                      color: '#2B73AF',
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
                  className="btn-secondary"
                  onClick={() => setSelectedPost(null)}
                  style={{ borderRadius: '12px', padding: '13px 20px' }}
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
