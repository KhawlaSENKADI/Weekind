import React from 'react';
import weekind from './assets/weekind.png'; 
import logo from './assets/logo.png';
import './Font.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="absolute top-0 left-0 mt-4 ml-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>
        <p className="text-center text-lg md:text-xl font-semibold mb-4 text-gray-800 ">
          We Craft Electronic Marketing With A Kind Touch At
        </p>
        <div className="flex items-center justify-center w-full">
          <img
            src={weekind}
            alt="weekind"
            className="max-w-full max-h-24 md:max-h-64 h-auto"
          />
        </div>
        <Link to="/create-account" className="bg-customPurple text-white font-bold py-2 px-16 md:text-lg rounded mt-8">
        JOIN US
      </Link>
        <p className="mt-4 text-gray-600 hover:text-blue-800 cursor-pointer underline">
          I already have an account
        </p>
      </div>
    );
  };
  
  export default LandingPage;