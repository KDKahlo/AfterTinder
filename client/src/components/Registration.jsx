import React, { useState } from "react";
import axios from "axios";

export default function Registration() {
  // State to hold and update form data (email, firstname and password)
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    password: "",
  });

  // State to display any error messages or success messages we want to show to the user
  const [message, setMessage] = useState("");

  // Update state when form inputs change
  const handleChange = (e) => { // when a user types into one of the fields, this function updates the corresponding value in "formData"
    const { name, value } = e.target; // e.target gives us information about the input field being changed. name tells us which field (email, firstname, or password), and value tells us what the user typed.
    setFormData((prevState) => ({ // updates formData with the new value while keeping other values unchanged.
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the browser from reloading/redirecting
    setMessage(""); // Clears any previous messages

    try {
      // Send a POST request to the backend
      const response = await axios.post("http://localhost:4000/users/register", formData); // Display success message from backend
      setMessage(response.data.message);
    } catch (error) { // Display error message
      setMessage(error.response?.data?.message || "Error occurred during registration"
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
