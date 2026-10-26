'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function EducationSkillsSection() {
  const { education, certificates, skills, languages } = portfolioData;

  return (
    <section className="section-block" id="egitim">
      <div className="section-header">
        <div className="section-title-wrap">
          <span className="section-num mono-text">[07]</span>
          <h2 className="section-title">EĞİTİM &amp; YETKİNLİKLER</h2>
        </div>
        <span className="section-tag mono-text">AKADEMİK &amp; TEKNİK ALTYAPI</span>
      </div>

      <div className="edu-skills-layout">
        {/* Eğitim & Sertifikalar */}
        <div className="edu-column">
          <div className="sub-block-title mono-text">// AKADEMİK EĞİTİM</div>

          {education.map((edu, idx) => (
            <div className="edu-card" key={idx}>
              <div className="edu-date mono-text">{edu.period}</div>
              <div className="company-logo-wrap" style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="company-logo"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                )}
                <h3 className="edu-school" style={{ margin: 0 }}>
                  {edu.school}
                </h3>
              </div>
              <p className="edu-degree">{edu.degree}</p>
              <div className="edu-badge mono-text">{edu.gpa}</div>
            </div>
          ))}

          <div className="sub-block-title mono-text" style={{ marginTop: '2rem' }}>
            // SERTİFİKALAR
          </div>
          <ul className="cert-list">
            {certificates.map((cert, idx) => (
              <li className="cert-item" key={idx}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  {cert.logo && (
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="company-logo"
                      style={{ flexShrink: 0 }}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  )}
                  <div>
                    <span className="cert-name" style={{ display: 'block' }}>{cert.title}</span>
                    <span className="cert-issuer mono-text">{cert.issuer}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Teknik Yetenekler Grid */}
        <div className="skills-column">
          <div className="sub-block-title mono-text">// TEKNİK YETENEK MATRİSİ</div>

          {skills.map((group, idx) => (
            <div className="skill-group" key={idx}>
              <h4 className="skill-group-title mono-text">{group.category}</h4>
              <div className="skill-tags">
                {group.skills.map((skill, sIdx) => (
                  <span className="skill-tag" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="skill-group">
            <h4 className="skill-group-title mono-text">DİLLER &amp; İLETİŞİM</h4>
            <div className="lang-grid mono-text">
              {languages.map((lang, idx) => (
                <div className="lang-item" key={idx}>
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
