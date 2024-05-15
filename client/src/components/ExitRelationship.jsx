import React, { useState, useEffect } from "react";
import PartnersData from "./PartnersData";
import axios from 'axios';
import{useNavigate } from "react-router-dom"

export default function ExitRelationship() {
    const navigate = useNavigate()
    const [userLoveLanguages, setUserLoveLanguages] = useState([])
    const [selectedPartner, setSelectedPartner] = useState()

    useEffect(() => {
        setUserLoveLanguages([])
        
        }, []);
    
    function updateUserLoveLanguages(data) { 
        setUserLoveLanguages(data)
      }

    function handleNameClick(partner) {
        setSelectedPartner(partner)
        console.log(partner)
        if(window.confirm(`This will delete your relationship with ${partner.firstname}`)) {
            deteleRelationship(partner.firstname);
            console.log(partner.firstname)
        } else { }
    }
    
    async function deteleRelationship(firstname) {
        const token = localStorage.getItem("token");
        try {
            console.log("Sending request to backend..."); // Add console log here
            await axios.delete("http://localhost:4000/users/relationships", {
                data: { firstname }, // Pass the firstname in the data object
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("Request successful!"); 
            navigate("/relationships" )
        } catch (error) {
            console.log(error)
            console.error("Error deleting partner:", error); 
        }
    }

    return(

    <>
       <PartnersData updateUserLoveLanguages={(userData)=> updateUserLoveLanguages(userData)}/>
    
        {userLoveLanguages && userLoveLanguages.length ? (
        <>
        <h4>Which partner do you want to break up with?</h4> 
        <ul>
        {userLoveLanguages.map((partner, index)=>(
            <li key= {index}
                onClick={()=>handleNameClick(partner)}>
              {partner.firstname}
            </li>
        ))}
        </ul>
        </>
        ): <p>Loading partners...</p>}    
         
    </>
    )
}