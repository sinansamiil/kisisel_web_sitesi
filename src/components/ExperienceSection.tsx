'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section className="section-block" id="deneyim">
      <div className="section-header">
        <div className="section-title-wrap">
          <span className="section-num mono-text">[04]</span>
          <h2 className="section-title">İŞ DENEYİMİ</h2>
        </div>
        <span className="section-tag mono-text">MÜHENDİSLİK &amp; PROFESYONEL KARİYER</span>
      </div>

      <div className="experience-table">
        {experiences.map((exp, idx) => (
          <div className="exp-row" key={idx}>
            <div className="exp-date mono-text">{exp.period}</div>
            <div className="exp-role-company">
              <h3 className="exp-role">{exp.role}</h3>
              <div className="company-logo-wrap">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="company-logo"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                )}
                <span className="exp-company mono-text" style={{ margin: 0 }}>
                  {exp.company}
                </span>
              </div>
            </div>
            <div className="exp-details">
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
