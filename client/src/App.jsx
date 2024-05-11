import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';
import Registration from "./components/Registration";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import QuizInstructions from "./components/QuizInstructions";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./components/Profile.jsx";
import { Routes, Route } from "react-router-dom";
import AuthContext from './contexts/AuthContext';
import AIDropDownInput from "./components/AIDropdownInput.jsx";
import RelationshipsProfile from "./components/RelationshipsProfile.jsx";
import PairWithPartner from "./components/PairWithPartner.jsx";



function App() {
  // State to track if a user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); // The state never stars as false, but instead it will check if the token is there or not every time the page refreshes

  useEffect(() => {
    //Check for token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Set logged in state if token is found
    }
  }, []);

  // Function to handle user login
  const login = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/users/login",
        formData
      );
      localStorage.setItem("token", response.data.token); // Save token to localStorage
      setIsLoggedIn(true); // Update login state
    } catch (error) {
      throw error; // Log any error during login
    }
  };

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update login state
  };

  // Prepare the auth object to pass to context
  const authObject = { isLoggedIn, login, logout };

  return (
    <AuthContext.Provider value={authObject}>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/quiz" element={<PrivateRoute><Quiz/></PrivateRoute>}/>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
        <Route path="/pairwithpartner" element={<PrivateRoute><PairWithPartner /></PrivateRoute>}/>
        <Route path="/relationships" element={<PrivateRoute><RelationshipsProfile/></PrivateRoute>}/>
        <Route path="/chatwithai" element={<PrivateRoute><AIDropDownInput /></PrivateRoute>}/>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
