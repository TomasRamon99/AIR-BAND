"use client";

import { useState } from "react";
import Image from "next/image";

export default function ComboSection() {
  const [tapeColor, setTapeColor] = useState<"negro" | "rosado">("negro");

  const comboLink = "https://airband.mitiendanube.com/";

  const mouthTapeTiendaNubeLink = tapeColor === "negro"
    ? "https://airband.mitiendanube.com/productos/cinta-bucal-antironquidos-airband-mouth-tape-pro-descanso-30-unidades-14hba/"
    : "https://airband.mitiendanube.com/productos/cinta-bucal-antironquidos-airband-mouth-tape-pro-descanso-30-unidades-rosado-1khrm/";

  const mouthTapeMlLink = tapeColor === "negro"
    ? "https://www.mercadolibre.com.ar/cinta-bucal-antironquidos-airband-mouth-tape-pro-descanso/up/MLAU3956564132"
    : "https://www.mercadolibre.com.ar/cinta-bucal-antironquidos-airband-mouth-tape-pro-descanso-30/p/MLA2083053795?pdp_filters=item_id%3AMLA3378840240";

  return (
    <section id="combo-biohacker" className="combo-section" style={{ padding: "6rem 0", background: "linear-gradient(180deg, rgba(6, 6, 8, 0.5) 0%, rgba(13, 13, 18, 0.5) 100%)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="section-tag" style={{ color: "#0099ff", borderColor: "rgba(0,153,255,0.4)", background: "rgba(0,153,255,0.1)", display: "inline-block", margin: "0 auto 1rem" }}>
            Optimización Biomecánica
          </div>
          <h2 className="section-title reveal" style={{ textAlign: "center", marginBottom: "1rem" }}>
            Nuestras Soluciones de <span className="text-accent">Respiración Nasal</span>
          </h2>
          <p className="section-sub reveal" style={{ textAlign: "center", margin: "0 auto", maxWidth: "700px", fontSize: "1.1rem" }}>
            Sella la boca de noche, abre la nariz las 24 horas. Los mejores complementos para tu descanso y rendimiento deportivo.
          </p>
        </div>

        {/* Dual Checkout Grid */}
        <div className="dual-checkout-grid reveal">
          
          {/* Tarjeta 1: Combo Biohacker (Recomendado) */}
          <div className="checkout-card recommended" style={{ border: "2px solid var(--accent)", boxShadow: "0 0 30px rgba(0, 153, 255, 0.15)" }}>
            <div 
              style={{
                position: "absolute",
                top: "16px",
                right: "-32px",
                background: "var(--accent)",
                color: "#fff",
                transform: "rotate(45deg)",
                padding: "4px 32px",
                fontSize: "0.75rem",
                fontWeight: "800",
                letterSpacing: "1px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}
            >
              20% OFF
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px" }}>Optimización Completa</span>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: "800" }}>Combo Biohacker</h3>
            </div>
            
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              El protocolo definitivo de respiración nasal 24/7. Kit Dilatador Nasal + 30 Cintas Bucales Mouth Tape Pro.
            </p>

            {/* Visual del Combo */}
            <div 
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "var(--r-md)",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                margin: "0.5rem 0",
                height: "140px"
              }}
            >
              <Image
                src="/assets/kit-negro.png"
                alt="Kit Dilatador Nasal Negro"
                width={110}
                height={110}
                style={{ objectFit: "contain" }}
                className="floating"
              />
              <span style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--text-dim)" }}>+</span>
              <Image
                src="/assets/mouth-tape-negro.png"
                alt="Mouth Tape Pro"
                width={110}
                height={110}
                style={{ objectFit: "contain" }}
                className="floating"
              />
            </div>

            {/* Detalles/Puntos */}
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.88rem", padding: "0 0.5rem", color: "var(--text-muted)", margin: "0.5rem 0" }}>
              <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--accent)" }}>✓</span> <strong>☀️ De día:</strong> Mayor flujo nasal y oxigenación.</li>
              <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--accent)" }}>✓</span> <strong>🌙 De noche:</strong> Sello bucal y respiración 100% nasal.</li>
              <li style={{ display: "flex", gap: "0.5rem" }}><span style={{ color: "var(--accent)" }}>✓</span> <strong>📦 Envío gratis:</strong> Despacho en el día.</li>
            </ul>

            {/* Pricing del Combo */}
            <div 
              style={{
                background: "rgba(0,157,255,0.05)",
                border: "1px solid rgba(0,157,255,0.15)",
                padding: "16px",
                borderRadius: "10px",
                marginTop: "auto"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                <span>Precio separado:</span>
                <span style={{ textDecoration: "line-through" }}>$60.000</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontWeight: "700", fontSize: "1.1rem" }}>Precio Combo:</span>
                <span style={{ fontSize: "1.7rem", fontWeight: "900", color: "var(--accent)" }}>$49.900</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px" }}>
                <span className="descuento-badge" style={{ fontSize: "0.72rem", background: "rgba(0,153,255,0.15)", border: "1px solid rgba(0,153,255,0.3)" }}>
                  Más del 15% de descuento
                </span>
                <span style={{ fontSize: "0.8rem", color: "#00a650", fontWeight: "700" }}>Ahorrás $10.100</span>
              </div>
            </div>

            <div style={{ marginTop: "0.5rem" }}>
              <a
                href={comboLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-xl"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Comprar Combo Biohacker →
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Mouth Tape Pro (Individual) */}
          <div className="checkout-card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px" }}>Cinta Bucal Premium</span>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.6rem", fontWeight: "800" }}>Mouth Tape Pro</h3>
            </div>
            
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Caja de 30 cintas bucales hipoalergénicas para un sueño reparador y reentrenamiento respiratorio.
            </p>

            {/* Visual del Mouth Tape dinámico */}
            <div 
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "var(--r-md)",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0.5rem 0",
                height: "140px",
                position: "relative"
              }}
            >
              <Image
                src={tapeColor === "negro" ? "/assets/mouth-tape-negro.png" : "/assets/mouth-tape-rosado.png"}
                alt={`AIRBAND Mouth Tape Pro ${tapeColor.toUpperCase()}`}
                width={120}
                height={120}
                style={{ objectFit: "contain", transition: "all 0.5s ease" }}
                className="floating"
              />
            </div>

            {/* Color Selector */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Elegí tu Color:</span>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={() => setTapeColor("negro")}
                  className={`color-opt ${tapeColor === "negro" ? "active" : ""}`}
                  style={{ 
                    flex: 1, 
                    padding: "8px 12px", 
                    borderRadius: "20px", 
                    fontSize: "0.8rem", 
                    fontWeight: "600", 
                    background: tapeColor === "negro" ? "rgba(0, 153, 255, 0.1)" : "transparent",
                    border: tapeColor === "negro" ? "1px solid var(--accent)" : "1px solid var(--border)",
                    color: tapeColor === "negro" ? "var(--accent)" : "var(--text-muted)",
                    cursor: "pointer",
                    transition: "var(--trans)"
                  }}
                >
                  Negro
                </button>
                <button
                  onClick={() => setTapeColor("rosado")}
                  className={`color-opt ${tapeColor === "rosado" ? "active" : ""}`}
                  style={{ 
                    flex: 1, 
                    padding: "8px 12px", 
                    borderRadius: "20px", 
                    fontSize: "0.8rem", 
                    fontWeight: "600", 
                    background: tapeColor === "rosado" ? "rgba(0, 153, 255, 0.1)" : "transparent",
                    border: tapeColor === "rosado" ? "1px solid var(--accent)" : "1px solid var(--border)",
                    color: tapeColor === "rosado" ? "var(--accent)" : "var(--text-muted)",
                    cursor: "pointer",
                    transition: "var(--trans)"
                  }}
                >
                  Rosado
                </button>
              </div>
            </div>

            {/* Pricing de Mouth Tape */}
            <div 
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border)",
                padding: "16px",
                borderRadius: "10px",
                marginTop: "auto"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "4px" }}>
                <span>Precio lista (ML):</span>
                <span style={{ textDecoration: "line-through" }}>$34.125</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontWeight: "600", fontSize: "1rem" }}>Tienda Nube:</span>
                <span style={{ fontSize: "1.5rem", fontWeight: "800", color: "#fff" }}>$25.000</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px" }}>
                <span className="descuento-badge" style={{ fontSize: "0.72rem", background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
                  Envío gratis incluido
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: "700" }}>Ahorrás $9.125</span>
              </div>
            </div>

            {/* Acciones */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem" }}>
              <a
                href={mouthTapeTiendaNubeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "100%", padding: "0.7rem 1rem", fontSize: "0.88rem", justifyContent: "center" }}
              >
                Comprar en Tienda Nube ($25.000) →
              </a>
              <a
                href={mouthTapeMlLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ width: "100%", padding: "0.7rem 1rem", fontSize: "0.88rem", justifyContent: "center", color: "var(--text-muted)" }}
              >
                Ver en Mercado Libre →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
