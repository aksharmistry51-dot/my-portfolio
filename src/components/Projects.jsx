import { useState } from "react"
import { motion } from "framer-motion"
import { projects } from "../data/data"

export default function Projects() {
  return (
    <section id="projects" style={{
      backgroundColor: "#1E293B",
      padding: "80px 24px",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2 style={{
            fontFamily: "Sora, sans-serif", fontWeight: 700,
            fontSize: "2rem", color: "#F8FAFC", marginBottom: "12px",
          }}>
            Projects
          </h2>
          <div style={{
            width: "48px", height: "3px", margin: "0 auto",
            background: "linear-gradient(90deg, #38BDF8, #F59E0B)",
            borderRadius: "999px",
          }} />
          <p style={{
            color: "#CBD5E1", marginTop: "16px",
            fontFamily: "Inter, sans-serif", fontSize: "0.95rem",
          }}>
            Things I have built
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#273449",
        border: hovered ? "1px solid rgba(56,189,248,0.4)" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div style={{
        width: "40px", height: "40px", borderRadius: "12px",
        backgroundColor: "rgba(56,189,248,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "16px", fontSize: "1.3rem",
      }}>
        🚀
      </div>

      <h3 style={{
        fontFamily: "Sora, sans-serif", fontWeight: 700,
        fontSize: "1.15rem", color: "#F8FAFC", marginBottom: "10px",
      }}>
        {project.name}
      </h3>

      <p style={{
        color: "#CBD5E1", fontSize: "0.9rem",
        lineHeight: 1.75, fontFamily: "Inter, sans-serif",
        marginBottom: "20px", flex: 1,
      }}>
        {project.description}
      </p>

      <div style={{
        display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px",
      }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            backgroundColor: "rgba(245,158,11,0.1)",
            color: "#F59E0B",
            border: "1px solid rgba(245,158,11,0.2)",
            borderRadius: "999px",
            padding: "4px 12px",
            fontSize: "0.75rem",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          }}>
            {t}
          </span>
        ))}
      </div>

      <button
        onClick={() => window.open(project.github, "_blank")}
        style={{
          backgroundColor: hovered ? "rgba(56,189,248,0.15)" : "transparent",
          color: "#38BDF8",
          border: "1px solid rgba(56,189,248,0.3)",
          borderRadius: "12px",
          padding: "10px 20px",
          fontSize: "0.85rem",
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: "Inter, sans-serif",
          transition: "all 0.2s ease",
          width: "100%",
        }}
      >
        View on GitHub
      </button>

    </motion.div>
  )
}