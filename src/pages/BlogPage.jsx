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
    <div style={{ padding: '60px 0', background: '#FDF9FB' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <span style={{ background: '#FFF', color: '#942876', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
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
            style={{ paddingLeft: '48px', height: '48px', fontSize: '15px' }}
          />
        </div>

        {/* Blog Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', marginBottom: '60px' }}>
          {filteredPosts.map((post) => (
            <div key={post.id} style={{ background: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', border: '1px solid #EBE0EA', boxShadow: '0 8px 25px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' }}>
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
                  style={{ alignSelf: 'flex-start', background: '#2B1B4D', color: '#FFF', padding: '8px 18px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Read Full Article <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

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
