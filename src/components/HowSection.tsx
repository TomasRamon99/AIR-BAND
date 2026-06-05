export default function HowSection() {
  return (
    <section className="how-section">
      <div className="container">
        <h2 className="section-title reveal" style={{ textAlign: "center" }}>
          ¿Cómo <span className="text-accent">Sirve?</span>
        </h2>
        <p className="section-sub reveal" style={{ textAlign: "center", margin: "0 auto 3rem" }}>
          Su diseño simple y no invasivo te permite estar respirando mejor en solo 1 minuto.
        </p>
        <div className="how-steps">
          <div className="how-step reveal">
            <div className="hs-num">1</div>
            <div className="hs-icon">🧼</div>
            <h3>Prepará la Piel</h3>
            <p>Lavá y secá bien la superficie de tu nariz para eliminar grasitud y garantizar la máxima fijación.</p>
          </div>
          <div className="how-arrow reveal delay-1 hide-mobile">→</div>
          <div className="how-step reveal delay-2">
            <div className="hs-num">2</div>
            <div className="hs-icon">🧲</div>
            <h3>Aplicá los Adhesivos</h3>
            <p>Ayudate con el aplicador magnético y dejá que los adhesivos de acero fijen a los costados de la nariz.</p>
          </div>
          <div className="how-arrow reveal delay-3 hide-mobile">→</div>
          <div className="how-step reveal delay-4">
            <div className="hs-num">3</div>
            <div className="hs-icon">🌬️</div>
            <h3>Colocá la Banda</h3>
            <p>Elegí la banda más cómoda para vos y pasala por encima. Los imanes harán el resto ensanchando tus vías.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
