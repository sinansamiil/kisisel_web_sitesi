'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { useToast } from '@/context/ToastContext';

export default function ContactSection() {
  const { personal } = portfolioData;
  const { showToast } = useToast();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      showToast(`[OK] PANOYA KOPYALANDI: ${personal.email}`);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = personal.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      showToast(`[OK] PANOYA KOPYALANDI: ${personal.email}`);
    }
  };

  return (
    <section className="section-block contact-block" id="iletisim">
      <div className="section-header">
        <div className="section-title-wrap">
          <span className="section-num mono-text">[08]</span>
          <h2 className="section-title">İLETİŞİM &amp; BAĞLANTI</h2>
        </div>
        <span className="section-tag mono-text">BİRLİKTE ÇALIŞALIM</span>
      </div>

      <div className="contact-editorial-layout">
        <div className="contact-cta">
          <h3 className="contact-giant-text">
            BİR PROJENİZ Mİ VAR?<br />
            <span>BİRLİKTE İNŞA EDELİM.</span>
          </h3>
          <p className="contact-subtext">
            Gömülü sistemler, İHA yazılımları, yapay zeka entegrasyonu veya yeni nesil web projeleri için dilediğiniz zaman ulaşabilirsiniz.
          </p>

          <div className="contact-email-box">
            <span className="email-label mono-text">E-POSTA ADRESİ:</span>
            <div className="email-action-row">
              <a href={`mailto:${personal.email}`} className="email-address">
                {personal.email}
              </a>
              <button
                className="copy-btn mono-text"
                id="copy-email-btn"
                onClick={handleCopyEmail}
                type="button"
              >
                <span>KOPYALA</span>
              </button>
            </div>
          </div>
        </div>

        <div className="contact-channels-grid">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-card"
          >
            <div className="channel-top mono-text">
              <span>LINKEDIN</span>
              <span className="channel-arrow">&rarr;</span>
            </div>
            <div className="channel-val">Sinan Şamil Köylü</div>
            <span className="channel-hint mono-text">Bağlantı Kur &middot; Mesaj Gönder</span>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="channel-card"
          >
            <div className="channel-top mono-text">
              <span>GITHUB</span>
              <span className="channel-arrow">&rarr;</span>
            </div>
            <div className="channel-val">github.com/sinansamiil</div>
            <span className="channel-hint mono-text">Kodlar &middot; Katkılar &middot; Repolar</span>
          </a>

          <div className="channel-card info-only" style={{ gridColumn: '1 / -1' }}>
            <div className="channel-top mono-text">
              <span>KONUM</span>
              <span className="channel-dot"></span>
            </div>
            <div className="channel-val">{personal.location}</div>
            <span className="channel-hint mono-text">Türkiye &middot; Uzaktan / Hibrit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
