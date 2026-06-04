"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <div className="announcement-track">
          <span>
            ⚡ Envío Full: ¡Llega mañana! &nbsp;·&nbsp; 💳 3 cuotas sin interés &nbsp;·&nbsp; 📦 Kit con 60 adhesivos — el doble que la competencia &nbsp;·&nbsp; ✅ Producto revisado y seguro &nbsp;·&nbsp; ⚡ Envío Full: ¡Llega mañana! &nbsp;·&nbsp; 💳 3 cuotas sin interés &nbsp;·&nbsp; 📦 Kit con 60 adhesivos — el doble que la competencia &nbsp;·&nbsp; ✅ Producto revisado y seguro
          </span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
        <div className="logo">
          <Image
            src="/assets/airband_logo.png"
            alt="AIRBAND Logo"
            width={150}
            height={52}
            className="logo-img-full"
          />
        </div>
        <ul className="nav-links">
          <li><a href="#beneficios" onClick={closeMenu}>Beneficios</a></li>
          <li><a href="#ciencia" onClick={closeMenu}>La Ciencia</a></li>
          <li><a href="#kit" onClick={closeMenu}>El Kit</a></li>
          <li><a href="#testimonios" onClick={closeMenu}>Reseñas</a></li>
        </ul>
        <a
          href="https://www.mercadolibre.com.ar/dilatador-magnetico-nasal-kit-air-band-4-bandas-60adhesivos/up/MLAU3417409179"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta"
        >
          Comprá Ahora
        </a>
        <button
          className="mobile-menu-btn"
          id="menuBtn"
          aria-label="Menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`} id="mobileMenu">
        <a href="#beneficios" className="mobile-link" onClick={closeMenu}>Beneficios</a>
        <a href="#ciencia" className="mobile-link" onClick={closeMenu}>La Ciencia</a>
        <a href="#kit" className="mobile-link" onClick={closeMenu}>El Kit</a>
        <a href="#testimonios" className="mobile-link" onClick={closeMenu}>Reseñas</a>
        <a
          href="https://www.mercadolibre.com.ar/dilatador-magnetico-nasal-kit-air-band-4-bandas-60adhesivos/up/MLAU3417409179"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: "1rem" }}
        >
          Comprá Ahora
        </a>
      </div>
    </>
  );
}
