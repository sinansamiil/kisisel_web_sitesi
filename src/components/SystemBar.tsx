'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useToast } from '@/context/ToastContext';

export default function SystemBar() {
  const [timeString, setTimeString] = useState<string>('00:00:00');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  // Clock effect
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Istanbul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatted = new Intl.DateTimeFormat('tr-TR', options).format(now);
      setTimeString(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Theme setup & sync
  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    window.dispatchEvent(new Event('theme-change'));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>, lang: 'TR' | 'EN') => {
    e.preventDefault();
    const filename = lang === 'TR' ? 'Sinan_Samil_Koylu_CV_TR.pdf' : 'Sinan_Samil_Koylu_CV_EN.pdf';
    const url = `/api/cv?lang=${lang}`;

    if (lang === 'TR') {
      showToast('[OK] TÜRKÇE CV İNDİRİLİYOR (PDF)...');
    } else {
      showToast('[OK] ENGLISH CV DOWNLOADING (PDF)...');
    }

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 400);
  };

  return (
    <div className="system-bar">
      <div className="system-bar-inner">
        <div className="system-meta">
          <span className="status-indicator"></span>
          <span className="mono-text">DURUM: PROJELER & İŞBİRLİKLERİNE AÇIK</span>
          <span className="divider">/</span>
          <span className="mono-text" id="live-clock">
            KAYSERİ, TR — {timeString}
          </span>
        </div>

        <div className="system-controls">
          <button
            id="theme-toggle"
            className="system-btn"
            title="Temayı Değiştir"
            aria-label="Temayı Değiştir"
            onClick={toggleTheme}
          >
            <span className="theme-icon">◐</span>
            <span className="theme-label mono-text">
              MOD: {theme === 'dark' ? 'KOYU' : 'AÇIK'}
            </span>
          </button>

          {/* CV Download Dropdown Container */}
          <div
            className={`cv-dropdown-wrapper ${isDropdownOpen ? 'active' : ''}`}
            ref={dropdownRef}
          >
            <button
              id="cv-dropdown-btn"
              className="system-btn cv-main-btn"
              title="CV İndir"
              aria-expanded={isDropdownOpen}
              aria-label="CV İndir Seçenekleri"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen((prev) => !prev);
              }}
            >
              <span className="mono-text">CV İNDİR [PDF]</span>
              <span className="dropdown-arrow">▾</span>
            </button>
            <div className={`cv-dropdown-menu ${isDropdownOpen ? 'show' : ''}`} id="cv-menu">
              <a
                href="/api/cv?lang=TR"
                download="Sinan_Samil_Koylu_CV_TR.pdf"
                className="cv-option mono-text"
                id="cv-tr-link"
                onClick={(e) => handleDownload(e, 'TR')}
              >
                <span className="cv-flag">🇹🇷</span>
                <span className="cv-opt-title">TÜRKÇE CV [PDF]</span>
                <span className="cv-opt-action">&darr; İNDİR</span>
              </a>
              <a
                href="/api/cv?lang=EN"
                download="Sinan_Samil_Koylu_CV_EN.pdf"
                className="cv-option mono-text"
                id="cv-en-link"
                onClick={(e) => handleDownload(e, 'EN')}
              >
                <span className="cv-flag">🇬🇧</span>
                <span className="cv-opt-title">ENGLISH CV [PDF]</span>
                <span className="cv-opt-action">&darr; DOWNLOAD</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
