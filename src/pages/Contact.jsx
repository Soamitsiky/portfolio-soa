import { useState, useEffect } from "react";
import { profile } from "../data/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const subject = `Message depuis portfolio — ${form.name}`;
    const body = `Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="page" style={{ position: "relative", zIndex: 1 }}>
      <div className="page-header">
       
        <h1 className="page-title">Travaillons ensemble</h1>
        <p className="page-subtitle">Je recherche une alternance à partir de septembre 2026 dans les Hauts-de-France.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "3rem", alignItems: "start", flexWrap: "wrap" }} className="reveal">

        {/* Infos contact */}
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {[
              { icon: "✉️", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { icon: "💼", label: "LinkedIn", value: "Voir mon profil", href: profile.linkedin },
              { icon: "📍", label: "Localisation", value: profile.location, href: null },
            ].map(c => (
              <div key={c.label} className="card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                      style={{ color: "var(--sky)", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>{c.value}</a>
                  ) : (
                    <span style={{ color: "var(--white)", fontWeight: 500, fontSize: "0.9rem" }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire */}
        <div className="card">
          <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.5rem", color: "var(--sky)" }}>Envoyer un message</h3>

          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
              <p style={{ color: "var(--green)", fontWeight: 600 }}>Message envoyé !</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { key: "name", label: "Votre nom", type: "text", placeholder: "Nom et prénom" },
                { key: "email", label: "Votre email", type: "email", placeholder: "nom@exemple.com" },
              ].map(f => (
                <div key={f.key}>
                  <label style={{ fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>{f.label}</label>
                  <input
                    type={f.type} placeholder={f.placeholder} value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    style={{
                      width: "100%", padding: "0.75rem 1rem", borderRadius: 10,
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.2)",
                      color: "var(--white)", fontFamily: "var(--font)", fontSize: "0.9rem",
                      outline: "none", transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "var(--sky)"}
                    onBlur={e => e.target.style.borderColor = "rgba(56,189,248,0.2)"}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>Message</label>
                <textarea
                  rows={5} placeholder="Votre message..." value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%", padding: "0.75rem 1rem", borderRadius: 10,
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(56,189,248,0.2)",
                    color: "var(--white)", fontFamily: "var(--font)", fontSize: "0.9rem",
                    outline: "none", resize: "vertical", transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "var(--sky)"}
                  onBlur={e => e.target.style.borderColor = "rgba(56,189,248,0.2)"}
                />
              </div>
              <button onClick={handleSubmit} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Envoyer →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
