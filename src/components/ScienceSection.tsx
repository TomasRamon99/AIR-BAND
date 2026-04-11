import Image from "next/image";

export default function ScienceSection() {
  return (
    <section id="ciencia" className="science-section">
      <div className="container">
        <div className="section-tag">La Ciencia detrás de AirBand</div>
        <h2 className="section-title reveal">
          Respiración Nasal vs Bucal.<br />
          <span className="text-accent">Por Qué Importa.</span>
        </h2>
        <p className="science-lead reveal">
          Respirar por la nariz actúa como un filtro natural, calienta el aire y aumenta la
          producción de óxido nítrico, lo que mejora la circulación y oxigenación.
        </p>
        <div className="science-grid">
          <div className="science-steps">
            <div className="sci-step reveal delay-1">
              <div className="sci-num">1</div>
              <div className="sci-content">
                <h4>Apertura Magnética Magnificada</h4>
                <p>Las bandas magnéticas aplican una tensión constante que dilata los conductos nasales entre un 30% y un 40% más que la capacidad normal.</p>
              </div>
            </div>
            <div className="sci-step reveal delay-2">
              <div className="sci-num">2</div>
              <div className="sci-content">
                <h4>Aumento de Óxido Nítrico</h4>
                <p>El mayor flujo nasal fomenta la liberación de óxido nítrico, un vasodilatador clave que mejora el transporte de oxígeno en sangre.</p>
              </div>
            </div>
            <div className="sci-step reveal delay-3">
              <div className="sci-num">3</div>
              <div className="sci-content">
                <h4>Menor Resistencia al Flujo Aéreo</h4>
                <p>Al reducir la resistencia en las vías respiratorias altas, disminuyen los ronquidos y la fatiga muscular respiratoria durante el ejercicio o sueño.</p>
              </div>
            </div>
          </div>
          <div className="science-visual reveal-right">
            <Image
              src="/assets/side.jpg"
              alt="Diagrama Anatómico del Dilatador Nasal"
              width={400}
              height={500}
              className="science-img"
            />
            <div className="sci-badges mt-6">
              <span className="sci-badge">Sin Medicamentos</span>
              <span className="sci-badge">100% Mecánico</span>
              <span className="sci-badge">Diseño Ergonómico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
