import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  const tokenExpiration = localStorage.getItem('tokenExpiration');

  const isTokenExpired = () => {
    if (!tokenExpiration) {
      return true; // No token expiration found
    }

    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    return currentTime > parseInt(tokenExpiration, 10);
  };

  if (!isAuthenticated || isTokenExpired()) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
