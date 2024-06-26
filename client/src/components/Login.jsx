import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import aftertinderlogo from "../assets/After_tinder_logo.png";

export default function Login() {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to display any error or success messages
  const [message, setMessage] = useState("");

  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  //Login function from context
  const { login } = useContext(AuthContext);

  //Hook for navigation
  const navigate = useNavigate();

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
    e.preventDefault();
    try {
      await login(formData); // Call login from context with form data
      navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
        console.error("Login error:", error.response?.data?.message || error.message);
        setMessage(error.response?.data?.message || 'Login error');
        setShowModal(true); // Show the modal on error
      // Optionally clear the password field
      setFormData((prevFormData) => ({ ...prevFormData, password: "" }));
    }
  };

  const handleClose = () => {
    setShowModal(false); // Hide the modal
};

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
    <div className="container col-lg-8 bg-white shadow-sm rounded-4">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-lg-8 p-4 w-50">
          <div className="mb-3 text-center">
            <img
              src={aftertinderlogo}
              className="img-fluid"
              style={{ width: "50%", marginTop: "1rem", marginBottom: "1rem" }} 
              alt=""
            />
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
              <button
                type="submit"
                className="btn btn-primary p-3 shadow-none rounded-pill w-100"
              >
                Sign in
              </button>
            </div>
          </form>

          <div
            className={`modal ${showModal ? "show" : ""}`}
            tabIndex="-1"
            style={{ display: showModal ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Login Error</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{message}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <button className="btn btn-outline-dark p-3 shadow-none rounded-pill w-100">
              Connect with Facebook
            </button>
          </div>
          <div className="my-3">
            <p>
              New user? Register <a href="/registration">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
