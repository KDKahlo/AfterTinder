import React, { useState } from "react";
import axios from "axios";

export default function Registration() {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    password: "",

  });
  // State to display any error messages or success messages
  const [message, setMessage] = useState("");

  // Update state when form inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Reset message
    setMessage("");

    try {
      // Send a POST request to the backend
      const response = await axios.post("/register", formData);
      // Display success message from backend
      setMessage(response.data.message);
    } catch (error) {
      // Display error message
      setMessage(
        error.response?.data?.message || "Error occurred during registration"
      );
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {message && <p>{message}</p>} {/* Display success/error message */}
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
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
