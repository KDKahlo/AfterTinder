import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function GetOneselfData({updateUserLoveLanguages}) {
    const [userData, setUserData]= useState([])
    useEffect(() => {
        //Make sure partnersData is empty before populating it with db data.
        setUserData([])
        getData()
        
        }, []);
    
    
      //Fetch data from DB
      //Populate partnersData with the hours of sleep of the user.
    const getData = async () => {
         //get the token from the local storage
        const token = localStorage.getItem("token");
          try {
            //when creating the frontend routes to nested children, the path to the backend was not valid anymore
            //had to write the right specific path to the 4000 port
            //axios.get doesn't need to specify the method.
            //we need to pass the token in the headers.
            const {data} = await axios("http://localhost:4000/users/user_data", {
              headers: {
                authorization: `Bearer ${token}`,
              }
            })
            isThereData(data)
            sendLoveLanguageToParent(data[0])
        
            }catch (err) {
                console.error("Error fetching data:", err);
                //console.log(err)
                window.alert("failed to get your data")
                //set data to null if something goes wrong
                setUserData(null)
            }
          };
    
    function isThereData (data) {
        if (!data.length) {
            return window.alert("It seems you haven't done the quizz yet")
        } 
    }

    function sendLoveLanguageToParent(data){
        updateUserLoveLanguages(data)
        console.log("********", data)
    }

    return (
        <>
        {/* <ul>
        {userData && partnersData.map((partner, index)=>
            (<li key= {index}
                onClick={()=>sendLoveLanguageToParent(partnersData[index])}>{partner.firstname}</li>)
        )}
        </ul> */}
        </>)
};