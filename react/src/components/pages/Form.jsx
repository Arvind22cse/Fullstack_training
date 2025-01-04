import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../../assets/Css/Signup.css"
function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
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
            navigate("/anime");
        } catch (err) {
            console.error("Error occurred during submission:", err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <label className="label">
                    First Name:
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="fname"
                    />
                <br />
                <label className="label">
                    Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                       className='lname'
                    />
               
                <br />
                <label className="label">
                    Password:</label>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                        className='pass'
                    />
                
                <br />
                <label>
                    Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="email"
                    />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
