import React, { useState, useEffect } from "react";
import AIQuery from "./AIQuery";
import DonutChart from "./DonutChart";
import quizData from "../assets/lovelanguagequiz"
import { useLocation } from "react-router-dom";

export default function ShowPartnersData(){
    
    const location= useLocation()
    const userLoveLanguages= location.state
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState("")
    const resultsExplanation= quizData[0].Interpretation.partnerResults


//prompt to get recommendations based on the person's love language.
const promptLoveLanguage = `Based on the book called The 5 Love Languages, give a list of recommendations to show appreciation to a person who's loves languages are: touch ${userLoveLanguages.nonSexualIntimacy}%, gifts ${userLoveLanguages.receiveGifts}%, acts of service${userLoveLanguages.actsOfService}%, words of affirmation ${userLoveLanguages.wordsOfaffirmation}%, quality time ${userLoveLanguages.qualityTime}%. Don't include recommendations for love languages that have a percentage of 0. DO NOT write any percentages in your response. Send recommendations without introduction text, just a list of recommendations. No titles`;

useEffect(() => {
    console.log("location state" , location.state)
 console.log("userLoveLanguages" , userLoveLanguages)
    }, [userLoveLanguages]);

function handleLoading(status) {
    setLoading(status)
}

function handleAIButtonClick() {
 setPrompt(promptLoveLanguage)
}


    return (
        <>
        <h2>{userLoveLanguages.firstname}</h2>

        <DonutChart results={resultsExplanation} userLoveLanguages={userLoveLanguages}/>;
        
        <AIQuery prompt={prompt} handleLoading={(status)=> handleLoading(status)}/>
        <button  
            onClick={handleAIButtonClick}
            disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>
        </>
    )
}