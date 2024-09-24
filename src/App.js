import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeProvider } from './context/EmployeeContext';
import Employee from './components/Employee';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          {/* Protected routes using PrivateRoute */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Employee />} />
          </Route>
        </Routes>
      </Router>
    </EmployeeProvider>
  );
};

export default App;
