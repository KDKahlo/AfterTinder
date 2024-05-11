import React, { useState, useEffect, useParams } from "react";
import axios from "axios";
import quizData from "../assets/lovelanguagequiz";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [results, setResults] = useState({
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0
    });

    function handleOptionSelect(optionLetter) {
        setUserAnswers ([...userAnswers,optionLetter])
    }

    function handleIndex(action) {
        if (action === "next") {
            if (userAnswers.length >0) {
               calculateResults(userAnswers);
            }

            if (index < quizData[0].Quiz.Options.length - 1) {
                setIndex(index + 1);
            }
        } else if (action === "prev") {
            if (index > 0) {
                setIndex(index - 1);
            }
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

        answers.forEach(answer => {
            count[answer]++;
        });

        const totalQuestions = quizData[0].Quiz.Options.length;
        const maxScore = 12;
        const percentageResults = {};
        Object.keys(count).forEach(letter => {
            percentageResults[letter] = ((count[letter] / totalQuestions) * maxScore * 100 / maxScore).toFixed(2);
        });

        setResults(percentageResults);
    }

    async function sendResultsToBackend(results) {
        try {
            await axios.post("/loveLanguage", results);
            console.log("Results sent to backend successfully!");
        } catch (error) {
            console.error("Error sending results to backend:", error);
        }
    }

    useEffect(() => {
        if (index === quizData[0].Quiz.Options.length -1) {
            sendResultsToBackend(results);
            //This takes user to the results page
            //This line can be commented out during quiz building if it's more comfortable.
            navigate("/QuizResults")
        }
    }, [results, index]);

    return (
        <>
            <h3>{quizData[0].Quiz.Statement}</h3>
            {Object.entries(quizData[0].Quiz.Options[index]).map(([key, value], index) => (
                <div key={index}> 
                <input 
                  key={key}
                    type="radio"
                    id={key}
                    name="options"
                    value={value}
                    onChange={() => handleOptionSelect(key)} />
                    <label >{value}</label>
                    </div>
            ))}
            <button type="button" onClick={() => handleIndex("prev")}>‹‹</button>
            <button type="button" onClick={() => handleIndex("next")}>››</button>
    
            <h4>User Answers:</h4>
            <ul>
                {userAnswers.map((answer, index) => (
                    <li key={index}>{answer}</li>
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