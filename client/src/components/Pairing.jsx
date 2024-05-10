import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Pairing() {
  const [code, setCode] = useState('');
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGenerateCode = async () => {
    try {
      const response = await axios.post("http://localhost:4000/generateCode", {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCode(response.data.code);
    } catch (err) {
      alert("Failed to generate code");
    }
  };

  const handleEnterCode = async (enteredCode) => {
    try {
      await axios.post("http://localhost:4000/enterCode", { code: enteredCode }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Relationship established successfully");
      navigate("/relationships");
    } catch (err) {
      alert("Invalid or expired code");
    }
  };

  return (
    <div className="container col-lg-8 position-absolute top-50 start-50 translate-middle bg-white shadow-sm rounded-4">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-lg-8 p-4 w-50">
          <h1>Partner Pairing</h1>
          <p>Pair with your partner and swap quiz results.</p>
          <div className="mb-3 text-center">
            <button className="btn btn-primary" onClick={handleGenerateCode}>Generate Code</button>
            {code && <div><p>My code: {code}</p><button className="btn btn-secondary">Copy Code</button></div>}
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Enter partner's code" onChange={(e) => setCode(e.target.value)} />
            <button className="btn btn-primary" onClick={() => handleEnterCode(code)}>Enter Partner's Code</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pairing;
