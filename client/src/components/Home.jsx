import React from "react";
import LoveQuote from './LoveQuote';
import Hero from "./Hero";

import{Link} from "react-router-dom"
import{Outlet} from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <Hero />
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
            <section className="quizzes-section mt-5 colored-section">
                <div className="container">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <img src="src/assets/After_tinder_logo.png" alt="Quizzes Image" className="img-fluid" style={{ height: "100%" }} />
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div className="card shadow-sm text-center w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Quizzes</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Start with our Love Languages Quiz to discover more about your relationship.</h6>
                                    <Link to={"/QuizInstructions"}>
                                        <button className="btn btn-primary">Start Quiz</button>
                                    </Link>
                                </div>
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
                            <div className="card shadow-sm text-center w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Relationships</h5>
                                    <p className="card-text">Manage your relationships and settings here.</p>
                                    <Link to={"/relationships"}>
                                        <button className="btn btn-primary">Manage Relationships</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6">
                            <img src="src/assets/After_tinder_logo.png" alt="Relationships Image" className="img-fluid" style={{ height: "100%" }} />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Romantic Ideas Section */}
            <section className="romantic-ideas-section mt-5 colored-section">
                <div className="container">
                    <div className="row">
                        {/* Left Column */}
                        <div className="col-md-6">
                            <img src="src/assets/After_tinder_logo.png" alt="Romantic Ideas Image" className="img-fluid" style={{ height: "100%" }} />
                        </div>

                        {/* Right Column */}
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div className="card shadow-sm text-center w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Romantic Ideas</h5>
                                    <p className="card-text">Need ideas? Start a chat with our AI to get personalized romantic ideas based on your love language.</p>
                                    <Link to={"/chatwithai"}>
                                        <button className="btn btn-primary">Chat with AI</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}