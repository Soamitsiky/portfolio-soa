import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "À propos" },
  { path: "/experiences", label: "Expériences" },
  { path: "/projects", label: "Projets" },
  { path: "/skills", label: "Compétences" },
  { path: "/education", label: "Formation" },
  { path: "/alternance", label: "Alternance" },
  { path: "/recommendations", label: "Recs" },
  { path: "/cv", label: "CV" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 64,
        background: scrolled ? "rgba(4,12,24,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(56,189,248,0.1)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5vw",
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: "var(--mono)", fontWeight: 700, fontSize: "1rem",
          color: "var(--sky)", textDecoration: "none", marginRight: "auto",
          letterSpacing: "0.05em",
        }}>
          Soa<span style={{ color: "var(--lilac)" }}></span>R
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}
          className="desktop-nav">
          {links.map(l => {
            const active = location.pathname === l.path;
            return (
              <Link key={l.path} to={l.path} style={{
                padding: "0.4rem 0.75rem",
                borderRadius: 8,
                fontSize: "0.82rem",
                fontWeight: active ? 700 : 500,
                color: active ? "var(--sky)" : "var(--muted)",
                textDecoration: "none",
                background: active ? "rgba(56,189,248,0.1)" : "transparent",
                border: active ? "1px solid rgba(56,189,248,0.25)" : "1px solid transparent",
                transition: "all 0.2s",
                cursor: "none",
              }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = "var(--white)"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = "var(--muted)"; }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="hamburger-btn"
          style={{
            display: "none",
            flexDirection: "column", gap: 5,
            background: "none", border: "none",
            cursor: "none", padding: "8px",
            
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2,
              background: "var(--sky)", borderRadius: 2,
              transition: "transform 0.3s, opacity 0.3s",
              transform: menuOpen
                ? i === 0 ? "translateY(7px) rotate(45deg)"
                  : i === 2 ? "translateY(-7px) rotate(-45deg)"
                    : "scaleX(0)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "rgba(4,12,24,0.97)",
        backdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "0.5rem",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.35s ease",
      }}>
        {links.map((l, i) => {
          const active = location.pathname === l.path;
          return (
            <Link key={l.path} to={l.path} style={{
              fontSize: "1.4rem", fontWeight: 700,
              color: active ? "var(--sky)" : "var(--white)",
              textDecoration: "none",
              padding: "0.75rem 2rem",
              borderRadius: 12,
              background: active ? "rgba(56,189,248,0.1)" : "transparent",
              transition: "all 0.2s",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
              transitionDelay: `${i * 0.04}s`,
              cursor: "none",
            }}>
              {l.label}
            </Link>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}