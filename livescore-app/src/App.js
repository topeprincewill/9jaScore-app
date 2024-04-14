import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Mainpage from './pages/Mainpage';
import PremierLeague from './pages/Premier League/PremierLeague';
import LaLiga from './pages/La Liga/LaLiga';
import ChampionsLeague from './pages/Champions League/ChampionsLeague';
import News from './pages/News/News';
import Video from './pages/Video/video';
import Settings from './components/Settings';
import { DarkModeProvider, useDarkMode } from './DarkModeContext';

// Define your dark theme outside the App component
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  // Use the useDarkMode hook to access dark mode state and toggle function
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : createTheme()}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/PremierLeague" element={<PremierLeague />} />
            <Route path="/LaLiga" element={<LaLiga />} />
            <Route path="/ChampionsLeague" element={<ChampionsLeague />} />
            <Route path="/News" element={<News />} />
            <Route path="/Video" element={<Video />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

// Wrap your entire application with DarkModeProvider
function AppWithDarkMode() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}

export default AppWithDarkMode;
