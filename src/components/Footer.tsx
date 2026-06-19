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
            <a href="#kit">El Kit</a>
            <a href="#nosotros">Nosotros</a>
          </div>
          <div className="footer-col">
            <h4>Soporte</h4>
            <a href="#faq">Preguntas Frecuentes</a>
            <a href="#testimonios">Reseñas de Clientes</a>
            <a 
              href="https://wa.me/5493492527186?text=Hola!%20Vi%20el%20kit%20AIR%20BAND%20y%20tengo%20una%20pregunta." 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#25d366", fontWeight: 600, marginTop: "0.25rem" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M12.031 6.172c-3.181 0-5.768 2.589-5.768 5.77 0 1.018.265 2.017.766 2.898l-.815 2.984 3.05-.8c.846.463 1.799.706 2.766.706 3.182 0 5.768-2.589 5.768-5.77 0-3.18-2.586-5.768-5.767-5.768zm3.385 8.163c-.149.42-.76.767-1.047.818-.288.05-.572.076-1.636-.347-1.127-.45-1.855-1.597-1.912-1.674-.057-.076-.465-.623-.465-1.198 0-.574.301-.856.408-.97.108-.114.237-.143.315-.143h.227c.079 0 .185-.03.284.208l.386.94c.041.1.071.218.01.343-.061.124-.092.203-.186.312-.093.109-.196.244-.28.328-.093.093-.19.194-.082.38.109.186.483.797 1.037 1.293.714.637 1.312.836 1.498.922.186.085.293.073.4-.052.108-.124.465-.54.59-.724.123-.186.246-.156.411-.096l1.31.62c.164.08.272.12.316.195.043.076.043.438-.106.858zM12 .003C5.384.003 0 5.387 0 12.003c0 2.115.55 4.1 1.513 5.836L0 24l6.326-1.658c1.722.923 3.684 1.432 5.674 1.432 6.616 0 12-5.385 12-12C24 5.387 18.616.003 12 .003zm0 21.84c-1.848 0-3.662-.497-5.247-1.439l-.376-.223-3.896 1.02.16-3.8-.244-.389C1.444 15.42 1.082 13.722 1.082 12c0-6.02 4.9-10.918 10.918-10.918 6.02 0 10.918 4.9 10.918 10.918 0 6.02-4.9 10.92-10.918 10.92z" />
              </svg>
              Soporte por WhatsApp
            </a>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>Lunes a Viernes de 9 a 18 hs</p>
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
