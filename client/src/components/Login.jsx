import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

export default function Login() {
    // State to hold form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // State to display any error or success messages
    const [message, setMessage] = useState('');

    //Login function from context
    const { login } = useContext(AuthContext);

    //Hook for navigation
    const navigate = useNavigate();

    // Update state when form inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData);  // Call login from context with form data
            navigate("/");  // Navigate to the home page after successful login
        } catch (error) {
            // Update message state to display an error message
            setMessage("Login failed: " + (error.response?.data?.message || 'Invalid username or password'));
            // Optionally clear the password field
            setFormData(prevFormData => ({ ...prevFormData, password: '' }));
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {message && <p>{message}</p>}  
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
