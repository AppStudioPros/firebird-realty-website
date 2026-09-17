"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#process", label: "Process" },
  { href: "#about",   label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "tel:5035474507", label: "(503) 547-4507" },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-hamburger">
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "#fff", display: "flex", alignItems: "center", padding: "6px",
        }}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {open && (
        <div
          style={{
            position: "fixed", top: 85, left: 0, right: 0,
            background: "#1d092c",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            zIndex: 99,
            padding: "8px 24px 20px",
            display: "flex", flexDirection: "column",
          }}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "1.05rem",
                fontWeight: 500,
                padding: "15px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
