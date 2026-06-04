"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

interface HeroSectionProps {
  color: "blanco" | "negro";
}

export default function HeroSection({ color }: HeroSectionProps) {

  const mlLink = color === "negro" 
    ? "https://www.mercadolibre.com.ar/dilatador-magnetico-nasal-kit-air-band-4-bandas-60adhesivos/up/MLAU3417409179" 
    : "https://www.mercadolibre.com.ar/dilatador-magnetico-nasal-kit-air-band-blanco-60adhesivos/up/MLAU3718266768";

  const tiendaNubeLink = color === "negro"
    ? "https://airband.mitiendanube.com/productos/dilatador-magnetico-nasal-kit-air-band-4-bandas-color-negro-60-adhesivos-fhiw6/"
    : "https://airband.mitiendanube.com/productos/dilatador-magnetico-nasal-kit-air-band-4-bandas-color-blanco-60-adhesivos-1p3h0/";

  return (
    <>
      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="hero-content">
          <div className="hero-badge reveal">Tecnología Magnética Aplicada Al Bienestar</div>
          <h1 className="reveal delay-1">
            RESPIRA MEJOR<br />
            <span className="text-gradient">RINDE MÁS.</span>
          </h1>
          <p className="hero-subtitle reveal delay-2">
            El kit de dilatación nasal magnética más completo del mercado.
            Diseñado para optimizar tu sueño, tu energía y tu rendimiento.
          </p>
          <div className="hero-stats reveal delay-3">
            <div className="stat">
              <strong><AnimatedCounter target={60} /></strong>
              <span>Adhesivos Incluidos</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <strong><AnimatedCounter target={4} /></strong>
              <span>Talles Disponibles</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <strong><AnimatedCounter target={30} /></strong>
              <span>Días de Uso</span>
            </div>
          </div>
          <div className="hero-cta reveal delay-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}>
            <a
              href={mlLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xl hero-cta-item"
              style={{ justifyContent: 'center' }}
            >
              Comprá en MercadoLibre →
            </a>
            <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#00a650', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
              <svg width="12" height="14" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.68597 12.839C4.5492 12.9806 4.31688 12.9649 4.20456 12.8066L0.067332 6.96963C-0.0381652 6.82071 0.0682283 6.61111 0.250555 6.61111H3.66667V0.5C3.66667 0.223858 3.89052 0 4.16667 0H5.77259C5.93291 0 6.08272 0.0815468 6.16601 0.213897L9.93202 6.19838C10.0463 6.37989 9.91617 6.61111 9.70271 6.61111H5.83333V12.3333C5.83333 12.5855 5.53982 12.723 5.34651 12.5627L4.68597 12.839Z" fill="#00a650"/></svg>
              Envío Full - ¡Llega mañana!
            </div>
            <a
              href="https://www.mercadolibre.com.ar/bandas-nasales-magneticas-kit-antironquidos-kit-30-dias/up/MLAU3645400696"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-xl hero-cta-item"
              style={{ justifyContent: 'center', borderColor: 'var(--border)', color: 'var(--text-muted)' }}
            >
              Ver publicación con cuotas sin interés
            </a>
            <a
              href={tiendaNubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-xl hero-cta-item"
              style={{ justifyContent: 'center', borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
              Pago Directo (Tienda Nube) — <strong style={{ marginLeft: '6px' }}>10% OFF</strong>
            </a>
          </div>
          <p className="hero-disclaimer reveal delay-4">
            ★★★★☆ Más de 56 clientes satisfechos · No es un producto médico
          </p>
        </div>
        <div className="hero-image-wrap reveal-right">
          <div className="hero-img-glow"></div>
          <Image
            src={color === "blanco" ? "/assets/kit-blanco.png" : "/assets/kit-negro.png"}
            alt={`Kit AIRBAND Dilatador Nasal Magnético ${color.toUpperCase()}`}
            width={400}
            height={600}
            className="hero-img floating"
            id="hero-product-img"
            style={{ objectFit: 'contain', maxHeight: '600px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))', transform: 'scale(1.15)', transition: 'all 0.5s ease' }}
            priority
          />
        </div>
      </header>

      {/* SOCIAL PROOF BAR */}
      <section className="social-proof-bar">
        <div className="sp-item">
          <span className="sp-num"><AnimatedCounter target={56} suffix="+" /></span>
          <span className="sp-label">Clientes que Respiran Mejor</span>
        </div>
        <div className="sp-sep">·</div>
        <div className="sp-item">
          <span className="sp-stars">★★★★</span>
          <span className="sp-label">Calificación en MercadoLibre</span>
        </div>
        <div className="sp-sep">·</div>
        <div className="sp-item">
          <span className="sp-num"><AnimatedCounter target={2} suffix="x" /></span>
          <span className="sp-label">Más Adhesivos que la Competencia</span>
        </div>
        <div className="sp-sep">·</div>
        <div className="sp-item">
          <span className="sp-num"><AnimatedCounter target={3} /></span>
          <span className="sp-label">Cuotas Sin Interés</span>
        </div>
      </section>
    </>
  );
}
