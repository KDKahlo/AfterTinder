import React, { useState, useEffect } from "react";
import DonutChart from "./DonutChart";
import quizData from "../assets/lovelanguagequiz";
import GetOneselfData from "./GetOneselfData";
import MyQuizHero from "./MyQuizHero";

export default function QuizResults() {
  const resultsExplanation = quizData[0].Interpretation.oneselfResults;
  const [userLoveLanguages, setUserLoveLanguages] = useState();

  function updateUserLoveLanguages(data) {
    if (data) {
      setUserLoveLanguages(data);
    }
  }

  return (
    <>
      {/* Adds MyQuizHero */}
      <MyQuizHero />

      {/* Banner Card */}
      
      <div className="banner-card mt-5">
        <div className="container">
          <div className="row">
            
            <div className="banner-container shadow-sm rounded-4 p-2 pb-2">
              <h5 className="banner-title" style={{ color: "#FFFFFF", margin: "center" }}>
                {userLoveLanguages && userLoveLanguages.firstname ? `${userLoveLanguages.firstname}, these are your results:` : "Loading..."}
              </h5>
              </div>
            </div>
          
        </div>
      </div>

      <div>
        <GetOneselfData
          updateUserLoveLanguages={(data) => updateUserLoveLanguages(data)}
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      {userLoveLanguages && userLoveLanguages.firstname ? (
        <>
          
          <DonutChart
            results={resultsExplanation}
            userLoveLanguages={userLoveLanguages}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </>
  );
}
