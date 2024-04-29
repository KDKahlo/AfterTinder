import './App.css';
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import ChatwithAI from "./components/ChatwithAI";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <h1>After-Tinder</h1>
            <ul>
                <li>
                    <Link to="/Registration">Registration</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Quiz">Quiz</Link>
                </li>
                <li>
                    <Link to="/ChatwithAI">Chat with AI</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/Quiz" element={<Quiz />} />
                <Route path="/ChatwithAI" element={<ChatwithAI />} />
            </Routes>
        </>
    );
}
export default App