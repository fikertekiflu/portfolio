'use client';

import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '3.5rem 0 2.5rem',
        background: 'rgba(5, 7, 10, 0.95)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#fff' }}>
                Fikerte Kiflu
              </span>
              <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>/&gt;</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Architecting scalable software &amp; modern web interfaces.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="btn-secondary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
            >
              <Mail size={16} />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ width: '40px', height: '40px', padding: 0 }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Fikerte Kiflu. Built with Next.js &amp; TypeScript.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
            <span>Systems Normal • 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
