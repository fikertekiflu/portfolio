'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GitBranch, Layers, Cpu, Award } from 'lucide-react';

export default function StatsStrip() {
  const stats = [
    {
      value: "Matrix Tech",
      label: "Full Stack Engineer",
      desc: "Scalable enterprise web applications",
      icon: Layers,
      color: "var(--accent-primary)"
    },
    {
      value: "6+",
      label: "Curated Production Projects",
      desc: "Live SaaS, Fintech Escrow & Go backend",
      icon: GitBranch,
      color: "#38bdf8"
    },
    {
      value: "15+",
      label: "Core Technologies",
      desc: "Next.js, TypeScript, Go, Node.js, SQL",
      icon: Cpu,
      color: "#a78bfa"
    },
    {
      value: "100%",
      label: "Fintech & SaaS Precision",
      desc: "High reliability, security & type-safety",
      icon: Award,
      color: "#f59e0b"
    }
  ];

  return (
    <section style={{ padding: '2.5rem 0', position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card reveal-fade-up"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transitionDelay: `${idx * 0.1}s`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span
                    style={{
                      fontSize: '2.4rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-display)',
                      color: item.color,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </span>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
