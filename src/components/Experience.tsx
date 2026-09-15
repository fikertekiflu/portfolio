'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>// 04. EXPERIENCE & JOURNEY</span>
          </div>
          <h2 className="section-title">
            Track <span className="accent">Record.</span>
          </h2>
          <p className="section-desc">
            A chronological record of full-stack software engineering at Matrix Technology, freelance fintech solutions, and intensive systems specialization.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            paddingLeft: '1.5rem',
            borderLeft: '2px solid rgba(0, 255, 136, 0.25)',
            marginLeft: '0.75rem',
          }}
        >
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card reveal-fade-up"
              style={{
                position: 'relative',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.07)',
                transitionDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Timeline Pin Dot */}
              <div
                style={{
                  position: 'absolute',
                  top: '2rem',
                  left: '-2.35rem',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--accent-primary)',
                  boxShadow: '0 0 12px var(--accent-primary)',
                }}
              />

              {/* Period & Type badge */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>

                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'var(--text-secondary)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {exp.type}
                </span>
              </div>

              {/* Role & Org */}
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.25rem' }}>
                {exp.role}
              </h3>
              <div style={{ fontSize: '0.95rem', color: '#94a3b8', fontWeight: 500, marginBottom: '1rem' }}>
                {exp.organization}
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {exp.description}
              </p>

              {/* Bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-primary)', marginTop: '0.2rem', flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      background: 'rgba(0, 255, 136, 0.06)',
                      border: '1px solid rgba(0, 255, 136, 0.18)',
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
