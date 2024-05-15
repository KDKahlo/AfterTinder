import React from "react";

export default function HeroProfile() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          {/* Columna Izquierda */}
          <div className="col-md-6">
            <div className="copy">
              <div className="text-label">My Profile</div>
              <div className="text-hero-bold">Welcome</div>
              <div className="text-hero-regular">
                It's never too late to start loving better!
              </div>
            </div>
          </div>
          {/* Columna Derecha - considerar poner una pic de branding here */}
          <div className="col-md-6">
            <div className="copy">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
