import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-avatar"></div>
                <form>
                    <div className="input-container">
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className="input-container">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className="forgot-password">
                        <a href="/">Forgot Password?</a>
                    </div>
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
