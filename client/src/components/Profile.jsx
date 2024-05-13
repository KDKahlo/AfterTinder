import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

// I will work here CA

function Profile() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // Make sure usersData is empty before populating it with db data.
    setUserData([]);
    getUserData();
  }, []);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  //Fetch data from DB
  //Populate userData with the name of the user

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get("http://localhost:4000/users/user_data", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUserData(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
      //console.log(err)
      window.alert("failed to get your data");
      //set data to null if something goes wrong
      setUserData(null);
    }
  };

  return (
    <div className="main-container">
    <div className="container col-lg-8 position-absolute top-50 start-50 translate-middle bg-white shadow-sm rounded-4">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-lg-8 p-4 w-50">
          <div className="mb-3 text-center">
          <h2>Profile</h2>
            {userData && userData.length > 0 &&
              <p>Welcome, {userData[0].firstname}</p>
            }
            <img
              src="src/assets/TestPic.JPG"
              alt="Profile"
              className="img-fluid w-90"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
          </div>

          <div className="mb-3">
            <button
              onClick={() => navigate("/pairwithpartner")}
              className="btn custom-btn p-3 shadow-none rounded-pill w-100"
            >
              Pair with a Partner
            </button>
          </div>

          <div className="mb-3">
            <button
              onClick={() => navigate("/quiz")}
              className="btn custom-btn p-3 shadow-none rounded-pill w-100"
            >
              My Quiz
            </button>
          </div>

          <div className="mb-3">
            <button
              onClick={() => navigate("/relationships")}
              className="btn custom-btn p-3 shadow-none rounded-pill w-100"
            >
              My Relationships
            </button>
          </div>

          <div className="mb-3">
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="btn btn-outline-dark p-3 shadow-none rounded-pill w-100"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Profile;
