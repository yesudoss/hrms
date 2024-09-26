import React from 'react'
import EmployeeForm from './EmployeeForm'
import EmployeeList from './EmployeeList'
import ThemeBase from '../theme/ThemeBase'
import Base from './Base/Base'
// import ThemeBase from '../ThemeBase'


const Employee = () => {
  return (
    <ThemeBase>
      <Base>
        <EmployeeForm />
        <EmployeeList />
      </Base>
    </ThemeBase>
  )
}

export default Employee