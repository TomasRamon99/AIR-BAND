export default function FinalCtaSection() {
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

        <div className="fct-price-block reveal delay-2" style={{ border: 'none', background: 'transparent', padding: 0 }}>
          <div className="dual-checkout-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            textAlign: 'left'
          }}>
            {/* Card Mercado Libre */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
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
              <a
                href="https://www.mercadolibre.com.ar/dilatador-magnetico-nasal-kit-air-band-blanco-60adhesivos/p/MLA2062732915"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Comprar en MELI →
              </a>
            </div>

            {/* Card Mercado Pago (Directo) */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.1) 0%, var(--bg-card) 100%)',
              border: '1px solid var(--accent)',
              borderRadius: 'var(--r-lg)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
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
