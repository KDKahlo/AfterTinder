import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import After_Tinder_logo from "../assets/After_tinder_logo.png"

function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");  // Redirect to login page after logout
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <a className="navbar-brand" href="/">
                <img src={After_Tinder_logo } alt = "brand"></img>
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
                    <i className='bx bx-menu'></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link 
                            className="nav-link active" 
                            to="/">Home</Link>
                        {isLoggedIn ? (
                            <>
                                <Link 
                                    className="nav-link active" aria-current="page"
                                    to="/QuizInstructions">Quiz</Link>
                                <Link 
                                    className="nav-link active" 
                                    to="/chatwithai">Romantic Ideas</Link>
                                <Link 
                                    className="nav-link active" 
                                    to="/Profile">Profile</Link>
                                <Link 
                                    className="nav-link active" 
                                    to="/relationships">Relationships</Link>
                                <button 
                                    className="btn btn-primary shadow-none"
                                    onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    className="nav-link active" 
                                    to="/login">Login</Link>
                                <Link 
                                    className="nav-link active" 
                                    to="/registration">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}



export default Navbar;
