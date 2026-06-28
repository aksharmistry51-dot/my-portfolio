import { useState, useEffect } from "react"
import { personalInfo } from "../data/data"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = ["About", "Skills", "Projects", "Contact"]

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 50,
      transition: "all 0.3s ease",
      backgroundColor: scrolled ? "rgba(15,23,42,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>

        <span style={{
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          color: "#F8FAFC",
        }}>
          {personalInfo.name.split(" ")[0]}
          <span style={{ color: "#38BDF8" }}>.</span>
        </span>

        <div style={{ display: "flex", gap: "2rem" }}>
          {links.map((item) => (
            <button
              key={item}
              onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" })}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: hovered === item ? "#38BDF8" : "#CBD5E1",
                fontSize: "0.875rem",
                fontWeight: 500,
                fontFamily: "Inter, sans-serif",
                transition: "color 0.2s ease",
                padding: 0,
              }}
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </nav>
  )
}