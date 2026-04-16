import { Link } from "react-router-dom";
import { experiences } from "../data/data";
import { useEffect } from "react";

export default function Experiences() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".flip-card-wrapper").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", padding: "6rem 2rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* En-tête */}
      <p style={{ color: "var(--sky)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
        Parcours professionnel
      </p>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "var(--sky)", marginBottom: "0.75rem" }}>
        Expériences
      </h1>
      <p style={{ color: "#94a3b8", marginBottom: "3rem" }}>
        Survolez une carte pour découvrir le détail complet.
      </p>

      {/* Grille de flip cards */}
      <div className="flip-grid">
        {experiences.map((exp) => (
          <div className="flip-card-wrapper" key={exp.id}>
            <div className="flip-card">

              {/* FACE AVANT */}
              <div className="flip-face flip-front" style={{ borderColor: exp.color }}>
                <div className="flip-front-top">
                  <span className="flip-badge" style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}40` }}>
                    {exp.type}
                  </span>
                  <span className="flip-period">{exp.period}</span>
                </div>
                <h2 className="flip-title" style={{ color: exp.color }}>{exp.title}</h2>
                <p className="flip-company">{exp.company}</p>
                <p className="flip-hint">Survolez pour voir le détail →</p>
                <div className="flip-glow" style={{ background: exp.color }} />
              </div>

              {/* FACE ARRIÈRE */}
              <div className="flip-face flip-back" style={{ borderColor: exp.color }}>
                <div className="flip-front-top">
                  <span className="flip-badge" style={{ background: `${exp.color}20`, color: exp.color, border: `1px solid ${exp.color}40` }}>
                    {exp.type}
                  </span>
                  <span className="flip-period">{exp.period}</span>
                </div>
                <p className="flip-summary">{exp.summary}</p>
                <div className="flip-techs">
                  {exp.technologies.map((t) => (
                    <span key={t} className="flip-tech" style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link to={`/experiences/${exp.id}`} className="flip-link" style={{ color: exp.color, borderColor: `${exp.color}50` }}>
                  Voir le détail complet →
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}