'use client';

import React, { useState } from 'react';

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="header-left">
        <a href="#hero" className="brand-monogram" aria-label="Sinan Şamil Köylü Ana Sayfa" onClick={closeMenu}>
          {/* Custom Sinan Şamil Köylü (SŞK) Personal Brand Logo */}
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" fill="currentColor" rx="2" />
            <text
              x="21"
              y="26"
              fill="var(--bg-primary)"
              fontSize="14"
              fontFamily="'JetBrains Mono', 'Space Grotesk', monospace"
              fontWeight="900"
              letterSpacing="1.2"
              textAnchor="middle"
            >
              SŞK
            </text>
            <rect x="11" y="32" width="20" height="2" fill="var(--status-active)" />
          </svg>
        </a>
      </div>

      <nav className={`main-nav ${mobileOpen ? 'active' : ''}`} aria-label="Ana Menü">
        <ul className="nav-list mono-text">
          <li>
            <a href="#hakkimda" className="nav-link" onClick={closeMenu}>
              Hakkımda
            </a>
          </li>
          <li>
            <a href="#projeler" className="nav-link" onClick={closeMenu}>
              Projeler
            </a>
          </li>
          <li>
            <a href="#deneyim" className="nav-link" onClick={closeMenu}>
              Deneyim
            </a>
          </li>
          <li>
            <a href="#egitim" className="nav-link" onClick={closeMenu}>
              Eğitim & Yetkinlik
            </a>
          </li>
          <li>
            <a href="#iletisim" className="nav-link highlight" onClick={closeMenu}>
              İletişim
            </a>
          </li>
        </ul>
      </nav>

      <button
        className="mobile-menu-btn"
        aria-label="Menüyü Aç/Kapat"
        id="mobile-toggle"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
