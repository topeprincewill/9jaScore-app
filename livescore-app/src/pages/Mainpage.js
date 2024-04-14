import React from 'react'
import ResponsiveAppBar from '../components/Appbar'
import Maindashboard from './maindashboard'

const Mainpage = ({ darkMode, setDarkMode }) => {
  return (
    <div style = {{padding: '0', margin: '0',}}>
    <ResponsiveAppBar check={darkMode} change={()=>setDarkMode(!darkMode)}/>
    <div style={{  overflow: 'hidden', padding: '0'}}> {/* Adjust padding as needed */}
        <Maindashboard />
      </div>
    </div>
  )
}

export default Mainpage



