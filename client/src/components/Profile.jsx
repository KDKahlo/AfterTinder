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
      
    <div className="profile-container">
      {/* First Section: Title */}
      <section>
      <div className="profile-header-section row justify-content-start">
        <div className="col-lg-8">
          <h2 className="mb-4">Profile</h2>
        </div>
      </div>
      </section>

      {/* Second Section: Profile Info */}
      <section>
      <div className="profile-info-section row justify-content-center align-items-center text-center mt-4 profile-info-row">
        {/* User Info Container */}
        <div className="col-lg-10">
          <div className="row">
            {/* Left Section */}
      <div className="col-lg-6">
      <div className="p-4 bg-white shadow-sm rounded">
        <h3>
          {userData && (
            <>
              Hello, {userData.firstname}
            </>
          )}
        </h3>
        <p>
          {userData && (
            <>
              Email: {userData.email}
            </>
          )}
        </p>
        <p>
          {userData && (
            <>
              Bio: {userData.bio || "Tell us how you prefer to be loved!"}
            </>
          )}
        </p>
      </div>
      </div>

        {/* Right Section*/}
        <div className="col-lg-6">
          {userData && (
            <img
              src={userData.profilePicture || "src/assets/TestPic.jpg"}
              alt="Profile"
              className="profile-picture rounded-circle mb-3"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          )}
        </div>
      </div>
      </div>
      </div>
      </section>

      {/* Third Section: Buttons */}
      <section>
  <div className="profile-buttons-section row justify-content-center mt-4">
    {/* Botón: Pair with a Partner */}
    <div className="col-lg-4 mb-3">
      <div className="image-container" style={{backgroundImage: "url(src/assets/After_tinder_logo.png)"}}>
        <div className="image-overlay">
          <p>Texto al hacer hover</p>
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={() => navigate("/pairwithpartner")}
          className="btn btn-primary btn-lg btn-block"
        >
          Pair with a Partner
        </button>
      </div>
    </div>

    {/* Botón: My Quiz */}
    <div className="col-lg-4 mb-3">
      <div className="image-container" style={{backgroundImage: "url(src/assets/After_tinder_logo.png)"}}>
        <div className="image-overlay">
          <p>Texto al hacer hover</p>
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={() => navigate("/quizresults")}
          className="btn btn-primary btn-lg btn-block"
        >
          My Quiz
        </button>
      </div>
    </div>

    {/* Botón: My Relationships */}
    <div className="col-lg-4 mb-3">
      <div className="image-container" style={{backgroundImage: "url(src/assets/After_tinder_logo.png)"}}>
        <div className="image-overlay">
          <p>Texto al hacer hover</p>
        </div>
      </div>
      <div className="button-container">
        <button
          onClick={() => navigate("/relationships")}
          className="btn btn-primary btn-lg btn-block"
        >
          My Relationships
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default Profile;
