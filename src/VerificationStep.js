import React, { useState, useRef } from 'react';
import logo from './assets/logo.png';

const VerificationStep = ({ handleNext, handleCancel }) => {
  const [code, setCode] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  // Function to handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input if available
      if (index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Function to handle backspace
  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '') {
      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Generate input fields based on code array
  const inputs = code.map((digit, index) => (
    <input
      key={index}
      id={`digit-${index}`}
      type="text"
      maxLength="1"
      value={digit}
      onChange={(e) => handleChange(e, index)}
      onKeyDown={(e) => handleBackspace(e, index)}
      ref={(input) => (inputRefs.current[index] = input)}
      className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
    />
  ));

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
    <div className="absolute top-0 left-0 mt-4 ml-4">
      <img src={logo} alt="Logo" className="h-12 w-auto" />
    </div>
    <h1 className="text-3xl md:text-4xl font-bold md:mt-16 mb-4">Create Account</h1>
    <div className="w-full max-w-md">
    <div className="bg-white flex flex-col items-center mt-8 p-4">
      <p className="text-center text-lg md:text-xl font-semibold mb-4 text-gray-800">
        Check your email or SMS for the verification code.
      </p>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verificationCode">
          Verification Code
        </label>
        <div className="flex justify-center space-x-2 mb-4">{inputs}</div>
      </div>
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center mt-6">
          <button
            className="bg-customPurple text-white font-bold py-2 px-20 rounded mt-4"
            type="button"
            onClick={handleNext}
          >
            Done
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
    </div>
    </div>
  );
};

export default VerificationStep;
