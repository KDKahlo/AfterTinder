import React, { useState, useEffect } from "react";
import PartnersData from "./PartnersData";
import ShowPartnersData from "./ShowPartnersData";

export default function () {
    const [userLoveLanguages, setUserLoveLanguages] = useState(null)


    useEffect(() => {
        setUserLoveLanguages(null)
        }, []);
    
    function updateUserLoveLanguages(user) { 
        setUserLoveLanguages(user)
      }
    

    return(
        <>
        
        {userLoveLanguages ? 
        <>
        <h2>{userLoveLanguages.firstname}</h2>
        <ShowPartnersData userLoveLanguages={userLoveLanguages} updateUserLoveLanguages={(userData)=> updateUserLoveLanguages(userData)}/>
        </>
        : <PartnersData updateUserLoveLanguages={(userData)=> updateUserLoveLanguages(userData)}/> }
         
        </>
    )
}