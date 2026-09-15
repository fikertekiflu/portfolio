'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_COMMANDS, PERSONAL_INFO } from '@/data/portfolioData';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';

interface HistoryItem {
  id: string;
  command: string;
  output: string;
  timestamp: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'welcome',
      command: 'welcome',
      output: `Welcome to Fikerte's Developer Shell v2.4 (x86_64-apple-darwin)
Type 'help' to see available commands or click quick shortcut chips below.`,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);

  const terminalContentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Only scroll internal terminal box if user actually entered commands (never on page load)
    if (history.length > 1 && terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let result = '';
    if (TERMINAL_COMMANDS[trimmed]) {
      result = TERMINAL_COMMANDS[trimmed] as string;
    } else {
      result = `command not found: "${trimmed}". Type 'help' for available commands.`;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmd,
        output: result,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    setInputVal('');

    if (trimmed === 'sudo hire') {
      setTimeout(() => {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 600);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const quickCommands = ['help', 'about', 'experience', 'skills', 'projects', 'sudo hire', 'clear'];

  return (
    <section id="terminal" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container reveal-fade-up">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span>// 03. INTERACTIVE CLI</span>
          </div>
          <h2 className="section-title">
            Developer <span className="accent">Terminal.</span>
          </h2>
          <p className="section-desc">
            Explore Fikerte&apos;s background, skills, and projects through a fully interactive Unix shell sandbox.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div
          style={{
            background: '#070a0e',
            borderRadius: '16px',
            border: '1px solid rgba(0, 255, 136, 0.25)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(0, 255, 136, 0.12)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '0.85rem 1.25rem',
              background: 'rgba(15, 21, 30, 0.95)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
              <span
                style={{
                  marginLeft: '0.75rem',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                }}
              >
                fikir@dev-terminal: ~ (bash)
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)' }}>
                ONLINE
              </span>
            </div>
          </div>

          {/* Terminal output content */}
          <div
            ref={terminalContentRef}
            style={{
              padding: '1.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              lineHeight: '1.65',
              maxHeight: '420px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item) => (
              <div key={item.id}>
                {item.command !== 'welcome' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>fikir@portfolio:~$</span>
                    <span>{item.command}</span>
                  </div>
                )}
                <div
                  style={{
                    color: item.command.includes('error') ? '#f87171' : '#94a3b8',
                    whiteSpace: 'pre-wrap',
                    marginTop: '0.35rem',
                  }}
                >
                  {item.output}
                </div>
              </div>
            ))}

            {/* Current Input Prompt */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>fikir@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (try 'help')..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                }}
              />
            </div>
          </div>

          {/* Quick command shortcuts bar */}
          <div
            style={{
              padding: '0.85rem 1.25rem',
              background: 'rgba(10, 14, 20, 0.95)',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Quick Commands:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: cmd === 'sudo hire' ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = cmd === 'sudo hire' ? 'var(--accent-primary)' : 'var(--text-secondary)';
                }}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
