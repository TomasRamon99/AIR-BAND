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
            <p>"Siempre usaba las tiras adhesivas communes, pero AirBand es otra cosa. La apertura se siente inmediata y lo uso tanto para dormir como para correr. Lo del doble de adhesivos me cerró por completo."</p>
            <div className="testi-author">- Martín G.</div>
          </div>
          <div className="testi-card reveal delay-1">
            <div className="testi-stars">★★★★★</div>
            <p>"Mi pareja roncaba muchísimo y esto fue el santo grial. Le molesta menos que el plástico duro en la nariz y los parches duran toda la noche intactos. Volví a poder dormir."</p>
            <div className="testi-author">- Laura S.</div>
          </div>
          <div className="testi-card reveal delay-2">
            <div className="testi-stars">★★★★★</div>
            <p>"El agarre es genial y que traiga 4 talles es la solución definitiva. Lo estuve buscando un montón en Argentina. Súper recomendado para los que hacemos entrenamiento de alta intensidad."</p>
            <div className="testi-author">- Esteban R.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
