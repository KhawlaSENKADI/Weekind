import React, { useState, useEffect } from 'react';
import logo from './assets/logo.png'; // Path to your logo image
import websiteName from './assets/website-name.png'; // Path to your website name image
import defaultProfilePicture from './assets/default-profile-picture.png'; // Path to default profile picture
import addIcon from './assets/plus.png'; // Path to your add icon image
import Search from './Search';

const Header = () => {
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
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <img src={websiteName} alt="Website Name" className="md:h-8 sm:h-4 w-auto" />
      </div>
      <div>
        <Search/>
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
  );
};

export default Header;
