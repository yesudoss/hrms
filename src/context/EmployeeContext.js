import React, { createContext, useReducer } from 'react';

const EmployeeContext = createContext();

const initialState = { employees: [] };

const employeeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return { ...state, employees: [...state.employees, action.payload] };
        default:
            return state;
    }
};

export const EmployeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState);
    console.log(state)
    
    return (
        <EmployeeContext.Provider value={{ state, dispatch }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export const useEmployeeContext = () => React.useContext(EmployeeContext);
