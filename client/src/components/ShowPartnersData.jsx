import React, { useState, useEffect } from "react";
import AIQuery from "./AIQuery";
import { useNavigate } from "react-router-dom";

export default function ShowPartnersData({userLoveLanguages, updateUserLoveLanguages}){
    const [loveLanguages, setLoveLanguages] = useState({})
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState("")
      //Hook for navigation
  const navigate = useNavigate();

          //prompt to get recommendations based on the person's love language.
const promptLoveLanguage = `Based on the book called The 5 Love Languages, give a list of recommendations to show appreciation to a person who's loves languages are: touch ${userLoveLanguages.nonSexualIntimacy}%, gifts ${userLoveLanguages.receiveGifts}%, acts of service${userLoveLanguages.actsOfService}%, words of affirmation ${userLoveLanguages.wordsOfaffirmation}%, quality time ${userLoveLanguages.qualityTime}%. Don't include recommendations for love languages that have a percentage of 0. DO NOT write any percentages in your response. Send recommendations without introduction text, just a list of recommendations. No titles`;

useEffect(() => {
 
    
    }, []);

function handleLoading(status) {
    setLoading(status)
}

function handleAIButtonClick() {
 setPrompt(promptLoveLanguage)
}

function handleGoBackClick() {
    updateUserLoveLanguages("")
   }

    return (
        <>
        <h2></h2>
        
        <AIQuery prompt={prompt} handleLoading={(status)=> handleLoading(status)}/>
        <button  
            onClick={handleAIButtonClick}
            disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>
        <button  
            onClick={handleGoBackClick}>
          Go back
        </button>
        </>
    )
}