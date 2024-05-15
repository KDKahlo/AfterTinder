import React, { useState, useEffect } from "react";
import PartnersData from "./PartnersData";
import{useNavigate } from "react-router-dom"
import { Link} from "react-router-dom";
import HeroRelationships from "./HeroRelationships";



export default function RelationshipsProfile() {
    const [loadingPartners, setLoadingPartners] = useState(true)
    const navigate = useNavigate()
    const [userLoveLanguages, setUserLoveLanguages] = useState([])

    useEffect(() => {
        console.log(userLoveLanguages)
        }, [userLoveLanguages]);
    
    function updateUserLoveLanguages(data) { 
        setUserLoveLanguages(data)
      
      }



    function handleDeleteClick() {
        navigate("/relationships/delete")

    }
    
  return (
    <div className="home-container">
      {/* Adds HeroRelationships */}
      <HeroRelationships />
      
      <PartnersData setLoadingPartners = {setLoadingPartners} updateUserLoveLanguages={(userData)=> updateUserLoveLanguages(userData)}/>

    {!userLoveLanguages && !userLoveLanguages.length ? <p>Loading partners...</p> :
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
         
    </div>
    )
}

