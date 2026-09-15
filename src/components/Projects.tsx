'use client';

import React, { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { ExternalLink, Sparkles, CheckCircle2, ArrowRight, Activity, TrendingUp, Layers, Terminal, ShieldCheck } from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack / SaaS', 'Fintech & Systems', 'Frontend & Web'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>// 01. SELECTED WORK</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <h2 className="section-title">
                Featured <span className="accent">Projects.</span>
              </h2>
              <p className="section-desc">
                Production-tested SaaS platforms, enterprise backend services, and high-concurrency architectures built from the ground up.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.45rem',
                background: 'rgba(255,255,255,0.03)',
                padding: '0.35rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.45rem 1rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    background: activeCategory === cat ? 'var(--accent-primary)' : 'transparent',
                    color: activeCategory === cat ? '#06160e' : 'var(--text-secondary)',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Showcase List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`glass-card ${isEven ? 'reveal-fade-left' : 'reveal-fade-right'}`}
      style={{
        padding: '2.5rem',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'linear-gradient(135deg, rgba(14, 20, 27, 0.8) 0%, rgba(9, 13, 18, 0.95) 100%)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.75rem',
          alignItems: 'center',
        }}
      >
        {/* Left column: Info & Actions */}
        <div style={{ order: 1 }}>
          {/* Header metadata */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {project.category}
            </span>
            {project.badge && (
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(0, 255, 136, 0.12)',
                  color: 'var(--accent-primary)',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                }}
              >
                {project.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: '1.95rem',
              letterSpacing: '-0.025em',
              marginBottom: '0.4rem',
              color: '#fff',
            }}
          >
            {project.title}
          </h3>

          <div
            style={{
              fontSize: '0.95rem',
              color: 'var(--accent-primary)',
              fontWeight: 500,
              marginBottom: '1rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {project.subtitle}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '1.5rem',
            }}
          >
            {project.description}
          </p>

          {/* Key Metrics / Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
            {project.highlights.slice(0, 2).map((highlight, hIdx) => (
              <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                <span>{highlight}</span>
              </div>
            ))}
          </div>

          {/* Tech Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.6rem 1.35rem', fontSize: '0.85rem' }}
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
            >
              <GithubIcon size={15} />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Right column: Interactive Visual Representation */}
        <div style={{ order: 2, position: 'relative' }}>
          <ProjectVisualMockup project={project} />
        </div>
      </div>
    </div>
  );
}

