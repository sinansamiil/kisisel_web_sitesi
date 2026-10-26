import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export default function EditorialManifesto() {
  const { manifesto } = portfolioData;

  return (
    <section className="editorial-manifesto">
      <div className="section-label-bar">
        <span className="mono-text">{manifesto.num} // MANİFESTO</span>
        <span className="mono-text">{manifesto.tag}</span>
      </div>
      <div className="manifesto-content">
        <h2 className="giant-headline">{manifesto.headline}</h2>
      </div>
    </section>
  );
}
