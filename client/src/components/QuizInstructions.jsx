import quizData from "../assets/lovelanguagequiz"
import{Link} from "react-router-dom"

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
        to={"/Quiz/questions"}>
            take quiz
        </Link>
    <button onClick={getQuizQuestions}>get quiz</button>
    </>
    )  
};