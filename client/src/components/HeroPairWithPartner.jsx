import React from "react";

export default function HeroPairWithPartner() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          {/* Columna Izquierda */}
          <div className="col-md-6">
            <div className="copy">
              <div className="text-label">Pair with a partner</div>
              <div className="text-hero-bold">Partner Pairing</div>
              <div className="text-hero-regular">
                Pair with your partner and swap quiz results!
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
                  paddingTop: "110px" /* Agregar padding superior */,
                  color: "white",
                }}
              >
                Start connecting with your partners 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
