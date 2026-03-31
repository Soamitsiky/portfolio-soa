import { useParams, Link } from "react-router-dom";
import { experiences } from "../data/data";

export default function ExperienceDetail() {
  const { id } = useParams();
  const exp = experiences.find(e => e.id === id);
  if (!exp) return <div className="page" style={{ zIndex: 1, position: "relative" }}>Expérience introuvable.</div>;

  return (
    <div className="page" style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto" }}>
      <Link to="/experiences" className="back-link">← Retour aux expériences</Link>

      <div style={{ marginBottom: "2.5rem" }}>
        <div className="page-label">// {exp.type}</div>
        <h1 style={{ fontFamily: "var(--font)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: exp.color, marginBottom: "0.4rem" }}>{exp.title}</h1>
        <div style={{ fontSize: "2rem", color: "#00D4AA", marginBottom: "1rem" }}>{exp.company}</div>
        <span style={{
          fontFamily: "var(--mono)", fontSize: "0.78rem", padding: "0.3rem 1rem",
          borderRadius: 20, background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}33`,
        }}>{exp.period}</span>
      </div>

      <div className="divider" />

      {/* Missions */}
      <div style={{ marginBottom: "3rem" }}>
       
        {exp.missions.map((m, i) => (
          <div key={i} className="card" style={{ marginBottom: "1.2rem", borderLeft: `3px solid ${exp.color}` }}>
            <h3 style={{ fontFamily: "var(--font)", fontWeight: 700, fontSize: "0.95rem", color: exp.color, marginBottom: "0.9rem" }}>{m.title}</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {m.tasks.map((t, j) => (
                <li key={j} style={{ display: "flex", gap: "0.6rem", fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6 }}>
                  <span style={{ color: exp.color, flexShrink: 0, marginTop: 2 }}>▸</span>{t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div>
        <div className="page-label" style={{ marginBottom: "1rem" }}>Technologies utilisées</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
          {exp.technologies.map(t => (
            <span key={t} style={{
              padding: "0.35rem 0.9rem", borderRadius: 8, fontSize: "0.8rem", fontFamily: "var(--mono)",
              background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30`,
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
