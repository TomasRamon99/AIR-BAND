export default function BenefitsSection() {
  return (
    <section id="beneficios" className="benefits-section">
      <div className="container">
        <div className="section-tag">Beneficios Comprobados</div>
        <h2 className="section-title reveal">
          3 Motivos Para <span className="text-accent">Respirar Diferente</span>
        </h2>
        <div className="benefits-grid">
          <div className="benefit-card reveal">
            <div className="bc-icon bc-icon-sleep">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <h3>+ Descanso</h3>
            <p>
              Abrí las fosas nasales para mantener un flujo de aire nasal constante toda la noche. Menos
              interrupciones, sueño más profundo y reparador.
            </p>
            <ul className="benefit-list">
              <li>Reduce los ronquidos</li>
              <li>Mejora la respiración nocturna</li>
              <li>Ciclos de sueño más completos</li>
            </ul>
          </div>
          <div className="benefit-card reveal delay-1">
            <div className="bc-icon bc-icon-energy">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3>+ Energía</h3>
            <p>
              Una mejor oxigenación durante el descanso se traduce en mayor energía durante el día. Despertate
              renovado y listo para rendir al máximo.
            </p>
            <ul className="benefit-list">
              <li>Mayor concentración</li>
              <li>Recuperación acelerada</li>
              <li>Más energía desde el despertar</li>
            </ul>
          </div>
          <div className="benefit-card reveal delay-2">
            <div className="bc-icon bc-icon-sport">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>+ Rendimiento</h3>
            <p>
              Usado durante el entrenamiento o el sueño, el AIRBAND optimiza el flujo de aire para mejorar la
              resistencia y el rendimiento deportivo.
            </p>
            <ul className="benefit-list">
              <li>Mayor resistencia física</li>
              <li>Entrenamiento más eficiente</li>
              <li>Recuperación muscular mejorada</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
