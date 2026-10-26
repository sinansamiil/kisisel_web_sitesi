'use client';

import React from 'react';
import DitherCanvas from './DitherCanvas';
import { portfolioData } from '@/data/portfolioData';

export default function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section className="masthead" id="hero">
      <div className="masthead-name-wrapper">
        <h1 className="masthead-title">{personal.name}</h1>
        <p className="masthead-subtitle">{personal.title}</p>
      </div>

      <div className="hero-grid">
        <div className="hero-canvas-cell">
          <div className="matrix-canvas-container">
            <DitherCanvas />
            <div className="canvas-overlay-content">
              <span className="tag-pill mono-text">GÖMÜLÜ &middot; EDGE AI &middot; NEXT.JS</span>
              <h2 className="hero-statement">
                KODLAMAYI ZORLUKLARI AŞAN, ÇÖZÜM ÜRETEN BİR MÜHENDİSLİK DİSİPLİNİNE DÖNÜŞTÜRÜYORUM.
              </h2>
              <p className="hero-description">
                İHA kritik uçuş kontrolünden elektrikli araç kontrol ünitelerine (VCU/BMS), Edge AI gerçek zamanlı nesne algılamadan ölçeklenebilir Next.js platformlarına uzanan çok disiplinli yazılım mühendisliği.
              </p>
              <div className="hero-actions">
                <a href="#projeler" className="btn btn-solid">
                  <span>PROJELERİ İNCELE</span>
                  <span className="btn-arrow">&rarr;</span>
                </a>
                <a href="#iletisim" className="btn btn-outline">
                  <span>İLETİŞİME GEÇ</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-profile-cell">
          <div className="profile-card">
            <div className="profile-media-box">
              <div className="profile-visual-container">
                <img
                  src="/assets/profile.jpg"
                  alt={personal.name}
                  className="profile-real-photo"
                  id="hero-profile-photo"
                />
                <div className="portrait-badge mono-text">DEV // {personal.name}</div>
              </div>
            </div>
            <div className="profile-meta-list mono-text">
              <div className="meta-row">
                <span className="meta-key">LOKASYON</span>
                <span className="meta-val">{personal.location}</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">EĞİTİM</span>
                <span className="meta-val">{personal.educationShort}</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">2. LİSANS</span>
                <span className="meta-val">{personal.secondDegreeShort}</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">AKTİF ROL</span>
                <span className="meta-val">{personal.activeRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
