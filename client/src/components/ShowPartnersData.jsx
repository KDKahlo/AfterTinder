import React, { useState, useEffect } from "react";
import AIQuery from "./AIQuery";
import DonutChart from "./DonutChart";
import quizData from "../assets/lovelanguagequiz";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export default function ShowPartnersData() {
  const navigate = useNavigate()
  const location = useLocation();
  const userLoveLanguages = location.state;
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const resultsExplanation = quizData[0].Interpretation.partnerResults;
  const [showModal, setShowModal] = useState (false)
  const [message, setMessage] = useState()

  //prompt to get recommendations based on the person's love language.
  const promptLoveLanguage = `Based on the book called The 5 Love Languages, give a list of recommendations to show appreciation to a person who's loves languages are: touch ${userLoveLanguages.nonSexualIntimacy}%, gifts ${userLoveLanguages.receiveGifts}%, acts of service${userLoveLanguages.actsOfService}%, words of affirmation ${userLoveLanguages.wordsOfaffirmation}%, quality time ${userLoveLanguages.qualityTime}%. Don't include recommendations for love languages that have a percentage of 0. DO NOT write any percentages in your response. Send recommendations without introduction text, just a list of recommendations. No titles`;

  useEffect(() => {
    console.log("location state", location.state);
    console.log("userLoveLanguages", userLoveLanguages);
    if (userLoveLanguages && !userLoveLanguages.Percentage_Words_of_Affirmation) {
      setMessage(`It seems ${userLoveLanguages.firstname} hasn't done the quiz yet...`)
      setShowModal(true)
     
    }

  }, [userLoveLanguages]);

  function handleLoading(status) {
    setLoading(status);
  }

  function handleAIButtonClick() {
    setPrompt(promptLoveLanguage);
  }

  function closeModal() {
    setShowModal(false);
    navigate("/relationships")
  }

  return (
    <>
      <div className="banner-card mt-5">
        <div className="container">
          <div className="row">
            <div className="banner-container shadow-sm rounded-4 p-2 pb-2">
              <h5
                className="banner-title"
                style={{ color: "#FFFFFF", textAlign: "center" }}
              >
                These are {userLoveLanguages.firstname}'s results:
              </h5>
            </div>
          </div>
        </div>
      </div>

    { userLoveLanguages && userLoveLanguages.Percentage_Words_of_Affirmation ?
    <>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0'  }}>
        <DonutChart
          results={resultsExplanation}
          userLoveLanguages={userLoveLanguages}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn-primary"
          onClick={handleAIButtonClick}
          disabled={loading}
        >
          {loading ? "Generating..." : "Show me ideas!"}
        </button>
      </div>

      <AIQuery
        prompt={prompt}
        handleLoading={(status) => handleLoading(status)}
      />
      </>: 
        <Modal
        message={message}
        header="Ups..."
        showModal={showModal}
        handleClose={closeModal}
      />}
    </>
  );
}
