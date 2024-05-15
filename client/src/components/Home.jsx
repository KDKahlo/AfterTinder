import React, {useRef} from "react";
import LoveQuote from "./LoveQuote";
import Hero from "./Hero";
import Home_Container1 from "../assets/Home_Container1.png";
import Home_Container2 from "../assets/Home_Container2.png";
import Home_Container3 from "../assets/Home_Container3.png";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Home() {
  const quizzesRef = useRef(null);

  const scrollToQuizzes = () => {
    quizzesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <Hero scrollToQuizzes={scrollToQuizzes}/>
      </section>

      {/* LoveQuote Section */}
      <section className="love-quote-section mt-5 colored-section padded-section">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <LoveQuote />
            </div>
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section
        ref={quizzesRef}
        className="quizzes-section mt-5 colored-section"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <img
                src={Home_Container1}
                alt="Quizzes Image"
                className="img-fluid"
                style={{ height: "100%" }}
              />
            </div>

            {/* Right Column */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="text-card" style={{ textAlign: "left" }}>
                <h5
                  className="card-title"
                  style={{ fontSize: "48px", paddingBottom: "10px" }}
                >
                  Quizzes
                </h5>
                <h6
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "18px", paddingBottom: "30px" }}
                >
                  Get ready for an "aha" moment!
                  Start with the Love Languages Quiz® to find out how you want to be loved.
                </h6>
                <Link to={"/QuizInstructions"}>
                  <button className="btn btn-primary">Start Quiz</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relationships Section */}
      <section className="relationships-section mt-5 colored-section">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="text-card" style={{ textAlign: "left" }}>
                <h5
                  className="card-title"
                  style={{ fontSize: "48px", paddingBottom: "10px" }}
                >
                  Relationships
                </h5>
                <h6
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "18px", paddingBottom: "30px" }}
                >
                  Relationships go two ways. Once you discover your love language, it's time to share.
                  Add the person (or persons) you are dating to the app so you can learn love them better.
                </h6>
                <Link to={"/relationships"}>
                  <button className="btn btn-primary">
                    Go to my Relationships
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <img
                src={Home_Container2}
                alt="Relationships Image"
                className="img-fluid"
                style={{ height: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Romantic Ideas Section */}
      <section
        className="romantic-ideas-section mt-5 colored-section"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <img
                src={Home_Container3}
                alt="Romantic Ideas Image"
                className="img-fluid"
                style={{ height: "100%" }}
              />
            </div>

            {/* Right Column */}
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="text-card" style={{ textAlign: "left" }}>
                <h5
                  className="card-title"
                  style={{ fontSize: "48px", paddingBottom: "10px" }}
                >
                  Romantic Ideas
                </h5>
                <h6
                  className="card-subtitle mb-2 text-muted"
                  style={{ fontSize: "18px", paddingBottom: "30px" }}
                >
                  People grow closer when they choose to consistently speak
                each other’s love language.
                Need ideas? Ask our AI and get personalized suggestions for your loved ones.
                </h6>
                <Link to={"/chatwithai"}>
                  <button className="btn btn-primary">Take me there</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
