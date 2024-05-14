import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import After_tinder_logo_NAVBAR from "../assets/After_tinder_logo_NAVBAR.png"

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#857ff0",
        paddingTop: "20px",
        paddingBottom: "10px",
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={After_tinder_logo_NAVBAR} alt="brand"></img>
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bx bx-menu"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link active"
              to="/"
              style={{ color: "white", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Home
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/QuizInstructions"
                  style={{ color: "white", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Quiz
                </Link>
                <Link
                  className="nav-link active"
                  to="/chatwithai"
                  style={{ color: "white", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Romantic Ideas
                </Link>
                <Link
                  className="nav-link active"
                  to="/Profile"
                  style={{ color: "white", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Profile
                </Link>
                <Link
                  className="nav-link active"
                  to="/relationships"
                  style={{ color: "white", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "black")}
                  onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Relationships
                </Link>
                
                <button
                  className="btn custom-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="nav-link active" to="/login"
                style={{ color: "white", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "black")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                >
                  Login
                </Link>
                <Link className="nav-link active" to="/registration"
                style={{ color: "white", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "black")}
                onMouseLeave={(e) => (e.target.style.color = "white")}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
