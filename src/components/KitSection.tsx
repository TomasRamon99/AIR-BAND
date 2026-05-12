"use client";

import Image from "next/image";

interface KitSectionProps {
  color: "blanco" | "negro";
  setColor: (color: "blanco" | "negro") => void;
}

export default function KitSection({ color, setColor }: KitSectionProps) {
  // Config filter to simulate black box - No longer needed since we have real images

  return (
    <section id="kit" className="kit-section">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: "center" }}>
          ¿Qué Incluye <span className="text-accent">El Kit?</span>
        </h2>
        <p className="section-sub reveal" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
          Diseñado para usarse apenas lo sacás de la caja. Todo lo necesario para 1 mes o más de respiración óptima.
        </p>
        <div className="kit-grid">
          <div className="kit-img-wrapper reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src={color === "blanco" ? "/assets/kit-blanco.png" : "/assets/kit-negro.png"}
              alt={`Kit AIRBAND ${color.toUpperCase()}`}
              width={600}
              height={600}
              className="floating"
              style={{ objectFit: 'contain', maxHeight: '500px', width: '100%', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))', transition: 'all 0.5s ease' }}
            />
          </div>
          <div className="kit-details reveal-right">
            <div className="kit-includes">
              <div className="ki-item">
                <div className="ki-number">4</div>
                <div className="ki-text">
                  <strong>Talles de Banda Magnética (S, M, L, XL)</strong>
                  <span>Encontrá el ajuste perfecto para el tamaño de tu nariz. Reutilizables de por vida.</span>
                </div>
              </div>
              <div className="ki-item ki-highlight">
                <div className="ki-number accent">60</div>
                <div className="ki-text">
                  <strong>Adhesivos Magnéticos Hipoalergénicos</strong>
                  <span>Delineados en acero quirúrgico. Suficientes para 30 días continuos o 60 días intermitentes.</span>
                </div>
              </div>
              <div className="ki-item">
                <div className="ki-number">1</div>
                <div className="ki-text">
                  <strong>Aplicador Magnético</strong>
                  <span>Estuche imantado que facilita la colocación de los adhesivos y guarda tus bandas de forma higiénica.</span>
                </div>
              </div>
            </div>
            <div className="kit-colors">
              <div className="colors-label">Disponibilidad de Colores:</div>
              <div className="color-opts">
                <div
                  className={`color-opt ${color === "blanco" ? "active" : ""}`}
                  onClick={() => setColor("blanco")}
                >
                  Blanco
                </div>
                <div
                  className={`color-opt ${color === "negro" ? "active" : ""}`}
                  onClick={() => setColor("negro")}
                >
                  Negro Exclusivo
                </div>
              </div>
            </div>
            <div className="kit-actions">
              <a
                href="https://link.mercadopago.com.ar/airband_directo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-xl kit-cta"
              >
                Comprar Ahora con 10% OFF
              </a>
              <p className="kit-nomed" style={{ marginTop: '1rem' }}>Kit no apto para problemas de salud graves. Consultá a tu médico.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
