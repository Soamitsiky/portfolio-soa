import { useParams, Link } from "react-router-dom";
import { experiences } from "../data/data";
import { useEffect, useRef } from "react";


// Images thématiques par expérience (Unsplash - libres de droits)
const expImages = {
  "anywr-alternance": {
    hero: "https://images.unsplash.com/photo-1667984390527-850f63192709?w=1400&q=80", // Azure cloud
    sections: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", // réseau/cloud
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80", // code/terminal
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80", // infrastructure réseau
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80", // data center
    ],
  },
  "anywr-stage": {
    hero: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80", // support IT
    sections: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", // help desk
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", // réseau
    ],
  },
  "ichtus-stage": {
    hero: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1400&q=80", // Docker/containers
    sections: [
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80", // serveur
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80", // containers
    ],
  },
};

export default function ExperienceDetail() {
  const { id } = useParams();
  const exp = experiences.find((e) => e.id === id);
  const sectionsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("ed-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".ed-animate").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [id]);

  if (!exp) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8" }}>
      Expérience introuvable.
    </div>
  );

  const imgs = expImages[exp.id] || expImages["anywr-alternance"];

  return (
    <div className="ed-page">

      {/* ── HERO ── */}
      <div className="ed-hero" style={{ "--accent": exp.color }}>
        <img src={imgs.hero} alt={exp.title} className="ed-hero-img" />
        <div className="ed-hero-overlay" style={{ background: `linear-gradient(135deg, ${exp.color}30 0%, #0a0f1e 60%)` }} />
        <div className="ed-hero-content ed-animate">
          <Link to="/experiences" className="ed-back">← Retour aux expériences</Link>
          <div className="ed-hero-badges">
            <span className="ed-badge" style={{ background: `${exp.color}25`, color: exp.color, border: `1px solid ${exp.color}50` }}>{exp.type}</span>
            <span className="ed-badge ed-badge-period">{exp.period}</span>
          </div>
          <h1 className="ed-hero-title" style={{ color: exp.color }}>{exp.title}</h1>
          <p className="ed-hero-company">{exp.company}</p>
          <p className="ed-hero-summary">{exp.summary}</p>
        </div>
      </div>

      {/* ── TECHS ── */}
      <div className="ed-section ed-animate">
        <h2 className="ed-section-title" style={{ color: exp.color }}>Stack utilisée</h2>
        <div className="ed-techs">
          {exp.technologies.map((t) => (
            <span key={t} className="ed-tech" style={{ background: `${exp.color}12`, color: exp.color, border: `1px solid ${exp.color}30` }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── MISSIONS ── */}
      {exp.missions?.map((mission, i) => (
        <div className={`ed-mission ed-animate ${i % 2 === 1 ? "ed-mission-reverse" : ""}`} key={i}>

          {/* Image */}
          <div className="ed-mission-img-wrap">
            <img
              src={imgs.sections[i] || imgs.hero}
              alt={mission.title}
              className="ed-mission-img"
              loading="lazy"
            />
            <div className="ed-mission-img-glow" style={{ background: exp.color }} />
          </div>

          {/* Contenu */}
          <div className="ed-mission-content">
            <span className="ed-mission-num" style={{ color: exp.color }}>0{i + 1}</span>
            <h3 className="ed-mission-title" style={{ color: exp.color }}>{mission.title}</h3>
            <ul className="ed-mission-tasks">
              {mission.tasks.map((task, j) => (
                <li key={j} className="ed-task">
                  <span className="ed-task-dot" style={{ background: exp.color }} />
                  {task}
                </li>
              ))}
            </ul>
          </div>

        </div>
      ))}

      {/* ── FOOTER ── */}
      <div className="ed-footer ed-animate">
        <Link to="/experiences" className="ed-btn-back" style={{ border: `1px solid ${exp.color}50`, color: exp.color }}>
          ← Retour aux expériences
        </Link>
      </div>

    </div>
  );
}