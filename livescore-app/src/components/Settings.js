import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import Peacock from './peacock.jpg';
import Espn from './espn.png';
import Paramount from './paramount.png';
import { DarkModeProvider, useDarkMode } from '../DarkModeContext';

const Settings = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'} style={{ minHeight: '100vh',backgroundColor: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222' }}>
      <div style={{ textAlign: 'left', padding: '5vh' }}>
        <Link to="../">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
          </svg>
        </Link>
      </div>
      <div style={{ padding: '5vh' }}>
        <h1 style={{ fontFamily: 'Open Sans', marginTop: '-5vh' }}>Settings</h1>
        <div className="content" style={{ textAlign: 'left', fontFamily: 'Open Sans' }}>
          <div style={{ backgroundColor: 'grey', borderRadius: '50px', minHeight: '20vh', marginBottom: '5vh', padding: '2vh' }}>
            <h3 style={{ color: 'white', marginTop: '5vh' }}>Theme</h3>
            <div style = {{textAlign:'right', marginTop: '-2vh', marginRight: '10vh'}}>
                <Switch 
                checked={isDarkMode}
                onChange={toggleDarkMode}
                inputProps={{ 'aria-label': 'controlled' }}
                /></div>
          </div>
          <h3>Streaming services</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <a href="https://www.peacocktv.com/">
              <img style={{ width: '10vh', borderRadius: '50px', padding: '2vh' }} src={Peacock} alt="Peacock" />
            </a>
            <a href="https://plus.espn.com/">
              <img style={{ width: '12vh', borderRadius: '50px', padding: '2vh' }} src={Espn} alt="ESPN" />
            </a>
            <a href="https://www.paramountplus.com/">
              <img style={{ width: '10vh', borderRadius: '50px', padding: '2vh' }} src={Paramount} alt="Paramount" />
            </a>
          </div>
          <h2 style={{ marginTop: '5vh' }}>Other</h2>
          <h3>Share 9jaScore: <Link to="/">www.9jascore.com</Link></h3>
        </div>
      </div>
    </div>
  );
};

export default Settings;
