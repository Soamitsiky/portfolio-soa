import { Link } from "react-router-dom";
import { experiences } from "../data/data";
import { useEffect } from "react";

const experienceImages = {
  "anywr-alternance": "url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/bd5cc62d203e7dd31a6056f6c88f397c58c65df1.jpg')",
  "anywr-stage": "url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/82ef3a222fadfb041d6cf0fd203098fcba7aa685.jpg')",
  "ichtus-stage": "url('https://pplx-res.cloudinary.com/image/upload/pplx_search_images/fad4503356c9029ba159d7846f7db34305a7922e.jpg')",
};

export default function Experiences() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page" style={{ position: "relative", zIndex: 1 }}>
      <div className="page-header">
        <div className="page-label">Parcours professionnel</div>
        <h1 className="page-title">Expériences</h1>
        <p className="page-subtitle">Cliquez sur une expérience pour voir le détail complet.</p>
      </div>

      <div className="timeline reveal">
        {experiences.map((exp) => (
          <div key={exp.id} className="tl-item">
            <div
              className="tl-dot"
              style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}88` }}
            />

            <Link to={`/experiences/${exp.id}`} className="exp-card-link">
              <div
                className="exp-card card"
                style={{
                  borderLeft: `3px solid ${exp.color}`,
                  ["--bg-image"]: experienceImages[exp.id],
                }}
              >
                <div className="exp-meta" style={{ marginBottom: "0.75rem" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1.05rem", color: exp.color }}>
                      {exp.title}
                    </div>
                    <div style={{ color: "var(--muted)", fontSize: "0.85rem", marginTop: "0.2rem" }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "0.72rem",
                        padding: "0.25rem 0.8rem",
                        borderRadius: 20,
                        background: `${exp.color}18`,
                        color: exp.color,
                        border: `1px solid ${exp.color}33`,
                      }}
                    >
                      {exp.period}
                    </span>
                    <span className="tag-lilac tag" style={{ fontSize: "0.68rem" }}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  {exp.summary}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {exp.technologies.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "0.2rem 0.6rem",
                        borderRadius: 5,
                        fontSize: "0.68rem",
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}25`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {exp.technologies.length > 5 && (
                    <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>
                      +{exp.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}