"use client";

import Image from "next/image";

export default function ComboSection() {
  const comboLink = "https://airband.mitiendanube.com/";

  return (
    <section id="combo-biohacker" className="combo-section" style={{ padding: "6rem 0", background: "linear-gradient(180deg, rgba(15, 23, 42, 0.5) 0%, rgba(30, 41, 59, 0.5) 100%)", position: "relative" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-tag" style={{ color: "#0099ff", borderColor: "rgba(0,153,255,0.4)", background: "rgba(0,153,255,0.1)", display: "inline-block", margin: "0 auto 1rem" }}>
            Optimización Biomecánica
          </div>
          <h2 className="section-title reveal" style={{ textAlign: "center", marginBottom: "1rem" }}>
            El Combo <span className="text-accent">Biohacker</span>
          </h2>
          <p className="section-sub reveal" style={{ textAlign: "center", margin: "0 auto", maxWidth: "700px", fontSize: "1.1rem" }}>
            El protocolo definitivo de respiración nasal 24/7. Dilatación nasal mecánica de día y sellado bucal nocturno.
          </p>
        </div>

        <div className="combo-grid">
          {/* Visuals */}
          <div className="combo-visuals reveal">
            <div className="combo-images-container">
              <div className="combo-img-card dilatador-card">
                <Image
                  src="/assets/kit-negro.png"
                  alt="Kit Dilatador Nasal Negro"
                  width={250}
                  height={250}
                  style={{ objectFit: "contain", margin: "0 auto" }}
                  className="floating"
                />
                <span className="combo-img-label">Kit Dilatador Nasal</span>
              </div>
              <div className="combo-plus">+</div>
              <div className="combo-img-card tape-card">
                <Image
                  src="/assets/mouth-tape-negro.png"
                  alt="Mouth Tape Pro Negro"
                  width={250}
                  height={250}
                  style={{ objectFit: "contain", margin: "0 auto" }}
                  className="floating"
                />
                <span className="combo-img-label">Mouth Tape Pro</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="combo-details reveal-right">
            <h3>Dilatador Nasal + Mouth Tape Pro</h3>
            <p className="combo-description">
              Garantizá una respiración 100% nasal las 24 horas del día. El combo biohacker definitivo diseñado para optimizar tu rendimiento, enfoque y descanso profundo.
            </p>

            <div className="combo-features">
              <div className="combo-feat-item">
                <span className="feat-icon">☀️</span>
                <div className="feat-text">
                  <strong>De día: Máxima Oxigenación</strong>
                  <span>El dilatador magnético expande mecánicamente tus fosas nasales para rendir más entrenando, trabajando o en tu día a día.</span>
                </div>
              </div>
              <div className="combo-feat-item">
                <span className="feat-icon">🌙</span>
                <div className="feat-text">
                  <strong>De noche: Descanso sin Ronquidos</strong>
                  <span>La cinta bucal asegura que respires solo por la nariz durante el sueño, reduciendo ronquidos y optimizando tu recuperación.</span>
                </div>
              </div>
            </div>

            <div className="combo-pricing-card">
              <div className="price-row">
                <span>Kit Dilatador Nasal:</span>
                <span className="price-val">$35.000</span>
              </div>
              <div className="price-row">
                <span>Mouth Tape Pro (30 u):</span>
                <span className="price-val">$25.000</span>
              </div>
              <div className="price-row divider"></div>
              <div className="price-row total">
                <span>Precio Combo Biohacker:</span>
                <span className="price-val-total text-accent">$XX.000</span>
              </div>
              <div className="combo-savings">
                Ahorrás $XX.000 · Envío gratis incluido
              </div>
            </div>

            <div className="combo-actions">
              <a
                href={comboLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-xl combo-cta"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Comprar Combo Biohacker con Envío Gratis →
              </a>
              <p className="combo-disclaimer" style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)", textAlign: "center" }}>
                * Precio especial promocional por tiempo limitado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
