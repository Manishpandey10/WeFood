import React, { useState } from "react";
import Toggle from 'react-toggle'

const DarkModeToggle=()=>{
    const [isDarkMode, setDarkMode]= useState(false)

    const handleSwitch=()=>{
        setDarkMode(!isDarkMode)
    }
    return(
        <Toggle checked={isDarkMode} onChange={handleSwitch} />
    )
}
export default DarkModeToggle