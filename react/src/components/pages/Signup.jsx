import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/Css/Signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior like page refresing 

    try {
      // Send a POST request to the backend with the form data
      const response = await axios.post("http://localhost:3001/signup", {
        firstName,
        lastName,
        password,
        email,
      });

      console.log("Response from server:", response.data);

      // Navigate to another page if the request is successful
      navigate("/signin");
    } catch (err) {
      console.error("Error occurred during submission:", err);
    }
  };

  return (
    <div className="signup-container">
      <div className="color">
        <h1>SIGN UP </h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-row">
            <label htmlFor="firstName">firstName:</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              id="firstName"
              placeholder="Enter your firstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="input-row">
            <label htmlFor="lastName">lastName:</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              id="lastName"
              placeholder="Enter your lastName"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <div className="input-row">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              id="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-row">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
