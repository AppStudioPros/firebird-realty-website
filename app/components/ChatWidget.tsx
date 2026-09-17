'use client'

import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

// ── 4-Node Orb — Firebird Realty (purple + gold nodes) ───────────────────────

type Node = { x: number; y: number; vx: number; vy: number; baseR: number; pulsePhase: number; color: string }

const CENTER = 16
const INNER_RADIUS = 16
const NODE_COLORS = ['#7B2FBE', '#D4891A', '#7B2FBE', '#D4891A']

function initialNodes(): Node[] {
  return [
    { x: 6,  y: 10, vx:  5.6, vy: -5.0, baseR: 2.8, pulsePhase: 0,    color: NODE_COLORS[0] },
    { x: 26, y: 8,  vx: -5.0, vy:  5.4, baseR: 3.0, pulsePhase: 0.4,  color: NODE_COLORS[1] },
    { x: 24, y: 26, vx: -5.4, vy: -4.8, baseR: 2.6, pulsePhase: 0.8,  color: NODE_COLORS[2] },
    { x: 8,  y: 24, vx:  4.8, vy:  4.6, baseR: 2.9, pulsePhase: 1.2,  color: NODE_COLORS[3] },
  ]
}

function NodeOrb({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const rafRef = useRef<number | null>(null)
  const lastTsRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    const step = (ts: number) => {
      const last = lastTsRef.current ?? ts
      const dt = Math.min(0.05, (ts - last) / 1000)
      lastTsRef.current = ts

      setNodes(prev => prev.map(n => {
        let { x, y, vx, vy } = n
        x += vx * dt; y += vy * dt
        const dx = x - CENTER, dy = y - CENTER
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = INNER_RADIUS - n.baseR
        if (dist > maxDist) {
          const nx = dx / dist, ny = dy / dist
          const dot = vx * nx + vy * ny
          vx -= 2 * dot * nx; vy -= 2 * dot * ny
          x = CENTER + nx * maxDist; y = CENTER + ny * maxDist
        }
        return { ...n, x, y, vx, vy, pulsePhase: (n.pulsePhase + dt / 1.6) % 1 }
      }))

      rafRef.current = window.requestAnimationFrame(step)
    }

    rafRef.current = window.requestAnimationFrame(step)
    return () => { if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current) }
  }, [])

  const lines: [number, number][] = [[0,1],[1,2],[2,3],[3,0],[0,2],[1,3]]

  return (
    <svg className={className} style={style} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {lines.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(123,47,190,0.3)"
          strokeWidth="0.9" strokeLinecap="round"
        />
      ))}
      {nodes.map((n, i) => {
        const sine = Math.sin(n.pulsePhase * Math.PI * 2)
        const r = n.baseR + sine * 0.7
        return (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={r * 2.2} fill={n.color} opacity={0.15} />
            <circle cx={n.x} cy={n.y} r={Math.max(1.4, r)} fill={n.color} opacity={0.85 + sine * 0.15} />
          </g>
        )
      })}
    </svg>
  )
}

// ── Types ─────────────────────────────────────────────────────────────────────

type Message = { role: 'user' | 'assistant'; content: string }

const STARTERS = [
  "What does Larisa specialize in?",
  "How does the buying process work?",
  "Do you work with first-time buyers?",
  "Do you speak Russian?",
]

