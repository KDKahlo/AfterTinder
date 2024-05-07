import React, { useState, useEffect } from "react";
import PartnersData from "./PartnersData";

export default function () {
    const [userLoveLanguages, setUserLoveLanguages] = useState({})

      //prompt to get recommendations based on the person's love language.
const promptLoveLanguage = `Based on the book called The 5 Love Languages, give a list of recommendations to show appreciation to a person who's loves languages are: touch ${userLoveLanguages.nonSexualIntimacy}%, gifts ${userLoveLanguages.receiveGifts}%, acts of service${userLoveLanguages.actsOfService}%, words of affirmation ${userLoveLanguages.wordsOfaffirmation}%, quality time ${userLoveLanguages.qualityTime}%. Don't include recommendations for love languages that have a percentage of 0. DO NOT write any percentages in your response. Send recommendations without introduction text, just a list of recommendations. No titles`;
    useEffect(() => {
        
        }, []);
    
    function updateUserLoveLanguages(user) { 
        setUserLoveLanguages(user)
      }
    return(
        <>
         <PartnersData updateUserLoveLanguages={(userData)=> updateUserLoveLanguages(userData)}/>
        </>
    )
}