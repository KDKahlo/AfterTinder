import quizData from "../assets/lovelanguagequiz"
import{Link} from "react-router-dom"

// I will work here CA

import React from "react";
export default function QuizInstructions() {

    const getQuizQuestions = async () => {
        try {
            console.log(quizData[0].Instructions); // Access the quizData array here
        } catch (err) {
            console.error("Error fetching quiz questions:", err);
            console.log(err);
        }
    };
    return( 
    <>
    <p>{quizData[0].Instructions}</p>
    <Link 
        to={"/QuizQuestions/0"}>
            <button onClick={getQuizQuestions}>Start quiz</button>
        </Link>
    
    </>
    )  
};