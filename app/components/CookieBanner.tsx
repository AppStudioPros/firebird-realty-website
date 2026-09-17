'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'firebird_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY)
    if (!saved) setVisible(true)
  }, [])

  function handleAccept() {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
    // When analytics is added, initialize it here
  }

  function handleDecline() {
    localStorage.setItem(COOKIE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#1d092c',
        borderTop: '2px solid #7B2FBE',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: 620, margin: 0 }}>
        We use cookies to understand how visitors use this site. You can accept or decline optional analytics cookies.{' '}
        <Link href="/cookie-policy" style={{ color: '#C084FC', textDecoration: 'underline' }}>
          Learn more
        </Link>
      </p>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button
          onClick={handleDecline}
          style={{
            background: 'transparent',
            border: '1.5px solid rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.6)',
            padding: '8px 20px',
            borderRadius: 6,
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'border-color 0.2s',
          }}
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: '#7B2FBE',
            border: '1.5px solid #7B2FBE',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: 6,
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  )
}
