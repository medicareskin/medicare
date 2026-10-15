import React, { useState } from 'react';
import { GOOGLE_REVIEWS } from '../data/clinicData';
import { Star, Quote, Calendar, CheckCircle2, ThumbsUp } from 'lucide-react';

export default function PatientReviewsPage({ onOpenBooking }) {
  const [reviewsList, setReviewsList] = useState(GOOGLE_REVIEWS);
  const [filterTag, setFilterTag] = useState('All');
  const [newReview, setNewReview] = useState({ name: '', treatment: 'Acne Scar Treatment', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);

  const tags = ["All", "Mole Removal", "Skin Tag Removal", "Clinical Care", "Laser Hair Removal", "GFT Hair Therapy", "Acne Scar Revision", "Chemical Peel"];

  const filteredReviews = filterTag === 'All'
    ? reviewsList
    : reviewsList.filter(r => r.tag === filterTag);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    const reviewObj = {
      id: Date.now(),
      author: newReview.name,
      rating: Number(newReview.rating),
      tag: newReview.treatment,
      text: newReview.text
    };
    setReviewsList([reviewObj, ...reviewsList]);
    setSubmitted(true);
    setNewReview({ name: '', treatment: 'Acne Scar Treatment', rating: 5, text: '' });
  };

  return (
    <div style={{ padding: '60px 0', background: 'transparent' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.75)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.95)', padding: '8px 20px', borderRadius: '30px', boxShadow: '0 4px 15px rgba(148, 40, 118, 0.06)', marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FFB800" stroke="none" />
              ))}
            </div>
            <span style={{ fontWeight: '700', color: '#2B1B4D', fontSize: '16px' }}>5.0 Google Rating (4.9+ Star Average)</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', color: '#2B1B4D', marginBottom: '16px' }}>
            Patient Reviews & Feedback
          </h1>
          <p style={{ fontSize: '17px', color: '#5C5268', lineHeight: '1.7' }}>
            Read verified, authentic testimonials from patients across Bangalore who received dermatological and aesthetic procedures at Medicare Skin Clinic.
          </p>
        </div>

        {/* Tag Filter Bar */}
        <div className="category-tags-row" style={{ marginBottom: '40px' }}>
          {tags.map((t) => (
            <button
              key={t}
              className={`category-tag-btn ${filterTag === t ? 'active' : ''}`}
              onClick={() => setFilterTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid-responsive-3" style={{ gap: '28px', marginBottom: '60px' }}>
          {filteredReviews.map((item) => (
            <div key={item.id} className="review-card-item" style={{ flex: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFB800" stroke="none" />
                  ))}
                </div>
                {item.tag && <span className="review-tag-badge">{item.tag}</span>}
              </div>
              <p className="review-quote-text">"{item.text}"</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="review-author-name">— {item.author}</span>
                <span style={{ fontSize: '11px', color: '#942876', fontWeight: '600' }}>✓ Verified Patient</span>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Patient Review Form Card */}
        <div className="location-card-box" style={{ padding: '36px', maxWidth: '700px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#2B1B4D', marginBottom: '8px', textAlign: 'center' }}>
            Share Your Experience
          </h3>
          <p style={{ fontSize: '14px', color: '#5C5268', textAlign: 'center', marginBottom: '24px' }}>
            Were you treated by Dr. Sujay M? Leave your feedback to help future patients.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px' }}>
              <CheckCircle2 size={56} color="#942876" style={{ margin: '0 auto 12px' }} />
              <h4 style={{ color: '#2B1B4D', fontSize: '20px', marginBottom: '8px' }}>Thank You for Your Feedback!</h4>
              <p style={{ color: '#5C5268', fontSize: '14px' }}>Your review has been published below.</p>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="grid-responsive-2" style={{ gap: '16px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D' }}>Your Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D' }}>Treatment Received</label>
                  <select
                    className="form-control"
                    value={newReview.treatment}
                    onChange={(e) => setNewReview({ ...newReview, treatment: e.target.value })}
                  >
                    <option>Acne Scar Treatment</option>
                    <option>Laser Hair Removal</option>
                    <option>Growth Factor Therapy (GFT)</option>
                    <option>Chemical Peel</option>
                    <option>Skin Tag / Mole Removal</option>
                    <option>General Dermatology Care</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D' }}>Star Rating</label>
                <select
                  className="form-control"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                >
                  <option value={5}>★★★★★ (5 Stars - Excellent)</option>
                  <option value={4}>★★★★☆ (4 Stars - Good)</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#2B1B4D' }}>Your Review *</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Share details of your consultation, treatment comfort, or results..."
                  value={newReview.text}
                  onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ background: '#942876', justifyContent: 'center' }}>
                <ThumbsUp size={16} /> Submit Patient Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
