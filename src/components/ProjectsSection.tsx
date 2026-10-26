'use client';

import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '@/data/portfolioData';

type FilterType = 'all' | 'embedded' | 'ai' | 'web';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const { projects } = portfolioData;

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section className="section-block" id="projeler">
      <div className="section-header">
        <div className="section-title-wrap">
          <span className="section-num mono-text">[03]</span>
          <h2 className="section-title">SEÇİLMİŞ PROJELER</h2>
        </div>
        <div className="filter-controls mono-text" id="project-filters">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            TÜMÜ [{projects.length}]
          </button>
          <button
            className={`filter-btn ${activeFilter === 'embedded' ? 'active' : ''}`}
            onClick={() => setActiveFilter('embedded')}
          >
            GÖMÜLÜ &amp; İHA
          </button>
          <button
            className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            YAPAY ZEKA / EDGE
          </button>
          <button
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            WEB &amp; BULUT
          </button>
        </div>
      </div>

      <div className="projects-grid" id="projects-container">
        {filteredProjects.map((project) => (
          <article
            className="project-card"
            key={project.id}
            data-category={project.category}
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-card-header">
              <div className="project-tags mono-text">
                {project.tags.map((tag, idx) => (
                  <span className="badge" key={idx}>
                    {tag}
                  </span>
                ))}
              </div>
              <span className="project-id mono-text">{project.id}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <ul className="project-features mono-text">
              {project.features.map((feature, idx) => (
                <li key={idx}>+ {feature}</li>
              ))}
            </ul>
            <div className="project-card-footer">
              <span className="tech-stack mono-text">{project.techStack.join(' · ')}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              border: '2px solid var(--border-grid)',
              boxShadow: '8px 8px 0px var(--border-grid)',
              maxWidth: '680px',
              width: '100%',
              padding: '2.5rem',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="mono-text"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                fontSize: '1rem',
                fontWeight: 700,
                padding: '0.4rem 0.8rem',
                border: '1px solid var(--border-subtle)',
                background: 'var(--bg-secondary)',
                cursor: 'pointer',
              }}
            >
              [KAPAT ✕]
            </button>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <span
                className="mono-text"
                style={{
                  padding: '0.2rem 0.6rem',
                  backgroundColor: 'var(--text-primary)',
                  color: 'var(--bg-primary)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                }}
              >
                {selectedProject.id}
              </span>
              {selectedProject.tags.map((t, i) => (
                <span
                  key={i}
                  className="mono-text"
                  style={{
                    padding: '0.2rem 0.6rem',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.75rem',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.25rem' }}>
              {selectedProject.title}
            </h3>

            <p style={{ lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              {selectedProject.description}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 className="mono-text" style={{ fontSize: '0.85rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                // ÖNE ÇIKAN MİMARİ ÖZELLİKLER
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedProject.features.map((feat, i) => (
                  <li
                    key={i}
                    className="mono-text"
                    style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}
                  >
                    ✔ {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <div className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                TEKNOLOJİ YIĞINI: {selectedProject.techStack.join(' · ')}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
