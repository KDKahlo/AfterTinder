import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import HeroProfile from "./HeroProfile";
import Profilepicture from "../assets/Profilepicture.jpg"

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
      const { data } = await axios.get(
        "http://localhost:4000/users/user_data",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
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
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <HeroProfile />
      </section>

      {/* First Section: Profile Info */}
      
        <div className="profile-info-section row justify-content-center align-items-center text-center mt-4 profile-info-row" style={{ paddingTop: "30px" }}>
          {/* User Info Container */}
          <div className="col-md-8">
            <div className="row">
              {/* Left Section */}
              <div className="col-lg-6">
                <div className="p-4 bg-white shadow-sm rounded">
                  <h3>
                    {userData && userData.length > 0 && (
                      <>Hello, {userData[0].firstname}</>
                    )}
                  </h3>
                  <p>
                    Remember, you deserve the love you keep trying to give
                    everyone else 💜
                  </p>
                </div>
              </div>

              {/* Right Section*/}
              <div className="col-lg-6">
                {userData && (
                  <img
                    src={Profilepicture}
                    alt="Profile"
                    className="profile-picture rounded-circle mb-3"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      

      {/* Second Section: Buttons */}

  <div className="profile-buttons-section row justify-content-center md-8" >

    {/* Primera fila */}
    <div className="col-md-4 mb-3">
      {/* Pair with a Partner */}
      <div className="image-container" style={{backgroundImage: "url(src/assets/Profile_card1.png)"}}>
        <div className="image-overlay">
          <p>Add all your partners in one click</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => navigate("/pairwithpartner")} className="btn btn-primary btn-md">Pair with a Partner</button>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      {/* My Quiz */}
      <div className="image-container" style={{backgroundImage: "url(src/assets/Profile_card2.png)"}}>
        <div className="image-overlay">
          <p>See your love languages test results</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => navigate("/quizresults")} className="btn btn-primary btn-md">My Quiz</button>
      </div>
    </div>

    {/* Segunda fila */}
    <div className="w-100"></div> {/* Clearfix for new row */}
    <div className="col-md-4 mb-3">
      {/* My Relationships */}
      <div className="image-container" style={{backgroundImage: "url(src/assets/Profile_card3.png)"}}>
        <div className="image-overlay">
          <p>See and manage your relationships here</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => navigate("/relationships")} className="btn btn-primary btn-md">My Relationships</button>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      {/* Settings */}
      <div className="image-container" style={{backgroundImage: "url(src/assets/Profile_card4.png)"}}>
        <div className="image-overlay text-center">
          <p>I put this pic here because I miss Seymour, my pug in Ecuador. The button just allows you to logout :)</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => navigate("/logout")} className="btn btn-primary btn-md">Settings</button>
      </div>
    </div>

  </div>


    </div>
  );
}

export default Profile;
