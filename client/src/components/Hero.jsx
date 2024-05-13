import React from "react";



export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="copy">
              <div className="text-label">
                A match takes 1 second. How long does it take to really connect?
              </div>
              <div className="text-hero-bold">
                There is something else after a match.
              </div>
              <div className="text-hero-regular">
                This is the after-tinder revolution. Join us to transform love connections together.
              </div>
              <div className="cta">
                <a href="#" className="btn custom-btn">Try it now!</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="src/assets/Home_Hero.png" alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
