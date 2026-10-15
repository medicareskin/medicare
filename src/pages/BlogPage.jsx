import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/clinicData';
import { BookOpen, Clock, Calendar, User, Search, ArrowRight, X } from 'lucide-react';

export default function BlogPage({ onOpenBooking }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = BLOG_POSTS.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <span style={{ background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.95)', color: '#942876', padding: '6px 18px', borderRadius: '30px', fontSize: '13px', fontWeight: '700', display: 'inline-block', marginBottom: '12px', boxShadow: '0 4px 14px rgba(148, 40, 118, 0.06)' }}>
            📚 Doctor-Reviewed Dermatology Articles
          </span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Skin & Hair Care Guides
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Educational articles and procedure guides authored by Senior Dermatologist Dr. Sujay M (MBBS, DDVL) to help you understand treatments, causes, and proper skin aftercare.
          </p>
        </div>

        {/* Search Input */}
        <div style={{ maxWidth: '600px', margin: '0 auto 40px', position: 'relative' }}>
          <Search size={20} color="#942876" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            className="form-control"
            placeholder="Search guides by condition (acne, hair fall, laser, peels)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '48px', paddingRight: searchTerm ? '44px' : '16px', height: '48px', fontSize: '15px' }}
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
              <X size={16} />
            </button>
          )}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid-responsive-2" style={{ gap: '32px', marginBottom: '60px' }}>
            {filteredPosts.map((post) => (
              <div key={post.id} className="location-card-box" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: 0 }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', color: '#8C8099', marginBottom: '10px' }}>
                      <span style={{ background: '#FBF4F8', color: '#942876', padding: '4px 10px', borderRadius: '12px', fontWeight: '700' }}>
                        {post.category}
                      </span>
                      <span>• {post.date}</span>
                      <span>• {post.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', marginBottom: '12px', lineHeight: '1.3' }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#5C5268', lineHeight: '1.6', marginBottom: '20px' }}>
                      {post.excerpt}
                    </p>
                  </div>
                  <button
                    className="read-more-btn"
                    onClick={() => setSelectedPost(post)}
                    style={{ alignSelf: 'flex-start', background: 'linear-gradient(135deg, #942876 0%, #C8509B 100%)', color: '#FFF', padding: '8px 18px', borderRadius: '20px', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(148, 40, 118, 0.2)' }}
                  >
                    Read Full Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(255, 255, 255, 0.6)', borderRadius: '20px', marginBottom: '60px', border: '1px solid rgba(148, 40, 118, 0.1)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', color: '#2B1B4D', marginBottom: '10px' }}>
              No Articles Found
            </h3>
            <p style={{ color: '#5C5268', fontSize: '15px', marginBottom: '20px' }}>
              We couldn't find any articles matching "{searchTerm}". Try another keyword or browse all guides.
            </p>
            <button className="btn-primary" onClick={() => setSearchTerm('')} style={{ display: 'inline-flex', margin: '0 auto' }}>
              Reset Search Filter
            </button>
          </div>
        )}

        {/* Full Article Modal */}
        {selectedPost && (
          <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
            <div className="modal-content-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
              <button className="modal-close-btn" onClick={() => setSelectedPost(null)}>
                <X size={24} />
              </button>
              <div style={{ height: '260px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src={selectedPost.image} alt={selectedPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ background: '#FBF4F8', color: '#942876', padding: '4px 12px', borderRadius: '14px', fontSize: '12px', fontWeight: '700' }}>
                {selectedPost.category}
              </span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '30px', color: '#2B1B4D', margin: '10px 0 14px', lineHeight: '1.25' }}>
                {selectedPost.title}
              </h2>
              <div style={{ fontSize: '13px', color: '#8C8099', marginBottom: '20px' }}>
                Authored by {selectedPost.author} on {selectedPost.date}
              </div>
              <p style={{ fontSize: '15px', color: '#5C5268', lineHeight: '1.8', marginBottom: '28px' }}>
                {selectedPost.content}
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn-primary" onClick={() => { setSelectedPost(null); onOpenBooking(); }} style={{ flex: 1, justifyContent: 'center', background: '#942876' }}>
                  <Calendar size={18} /> Book Related Consultation
                </button>
                <button className="btn-secondary" onClick={() => setSelectedPost(null)}>
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
