import quizData from "../assets/lovelanguagequiz";

import {Link} from "react-router-dom";


import React from "react";
import HeroQuizInstructions from "./HeroQuizInstructions";

export default function QuizInstructions() {
  const getQuizQuestions = async () => {
    try {
      console.log(quizData[0].Instructions); // Access the quizData array here
    } catch (err) {
      console.error("Error fetching quiz questions:", err);
      console.log(err);
    }
  };
  return (
    <div className="home-container">
      {/* Adds HeroQuizInstructions */}
      <HeroQuizInstructions />

      {/* Contenedor para las instrucciones del quiz */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-white shadow-sm rounded-4 p-4">
              <div className="mb-3 text-center">
                <p>{quizData[0].Instructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para comenzar el quiz */}
      <div className="container text-center mt-3">
        <Link to={"/QuizQuestions/0"}>
          <button className="btn btn-primary" onClick={getQuizQuestions}>
            Start Quiz
          </button>
        </Link>
      </div>
    </div>

    
  );
}