// ── Widget ────────────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [chatEnded, setChatEnded] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  function clearChat() { setMessages([]); setChatEnded(false) }

  async function sendMessage(text: string) {
    if (!text.trim() || loading || chatEnded) return
    const userMsg: Message = { role: 'user', content: text.trim() }
    const next = [...messages, userMsg]
    setMessages([...next, { role: 'assistant', content: '' }])
    setInput('')
    setTimeout(() => inputRef.current?.focus(), 50)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })

      if (!res.ok || !res.body) {
        setMessages(prev => { const u = [...prev]; u[u.length-1] = { role: 'assistant', content: 'Something went wrong. Use the button below to reach Larisa directly.' }; return u })
        setLoading(false)
    setTimeout(() => inputRef.current?.focus(), 10); return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const lines = decoder.decode(value, { stream: true }).split('\n')
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const raw = line.slice(6)
          if (raw === '[DONE]') break
          try {
            const parsed = JSON.parse(raw)
            if (parsed.text) {
              fullText += parsed.text
              const cleaned = fullText.replace('[CHAT_ENDED]', '').trim()
              setMessages(prev => { const u = [...prev]; u[u.length-1] = { role: 'assistant', content: cleaned }; return u })
              if (fullText.includes('[CHAT_ENDED]')) setChatEnded(true)
            }
          } catch { /* skip */ }
        }
      }
    } catch {
      setMessages(prev => { const u = [...prev]; u[u.length-1] = { role: 'assistant', content: 'Something went wrong. Use the button below to reach Larisa directly.' }; return u })
    }
    setLoading(false)
    setTimeout(() => inputRef.current?.focus(), 10)
  }

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
      {open && (
        <div style={{ width: 340, height: 500, borderRadius: 20, boxShadow: '0 12px 64px rgba(29,9,44,0.3)', overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid #E9D5FF' }}>

          {/* Header */}
          <div style={{ background: 'radial-gradient(circle at 35% 30%, #4a1a6b, #1d092c 55%, #0a0415)', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <NodeOrb style={{ width: 24, height: 24 }} />
                </div>
                <div>
                  <p style={{ color: '#fff', fontSize: '0.88rem', fontWeight: 700, margin: 0, lineHeight: 1.2 }}>Firebird Assistant</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', margin: 0 }}>Ask me about Larisa</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {messages.length > 0 && (
                  <button onClick={clearChat} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', cursor: 'pointer', padding: '4px 8px', borderRadius: 4 }}>
                    Clear
                  </button>
                )}
                <button onClick={() => setOpen(false)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', padding: 4, display: 'flex' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 21 6 15"/></svg>
                </button>
              </div>
            </div>
            {/* Call bar */}
            <a href="tel:5035474507" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px', background: 'rgba(212,137,26,0.2)', borderTop: '1px solid rgba(212,137,26,0.25)', textDecoration: 'none' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4891A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 10.5 19.79 19.79 0 0 1 1.61 2 2 2 0 0 1 3.6 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 7.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span style={{ color: '#D4891A', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Call Larisa</span>
            </a>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12, background: '#FDFAFF' }}>
            {messages.length === 0 && (
              <div>
                <p style={{ color: '#5B4B7A', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 16 }}>
                  Hey! I can answer questions about Larisa Seibel and Firebird Realty. What would you like to know?
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {STARTERS.map(s => (
                    <button key={s} onClick={() => sendMessage(s)}
                      style={{ textAlign: 'left', fontSize: '0.82rem', padding: '10px 14px', borderRadius: 10, border: '1px solid #E9D5FF', background: '#fff', color: '#1d092c', cursor: 'pointer' }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  padding: '10px 14px',
                  borderRadius: 16,
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  maxWidth: '85%',
                  ...(m.role === 'user'
                    ? { background: 'radial-gradient(circle at 35% 30%, #4a1a6b, #1d092c 55%, #0a0415)', color: '#fff', borderBottomRightRadius: 4 }
                    : { background: '#fff', color: '#1d092c', border: '1px solid #E9D5FF', borderBottomLeftRadius: 4 })
                }}>
                  {m.role === 'user' ? m.content : (
                    <ReactMarkdown components={{
                      p: ({ children }) => <p style={{ margin: '0 0 8px', lineHeight: 1.65 }} className="last:mb-0">{children}</p>,
                      strong: ({ children }) => <strong style={{ fontWeight: 700, color: '#7B2FBE' }}>{children}</strong>,
                      ul: ({ children }) => <ul style={{ paddingLeft: 16, margin: '4px 0 8px', display: 'flex', flexDirection: 'column', gap: 4 }}>{children}</ul>,
                      li: ({ children }) => <li style={{ display: 'flex', gap: 6 }}><span style={{ color: '#D4891A', flexShrink: 0 }}>•</span><span>{children}</span></li>,
                      a: ({ children, href }) => <a href={href} style={{ color: '#7B2FBE', textDecoration: 'underline' }}>{children}</a>,
                    }}>
                      {m.content}
                    </ReactMarkdown>
                  )}
                </div>
                {m.role === 'assistant' && i === messages.length - 1 && !loading && (
                  <a href="mailto:larisa@firebirdrealty.net"
                    style={{ marginTop: 8, fontSize: '0.78rem', fontWeight: 700, padding: '6px 14px', borderRadius: 8, background: '#7B2FBE', color: '#fff', textDecoration: 'none' }}>
                    Get in Touch →
                  </a>
                )}
              </div>
            ))}

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '10px 14px', borderRadius: 16, borderBottomLeftRadius: 4, background: '#fff', border: '1px solid #E9D5FF' }}>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                    {[0, 150, 300].map(d => (
                      <span key={d} style={{ width: 6, height: 6, borderRadius: '50%', background: '#7B2FBE', display: 'block', animation: 'bounce 1.2s infinite', animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px', borderTop: '1px solid #E9D5FF', background: '#fff', flexShrink: 0 }}>
            {chatEnded ? (
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#9B8AC0', fontSize: '0.78rem', marginBottom: 8 }}>This chat session has ended.</p>
                <button onClick={clearChat} style={{ background: 'radial-gradient(circle at 35% 30%, #4a1a6b, #1d092c 55%, #0a0415)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', padding: '8px 20px', borderRadius: 8, fontSize: '0.82rem', fontWeight: 700, cursor: 'pointer' }}>
                  Start a New Chat
                </button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); sendMessage(input) }} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input ref={inputRef} type="text" value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask about Larisa or buying a home..."
                  disabled={loading}
                  style={{ flex: 1, fontSize: '0.85rem', padding: '10px 14px', borderRadius: 10, border: '1px solid #E9D5FF', outline: 'none', color: '#1d092c', background: '#FDFAFF', opacity: loading ? 0.5 : 1 }}
                />
                <button type="submit" disabled={!input.trim() || loading}
                  style={{ width: 38, height: 38, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: '#7B2FBE', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, opacity: (!input.trim() || loading) ? 0.4 : 1 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating orb button */}
      <button onClick={() => setOpen(o => !o)}
        aria-label="Chat with Firebird Realty"
        style={{ width: 56, height: 56, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #4a1a6b, #1d092c 55%, #0a0415)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.18), inset 0 -2px 4px rgba(0,0,0,0.3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 24px rgba(123,47,190,0.35)', transition: 'transform 0.2s', animation: open ? 'none' : 'firebird-glow 3s ease-in-out infinite' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
        {open
          ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : <NodeOrb style={{ width: 36, height: 36 }} />
        }
      </button>
    </div>
  )
}
