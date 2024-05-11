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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/quiz" className="nav-link">Quiz</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/chatwithai" className="nav-link">Chat with AI</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/relationships" className="nav-link">Relationships</Link>
                                </li>
                                <li className="nav-item">
                                    <button onClick={handleLogout} className="btn custom-outline-button">Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/registration" className="nav-link">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

//         <nav>
//             <Link to="/">Home</Link>
//             {isLoggedIn ? (
//                 <>
//                     <Link to="/quiz">Quiz</Link>
//                     <Link to="/chatwithai">Chat with AI</Link>
//                     <Link to="/Profile">Profile</Link>
//                     <Link to="/relationships">Relationships</Link>
//                     <button onClick={handleLogout}>Logout</button>
//                 </>
//             ) : (
//                 <>
//                     <Link to="/login">Login</Link>
//                     <Link to="/registration">Register</Link>
//                 </>
//             )}
//         </nav>
//     );
// }

export default Navbar;
