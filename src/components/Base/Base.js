import React from 'react'
import ThemeBase from '../../theme/ThemeBase'
import ResponsiveAppBar from './ResponsiveAppBar'

const Base = ({ children }) => {
    return (
        <div>
            <ResponsiveAppBar />
            <div style={{marginTop: "150px"}}>
                {children}
            </div>
        </div>
    )
}

export default Base