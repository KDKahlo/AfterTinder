import React from "react";

export default function HeroRelationships() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          {/* Columna Izquierda */}
          <div className="col-md-6">
            <div className="copy">
              <div className="text-label">My Relationships</div>
              <div className="text-hero-bold">Strengthen Your Relationships</div>
              <div className="text-hero-regular">
              Understanding how your partner perceives love is vital for nurturing a deep and lasting bond.
    
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
              > Foster deeper connections and intimacy.
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
