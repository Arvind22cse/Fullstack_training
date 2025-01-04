import React, { useState } from 'react';
import '../../assets/Css/Signin.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior like page refreshing 

        try {
            // Send a POST request to the backend with the form data
            const request = await axios.post("http://localhost:3001/login", { email, password });
            console.log(request.data);

            if (request.data.isLoggedIn) {
                navigate('/');
            } else {
                // Handle login failure (optional)
                alert("Login failed!"); 
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="signin-container">
            <div className='color'>
                <h1>SIGN IN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            id="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                    <a href="/signup">Signup</a>
                </form>
            </div>
        </div>
    );
}

export default Signin;
