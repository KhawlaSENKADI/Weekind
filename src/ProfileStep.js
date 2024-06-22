import React from 'react';
import logo from './assets/logo.png';

const ProfileStep = ({ email, password, handleNext, handleCancel }) => {
  
  return (
    <>
     <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 left-0 mt-4 ml-4">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold md:mt-16 mb-4">Create Account</h1>
      <div className="w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
          First Name
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstname"
          type="text"
          placeholder="Enter your first name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="familyname">
          Family Name
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="familyname"
          type="text"
          placeholder="Enter your family name"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-6">
        <button
          className="bg-customPurple text-white font-bold py-2 px-20 rounded mt-4"
          type="button"
          onClick={handleNext}
        >
          Submit
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
    </>
  );
};

export default ProfileStep;
