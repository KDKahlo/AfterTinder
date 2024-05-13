import React from "react";

export default function MyQuizHero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          {/* Columna Izquierda */}
          <div className="col-md-6">
            <div className="copy">
              <div className="text-label">Love languages quiz</div>
              <div className="text-hero-bold">My Quiz Results</div>
              <div className="text-hero-regular">
                Click on each part of the chart to learn more.
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
                Find out how you receive love best
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
