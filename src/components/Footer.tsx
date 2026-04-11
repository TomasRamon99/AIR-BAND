import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo footer-logo">
              <Image
                src="/assets/airband_logo.png"
                alt="AIRBAND Logo"
                width={200}
                height={70}
                className="logo-img-footer"
                style={{ mixBlendMode: "screen", filter: "brightness(1.1)" }}
              />
            </div>
            <p className="footer-tagline">
              Sistema avanzado de oxigenación nasal biomecánica.
              Líderes en el mercado Argentino.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <a href="#beneficios">Beneficios</a>
            <a href="#ciencia">La Ciencia</a>
            <a href="#kit">El Kit</a>
          </div>
          <div className="footer-col">
            <h4>Soporte</h4>
            <a href="#faq">Preguntas Frecuentes</a>
            <a href="#testimonios">Reseñas de Clientes</a>
            <p>Contacto: Envianos un mensaje por MercadoLibre.</p>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <p>Disclaimer: AirBand no es un producto médico destinado a tratar enfermedades respiratorias ni a reemplazar tratamientos recetados. Alivia temporalmente la congestión y ayuda a facilitar la respiración por la nariz al expandir las fosas nasales exteriormente por tensión magnética.</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} AIRBAND&trade; - Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
