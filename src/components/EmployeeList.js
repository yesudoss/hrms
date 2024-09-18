import React from 'react';
import { useEmployeeContext } from '../context/EmployeeContext';
import { List, ListItem, ListItemText } from '@mui/material';

const EmployeeList = () => {
    const { state } = useEmployeeContext();

    return (
        <List>
            {state.employees.map((employee, index) => (
                <ListItem key={index}>
                    <ListItemText primary={employee.name} />
                </ListItem>
            ))}
        </List>
    );
};

export default EmployeeList;
