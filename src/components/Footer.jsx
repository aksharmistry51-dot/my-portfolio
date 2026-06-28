import { personalInfo } from "../data/data"

export default function Footer() {
  const links = [
    { label: "Email", action: () => window.open("mailto:" + personalInfo.email) },
    { label: "GitHub", action: () => window.open(personalInfo.github, "_blank") },
    { label: "LinkedIn", action: () => window.open(personalInfo.linkedin, "_blank") },
  ]

  return (
    <footer style={{
      backgroundColor: "#1E293B",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "32px 24px",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}>

        <span style={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#F8FAFC",
        }}>
          {personalInfo.name.split(" ")[0]}
          <span style={{ color: "#38BDF8" }}>.</span>
        </span>

        <div style={{ display: "flex", gap: "24px" }}>
          {links.map((link) => (
            <button
              key={link.label}
              onClick={link.action}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#CBD5E1",
                fontSize: "0.85rem",
                fontFamily: "Inter, sans-serif",
                transition: "color 0.2s ease",
                padding: 0,
              }}
              onMouseEnter={e => e.target.style.color = "#38BDF8"}
              onMouseLeave={e => e.target.style.color = "#CBD5E1"}
            >
              {link.label}
            </button>
          ))}
        </div>

        <p style={{
          color: "#475569",
          fontSize: "0.8rem",
          fontFamily: "Inter, sans-serif",
        }}>
          Built with React & Tailwind by {personalInfo.name}
        </p>

      </div>
    </footer>
  )
}