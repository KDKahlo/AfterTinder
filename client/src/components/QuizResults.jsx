import React, { useState, useEffect } from "react";
import DonutChart from "./DonutChart";
import quizData from "../assets/lovelanguagequiz"
import GetOneselfData from "./GetOneselfData";

export default function QuizResults(){
    const resultsExplanation= quizData[0].Interpretation.oneselfResults
    const [userLoveLanguages, setUserLoveLanguages] = useState()

    function updateUserLoveLanguages(data) {
       if(data){
        setUserLoveLanguages(data)}
    }

    return (
        <>
            <GetOneselfData updateUserLoveLanguages={(data)=>updateUserLoveLanguages(data)} />
            {userLoveLanguages && userLoveLanguages.firstname ? (
                <>
                    <h2>{userLoveLanguages.firstname}</h2>
                    <DonutChart
                        results={resultsExplanation}
                        userLoveLanguages={userLoveLanguages}
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}
        
        </>
    )
}