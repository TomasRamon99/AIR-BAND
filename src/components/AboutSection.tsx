"use client";

import Image from "next/image";

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
              ¿Quiénes somos y <br />
              <span className="text-accent">Cómo nació AIR BAND?</span>
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

          {/* Columna Derecha: Foto del Fundador */}
          <div className="about-image-wrapper reveal-right" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <div 
              style={{
                width: "100%",
                maxWidth: "460px",
                aspectRatio: "1150 / 2048",
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              <Image
                src="/assets/founder.webp"
                alt="Fundador de AIR BAND usando el dilatador nasal"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
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
