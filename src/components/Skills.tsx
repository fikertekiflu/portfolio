'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Layout, Server, Database, Terminal, CheckCircle } from 'lucide-react';

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout size={22} style={{ color: 'var(--accent-primary)' }} />;
      case 'Server':
        return <Server size={22} style={{ color: '#38bdf8' }} />;
      case 'Database':
        return <Database size={22} style={{ color: '#a78bfa' }} />;
      case 'Terminal':
      default:
        return <Terminal size={22} style={{ color: '#f59e0b' }} />;
    }
  };

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>// 02. TECHNICAL COMPETENCY</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="accent">Tech Stack.</span>
          </h2>
          <p className="section-desc">
            Full-stack engineering capabilities honed through professional experience at Matrix Technology, freelance fintech architectures, and intensive ALX backend systems specialization.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="glass-card reveal-scale-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                border: '1px solid rgba(255,255,255,0.07)',
                transitionDelay: `${idx * 0.12}s`,
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {getIcon(category.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', letterSpacing: '-0.01em' }}>
                    {category.title}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {category.skills.length} core proficiencies
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0,255,136,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(0,255,136,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#e2e8f0' }}>
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px',
                        background: 'rgba(0, 255, 136, 0.07)',
                        border: '1px solid rgba(0, 255, 136, 0.18)',
                        color: 'var(--accent-primary)',
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
