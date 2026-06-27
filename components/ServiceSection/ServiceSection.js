import React, { useState } from 'react';
import { DevServices, AIServices, CloudServices } from '../../api/service';

/* ── Pill badge colours per tab ─────────────────────────────────── */
const TAB_META = {
  dev:   { label: 'Development',       accent: '#59C378', glow: 'rgba(89,195,120,0.18)' },
  ai:    { label: 'AI Development',    accent: '#FFD700', glow: 'rgba(255,215,0,0.18)'  },
  cloud: { label: 'Cloud & Hosting',   accent: '#48C5EA', glow: 'rgba(72,197,234,0.18)' },
};

/* ── Individual service card ─────────────────────────────────────── */
const ServiceCard = ({ service, accent, glow }) => (
  <div className="col-lg-4 col-md-6 col-12" style={{ marginBottom: '30px' }}>
    <div className="svc-premium-card" style={{
      background: 'linear-gradient(145deg,#222120,#1a1a19)',
      border: `1px solid rgba(255,255,255,0.07)`,
      borderRadius: '18px',
      padding: '36px 28px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
      position: 'relative',
      overflow: 'hidden',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.borderColor = `${accent}55`;
      e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4), 0 0 30px ${glow}`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      {/* Top accent line */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:'2px',
        background:`linear-gradient(90deg,transparent,${accent},transparent)`,
        opacity: 0.7,
      }} />

      {/* Icon circle */}
      <div style={{
        width: '64px', height: '64px', borderRadius: '16px',
        background: `linear-gradient(135deg,${accent}22,${accent}08)`,
        border: `1px solid ${accent}33`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <i className={`fi ${service.icon}`} style={{ fontSize: '28px', color: accent, lineHeight: 1 }} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Space Grotesk',sans-serif",
        fontWeight: 700, fontSize: '18px', color: '#fff',
        lineHeight: 1.3, margin: 0,
      }}>
        {service.sTitle}
      </h3>

      {/* Description */}
      <p style={{
        color: '#9a9a9a', fontSize: '14px', lineHeight: 1.75,
        margin: 0, flex: 1,
      }}>
        {service.description}
      </p>

      {/* Tech badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        background: `${accent}12`, border: `1px solid ${accent}30`,
        borderRadius: '50px', padding: '5px 14px',
        fontSize: '11px', fontWeight: 600, color: accent,
        letterSpacing: '0.04em', width: 'fit-content',
      }}>
        <span style={{ width:6, height:6, borderRadius:'50%', background:accent, display:'inline-block' }} />
        {service.badge}
      </div>
    </div>
  </div>
);

/* ── Main component ──────────────────────────────────────────────── */
const ServiceSection = (props) => {
  const [activeTab, setActiveTab] = useState('dev');

  const tabData = {
    dev:   DevServices,
    ai:    AIServices,
    cloud: CloudServices,
  };

  const current = tabData[activeTab];
  const { accent, glow } = TAB_META[activeTab];

  return (
    <div className={`wpo-service-area section-padding ${props.sClass || ''}`} id="service">
      <div className="container">

        {/* ── Section header ── */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{
            color: '#FFD700', fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '10px',
          }}>
            What I Offer
          </p>
          <h2 style={{
            fontFamily: "'Space Grotesk',sans-serif",
            fontWeight: 800, fontSize: 'clamp(28px,4vw,46px)',
            color: '#fff', margin: 0, lineHeight: 1.15,
          }}>
            My Core Services
          </h2>
          <p style={{ color: '#666', fontSize: '15px', marginTop: '14px', maxWidth: '540px', margin: '14px auto 0' }}>
            Full-stack development, AI engineering, and cloud deployment — all under one roof.
          </p>
        </div>

        {/* ── Tabs ── */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '12px',
          marginBottom: '48px', flexWrap: 'wrap',
        }}>
          {Object.entries(TAB_META).map(([key, meta]) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  padding: '12px 28px',
                  borderRadius: '50px',
                  border: `2px solid ${isActive ? meta.accent : 'rgba(255,255,255,0.1)'}`,
                  background: isActive
                    ? `linear-gradient(135deg,${meta.accent}22,${meta.accent}08)`
                    : 'rgba(255,255,255,0.03)',
                  color: isActive ? meta.accent : '#666',
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700, fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.02em',
                  boxShadow: isActive ? `0 0 20px ${meta.glow}` : 'none',
                }}
              >
                {meta.label}
              </button>
            );
          })}
        </div>

        {/* ── Cards grid ── */}
        <div className="row" style={{ alignItems: 'stretch' }}>
          {current.map(service => (
            <ServiceCard
              key={service.Id}
              service={service}
              accent={accent}
              glow={glow}
            />
          ))}
        </div>
      </div>

      {/* Background glow shape */}
      <div className="ab-shape">
        <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
          <g opacity="0.25" filter="url(#filter0_f_svc)">
            <circle cx="247.5" cy="747.5" r="247.5" fill={accent} />
          </g>
          <defs>
            <filter id="filter0_f_svc" x="-500" y="0" width="1495" height="1495"
              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ServiceSection;