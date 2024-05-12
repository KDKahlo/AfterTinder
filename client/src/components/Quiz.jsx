import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import quizData from "../assets/lovelanguagequiz";
//useNavigate will take the user to the view we want programmatically. 
//That means it doesn't depend on a user action. It depends on if a condition is met or not.
//UseLocation is a react context and it allows us to  keep track of some data, like the URL path. 
import { useNavigate, useLocation } from "react-router-dom";

export default function Quiz() {
    const navigate = useNavigate()
    const location = useLocation();
    //this gets the path we're in(quizQuestions/:index) and will help us map through the json quiz object based on the index of the path.
    const pathIndex = parseInt(location.pathname.split("/")[2]);
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState({
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0
    });
  
//Get the selection from the user and update the userAnswers state.
//The userAnswers state is an object where the key is the index of the question, and the value is the answer of the user.
//if the user changes their mind and go back, this will store the updated data.
//it doesn't matter if the user goes back with the "previous" button or with the browser. it works bothways.
    function handleOptionSelect(event) {
        const value = event.target.value;
        const questionIndex = pathIndex
        setUserAnswers(prevState => ({
            ...prevState,
            [questionIndex]: value
          }));    
    }

//the buttons "<<" and ">>" send a previous or next action.
//"previous" will take you to the previous question. And if you keep clicking it will take you to the instructions.
//"next" will take you to next question. And if you already finished all questions, it will trigger the function to calculate results.
    function handleClick(action) {
        let nextIndex = pathIndex + 1
        let prevIndex = pathIndex -1
        if (action === "next") {
            if (pathIndex=== quizData[0].Quiz.Options.length-1 && Object.keys(userAnswers).length  <quizData[0].Quiz.Options.length) {
                window.alert("you haven't completed the quiz")
                
             } else if (Object.keys(userAnswers).length ===quizData[0].Quiz.Options.length ) {
                const answers = Object.values(userAnswers);
                console.log(answers)
                calculateResults(answers);
                
             } else {navigate(`/QuizQuestions/${nextIndex}`)
            }  
            
        } else if (action === "prev") {
            if (pathIndex > 1) {
                navigate(`/QuizQuestions/${prevIndex}`)
            } else {navigate("/QuizInstructions")}
        }
    }

    function calculateResults(answers) {
        const count = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0
        };

        Object.values(answers).forEach(answer => {
            count[answer]++;
        });

        const totalQuestions = quizData[0].Quiz.Options.length;
        const maxScore = 12;
        const percentageResults = {};
        Object.keys(count).forEach(letter => {
            percentageResults[letter] = ((count[letter] / totalQuestions) * maxScore * 100 / maxScore).toFixed(0);
        console.log(percentageResults)
        });

        // setResults(percentageResults); -->we don't need to store the results in a state variable  because we don't need them in the frontend. 
        //we send them directly to the backend, because the component that fetches the user results, calls to the database directly.
        sendResultsToBackend(percentageResults)
    }

    async function sendResultsToBackend(results) {
        try {
            await axios.post("/loveLanguage", results);
            console.log("Results sent to backend successfully!");
            //When post is finished with success, navigate to the results page.
            navigate("/QuizResults")
        } catch (error) {
            console.error("Error sending results to backend:", error);
        }
    }


    return (
        <>
            <h3>{quizData[0].Quiz.Statement}</h3>
            {Object.entries(quizData[0].Quiz.Options[pathIndex]).map(([key, value], index) => (
                <div key={index}> 
                <input 
                    key={index}
                    value={key}
                    type="radio"
                    id={index}
                    name="options"
                    required
                    onChange={handleOptionSelect} />
                    <label>{value}</label>
                    </div>
            ))}
            <button type="button" onClick={() => handleClick("prev")}>‹‹</button>
            <button type="button" onClick={() => handleClick("next")}>››</button>
            
            <h4>User Answers:</h4>
        <ul>
            {Object.entries(userAnswers).map(([questionIndex, selectedAnswer]) => (
                <li key={questionIndex}>
                    Question {parseInt(questionIndex)}: {selectedAnswer}
                </li>
            ))}
        </ul>
    
            <h4>Results:</h4>
            <ul>
                {Object.entries(results).map(([letter, percentage]) => (
                    <li key={letter}>{letter}: {percentage}%</li>
                ))}
            </ul>
        </>
    )
} 