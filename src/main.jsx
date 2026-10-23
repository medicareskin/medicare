import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('MedicareApp ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FFFDFB 0%, #FAF5F8 100%)',
          fontFamily: "'Funnel Display', 'Outfit', system-ui, sans-serif",
          padding: '24px',
          textAlign: 'center',
          color: '#241442'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(148, 40, 118, 0.15)',
            boxShadow: '0 20px 48px -12px rgba(36, 20, 66, 0.12)',
            padding: '40px 32px',
            maxWidth: '480px',
            width: '100%'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <img
                src="/images/imageye___-_imgi_1_brand-logo.webp"
                alt="Medicare Skin Clinic"
                style={{ height: '56px', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#942876', margin: '0 0 12px 0' }}>
              Restoring Clinical View
            </h2>
            <p style={{ fontSize: '14px', color: '#685879', lineHeight: '1.6', margin: '0 0 20px 0' }}>
              Medicare Skin Clinic loaded with fresh updates. Click below to refresh your view.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: 'linear-gradient(135deg, #942876 0%, #D4AF37 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '999px',
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: '650',
                cursor: 'pointer',
                boxShadow: '0 8px 20px -4px rgba(148, 40, 118, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              Refresh Clinical View
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}

