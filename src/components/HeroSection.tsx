"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

interface HeroSectionProps {
  color: "blanco" | "negro";
}

export default function HeroSection({ color }: HeroSectionProps) {
  // CSS filter to simulate black box from white render
  const imageFilter = color === "negro" ? "invert(1) hue-rotate(180deg) brightness(80%)" : "none";

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
          <div className="hero-cta reveal delay-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href="https://www.mercadolibre.com.ar/dilatador-magnetico-nasal-kit-air-band-blanco-60adhesivos/p/MLA2062732915"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xl"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Comprá en MercadoLibre →
            </a>
            <a
              href="https://link.mercadopago.com.ar/airband_directo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-xl"
              style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
              Pago Directo (Mercado Pago) — <strong style={{ marginLeft: '6px' }}>10% OFF</strong>
            </a>
          </div>
          <p className="hero-disclaimer reveal delay-4">
            ★★★★☆ Más de 56 clientes satisfechos · No es un producto médico
          </p>
        </div>
        <div className="hero-image-wrap reveal-right">
          <div className="hero-img-glow"></div>
          <Image
            src="/assets/front.png"
            alt={`Kit AIRBAND Dilatador Nasal Magnético ${color.toUpperCase()}`}
            width={400}
            height={600}
            className="hero-img floating"
            id="hero-product-img"
            style={{ filter: imageFilter, transition: "filter 0.5s ease" }}
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
