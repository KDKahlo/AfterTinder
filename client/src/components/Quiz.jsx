import React, { useState, useEffect } from "react";
import axios from "axios";
import quizData from "../assets/lovelanguagequiz";

export default function Quiz() {
    const [index, setIndex] = useState(0);
    const [tempSelectedOption, setTempSelectedOption] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);
    const [results, setResults] = useState({
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0
    });

    function handleOptionSelect(optionLetter) {
        setTempSelectedOption(optionLetter);
    }

    function handleIndex(action) {
        if (action === "next") {
            if (tempSelectedOption !== "") {
                setUserAnswers([...userAnswers, tempSelectedOption]);
                calculateResults([...userAnswers, tempSelectedOption]);
                setTempSelectedOption("");
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
        if (index === quizData[0].Quiz.Options.length) {
            sendResultsToBackend(results);
        }
    }, [results, index]);

    return (
        <>
            <h3>{quizData[0].Quiz.Statement}</h3>
            <ul>
                {Object.entries(quizData[0].Quiz.Options[index]).map(([key, value]) => (
                    <li key={key} onClick={() => handleOptionSelect(key)}>{value}</li>
                ))}
            </ul>
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
    );
}