import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeProvider } from './context/EmployeeContext';
import { Container } from '@mui/material';
import Employee from './components/Employee';
import SignUp from './components/SignUp/SignUp';

const App = () => {
    return (
        <EmployeeProvider>
            <Router>
                {/* <Container> */}
                    <Routes>
                        <Route path="/" element={<Employee />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
                {/* </Container> */}
            </Router>
        </EmployeeProvider>
    );
};

export default App;

// npm install @mui/icons-material
// npm install @mui/material @emotion/react @emotion/styled react-router-dom @mui/icons-material
