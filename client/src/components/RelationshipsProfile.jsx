import React, { useState, useEffect } from "react";
import PartnersData from "./PartnersData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HeroRelationships from "./HeroRelationships";
import Test_profilepic from "../assets/Test_profilepic.png";

export default function RelationshipsProfile() {
  const [loadingPartners, setLoadingPartners] = useState(true);
  const navigate = useNavigate();
  const [userLoveLanguages, setUserLoveLanguages] = useState([]);

  useEffect(() => {
    console.log(userLoveLanguages);
  }, [userLoveLanguages]);

  function updateUserLoveLanguages(data) {
    setUserLoveLanguages(data);
  }

  function handleDeleteClick() {
    navigate("/relationships/delete");
  }

  return (
    <div className="home-container">
      {/* Adds HeroRelationships */}
      <HeroRelationships />
      {/* Banner Section */}
      <section className="banner-section mb-4">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="banner-container shadow-sm rounded-4 p-1 pb-4">
                {/* Banner Card */}
                <div className="banner-card mt-4">
                  <div className="container">
                    <div className="row">
                      {/* Left Column */}
                      <div className="col-md-6 d-flex align-items-center">
                        <h5
                          className="banner-title"
                          style={{ color: "#FFFFFF" }}
                        >
                          Your Partners
                        </h5>
                      </div>
                      {/* Right Column */}
                      <div className="col-md-6 d-flex align-items-center justify-content-end">
                        <Link to={"/pairwithpartner"}>
                          <button className="btn custom-btn cancel-button">
                            Add a new partner
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersData
        setLoadingPartners={setLoadingPartners}
        updateUserLoveLanguages={(userData) =>
          updateUserLoveLanguages(userData)
        }
      />

      {!userLoveLanguages || !userLoveLanguages.length ? (
        <p>Loading partners...</p>
      ) : (
        <>
          <div className="user-cards-container">
            {userLoveLanguages.map((partner, index) => (
              <div key={index} className="user-card">
                <div style={{ textAlign: "center" }}>
                  <img
                    src={Test_profilepic}
                    alt={partner.firstname}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "10%",
                      display: "inline-block",
                      verticalAlign: "middle",
                    }}
                  />
                </div>
                <Link
                  to={{ pathname: `/relationships/${index}` }}
                  state={partner}
                  className="user-name-link"
                >
                  {partner.firstname}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={handleDeleteClick}>
          Delete a relationship
        </button>
      </div>
    </div>
  );
}
