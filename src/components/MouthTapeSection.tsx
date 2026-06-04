"use client";

import { useState } from "react";
import Image from "next/image";

export default function MouthTapeSection() {
  const [tapeColor, setTapeColor] = useState<"negro" | "rosado">("negro");

  // El usuario enviará luego los links específicos de tienda nube para la cinta
  const shopLink = "https://airband.mitiendanube.com/";

  return (
    <section id="mouth-tape" className="mouth-tape-section" style={{ padding: "6rem 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="section-tag" style={{ color: "#0099ff", borderColor: "rgba(0,153,255,0.4)", background: "rgba(0,153,255,0.1)" }}>
            Disponible Ahora
          </div>
          <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
            <span style={{ color: "var(--text-muted)" }}>Cerrá la boca.</span>
            <br />
            <span style={{ color: "#009dff", textShadow: "0 0 20px rgba(0, 157, 255, 0.4)" }}>Abrí tu rendimiento.</span>
          </h2>
          <p className="section-sub reveal delay-1" style={{ margin: "0 auto 3rem", fontSize: "1.1rem" }}>
            El complemento definitivo para tu descanso y enfoque. <strong>AIR BAND Mouth Tape Pro</strong> es la cinta bucal biohacker que, 
            usada junto al dilatador nasal, garantiza el 100% de respiración por la nariz durante toda la noche. 
            El <em>Combo Biohacker</em> definitivo.
          </p>

          <div className="mtp-container reveal delay-2">
            {/* Columna Izquierda: Render de Producto */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Image
                src={tapeColor === "negro" ? "/assets/mouth-tape-negro.png" : "/assets/mouth-tape-rosado.png"}
                alt={`AIRBAND Mouth Tape Pro ${tapeColor.toUpperCase()}`}
                width={500}
                height={500}
                className="floating"
                style={{ objectFit: 'contain', maxHeight: '420px', width: '100%', filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.5))', transition: 'all 0.5s ease' }}
              />
            </div>

            {/* Columna Derecha: Características e interactividad */}
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
              <div className="kit-includes" style={{ margin: 0 }}>
                <div className="ki-item">
                  <div className="ki-number" style={{ fontSize: '1.8rem', width: '40px' }}>🌱</div>
                  <div className="ki-text">
                    <strong>Material Hipoalergénico y Respirable</strong>
                    <span>Algodón ultra suave de grado médico, 100% libre de látex, ideal para uso nocturno.</span>
                  </div>
                </div>
                <div className="ki-item ki-highlight">
                  <div className="ki-number accent" style={{ fontSize: '1.8rem', width: '40px' }}>🔒</div>
                  <div className="ki-text">
                    <strong>Pegado Seguro sin Residuos</strong>
                    <span>Fijación perfecta durante el sueño que se remueve fácilmente sin dolor ni irritación.</span>
                  </div>
                </div>
                <div className="ki-item">
                  <div className="ki-number" style={{ fontSize: '1.8rem', width: '40px' }}>🌬️</div>
                  <div className="ki-text">
                    <strong>Orificio de Ventilación Central</strong>
                    <span>Pequeña ranura de seguridad ergonómica que brinda tranquilidad adicional.</span>
                  </div>
                </div>
                <div className="ki-item">
                  <div className="ki-number" style={{ fontSize: '1.8rem', width: '40px' }}>📦</div>
                  <div className="ki-text">
                    <strong>Caja de 30 Unidades</strong>
                    <span>Contiene 30 cintas bucales descartables, ideal para reentrenar tu patrón respiratorio por 1 mes.</span>
                  </div>
                </div>
              </div>

              <div className="kit-colors" style={{ margin: 0 }}>
                <div className="colors-label">Elegí tu Color:</div>
                <div className="color-opts">
                  <div
                    className={`color-opt ${tapeColor === "negro" ? "active" : ""}`}
                    onClick={() => setTapeColor("negro")}
                  >
                    Negro Biohacker
                  </div>
                  <div
                    className={`color-opt ${tapeColor === "rosado" ? "active" : ""}`}
                    onClick={() => setTapeColor("rosado")}
                  >
                    Rosado
                  </div>
                </div>
              </div>

              <div className="kit-actions" style={{ marginTop: '0.5rem' }}>
                <a
                  href={shopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-xl kit-cta"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Comprar Mouth Tape Pro
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
