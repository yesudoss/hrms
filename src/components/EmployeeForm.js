import React, { useState, useCallback } from 'react';
import { useEmployeeContext } from '../context/EmployeeContext';
import { TextField, Button } from '@mui/material';

const EmployeeForm = () => {
    const [name, setName] = useState('');
    const { dispatch } = useEmployeeContext();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (name) {
            dispatch({ type: 'ADD_EMPLOYEE', payload: { name } });
            setName('');
        }
    }, [name, dispatch]);

    return (
        <form onSubmit={handleSubmit}>
            <TextField 
                label="Employee Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <Button type="submit" variant="contained" color="primary">Add Employee</Button>
        </form>
    );
};

export default EmployeeForm;
