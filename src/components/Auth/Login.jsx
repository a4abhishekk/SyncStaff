import React, { useState } from 'react';
import { showSuccessToast, showErrorToast } from '../../utils/toastConfig';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        try {
            const loginSuccess = handleLogin(email, password);
            if (loginSuccess) {
                const isAdmin = email === "admin@example.com";
                showSuccessToast(isAdmin ? 'Welcome back, Admin! 👋' : 'Successfully logged in!');
                setEmail("");
                setPassword("");
            } else {
                showErrorToast('Invalid credentials. Please try again.');
            }
        } catch (error) {
            showErrorToast('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800'>
            <div className='bg-gradient-to-r from-gray-800 to-gray-700 shadow-2xl rounded-3xl p-12 w-full max-w-lg'>
                <h2 className='text-4xl font-extrabold text-center mb-8 text-gray-200'>Welcome Back</h2>
                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300 mb-4 transition-all duration-200 transform hover:scale-105'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-300 mb-6 transition-all duration-200 transform hover:scale-105'
                        type="password"
                        placeholder='Enter your password'
                    />
                    <button className='w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