function ProjectVisualMockup({ project }: { project: Project }) {
  // Customized sleek UI mockups reflecting the project's actual domain
  if (project.id === 'lm-laundry') {
    return (
      <div
        style={{
          borderRadius: '14px',
          background: '#090d12',
          border: '1px solid rgba(16, 185, 129, 0.25)',
          overflow: 'hidden',
          boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(16, 185, 129, 0.1)',
        }}
      >
        {/* Mockup Header */}
        <div
          style={{
            padding: '0.65rem 1rem',
            background: 'rgba(20, 26, 35, 0.95)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
            <span style={{ color: '#fff' }}>LM-LAUNDRY.vercel.app</span>
          </div>
          <span style={{ color: 'var(--accent-primary)' }}>SSL Secure</span>
        </div>

        {/* Mockup Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Current Order Status</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Boutique Suit & Silk Clean</div>
            </div>
            <span style={{ background: 'rgba(0,255,136,0.1)', color: 'var(--accent-primary)', padding: '0.25rem 0.6rem', borderRadius: '20px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
              In Progress
            </span>
          </div>

          {/* Stepper tracker */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginTop: '0.5rem' }}>
            {[
              { title: 'Received', active: true },
              { title: 'Inspection', active: true },
              { title: 'Eco Cleaning', active: true },
              { title: 'Dispatch', active: false },
            ].map((step, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    height: '4px',
                    borderRadius: '2px',
                    background: step.active ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                    boxShadow: step.active ? '0 0 8px var(--accent-primary)' : 'none',
                    marginBottom: '0.4rem',
                  }}
                />
                <div style={{ fontSize: '0.68rem', color: step.active ? '#fff' : 'var(--text-muted)' }}>{step.title}</div>
              </div>
            ))}
          </div>

          {/* Schedule card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '10px',
              padding: '0.85rem 1rem',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Pickup Window</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Tomorrow at 10:30 AM</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Total Amount</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-primary)' }}>$48.50</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'pharmacy-saas') {
    return (
      <div
        style={{
          borderRadius: '14px',
          background: '#090d12',
          border: '1px solid rgba(0, 255, 136, 0.25)',
          overflow: 'hidden',
          boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(0, 255, 136, 0.12)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '0.65rem 1rem',
            background: 'rgba(20, 26, 35, 0.95)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Activity size={14} style={{ color: 'var(--accent-primary)' }} />
            <span style={{ color: '#fff' }}>PharmaCare Telemetry Dashboard</span>
          </div>
          <span style={{ color: 'var(--accent-primary)' }}>Live POS</span>
        </div>

        {/* Analytics preview with glowing neon SVG chart */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Daily Medicine Dispensed</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                $14,892.40 <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>+18.4%</span>
              </div>
            </div>
            <TrendingUp size={22} style={{ color: 'var(--accent-primary)' }} />
          </div>

          {/* SVG Line Chart */}
          <div style={{ width: '100%', height: '80px', position: 'relative' }}>
            <svg viewBox="0 0 300 80" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00ff88" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00ff88" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,65 Q40,30 80,45 T160,20 T240,35 T300,10 L300,80 L0,80 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M0,65 Q40,30 80,45 T160,20 T240,35 T300,10"
                fill="none"
                stroke="#00ff88"
                strokeWidth="2.5"
              />
            </svg>
          </div>

          {/* Inventory status bars */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Amoxicillin 500mg</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>94% Stock</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-primary)' }}>Healthy</span>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Insulin Regular 100U</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>12% Stock</span>
                <span style={{ fontSize: '0.7rem', color: '#f59e0b' }}>Reorder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'super-erp') {
    return (
      <div
        style={{
          borderRadius: '14px',
          background: '#090d12',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          overflow: 'hidden',
          boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(56, 189, 248, 0.1)',
        }}
      >
        <div
          style={{
            padding: '0.65rem 1rem',
            background: 'rgba(20, 26, 35, 0.95)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={14} style={{ color: '#38bdf8' }} />
            <span style={{ color: '#fff' }}>SuperERP Kanban Engine</span>
          </div>
          <span style={{ color: '#38bdf8' }}>NestJS + PostgreSQL</span>
        </div>

        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
            {[
              { col: 'Backlog', count: '4', task: 'Schema v2 Migrations' },
              { col: 'Processing', count: '2', task: 'OAuth2 RBAC Policy' },
              { col: 'Deployed', count: '18', task: 'Swagger API v1' },
            ].map((kanban, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  <span>{kanban.col}</span>
                  <span style={{ background: 'rgba(255,255,255,0.06)', padding: '0 0.35rem', borderRadius: '4px' }}>{kanban.count}</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#e2e8f0', fontWeight: 500, padding: '0.45rem', background: 'rgba(56, 189, 248, 0.08)', borderRadius: '6px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                  {kanban.task}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#05080c', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span style={{ color: '#38bdf8' }}>GET</span> /api/v1/erp/workflow/tenants/status <span style={{ color: 'var(--accent-primary)' }}>200 OK (8ms)</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'trustify-escrow') {
    return (
      <div
        style={{
          borderRadius: '14px',
          background: '#090d12',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          overflow: 'hidden',
          boxShadow: '0 15px 35px rgba(0,0,0,0.6), 0 0 25px rgba(56, 189, 248, 0.12)',
        }}
      >
        <div
          style={{
            padding: '0.65rem 1rem',
            background: 'rgba(20, 26, 35, 0.95)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={14} style={{ color: '#38bdf8' }} />
            <span style={{ color: '#fff' }}>Trustify Escrow Vault #ESC-8924</span>
          </div>
          <span style={{ color: '#38bdf8' }}>Funds Secured</span>
        </div>

        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Locked Escrow Balance</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>$28,500.00 USDC</div>
            </div>
            <span style={{ background: 'rgba(56, 189, 248, 0.12)', color: '#38bdf8', padding: '0.25rem 0.65rem', borderRadius: '20px', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
              Milestone 2/3
            </span>
          </div>

          {/* Escrow steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginTop: '0.35rem' }}>
            {[
              { title: 'Deposited', active: true },
              { title: 'In Review', active: true },
              { title: 'Approval', active: false },
              { title: 'Disbursed', active: false },
            ].map((step, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    height: '4px',
                    borderRadius: '2px',
                    background: step.active ? '#38bdf8' : 'rgba(255,255,255,0.1)',
                    boxShadow: step.active ? '0 0 8px #38bdf8' : 'none',
                    marginBottom: '0.4rem',
                  }}
                />
                <div style={{ fontSize: '0.68rem', color: step.active ? '#fff' : 'var(--text-muted)' }}>{step.title}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span style={{ color: '#94a3b8' }}>Multi-Sig Verification:</span>
            <span style={{ color: 'var(--accent-primary)' }}>Buyer &amp; Seller Validated ✓</span>
          </div>
        </div>
      </div>
    );
  }

  // Default / Other Projects Visual
  return (
    <div
      style={{
        borderRadius: '14px',
        background: '#090d12',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: '0 15px 35px rgba(0,0,0,0.6)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Terminal size={16} style={{ color: 'var(--accent-primary)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#fff' }}>
            {project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.service
          </span>
        </div>
        <span style={{ color: 'var(--accent-primary)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          Active
        </span>
      </div>

      <div
        style={{
          background: 'rgba(0,0,0,0.4)',
          borderRadius: '8px',
          padding: '1rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          lineHeight: '1.6',
          color: '#94a3b8',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div><span style={{ color: '#00ff88' }}>$</span> git clone {project.githubUrl}</div>
        <div><span style={{ color: '#38bdf8' }}>[info]</span> Initializing runtime pipeline...</div>
        <div><span style={{ color: '#a78bfa' }}>[ready]</span> Services linked: {project.tags.slice(0, 3).join(', ')}</div>
        <div><span style={{ color: '#10b981' }}>[metrics]</span> Latency: &lt;15ms | Status: 100% stable</div>
      </div>
    </div>
  );
}
