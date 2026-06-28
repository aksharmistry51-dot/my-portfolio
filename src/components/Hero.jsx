import { motion } from "framer-motion"
import { personalInfo } from "../data/data"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0F172A",
      padding: "80px 24px 40px",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Background glows */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-100px", left: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        style={{ textAlign: "center", maxWidth: "700px", position: "relative", zIndex: 1 }}
      >
        <p style={{
          color: "#38BDF8", fontSize: "0.8rem", fontWeight: 600,
          letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px",
          fontFamily: "Inter, sans-serif",
        }}>
          Hello, I am
        </p>

        <h1 style={{
          fontFamily: "Sora, sans-serif", fontWeight: 800,
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          color: "#F8FAFC", marginBottom: "16px", lineHeight: 1.15,
        }}>
          {personalInfo.name}
        </h1>

        <h2 style={{
          fontFamily: "Inter, sans-serif", fontWeight: 500,
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "#F59E0B", marginBottom: "20px",
        }}>
          {personalInfo.title}
        </h2>

        <p style={{
          color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.75,
          marginBottom: "40px", fontFamily: "Inter, sans-serif",
        }}>
          {personalInfo.intro}
        </p>

        {/* Stat cards */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "16px",
          flexWrap: "wrap", marginBottom: "40px",
        }}>
          {[
            { label: "Projects", value: "2+" },
            { label: "Technologies", value: "7+" },
            { label: "Status", value: "Open to Work" },
          ].map((stat) => (
            <div key={stat.label} style={{
              backgroundColor: "#1E293B",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px", padding: "16px 24px", textAlign: "center",
              minWidth: "100px",
            }}>
              <div style={{
                fontFamily: "Sora, sans-serif", fontWeight: 700,
                fontSize: "1.5rem", color: "#38BDF8",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "Inter, sans-serif", fontSize: "0.75rem",
                color: "#CBD5E1", marginTop: "4px",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
            style={{
              backgroundColor: "#38BDF8", color: "#0F172A",
              border: "none", borderRadius: "12px",
              padding: "14px 28px", fontWeight: 600,
              fontSize: "0.9rem", cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => e.target.style.backgroundColor = "#7DD3FC"}
            onMouseLeave={e => e.target.style.backgroundColor = "#38BDF8"}
          >
            View Projects
          </button>
          <button
            onClick={() => window.open(personalInfo.github, "_blank")}
            style={{
              backgroundColor: "transparent", color: "#F8FAFC",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px",
              padding: "14px 28px", fontWeight: 600,
              fontSize: "0.9rem", cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "border 0.2s ease",
            }}
            onMouseEnter={e => e.target.style.borderColor = "#38BDF8"}
            onMouseLeave={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
          >
            GitHub
          </button>
          <button
            onClick={() => window.open(personalInfo.linkedin, "_blank")}
            style={{
              backgroundColor: "transparent", color: "#F8FAFC",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px",
              padding: "14px 28px", fontWeight: 600,
              fontSize: "0.9rem", cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "border 0.2s ease",
            }}
            onMouseEnter={e => e.target.style.borderColor = "#F59E0B"}
            onMouseLeave={e => e.target.style.borderColor = "rgba(255,255,255,0.15)"}
          >
            LinkedIn
          </button>
        </div>

      </motion.div>
    </section>
  )
}