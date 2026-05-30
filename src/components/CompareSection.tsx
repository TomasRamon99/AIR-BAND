export default function CompareSection() {
  return (
    <section className="compare-section">
      <div className="container">
        <div className="section-tag">¿Por qué AIRBAND?</div>
        <h2 className="section-title reveal">
          El Kit Más Completo.<br />
          <span className="text-accent">Al Mejor Precio del Mercado.</span>
        </h2>
        <p className="section-sub reveal">
          Los dilatadores nasales convencionales incluyen solo 30 adhesivos. AIRBAND te da 60. El doble de días. El doble de valor.
        </p>
        <div className="compare-table-wrapper reveal">
          <div className="compare-table">
            <div className="compare-header">
              <div className="ch-brand">Tipo de Producto</div>
              <div className="ch-col">Tecnología</div>
              <div className="ch-col">Adhesivos</div>
              <div className="ch-col">Talles</div>
              <div className="ch-col best">Valor</div>
            </div>
            <div className="compare-row highlight">
              <div className="cr-brand"><span className="badge-best">✓ AIRBAND Magnético</span></div>
              <div className="cr-col winner">Magnética 🏆</div>
              <div className="cr-col winner">60 🏆</div>
              <div className="cr-col winner">S/M/L/XL ✓</div>
              <div className="cr-col best-val">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="compare-row">
              <div className="cr-brand">Kit Magnético Estándar</div>
              <div className="cr-col">Magnética</div>
              <div className="cr-col">30</div>
              <div className="cr-col">—</div>
              <div className="cr-col">⭐⭐⭐</div>
            </div>
            <div className="compare-row">
              <div className="cr-brand">Tiras Nasales Plásticas</div>
              <div className="cr-col">Resorte Plástico</div>
              <div className="cr-col">30</div>
              <div className="cr-col">—</div>
              <div className="cr-col">⭐⭐</div>
            </div>
            <div className="compare-row">
              <div className="cr-brand">Dilatador Nasal Básico</div>
              <div className="cr-col">Sin Tecnología</div>
              <div className="cr-col">15–30</div>
              <div className="cr-col">—</div>
              <div className="cr-col">⭐</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Desliza para ver más</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
