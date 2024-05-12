import React from "react";
import LoveQuote from './LoveQuote';
import Hero from "./Hero";

import{Link} from "react-router-dom"
import{Outlet} from "react-router-dom"

export default function Home() {
    return (
        <div>
            <Hero /> 
        <div className="container mt-5">
            <h4 className="text-center mb-4">Home Page</h4>
            <div className="row">
                <div className="col-md-12">
                    <LoveQuote />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Quizzes</h5>
                            <p className="card-text">Start with our Love Languages Quiz to discover more about your relationship.</p>
                            <Link to={"/QuizInstructions"}>
                                <button className="btn btn-primary">Start Quiz</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Relationships</h5>
                            <p className="card-text">Manage your relationships and settings here.</p>
                            <Link to={"/relationships"}>
                                <button className="btn btn-primary">Manage Relationships</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <div className="card shadow-sm">
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
        </div>
        
        
    );
}
