import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Modal from "./Modal";

function PairWithPartner() {
    /* - It displays a random code generated from uuid when you click on generate my code button
       - It manages the Copy to Clipboard function, when the Copy my code button is clicked
       - It allows you to paste a code that other user gave to you, and stores this code in the backend => to create the relationship
         when the Enter partner's code is clicked
       - It takes me to profile again, when the relationship is created */
         
  
  const navigate = useNavigate();
  const [userCode, setUserCode] = useState("");
  const [partnerCode, setPartnerCode] = useState(""); // State to hold partner's code
  const [showModal, setShowModal] = useState (false) // State variable to control modal visibility


  function generateCode() {
    const code = uuidv4();
    setUserCode(code);
  }

  async function copyCode() { // Function to handleCopyCode
    try {
      await navigator.clipboard.writeText(userCode);
      console.log('Content copied to clipboard', userCode);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  function handleGenerateCodeClick() {
    generateCode();
  }

  function handleCopyCodeClick() {
    copyCode(); // Calls copyCode function when user clicks on the button
  }

  /* Logica para enviar el codigo ingresado en el campo "Enter Code" al backend y crear la relacion,
     una vez se da clic en este boton, esto añade al usuario en el "Relationships Profile" */

     async function handleEnterCode() {
      const token = localStorage.getItem("token");
      try {
        // Send the partner's code to the backend
        await axios.post("http://localhost:4000/users/relationships", { code: partnerCode }, 
        {
          headers: {
              authorization: `Bearer ${token}`,
            }
        });
        console.log("Code sent to backend successfully!");
        setShowModal(true);
      } catch (error) {
        console.error("Error sending code to backend:", error);
      }
    }

    function closeModal() {
      setShowModal(false);
    }


  return (
    <div className="main-container">
    <div className="container col-lg-8 position-absolute top-50 start-50 translate-middle">
      <div className="row justify-content-center align-items-center text-center bg-white shadow-sm rounded-4 p-4">
        <div className="col-lg-8">
          <h2>Partner Pairing</h2>
          <p>Pair with your partner and swap quiz results</p>

          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <h4>I want to invite my partner</h4>
                <p>My code: <span className="generated-code">{userCode}</span></p>
                <button onClick={handleGenerateCodeClick} className="btn custom-btn me-2">Generate my code</button>
                <FontAwesomeIcon icon={faCopy} onClick={handleCopyCodeClick} className="copy-icon" />
              </div>
            </div>
            

            <div className="col-lg-6">
              <div className="mb-3">
                <h4>I have my partner's code</h4>
                <input 
                  type="text" 
                  className="form-control mb-2" 
                  placeholder="Enter code" 
                  value={partnerCode} // THIS IS THE CODE THAT MUST BE SENT TO THE BACKEND
                  onChange={(e) => setPartnerCode(e.target.value)}
                />
                <button onClick={handleEnterCode} className="btn custom-btn">Enter partner's code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
        message="Relationship created successfully. You can see it now on the Relationships tab"
        header="Success"
        showModal={showModal}
        handleClose={closeModal}
      />
  

    </div>
    
  );
}

export default PairWithPartner;
