"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Se puede reusar la banda magnética?",
      answer: "Absolutamente. La banda magnética es 100% reutilizable. Lo único que requiere recargo son los adhesivos de un solo uso."
    },
    {
      question: "¿Puedo usarlos si sufro de apnea del sueño?",
      answer: "AirBand sirve para reducir la resistencia del flujo de aire nasal. No es un tratamiento curativo para la Apnea Obstructiva del Sueño (AOS). Debe ser consultado con un médico especialista si padece afecciones respiratorias severas."
    },
    {
      question: "¿Cuánto dura una caja de adhesivos?",
      answer: "El kit básico incluye 60 adhesivos. Si lo usas todas las noches o entrenamientos de manera consecutiva, te durará 30 días, que es el doble del estándar del mercado."
    },
    {
      question: "¿Se sale durante la noche o al transpirar?",
      answer: "No. Los adhesivos están diseñados con un pegamento de fuerza médica resistente a la transpiración. Asegúrate de secar bien la nariz antes de colocarlos."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <h2 className="section-title reveal" style={{ textAlign: "center" }}>Preguntas Frecuentes</h2>
        <div className="faq-grid reveal">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
