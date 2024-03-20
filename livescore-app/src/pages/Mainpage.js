import React from 'react'
import ResponsiveAppBar from '../components/Appbar'
import Maindashboard from './maindashboard'

const Mainpage = ({ darkMode, setDarkMode }) => {
  return (
    <div>
    <ResponsiveAppBar check={darkMode} change={()=>setDarkMode(!darkMode)}/>
    <div style={{ padding: '80px' }}> {/* Adjust padding as needed */}
        <Maindashboard />
      </div>
    </div>
  )
}

export default Mainpage



