import { motion } from "framer-motion"
import { personalInfo } from "../data/data"

export default function About() {
  return (
    <section id="about" style={{
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
            About Me
          </h2>
          <div style={{
            width: "48px", height: "3px", margin: "0 auto",
            background: "linear-gradient(90deg, #38BDF8, #F59E0B)",
            borderRadius: "999px",
          }} />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
        }}>

          {/* About text card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "#273449",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "32px",
            }}
          >
            <h3 style={{
              fontFamily: "Sora, sans-serif", fontWeight: 600,
              fontSize: "1.1rem", color: "#38BDF8", marginBottom: "16px",
            }}>
              Who I Am
            </h3>
            <p style={{
              color: "#CBD5E1", lineHeight: 1.8,
              fontFamily: "Inter, sans-serif", marginBottom: "16px",
            }}>
              {personalInfo.about}
            </p>
            <p style={{
              color: "#CBD5E1", lineHeight: 1.8,
              fontFamily: "Inter, sans-serif",
            }}>
              {personalInfo.learning}
            </p>
          </motion.div>

          {/* Interests card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: "#273449",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "32px",
            }}
          >
            <h3 style={{
              fontFamily: "Sora, sans-serif", fontWeight: 600,
              fontSize: "1.1rem", color: "#F59E0B", marginBottom: "20px",
            }}>
              My Interests
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {personalInfo.interests.map((interest) => (
                <span key={interest} style={{
                  backgroundColor: "rgba(56,189,248,0.08)",
                  color: "#38BDF8",
                  border: "1px solid rgba(56,189,248,0.2)",
                  borderRadius: "999px",
                  padding: "8px 18px",
                  fontSize: "0.85rem",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                }}>
                  {interest}
                </span>
              ))}
            </div>

            <h3 style={{
              fontFamily: "Sora, sans-serif", fontWeight: 600,
              fontSize: "1.1rem", color: "#F59E0B",
              marginBottom: "16px", marginTop: "28px",
            }}>
              Currently
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Building projects with React & Java",
                "Learning DSA & System Design",
                "Exploring AI & Machine Learning",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    backgroundColor: "#38BDF8", flexShrink: 0,
                  }} />
                  <span style={{
                    color: "#CBD5E1", fontSize: "0.9rem",
                    fontFamily: "Inter, sans-serif",
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}