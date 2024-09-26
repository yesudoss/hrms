import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './components/Utils/AuthUtils'; 

const PrivateRoute = () => {
  return isAuthenticated() == 'true' ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
