import { useState } from "react"
import { motion } from "framer-motion"
import { personalInfo } from "../data/data"

export default function Contact() {
  const [hoveredBtn, setHoveredBtn] = useState(null)

  const buttons = [
    { label: "Email Me", value: "email", action: () => window.open("mailto:" + personalInfo.email) },
    { label: "GitHub", value: "github", action: () => window.open(personalInfo.github, "_blank") },
    { label: "LinkedIn", value: "linkedin", action: () => window.open(personalInfo.linkedin, "_blank") },
  ]

  return (
    <section id="contact" style={{
      backgroundColor: "#0F172A",
      padding: "80px 24px",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h2 style={{
            fontFamily: "Sora, sans-serif", fontWeight: 700,
            fontSize: "2rem", color: "#F8FAFC", marginBottom: "12px",
          }}>
            Get In Touch
          </h2>
          <div style={{
            width: "48px", height: "3px", margin: "0 auto 20px",
            background: "linear-gradient(90deg, #38BDF8, #F59E0B)",
            borderRadius: "999px",
          }} />
          <p style={{
            color: "#CBD5E1", fontFamily: "Inter, sans-serif",
            fontSize: "1rem", lineHeight: 1.75,
          }}>
            I am open to new opportunities, collaborations, and conversations.
            Feel free to reach out anytime!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: "#1E293B",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "40px 32px",
            textAlign: "center",
          }}
        >
          <p style={{
            color: "#CBD5E1", fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem", marginBottom: "28px",
          }}>
            {personalInfo.email}
          </p>

          <div style={{
            display: "flex", flexDirection: "column", gap: "12px",
          }}>
            {buttons.map((btn) => (
              <button
                key={btn.value}
                onClick={btn.action}
                onMouseEnter={() => setHoveredBtn(btn.value)}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  backgroundColor: hoveredBtn === btn.value ? "rgba(56,189,248,0.1)" : "transparent",
                  color: hoveredBtn === btn.value ? "#38BDF8" : "#F8FAFC",
                  border: hoveredBtn === btn.value
                    ? "1px solid rgba(56,189,248,0.4)"
                    : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "14px",
                  padding: "14px 24px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "Inter, sans-serif",
                  transition: "all 0.2s ease",
                  width: "100%",
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}