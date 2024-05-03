import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  // State to hold and update form data (email, firstname and password)
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    password: "",
  });

  // State to display any error messages or success messages we want to show to the user
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Update state when form inputs change
  const handleChange = (e) => {
    // when a user types into one of the fields, this function updates the corresponding value in "formData"
    const { name, value } = e.target; // e.target gives us information about the input field being changed. name tells us which field (email, firstname, or password), and value tells us what the user typed.
    setFormData((prevState) => ({
      // updates formData with the new value while keeping other values unchanged.
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the browser from reloading/redirecting
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Send a POST request to the backend
      const response = await axios.post(
        "http://localhost:4000/users/register",
        formData
      ); // Display success message from backend
      setMessage(response.data.message);
      navigate("/login");
    } catch (error) {
      // Display error message
      setMessage(
        error.response?.data?.message || "Error occurred during registration"
      );
    }
  };

  return (
    <div className="container col-lg-8 position-absolute top-50 start-50 translate-middle bg-white shadow-sm rounded-4">
        <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-8 p-4 w-50">
                
                <div className="mb-3 text-center">
                    <img src="src/assets/After_tinder_logo.png" className="img-fluid w-80" alt="" />
                    <p className="mt-2">real love starts here!</p>
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
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control p-3 shadow-none rounded-pill"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary p-3 shadow-none rounded-pill w-100">
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="mb-3">
                    <button className="btn btn-outline-dark p-3 shadow-none rounded-pill w-100">
                        Connect with Facebook
                    </button>
                </div>
                <div className="my-3">
                    <p>Already registered? Login <a href="/login">here</a></p>
                </div>
            </div>
        </div>
    </div>
);
}
