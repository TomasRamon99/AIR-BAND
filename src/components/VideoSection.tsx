"use client";

import { useState } from "react";

export default function VideoSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="video-demo" className="video-section" style={{ padding: "5rem 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="section-tag" style={{ color: "#0099ff", borderColor: "rgba(0,153,255,0.4)", background: "rgba(0,153,255,0.1)", display: "inline-block", margin: "0 auto 1rem" }}>
          Demostración
        </div>
        <h2 className="section-title reveal" style={{ marginBottom: "1rem" }}>
          Mira a Air Band <span className="text-accent">en Acción</span>
        </h2>
        <p className="section-sub reveal" style={{ margin: "0 auto 3rem", maxWidth: "600px" }}>
          Descubre cómo se aplica y el efecto inmediato de la dilatación magnética en las vías nasales.
        </p>

        {/* Video Placeholder Container */}
        <div 
          className="reveal"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "16/9",
            margin: "0 auto",
            borderRadius: "var(--r-lg)",
            background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.7) 100%)",
            border: hovered ? "1px solid var(--accent)" : "1px solid var(--border)",
            boxShadow: hovered 
              ? "0 20px 50px rgba(0, 153, 255, 0.15), inset 0 0 20px rgba(0,153,255,0.05)" 
              : "0 15px 35px rgba(0,0,0,0.5)",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
            overflow: "hidden"
          }}
        >
          {/* Subtle glowing mesh in background */}
          <div 
            style={{
              position: "absolute",
              width: "150px",
              height: "150px",
              background: "radial-gradient(circle, rgba(0,153,255,0.15) 0%, transparent 70%)",
              borderRadius: "50%",
              filter: "blur(20px)",
              pointerEvents: "none",
              transform: hovered ? "scale(2.2)" : "scale(1)",
              transition: "transform 0.6s ease"
            }}
          />

          {/* Interactive Play Button */}
          <div 
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: hovered ? "var(--accent)" : "rgba(255, 255, 255, 0.05)",
              border: hovered ? "2px solid var(--accent)" : "2px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: hovered 
                ? "0 0 30px rgba(0, 153, 255, 0.5), inset 0 0 10px rgba(255,255,255,0.2)" 
                : "none",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
              zIndex: 3
            }}
          >
            {/* Play triangle */}
            <svg 
              width="28" 
              height="32" 
              viewBox="0 0 24 28" 
              fill={hovered ? "#fff" : "var(--accent)"} 
              style={{ 
                marginLeft: "4px", 
                transition: "fill 0.3s ease" 
              }}
            >
              <path d="M22.8 12.3L2.8 0.6C1.5-0.2 0 0.8 0 2.3v23.4c0 1.5 1.5 2.5 2.8 1.7l20-11.7c1.1-.7 1.1-2.7 0-3.4z" />
            </svg>
          </div>

          {/* Video Placeholder Label */}
          <div 
            style={{ 
              marginTop: "1.5rem", 
              zIndex: 3, 
              opacity: hovered ? 1 : 0.7, 
              transition: "opacity 0.3s ease" 
            }}
          >
            <span 
              style={{ 
                fontFamily: "var(--font-head)", 
                fontWeight: "700", 
                fontSize: "1.1rem", 
                letterSpacing: "0.5px",
                display: "block",
                color: "#fff"
              }}
            >
              Reproducir Video Demostrativo
            </span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px", display: "block" }}>
              (Próximamente disponible)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
