import React from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'
import ThemeBase from '../ThemeBase'

const Employee = () => {
  return (
    <ThemeBase>
        <EmployeeForm />
        <EmployeeList />
    </ThemeBase>
  )
}

export default Employee