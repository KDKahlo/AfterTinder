import React from "react";



export default function Hero() {
  return (
    <section className="hero">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="copy">
              <div class="text-label">
              Seeking effortless style improvement? Glow up in 3 simple steps!
              </div>
              <div class="text-hero-bold">
              Maximize Your Style Potential with Color Precision.
              </div>
              <div class="text-hero-regular">
              Let our AI analyze your facial colors and recommend the perfect wardrobe palette for you.
              </div>
              <div class="cta">
                <a href="#" class="btn btn-primary shadow-none">Try it now!</a>
                <a href="#" class="btn btn-secondary shadow-none ms-3">More info</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          <img src="src/assets/After_tinder_logo.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
