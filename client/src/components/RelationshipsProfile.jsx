import React, { useState, useEffect } from "react";
import PartnersData from "./PartnersData";
import{Link } from "react-router-dom";
import{useNavigate } from "react-router-dom"

export default function RelationshipsProfile() {
    const [loadingPartners, setLoadingPartners] = useState(true)
    const navigate = useNavigate()
    const [userLoveLanguages, setUserLoveLanguages] = useState([])

    useEffect(() => {
        setLoadingPartners(false)
        }, [userLoveLanguages]);
    
    function updateUserLoveLanguages(data) { 
        setUserLoveLanguages(data)

      }

    function handleDeleteClick() {
        navigate("/relationships/delete")

    }
    
    return(

    <>
       <PartnersData updateUserLoveLanguages={(userData)=> updateUserLoveLanguages(userData)}/>
    {loadingPartners ? <p>Loading partners...</p> :
      <>
      <h4>Your partners:</h4> 
      {userLoveLanguages.map((partner, index)=>(
          <div key= {index}>
              <Link 
              to={{
                  pathname: `/relationships/${index}`,
              }}
              state= {partner}
              >{partner.firstname}</Link>
          </div>
      ))}
      </> }
        
      
        
         
        <button onClick={handleDeleteClick}>Delete relationship</button>
         
    </>
    )
}