import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    // State to hold form data
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // State to display any error or success messages
    const [message, setMessage] = useState('');

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
        e.preventDefault();  // Prevent default form submission behavior
        setMessage('');  // Clear any previous messages

        try {
            // Send a POST request to the backend
            const response = await axios.post("http://localhost:4000/users/login", formData);
            // If login is successful, store the token (here we would like to redirect or do something else here... context!)
            localStorage.setItem('token', response.data.token);
            setMessage('Login successful');
        } catch (error) {
            // Display error message
            setMessage(error.response?.data?.message || 'Error occurred during login');
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
