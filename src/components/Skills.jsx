import { motion } from "framer-motion"
import { skills } from "../data/data"
import { useState } from "react"

const skillIcons = {
  "Java": "☕",
  "Python": "🐍",
  "JavaScript": "⚡",
  "React": "⚛️",
  "Node.js": "🟢",
  "HTML & CSS": "🎨",
  "Git & GitHub": "🐙",
}

export default function Skills() {
  return (
    <section id="skills" style={{
      backgroundColor: "#0F172A",
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
            Skills
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
            Technologies I work with
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "16px",
        }}>
          {skills.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#273449" : "#1E293B",
        border: hovered ? "1px solid rgba(56,189,248,0.4)" : "1px solid rgba(255,255,255,0.08)",
        borderRadius: "18px",
        padding: "24px 16px",
        textAlign: "center",
        cursor: "default",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
        {skillIcons[skill] || "💻"}
      </div>
      <div style={{
        fontFamily: "Inter, sans-serif", fontWeight: 600,
        fontSize: "0.9rem", color: hovered ? "#38BDF8" : "#F8FAFC",
        transition: "color 0.25s ease",
      }}>
        {skill}
      </div>
    </motion.div>
  )
}