import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

function PairWithPartner() {
    // It displays a random code generated from uuid
    // It manages the Copy to Clipboard function, when the Copy my code button is clicked
    // It allows you to paste a code that other user gave to you, and stores this code in the backend 
    // when the Enter partner's code is clicked
  
  const navigate = useNavigate();
  const [userCode, setUserCode] = useState("");
  const [partnerCode, setPartnerCode] = useState(""); // State to hold partner's code


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

  // Logica para enviar el codigo proporcionado al backend y crear la relacion, una vez se da 
  // clic en este boton, esto me lleva al componente "Relationships Profile" en donde aparece el 
  // perfil del usuario que me compartio su codigo

  async function handleEnterCode() {
    try {
      // Send the partner's code to the backend
      await axios.post("http://localhost:4000/users/relationships", { code: partnerCode });
      console.log("Code sent to backend successfully!");

      // Redirect to the Relationships Profile component
      navigate("/relationshipsprofile");
    } catch (error) {
      console.error("Error sending code to backend:", error);
    }
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
                  value={partnerCode}
                  onChange={(e) => setPartnerCode(e.target.value)}
                />
                <button onClick={handleEnterCode} className="btn custom-btn">Enter partner's code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PairWithPartner;
