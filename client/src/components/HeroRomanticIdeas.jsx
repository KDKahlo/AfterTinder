import React from "react";

export default function HeroRomanticIdeas() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          {/* Columna Izquierda */}
          <div className="col-md-6">
            <div className="copy">
              <div className="text-label">Romantic Ideas</div>
              <div className="text-hero-bold">(Real) love is in the air</div>
              <div className="text-hero-regular">
              It's time to speak your partner's love language. Just select the 
              options bellow and After-Tinder will give you great ideas!
    
              </div>
            </div>
          </div>
          {/* Columna Derecha */}
          <div className="col-md-6">
            <div className="copy">
              <div
                style={{
                  fontSize: "var(--header-4)",
                  display: "grid",
                  placeItems: "center",
                  height: "100%",
                  paddingTop: "120px" /* Agregar padding superior */,
                  color: "white",
                }}
              > Show them you care!
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
