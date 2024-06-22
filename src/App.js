// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import CreateAccountPage from './CreateAccountPage';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;
