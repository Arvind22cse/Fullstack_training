import React, { useState } from 'react';
import '../../assets/Css/Signin.css';

function Signin() {
    const [password, setPass] = useState("");
    const [email, setEmail] = useState("");

    

    return (
        <div className="signin-container">
            <div className='color'>
            <h1>SIGN IN</h1>
            <form>
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
                        onChange={ (e) => {
                            setPass(e.target.value);
                        }}
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
