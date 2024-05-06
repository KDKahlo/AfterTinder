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
        <div className="container col-lg-8 position-absolute top-50 start-50 translate-middle bg-white shadow-sm rounded-4">
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-lg-8 p-4 w-50">
                    

                    <div className="mb-3 text-center">
                        <img src="src/assets/After_tinder_logo.png" className="img-fluid w-80" alt="" />
                        <p className="mt-2">welcome back!</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control p-3 shadow-none rounded-pill"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                name="password"
                                className="form-control p-3 shadow-none rounded-pill"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary p-3 shadow-none rounded-pill w-100">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mb-3">
                        <button className="btn btn-outline-dark p-3 shadow-none rounded-pill w-100">
                            Connect with Facebook
                        </button>
                    </div>
                    <div className="my-3">
                        <p>New user? Register <a href="/registration">here</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
