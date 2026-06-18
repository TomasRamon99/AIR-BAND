"use client";

export default function AboutSection() {
  return (
    <section id="nosotros" className="about-section" style={{ padding: "6rem 0", background: "var(--bg-2)", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="about-grid">
          {/* Columna Izquierda: Historia */}
          <div className="about-content reveal">
            <div className="section-tag" style={{ color: "#0099ff", borderColor: "rgba(0,153,255,0.4)", background: "rgba(0,153,255,0.1)" }}>
              Nuestra Historia
            </div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Quiénes Somos y <br />
              <span className="text-accent">Cómo Nació Air Band</span>
            </h2>
            <div style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: "1.75", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p>
                Air Band nació de un problema personal. Mis ronquidos eran tan fuertes que mi familia me lo señalaba constantemente. Un día, mi hermana me envió una publicación en Instagram sobre una solución y vi un dilatador nasal.
              </p>
              <p>
                Compré el kit en Amazon desde EE.UU., lo probé y la diferencia fue inmediata. En ese momento me di cuenta del potencial de este producto para ayudar a miles de personas en situaciones similares.
              </p>
              <p>
                Encontré proveedores, los contacté y arranqué Air Band mientras cursaba la universidad y trabajaba al mismo tiempo. Hoy vendemos en toda Argentina a través de nuestra tienda online en Tienda Nube y Mercado Libre, ayudando a deportistas y personas comunes a respirar y descansar mejor de manera 100% natural.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Foto del Fundador (Placeholder) */}
          <div className="about-image-wrapper reveal-right" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div 
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "450px",
                borderRadius: "var(--r-lg)",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.05) 100%)",
                border: "2px dashed rgba(0, 153, 255, 0.3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.02)",
                gap: "1.5rem",
                padding: "2rem",
                textAlign: "center"
              }}
            >
              {/* Círculo decorativo central */}
              <div 
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "rgba(0, 153, 255, 0.1)",
                  border: "1px solid rgba(0, 153, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(0, 153, 255, 0.15)"
                }}
              >
                {/* Ícono de usuario */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-head)", fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem" }}>Fundador de Air Band</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", maxWidth: "250px", margin: "0 auto" }}>
                  Foto usando el Kit Air Band
                </p>
              </div>
              <span 
                style={{ 
                  fontSize: "0.75rem", 
                  color: "var(--accent)", 
                  textTransform: "uppercase", 
                  letterSpacing: "1.5px",
                  fontWeight: "600",
                  background: "rgba(0, 153, 255, 0.08)",
                  border: "1px solid rgba(0, 153, 255, 0.2)",
                  padding: "4px 12px",
                  borderRadius: "20px"
                }}
              >
                Próximamente
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos responsivos locales para la grilla */}
      <style jsx>{`
        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
