import React, { useState, useEffect } from 'react';
import championsleague from './champsleague.png';
import KeyboardNavigation from '../../components/Tabs';
import ResponsiveAppBar from '../../components/Appbar';

const ChampionsLeague = ({ darkMode, setDarkMode }) => {
    return (
        
             
        <div style={{backgroundImage: "linear-gradient(to bottom, #363db5,#bf933b, rgba(193, 193, 193,0 )"}}>
        <ResponsiveAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
            <KeyboardNavigation />
            <img src = {championsleague} alt = "Champions League" style = {{width: '50vh'}}></img>
            <h1>Champions League here</h1>
        </div>
       
    );
};
export default ChampionsLeague;