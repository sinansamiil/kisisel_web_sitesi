import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function MarqueeGallery() {
  const { gallery } = portfolioData;

  return (
    <section className="section-block marquee-gallery-section">
      <div className="section-header">
        <div className="section-title-wrap">
          <span className="section-num mono-text">[06]</span>
          <h2 className="section-title">PORTRE &amp; ÇALIŞMA ALANI</h2>
        </div>
        <div className="marquee-direction-tag mono-text">
          <span>&rarr; OTOMATİK SAĞA AKIŞ</span>
        </div>
      </div>

      <div className="marquee-viewport" id="photo-marquee">
        {gallery.length > 0 ? (
          <div className="marquee-track right-scroll">
            {/* 1. Loop */}
            {gallery.map((item, idx) => (
              <div className="marquee-card" key={`g1-${idx}`}>
                <img src={item.src} alt={item.label} loading="lazy" />
                <span className="marquee-card-label mono-text">{item.label}</span>
              </div>
            ))}

            {/* 2. Seamless Duplicate Loop */}
            {gallery.map((item, idx) => (
              <div className="marquee-card" key={`g2-${idx}`}>
                <img src={item.src} alt={item.label} loading="lazy" />
                <span className="marquee-card-label mono-text">{item.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              padding: '3rem 1.5rem',
              textAlign: 'center',
              border: '1px dashed var(--border-subtle)',
              backgroundColor: 'var(--bg-secondary)',
            }}
          >
            <span className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              // PORTRE &amp; ÇALIŞMA ALANI GÖRSELLERİ GÜNCELLENİYOR...
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
