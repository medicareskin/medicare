import React from 'react';

export interface ClinicalTrustMetricsProps {
  className?: string;
  theme?: 'light' | 'soft';
}

const STATS_ITEMS = [
  { value: '25,000+', label: 'Patients Consulted' },
  { value: '18+ Years', label: 'Dedicated Clinical Practice' },
  { value: '100%', label: 'Doctor-Led Care' },
  { value: '4.9 / 5.0', label: 'Patient Satisfaction' },
];

const TRUST_POINTS = [
  {
    title: 'MBBS, DDVL',
    desc: 'Qualified Dermatologist · 18+ Yrs Exp.',
  },
  {
    title: 'Direct In-Person Care',
    desc: 'No technicians managing diagnosis',
  },
  {
    title: 'South Bengaluru',
    desc: 'Opp. Yelachenahalli Metro Station',
  },
  {
    title: 'US FDA Lasers',
    desc: 'Safe for Indian skin phototypes III-V',
  },
];

export function ClinicalTrustMetrics({ className = '', theme = 'light' }: ClinicalTrustMetricsProps) {
  return (
    <div className={`clinical-trust-metrics-wrapper ${theme === 'soft' ? 'theme-soft' : ''} ${className}`}>
      {/* Top Clinical Stats Row */}
      <div className="metrics-stats-strip">
        <div className="container">
          <div className="metrics-stats-grid">
            {STATS_ITEMS.map((item, idx) => (
              <div key={idx} className="metrics-stat-item">
                <strong className="stat-number">{item.value}</strong>
                <span className="stat-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Trust Band Row */}
      <div className="metrics-trust-band">
        <div className="container">
          <div className="metrics-trust-grid">
            {TRUST_POINTS.map((pt, idx) => (
              <div key={idx} className="metrics-trust-item">
                <div className="trust-item-header">
                  <span className="trust-bullet">•</span>
                  <strong className="trust-title">{pt.title}</strong>
                </div>
                <small className="trust-desc">{pt.desc}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClinicalTrustMetrics;
