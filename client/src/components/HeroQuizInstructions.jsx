import React from "react";

export default function HeroQuizInstructions() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          {/* Columna Izquierda */}
          <div className="col-md-6">
            <div className="copy">
              <div className="text-label">Quiz</div>
              <div className="text-hero-bold">What's your Love Language®?</div>
              <div className="text-hero-regular">
              Take this quiz to discover your primary love language, what it means, and how you can use it to better connect with your loved ones.
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
                  paddingTop: "130px" /* Agregar padding superior */,
                  color: "white",
                }}
              > Take the quiz and find out.
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
