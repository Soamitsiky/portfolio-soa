import { Link } from "react-router-dom";
import { projects } from "../data/data";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("pj-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".pj-card-wrapper").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "6rem 2rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
      <p style={{ color: "var(--sky)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Réalisations
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--sky)", marginBottom: "0.75rem" }}>
        Projets
      </h1>
      <p style={{ color: "#94a3b8", marginBottom: "3rem" }}>
        Survolez une carte pour découvrir les détails techniques.
      </p>

      <div className="pj-grid">
        {projects.map((proj, i) => (
          <div
            className="pj-card-wrapper"
            key={proj.id}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="pj-card">

              {/* ── FACE AVANT ── */}
              <div className="pj-face pj-front" style={{ borderColor: proj.color }}>
                <span className="pj-bg-emoji">{proj.emoji}</span>
                <div className="pj-front-top">
                  <span
                    className="pj-status"
                    style={{
                      background: proj.status === "Terminé" ? "rgba(52,211,153,0.15)" : "rgba(251,191,36,0.15)",
                      color: proj.status === "Terminé" ? "#34D399" : "#FBBF24",
                      border: `1px solid ${proj.status === "Terminé" ? "#34D39940" : "#FBBF2440"}`,
                    }}
                  >
                    {proj.status === "Terminé" ? "✓ Terminé" : "⟳ En cours"}
                  </span>
                  <span className="pj-emoji-icon">{proj.emoji}</span>
                </div>
                <div className="pj-front-body">
                  <h2 className="pj-title" style={{ color: proj.color }}>{proj.title}</h2>
                  <p className="pj-subtitle">{proj.subtitle}</p>
                  <p className="pj-summary">{proj.summary}</p>
                </div>
                <p className="pj-hint">Survolez pour les détails →</p>
                <div className="pj-glow" style={{ background: proj.color }} />
              </div>

              {/* ── FACE ARRIÈRE ── */}
              <div className="pj-face pj-back" style={{ borderColor: proj.color }}>
                <div className="pj-front-top">
                  <h3 className="pj-back-title" style={{ color: proj.color }}>{proj.title}</h3>
                  <span className="pj-emoji-icon">{proj.emoji}</span>
                </div>
                {Object.keys(proj.stack).length > 0 && (
                  <div className="pj-stack-section">
                    <p className="pj-stack-label" style={{ color: proj.color }}>Stack</p>
                    <div className="pj-techs">
                      {Object.values(proj.stack).flat().slice(0, 8).map((t) => (
                        <span
                          key={t}
                          className="pj-tech"
                          style={{ background: `${proj.color}12`, color: proj.color, border: `1px solid ${proj.color}30` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="pj-back-links">
                  <Link
                    to={`/projects/${proj.id}`}
                    className="pj-link"
                    style={{ color: proj.color, borderColor: `${proj.color}50` }}
                  >
                    Voir le détail →
                  </Link>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-link"
                      style={{ color: "#94a3b8", borderColor: "rgba(148,163,184,0.3)" }}
                    >
                      🔗 Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}