interface FinalCtaSectionProps {
  color?: "blanco" | "negro";
}

export default function FinalCtaSection({ color = "blanco" }: FinalCtaSectionProps) {
  const mlLink = color === "negro"
    ? "https://www.mercadolibre.com.ar/dilatador-nasal-mejora-respiracion-ronquidos-60-adhesivos/p/MLA2062732915?pdp_filters=item_id%3AMLA1533672631"
    : "https://www.mercadolibre.com.ar/dilatador-nasal-mejora-respiracion-ronquidos-60-adhesivos/p/MLA2062732915?pdp_filters=item_id%3AMLA2762599018";

  return (
    <section className="final-cta">
      <div className="fct-glow"></div>
      <div className="container fct-content">
        <h2 className="reveal">
          Llevá tu Aire<br />Al Siguiente Nivel
        </h2>
        <p className="reveal delay-1">
          Probá el sistema magnético AIRBAND. Tu rendimiento y tu descanso nunca volverán a ser los mismos.
        </p>

        <div className="fct-price-block reveal delay-2" style={{ border: 'none', background: 'transparent', padding: 0, width: '100%', maxWidth: '750px', margin: '0 auto 2.5rem', display: 'block' }}>
          <div className="dual-checkout-grid">
            {/* Card Mercado Libre */}
            <div className="checkout-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>📦</span>
                <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Mercado Libre</h4>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, flex: 1 }}>
                Ideal para quienes priorizan el envío rápido Full y la máxima protección en su compra bajo el paraguas de MELI.
              </p>
              <div style={{ margin: '1rem 0' }}>
                <span style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-head)' }}>$22.000</span>
              </div>
              <div style={{ width: '100%' }}>
                <a
                  href={mlLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Comprar en MELI →
                </a>
                <div style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.85rem', color: '#00a650', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <svg width="12" height="14" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.68597 12.839C4.5492 12.9806 4.31688 12.9649 4.20456 12.8066L0.067332 6.96963C-0.0381652 6.82071 0.0682283 6.61111 0.250555 6.61111H3.66667V0.5C3.66667 0.223858 3.89052 0 4.16667 0H5.77259C5.93291 0 6.08272 0.0815468 6.16601 0.213897L9.93202 6.19838C10.0463 6.37989 9.91617 6.61111 9.70271 6.61111H5.83333V12.3333C5.83333 12.5855 5.53982 12.723 5.34651 12.5627L4.68597 12.839Z" fill="#00a650"/></svg>
                  Envío Full - ¡Llega mañana!
                </div>
              </div>
            </div>

            {/* Card Mercado Pago (Directo) */}
            <div className="checkout-card recommended">
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--accent)', color: '#fff', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, borderBottomLeftRadius: 'var(--r-md)' }}>
                RECOMENDADO
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>💳</span>
                <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--accent)' }}>Pago Directo (MP)</h4>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, flex: 1 }}>
                Al evitar comisiones de la plataforma, te transferimos el ahorro a vos con un <strong>10% OFF permanente</strong>.
              </p>
              <div style={{ margin: '1rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)', fontFamily: 'var(--font-head)' }}>$19.800</span>
                <span style={{ textDecoration: 'line-through', color: 'var(--text-dim)', fontSize: '1.1rem' }}>$22.000</span>
              </div>
              <a
                href="https://link.mercadopago.com.ar/airband_directo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Llevar con Descuento →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
