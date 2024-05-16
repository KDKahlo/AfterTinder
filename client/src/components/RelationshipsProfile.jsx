import React, { useState, useEffect } from "react";
import PartnersData from "./PartnersData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HeroRelationships from "./HeroRelationships";
import Test_profilepic1 from "../assets/user1.jpeg"; // Tom Hardy a7c158f4-049a-4e9e-a325-f62a47ca3d9a
import Test_profilepic2 from "../assets/user2.jpeg"; // Keanu Reeves 3675f546-7e08-47ff-a3e5-46109713f0b0
import Test_profilepic3 from "../assets/user3.jpeg"; // Edgar Ramirez dad801c3-1e29-4c09-a0fc-0d9bf08c309f
import Test_profilepic4 from "../assets/user4.jpg"; // Tash Sultana 6669a67b-a041-4001-ad34-a5e6325f5ba6
import Default_profilepic from "../assets/Default_profilepic.jpeg"; // French Bulldog for any other relationship from 5th relation 959d3795-1807-4246-970e-1c30463ed7f9 // d8dea2d1-89fa-4ee7-aa3b-5b37b859f770


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
                    src={
                      index === 0
                        ? Test_profilepic1
                        : index === 1
                        ? Test_profilepic2
                        : index === 2
                        ? Test_profilepic3
                        : index === 3
                        ? Test_profilepic4
                        : Default_profilepic // For any additional user
                    }
                    alt={partner.firstname}
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      objectFit: "cover",
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
