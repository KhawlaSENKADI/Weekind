// Home.js

import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import defaultProfilePicture from './assets/default-profile-picture.png';
import addIcon from './assets/plus.png';
import websiteName from './assets/website-name.png';

const Home = () => {
    const [plusClicked, setPlusClicked] = useState(false); // State for click effect
    const handlePlusClick = () => {
    // Set state to trigger click effect
    setPlusClicked(true);
    // Reset click effect after short delay (optional)
    setTimeout(() => setPlusClicked(false), 300); // Reset after 300ms
  };

  const [user, setUser] = useState({
    name: 'James', // Default name
    profilePicture: defaultProfilePicture, // Default profile picture
  });

  // Effect to fetch user information from localStorage
  useEffect(() => {
    // Retrieve user information from localStorage (assuming it's stored as 'user')
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser({
        name: storedUser.name || 'James', // Use stored name or default
        profilePicture: storedUser.profilePicture || defaultProfilePicture, // Use stored picture or default
      });
    }
  }, []); // Empty dependency array ensures this runs only once on component mount



  return (
    <>
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <img src={websiteName} alt="Website Name" className="h-8 w-auto" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-gray-800 font-semibold">{user.name}</span>
        </div>

        <div className={`bg-white rounded-full p-2 shadow-md cursor-pointer transition-transform duration-200 ease-in-out transform ${plusClicked ? 'scale-105' : 'scale-100'}`}
        onClick={handlePlusClick} >
          <img src={addIcon} alt="Add" className="h-6 w-6" />
        </div>
      </div>
   </div>


   
   <form className="flex items-center max-w-lg mx-auto mt-10">
  {/* Search Icon */}
  <label htmlFor="voice-search" className="sr-only">Search</label>
  <div className="relative w-full">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
    </div>
    <input
      type="text"
      id="voice-search"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Products ..."
      required
    />
    {/* Camera Icon */}
    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>

    </button>
  </div>
  <button
    type="submit"
    className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
    </svg>
    Search
  </button>
</form>



   </>
  );
};

export default Home;
