import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs.sendForm(
      "service_d6da80n",      // 🔁 remplace par ton Service ID
      "template_oe1srhd",     // 🔁 remplace par ton Template ID
      formRef.current,
      "-bHHR-hvIsM-Rm5aa"       // 🔁 remplace par ta Public Key
    )
    .then(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setLoading(false);
      setError(true);
    });
  };

  return (
    <div className="page" style={{ position: "relative", zIndex: 1 }}>
      <div className="page-header">
        <h1 className="page-title">Contact</h1>
      </div>

      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "2rem 0"
      }}>
        {sent ? (
          <div style={{
            textAlign: "center",
            padding: "3rem",
            color: "#00bcd4"
          }}>
            <h2>Message envoyé ! ✅</h2>
            <p style={{ marginTop: "1rem", color: "#aaa" }}>
              Je vous répondrai dans les plus brefs délais.
            </p>
            <button
              onClick={() => setSent(false)}
              style={{
                marginTop: "1.5rem",
                padding: "0.75rem 2rem",
                background: "transparent",
                border: "1px solid #00bcd4",
                color: "#00bcd4",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              position: "relative",
              zIndex: 2
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ color: "#aaa", fontSize: "0.875rem" }}>
                Votre nom
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jean Dupont"
                required
                style={{
                  padding: "0.875rem 1rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  pointerEvents: "all"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ color: "#aaa", fontSize: "0.875rem" }}>
                Votre email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jean@exemple.com"
                required
                style={{
                  padding: "0.875rem 1rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  pointerEvents: "all"
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <label style={{ color: "#aaa", fontSize: "0.875rem" }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message..."
                required
                rows={6}
                style={{
                  padding: "0.875rem 1rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "vertical",
                  pointerEvents: "all",
                  fontFamily: "inherit"
                }}
              />
            </div>

            {error && (
              <p style={{ color: "#ff6b6b", fontSize: "0.875rem" }}>
                ❌ Une erreur s'est produite. Vérifie tes clés EmailJS.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "0.875rem 2rem",
                background: loading ? "rgba(0,188,212,0.4)" : "#00bcd4",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
                pointerEvents: "all"
              }}
            >
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}