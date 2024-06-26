import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode from jwt-decode
import logo from './assets/logo.png';
import './Font.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCancel = () => {
    navigate('/');
  };
  const handleLogin = () => {
    navigate('/Home');
  };

  const handleLogin2 = async () => {
    try {
      const response = await fetch('your-authentication-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const { token } = await response.json();
  
      // Store token and expiration time in localStorage
      const { exp } = jwtDecode(token);
      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', exp);
  
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error
    }
  };

  const isTokenExpired = () => {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    
    if (!token || !tokenExpiration) {
      return true; // No token or expiration found
    }
  
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  
    return currentTime > parseInt(tokenExpiration, 10);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold md:mt-16 mb-10">Login</h1>
      <div className="w-full max-w-md">
        <p className="text-center text-lg md:text-xl font-semibold mb-4 text-gray-800">
          Good to see you back!
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="h-5 w-5" />
              ) : (
                <AiOutlineEye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <button
            className="bg-customPurple text-white font-bold py-2 px-20 rounded mt-4"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-white text-gray-500 font-bold py-2 px-20 rounded mt-4"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
