export default function TestimoniosSection() {
  return (
    <section id="testimonios" className="testimonios-section">
      <div className="container">
        <div className="section-tag">Miles Ya Lo Probaron</div>
        <h2 className="section-title reveal" style={{ textAlign: "center" }}>
          Su Respiración <span className="text-accent">Cambió</span>
        </h2>
        <div className="testimonios-grid">
          <div className="testi-card reveal">
            <div className="testi-stars">★★★★★</div>
            <p>&quot;Siempre usaba las tiras adhesivas communes, pero AirBand es otra cosa. La apertura se siente inmediata y lo uso tanto para dormir como para correr. Lo del doble de adhesivos me cerró por completo.&quot;</p>
            <div className="testi-author">- Martín G. <span className="verified-badge">comprador verificado en Mercado Libre ✓</span></div>
          </div>
          <div className="testi-card reveal delay-1">
            <div className="testi-stars">★★★★★</div>
            <p>&quot;Mi pareja roncaba muchísimo y esto fue el santo grial. Le molesta menos que el plástico duro en la nariz y los parches duran toda la noche intactos. Volví a poder dormir.&quot;</p>
            <div className="testi-author">- Laura S. <span className="verified-badge">compradora verificada en Mercado Libre ✓</span></div>
          </div>
          <div className="testi-card reveal delay-2">
            <div className="testi-stars">★★★★★</div>
            <p>&quot;El agarre es genial y que traiga 4 talles es la solución definitiva. Lo estuve buscando un montón en Argentina. Súper recomendado para los que hacemos entrenamiento de alta intensidad.&quot;</p>
            <div className="testi-author">- Esteban R. <span className="verified-badge">comprador verificado en Mercado Libre ✓</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
