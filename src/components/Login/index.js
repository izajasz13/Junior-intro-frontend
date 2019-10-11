import React from 'react';

const Login = () => {
    return (
        <div>
            <form id="formLogin">
                <label htmlFor="loginInput">Login:</label>
                <input type="text" id="loginInput" placeholder="Login" required />
                <label htmlFor="passwordInput">Password:</label>
                <input type="password" id="passwordInput" placeholder="Password" required />
                <button type="submit" form="formLogin">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
