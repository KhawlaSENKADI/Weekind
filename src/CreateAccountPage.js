import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Font.css';
import EmailStep from './EmailStep';
import ProfileStep from './ProfileStep';
import VerificationStep from './VerificationStep';

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      navigate('/login');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      {step === 1 && (
          <EmailStep
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
            handleNext={handleNext}
            handleCancel={handleCancel}
          />
        )}
         {step === 2 && (
          <ProfileStep
            email={email}
            password={password}
            handleCancel={handleCancel}
            handleNext={handleNext}
          />
        )}
        
        {step === 3 && <VerificationStep handleCancel={handleCancel} handleNext={handleNext}/>}
    </>
  );
};

export default CreateAccountPage;
