import React from "react";
import { useState } from "react";
import quizData from "../assets/lovelanguagequiz"


export default function Quiz() {

const [index, setIndex] = useState(0)
const [userAnswers, setUserAnswers] = useState([])

function handleIndex(action) {
    //When "next" button clicked, increase index by 1. The limit is quizData[0].Quiz.Options.length.
    if (action === "next") {
        if (index < quizData[0].Quiz.Options.length - 1) {
            setIndex(index + 1)
        } else {}
    //When "prev" button clicked, decrease index by 1. The limit is 0.
    } else if (action === "prev") {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
}

  
  
    return (
        <>
        <h3>{quizData[0].Quiz.Statement}</h3>
        <ul>
            {Object.entries(quizData[0].Quiz.Options[index]).map(([key, value]) => (
                    <li key={key}>{value}</li>
                ))}
        </ul>
        <button 
            type="button" 
            onClick={()=>handleIndex("prev")}>‹‹</button>
    
        <button 
            type="button" 
            onClick={()=>handleIndex("next")}>››</button>
        </>

    )
};