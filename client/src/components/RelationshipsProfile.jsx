import React, { useState, useEffect } from "react";
import PartnersData from "./PartnersData";
import ShowPartnersData from "./ShowPartnersData";
import { Link, Outlet } from "react-router-dom";
import HeroRelationships from "./HeroRelationships";

export default function RelationshipsProfile() {
  const [userLoveLanguages, setUserLoveLanguages] = useState([]);

  useEffect(() => {
    setUserLoveLanguages([]);
  }, []);

  function updateUserLoveLanguages(data) {
    setUserLoveLanguages(data);
  }

  return (
    <div className="home-container">
      {/* Adds HeroRelationships */}
      <HeroRelationships />
      
      <PartnersData
        updateUserLoveLanguages={(userData) =>
          updateUserLoveLanguages(userData)
        }
      />

      {userLoveLanguages && userLoveLanguages.length ? (
        <>
          <h4>Your partners:</h4>
          {userLoveLanguages.map((partner, index) => (
            <div key={index}>
              <Link
                to={{
                  pathname: `/relationships/${index}`,
                }}
                state={partner}
              >
                {partner.firstname}
              </Link>
            </div>
          ))}
        </>
      ) : (
        <p>Loading partners...</p>
      )}
    </div>
  );
}
