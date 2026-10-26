'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function VoluntarySection() {
  const { volunteering } = portfolioData;

  return (
    <section className="section-block">
      <div className="section-header">
        <div className="section-title-wrap">
          <span className="section-num mono-text">[05]</span>
          <h2 className="section-title">GÖNÜLLÜLÜK &amp; LİDERLİK</h2>
        </div>
        <span className="section-tag mono-text">TOPLULUK &amp; ETKİ</span>
      </div>

      <div className="voluntary-grid">
        {volunteering.map((vol, idx) => (
          <div className="voluntary-card" key={idx}>
            <div className="vol-meta mono-text">
              <span>{vol.period}</span>
              <span className="vol-loc">{vol.location}</span>
            </div>
            <h3 className="vol-title">{vol.role}</h3>
            <div className="company-logo-wrap" style={{ marginBottom: '0.85rem', marginTop: 0 }}>
              {vol.logo && (
                <img
                  src={vol.logo}
                  alt={vol.organization}
                  className="company-logo"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              )}
              <h4 className="vol-org mono-text" style={{ margin: 0 }}>
                {vol.organization}
              </h4>
            </div>
            <p className="vol-desc">{vol.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
