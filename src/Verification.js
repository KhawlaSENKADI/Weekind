import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Font.css';
import logo from './assets/logo.png';

const Verification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(Array(6).fill(''));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input
      if (index < 5) {
        document.getElementById(`digit-${index + 1}`).focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        document.getElementById(`digit-${index - 1}`).focus();
      }
    }
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center p-4">
      <div className="flex justify-center space-x-2 mb-4">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`digit-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            className="w-12 h-12 border border-gray-300 rounded text-center text-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Verification;
