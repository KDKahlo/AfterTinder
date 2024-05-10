import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");  // Redirect to login page after logout
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn ? (
                <>
                    <Link to="/quiz">Quiz</Link>
                    <Link to="/chatwithai">Romantic Ideas</Link>
                    <Link to="/Profile">Profile</Link>
                    <Link to="/relationships">Relationships</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/registration">Register</Link>
                </>
            )}
        </nav>
    );
}

export default Navbar;
