'use client';

import React, { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function SiteFooter() {
  const { personal } = portfolioData;
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left mono-text">
          <span>&copy; <span id="current-year">{currentYear}</span> {personal.name}</span>
          <span className="footer-sep">/</span>
          <span>TÜM HAKLARI SAKLIDIR</span>
        </div>
        <div className="footer-right mono-text">
          <a href="#hero" className="back-to-top" onClick={scrollToTop}>
            &uarr; BAŞA DÖN
          </a>
        </div>
      </div>
    </footer>
  );
}
