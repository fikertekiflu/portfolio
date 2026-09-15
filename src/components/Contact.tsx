'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Phone, Copy, Check, Send, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import GithubIcon from '@/components/icons/GithubIcon';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web App',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const copyPhone = () => {
    if (PERSONAL_INFO.phone) {
      navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00ff88', '#10b981', '#38bdf8', '#ffffff'],
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }

    setFormSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>// 05. REACH OUT</span>
          </div>
          <h2 className="section-title">
            Let&apos;s build <span className="accent">together.</span>
          </h2>
          <p className="section-desc">
            Have an innovative SaaS concept, enterprise platform, or software engineering position? Let&apos;s discuss how we can create something impactful.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Info Card */}
          <div
            className="glass-card reveal-fade-left"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              border: '1px solid rgba(0, 255, 136, 0.25)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            <div>
              <div className="badge" style={{ marginBottom: '1rem' }}>
                <span className="badge-pulse-dot" />
                <span>OPEN TO OPPORTUNITIES</span>
              </div>
              <h3 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.65rem' }}>
                Direct Contact
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Based in Ethiopia, available for global remote roles, contracts, and full-time software engineering engagements.
              </p>
            </div>

            {/* Email quick copy box */}
            <div
              style={{
                background: 'rgba(0, 255, 136, 0.05)',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                borderRadius: '12px',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 255, 136, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={18} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    EMAIL ADDRESS
                  </div>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="btn-secondary"
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.78rem',
                  flexShrink: 0,
                  borderColor: emailCopied ? 'var(--accent-primary)' : 'var(--border-subtle)',
                  color: emailCopied ? 'var(--accent-primary)' : '#fff',
                }}
              >
                {emailCopied ? <Check size={14} /> : <Copy size={14} />}
                <span>{emailCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Direct Phone & WhatsApp card */}
            <div
              style={{
                background: 'rgba(56, 189, 248, 0.05)',
                border: '1px solid rgba(56, 189, 248, 0.22)',
                borderRadius: '12px',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                <a
                  href={`tel:${PERSONAL_INFO.phone || '+251993817650'}`}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    flexShrink: 0,
                  }}
                  title="Call directly"
                >
                  <Phone size={18} />
                </a>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    PHONE / WHATSAPP / TELEGRAM
                  </div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone || '+251993817650'}`}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    {PERSONAL_INFO.phone || '+251993817650'}
                  </a>
                </div>
              </div>

              <button
                onClick={copyPhone}
                className="btn-secondary"
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.78rem',
                  flexShrink: 0,
                  borderColor: phoneCopied ? '#38bdf8' : 'var(--border-subtle)',
                  color: phoneCopied ? '#38bdf8' : '#fff',
                }}
              >
                {phoneCopied ? <Check size={14} /> : <Copy size={14} />}
                <span>{phoneCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Quick coordinates */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={17} style={{ color: 'var(--accent-primary)' }} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <GithubIcon size={17} style={{ color: 'var(--accent-primary)' }} />
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  github.com/fikertekiflu
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className="glass-card reveal-fade-right"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(0, 255, 136, 0.15)',
                    border: '1px solid var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <Check size={30} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>
                  Message Transmitted!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '380px', margin: '0 auto 1.75rem' }}>
                  Thank you for reaching out, {formData.name}. Fikerte has received your inquiry and will reply to <span style={{ color: 'var(--accent-primary)' }}>{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', projectType: 'Full-Stack Web App', message: '' });
                  }}
                  className="btn-secondary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.25rem' }}>
                  Send a Message
                </h3>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.45rem' }}>
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.45rem' }}>
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.45rem' }}>
                    PROJECT / INQUIRY TYPE
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: '#0d1117',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                    }}
                  >
                    <option value="Full-Stack Web App">Full-Stack Web App / SaaS</option>
                    <option value="Backend & Microservices">Backend & Microservices (Go / Node.js)</option>
                    <option value="Full-Time Role">Full-Time Software Engineer Role</option>
                    <option value="Consulting / Freelance">Consulting / Freelance</option>
                    <option value="Open Source Collaboration">Open Source Collaboration</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.45rem' }}>
                    YOUR MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your goals, tech stack, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
