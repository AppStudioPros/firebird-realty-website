'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'firebird-a11y'
const defaults = { fontSize: 0, highContrast: false, pauseAnimations: false }

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [prefs, setPrefs] = useState(defaults)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setPrefs(JSON.parse(saved))
    } catch {}
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const sizes: Record<number, string> = { '-1': '92%', 0: '', 1: '106%', 2: '114%', 3: '122%' }
    root.style.fontSize = sizes[prefs.fontSize] ?? ''
    prefs.highContrast ? root.setAttribute('data-hc', 'true') : root.removeAttribute('data-hc')
    prefs.pauseAnimations ? root.setAttribute('data-pa', 'true') : root.removeAttribute('data-pa')
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  }, [prefs])

  const update = (patch: Partial<typeof defaults>) => setPrefs(p => ({ ...p, ...patch }))
  const reset = () => setPrefs(defaults)

  const btnStyle: React.CSSProperties = {
    width: 32, height: 32, borderRadius: 8, border: '1px solid #E9D5FF',
    background: '#F3E8FF', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 700, color: '#7B2FBE',
  }

  const toggleStyle = (on: boolean): React.CSSProperties => ({
    position: 'relative', width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer',
    background: on ? '#7B2FBE' : '#E9D5FF', transition: 'background 0.2s', flexShrink: 0,
  })

  const thumbStyle = (on: boolean): React.CSSProperties => ({
    position: 'absolute', top: 4, left: on ? 24 : 4, width: 16, height: 16,
    borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
  })

  return (
    <>
      <style>{`
        [data-hc='true'] { filter: contrast(1.55) brightness(1.05); }
        [data-pa='true'] * { animation-play-state: paused !important; transition: none !important; }
      `}</style>

      {/* Floating button — sits right above the chat bot (bottom: 96px) */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close accessibility options' : 'Open accessibility options'}
        aria-expanded={open}
        style={{
          position: 'fixed', bottom: 96, right: 24, zIndex: 199,
          width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer',
          background: '#1d092c', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(123,47,190,0.3)', transition: 'transform 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {/* Universal accessibility icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="4" r="1.5" fill="#D4891A" stroke="none" />
          <path d="M7 8h10M12 8v4M9 22l3-6 3 6M10 14l-3 4M14 14l3 4" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Accessibility options"
          style={{
            position: 'fixed', bottom: 152, right: 24, zIndex: 199,
            width: 272, borderRadius: 16, overflow: 'hidden',
            boxShadow: '0 12px 48px rgba(29,9,44,0.2)', border: '1px solid #E9D5FF', background: '#fff',
          }}
        >
          {/* Header */}
          <div style={{ background: '#1d092c', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="4" r="1.5" fill="#D4891A" stroke="none" />
                <path d="M7 8h10M12 8v4M9 22l3-6 3 6M10 14l-3 4M14 14l3 4" />
              </svg>
              <span style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Accessibility</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex', padding: 2 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Font size */}
            <div>
              <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#5B4B7A', marginBottom: 10 }}>Text Size</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button onClick={() => update({ fontSize: Math.max(-1, prefs.fontSize - 1) })} disabled={prefs.fontSize <= -1}
                  style={{ ...btnStyle, opacity: prefs.fontSize <= -1 ? 0.3 : 1 }} aria-label="Decrease text size">A−</button>
                <span style={{ flex: 1, textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: '#1d092c' }}>
                  {prefs.fontSize === 0 ? 'Default' : prefs.fontSize > 0 ? `+${prefs.fontSize}` : prefs.fontSize}
                </span>
                <button onClick={() => update({ fontSize: Math.min(3, prefs.fontSize + 1) })} disabled={prefs.fontSize >= 3}
                  style={{ ...btnStyle, opacity: prefs.fontSize >= 3 ? 0.3 : 1 }} aria-label="Increase text size">A+</button>
              </div>
            </div>

            {/* High contrast */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1d092c' }}>High Contrast</p>
              <button onClick={() => update({ highContrast: !prefs.highContrast })}
                role="switch" aria-checked={prefs.highContrast} aria-label="Toggle high contrast"
                style={toggleStyle(prefs.highContrast)}>
                <span style={thumbStyle(prefs.highContrast)} />
              </button>
            </div>

            {/* Pause animations */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1d092c' }}>Pause Animations</p>
              <button onClick={() => update({ pauseAnimations: !prefs.pauseAnimations })}
                role="switch" aria-checked={prefs.pauseAnimations} aria-label="Toggle pause animations"
                style={toggleStyle(prefs.pauseAnimations)}>
                <span style={thumbStyle(prefs.pauseAnimations)} />
              </button>
            </div>

            {/* Reset */}
            <button onClick={reset} style={{ width: '100%', padding: '9px 0', borderRadius: 8, border: '1px solid #E9D5FF', background: '#FDFAFF', color: '#9B8AC0', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', cursor: 'pointer' }}>
              Reset to Default
            </button>
          </div>
        </div>
      )}
    </>
  )
}
