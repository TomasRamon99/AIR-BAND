import Image from "next/image";

export default function MouthTapeSection() {
  return (
    <section className="mouth-tape-section" style={{ padding: "6rem 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="section-tag" style={{ color: "#0099ff", borderColor: "rgba(0,153,255,0.4)", background: "rgba(0,153,255,0.1)" }}>
            Próximamente
          </div>
          <h2 className="section-title reveal" style={{ marginBottom: "1.5rem" }}>
            <span style={{ color: "var(--text-muted)" }}>Cerrá la boca.</span>
            <br />
            <span style={{ color: "#009dff", textShadow: "0 0 20px rgba(0, 157, 255, 0.4)" }}>Abrí tu rendimiento.</span>
          </h2>
          <p className="section-sub reveal delay-1" style={{ margin: "0 auto 3rem", fontSize: "1.1rem" }}>
            El complemento perfecto está por llegar. <strong>AIR BAND Mouth Tape Pro</strong> es la cinta bucal biohacker que, 
            usada junto al dilatador nasal, garantiza el 100% de respiración por la nariz durante toda la noche. 
            El <em>Combo Biohacker</em> definitivo.
          </p>

          <div className="mtp-container reveal delay-2">
            <Image
              src="/assets/mouth-tape-front.png"
              alt="Mouth Tape Pro Front"
              width={400}
              height={500}
              style={{ width: "100%", height: "auto", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}
              className="floating"
            />
            <Image
              src="/assets/mouth-tape-back.jpg"
              alt="Mouth Tape Pro Back Details"
              width={400}
              height={500}
              style={{ width: "100%", height: "auto", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}
            />
          </div>

          <div className="mtp-cta reveal delay-3" style={{ marginTop: "3rem" }}>
            <button className="btn btn-ghost btn-xl" style={{ border: "2px solid rgba(0,153,255,0.5)", color: "#009dff" }}>
              Avisarme cuando esté disponible →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
