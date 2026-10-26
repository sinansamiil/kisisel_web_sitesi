import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section className="section-block" id="hakkimda">
      <div className="section-header">
        <div className="section-title-wrap">
          <span className="section-num mono-text">{about.num}</span>
          <h2 className="section-title">HAKKIMDA</h2>
        </div>
        <span className="section-tag mono-text">{about.tag}</span>
      </div>

      <div className="about-grid">
        <div className="about-text-column">
          <p className="lead-text">{about.lead}</p>
          {about.paragraphs.map((p, idx) => (
            <p className="body-text" key={idx}>
              {p}
            </p>
          ))}
        </div>

        <div className="about-metrics-column">
          {about.metrics.map((metric, idx) => (
            <div className="metric-card" key={idx}>
              <span className="metric-number mono-text">{metric.number}</span>
              <span className="metric-title">{metric.title}</span>
              <p className="metric-desc">{metric.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
