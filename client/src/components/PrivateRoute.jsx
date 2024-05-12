import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  
  const { isLoggedIn } = useContext(AuthContext);
console.log(isLoggedIn)
  // Directly return children or Navigate without wrapping in a Route
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
