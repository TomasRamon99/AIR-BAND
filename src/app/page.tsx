"use client";

import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import CompareSection from "../components/CompareSection";
import BenefitsSection from "../components/BenefitsSection";
import ScienceSection from "../components/ScienceSection";
import KitSection from "../components/KitSection";
import HowSection from "../components/HowSection";
import TestimoniosSection from "../components/TestimoniosSection";
import FaqSection from "../components/FaqSection";
import MouthTapeSection from "../components/MouthTapeSection";

export default function Home() {
  const [activeColor, setActiveColor] = useState<"blanco" | "negro">("negro");

  useEffect(() => {
    // SCROLL REVEAL ANIMATION
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-right").forEach((el) => {
      revealObserver.observe(el);
    });

    // SMOOTH SCROLL FOR IN_PAGE ANCHORS
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "a") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      revealObserver.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "AIRBAND Kit Dilatador Nasal Magnético",
    "description": "Kit de dilatación nasal magnética con 4 talles (S/M/L/XL), 60 adhesivos hipoalergénicos y aplicador magnético. El doble de adhesivos que la competencia.",
    "image": [
      "https://airbando2.com/assets/kit-negro.png"
    ],
    "brand": {
      "@type": "Brand",
      "name": "AIRBAND"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://airbando2.com",
      "priceCurrency": "ARS",
      "price": "19800.00",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "AIRBAND"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "56"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Se puede reusar la banda magnética?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. La banda magnética es 100% reutilizable. Lo único que requiere recargo son los adhesivos de un solo uso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo usarlos si sufro de apnea del sueño?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AirBand sirve para reducir la resistencia del flujo de aire nasal. No es un tratamiento curativo para la Apnea Obstructiva del Sueño (AOS). Debe ser consultado con un médico especialista si padece afecciones respiratorias severas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto dura una caja de adhesivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El kit básico incluye 60 adhesivos. Si lo usas todas las noches de manera consecutiva, te durará 30 días, que es el doble del estándar del mercado."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se sale durante la noche o al transpirar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Los adhesivos están diseñados con un pegamento de fuerza médica resistente a la transpiración. Asegurate de secar bien la nariz antes de colocarlos."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo usar el AIRBAND Dilatador Nasal Magnético",
    "description": "Pasos para colocar correctamente el dilatador nasal magnético AIRBAND.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Prepará la Piel",
        "text": "Lavá y secá bien la superficie de tu nariz para eliminar grasitud y garantizar la máxima fijación."
      },
      {
        "@type": "HowToStep",
        "name": "Aplicá los Adhesivos",
        "text": "Ayudate con el aplicador magnético y dejá que los adhesivos de acero fijen a los costados de la nariz."
      },
      {
        "@type": "HowToStep",
        "name": "Colocá la Banda",
        "text": "Elegí la banda más cómoda para vos y pasala por encima. Los imanes harán el resto ensanchando tus vías."
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeroSection color={activeColor} />
      <CompareSection />
      <BenefitsSection />
      <ScienceSection />
      <KitSection color={activeColor} setColor={setActiveColor} />
      <HowSection />
      <TestimoniosSection />
      <MouthTapeSection />
      <FaqSection />
    </main>
  );
}
