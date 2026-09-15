'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { ArrowRight, Download, Copy, Check, Terminal, ExternalLink, Sparkles, FolderGit2, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'developer.ts' | 'services.go' | 'metrics.json'>('developer.ts');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    'developer.ts': `// developer.ts
export const engineer = {
  name: "Fikerte Kiflu",
  alias: "Fikir",
  role: "Full-Stack Software Engineer",
  experience: "Matrix Technology (Full Stack)",
  focus: ["Fintech & Escrow", "Production SaaS"],
  primaryStack: [
    "Next.js 15", "TypeScript", 
    "React", "Node.js", "Go"
  ],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  openToOpportunities: true,
  currentStatus: "Engineering high-impact web systems"
} as const;`,

    'services.go': `// services.go
package main

type ServiceConfig struct {
    Name        string   \`json:"name"\`
    Concurrency int      \`json:"concurrency"\`
    Framework   string   \`json:"framework"\`
    Health      bool     \`json:"health"\`
}

var CoreService = ServiceConfig{
    Name:        "workforce-engine",
    Concurrency: 10000,
    Framework:   "Go goroutines",
    Health:      true,
}`,

    'metrics.json': `{
  "engineer": "Fikerte Kiflu",
  "experience": "Matrix Technology & Freelance Fintech",
  "domainExpertise": ["Fintech", "Escrow", "Modern SaaS"],
  "curatedProjects": [
    "LM Laundry SaaS (Live)",
    "PharmaCare SaaS (Live)",
    "Trustify Escrow (Fintech)",
    "SuperERP Enterprise (NestJS)",
    "Advanced Workforce (Go)"
  ],
  "commitVelocity": "High",
  "uptimeFocus": 99.9
}`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Headlines and CTAs */}
          <div style={{ maxWidth: '620px' }}>
            {/* Status Pill Badge */}
            <div className="badge" style={{ marginBottom: '1.5rem' }}>
              <span className="badge-pulse-dot" />
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.9rem, 6.5vw, 4.85rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                marginBottom: '1.25rem',
              }}
            >
              Building for{' '}
              <span className="text-shimmer" style={{ textShadow: 'var(--text-glow)' }}>
                scale.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '540px',
              }}
            >
              Full-Stack Developer specializing in high-performance web applications, fintech workflows, and resilient SaaS architectures. Built with <strong style={{ color: '#fff', fontWeight: 600 }}>Next.js</strong>, <strong style={{ color: '#fff', fontWeight: 600 }}>TypeScript</strong>, <strong style={{ color: '#fff', fontWeight: 600 }}>Node.js</strong>, and <strong style={{ color: '#fff', fontWeight: 600 }}>Go</strong>.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="#projects" className="btn-primary">
                <span>View projects</span>
                <ArrowRight size={17} />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FolderGit2 size={17} style={{ color: 'var(--accent-primary)' }} />
                <span>Curated GitHub</span>
              </a>

              <a
                href="#terminal"
                className="btn-secondary"
                style={{ borderStyle: 'dashed' }}
                title="Launch interactive developer CLI"
              >
                <Terminal size={16} />
                <span>Open Terminal</span>
              </a>
            </div>

            {/* Tech Chips */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.65rem',
                marginTop: '2.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                STACK HIGHLIGHTS:
              </span>
              {['Next.js 15', 'TypeScript', 'Go (Golang)', 'NestJS', 'PostgreSQL', 'Redis'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Editor Terminal Window */}
          <div style={{ position: 'relative' }}>
            {/* Ambient emerald backlight glow */}
            <div
              style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                right: '10%',
                bottom: '10%',
                background: 'radial-gradient(circle, rgba(0,255,136,0.18) 0%, rgba(16,185,129,0.05) 50%, transparent 70%)',
                filter: 'blur(45px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Terminal Card Container */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                background: '#090d12',
                borderRadius: '16px',
                border: '1px solid rgba(0, 255, 136, 0.22)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(0,255,136,0.12)',
                overflow: 'hidden',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1.25rem',
                  background: 'rgba(18, 24, 33, 0.95)',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Window buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }} />
                </div>

                {/* File Tabs */}
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  {(['developer.ts', 'services.go', 'metrics.json'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        borderRadius: '6px',
                        background: activeTab === tab ? 'rgba(0,255,136,0.12)' : 'transparent',
                        color: activeTab === tab ? 'var(--accent-primary)' : 'var(--text-muted)',
                        border: activeTab === tab ? '1px solid rgba(0,255,136,0.25)' : '1px solid transparent',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyCode}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: copied ? 'var(--accent-primary)' : 'var(--text-muted)',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                  title="Copy code"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Editor Body */}
              <div
                style={{
                  padding: '1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  lineHeight: '1.65',
                  overflowX: 'auto',
                  color: '#e2e8f0',
                  maxHeight: '360px',
                }}
              >
                <pre style={{ margin: 0 }}>
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Status bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.45rem 1.25rem',
                  background: 'rgba(10, 14, 20, 0.95)',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ color: 'var(--accent-primary)' }}>● Live Dev Environment</span>
                  <span>UTF-8</span>
                </div>
                <div>TypeScript 5.x • Next.js 15</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          color: 'var(--text-muted)',
          fontSize: '0.72rem',
          fontFamily: 'var(--font-mono)',
          cursor: 'pointer',
          zIndex: 2,
        }}
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="animate-bounce-subtle"
        title="Scroll to explore projects"
      >
        <span>SCROLL DOWN</span>
        <ChevronDown size={16} style={{ color: 'var(--accent-primary)' }} />
      </div>
    </section>
  );
}
