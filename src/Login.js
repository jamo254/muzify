import React from 'react';
import './Login.css';
import muzifylogo1 from './images/muzifylogo1.png';
import { loginUrl } from './spotify'
function Login() {
    return (
        <div className="login">
            <img src={muzifylogo1} alt="muzify"
            />

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
