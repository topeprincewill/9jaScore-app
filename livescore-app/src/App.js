import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/Appbar';
//import { Paper } from '@mui/material';
import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Mainpage from './pages/Mainpage';
import column1 from './pages/maindashboard/column1';
import TeamsData from './pages/maindashboard/Teamspage';
import PremierLeague from './pages/Premier League/PremierLeague';
import LaLiga from './pages/La Liga/LaLiga'
import ChampionsLeague from './pages/Champions League/ChampionsLeague'
import News from './pages/News/News'
import Video from './pages/Video/video'


function App() {
const[darkMode, setDarkMode] = useState(false)
const darkTheme = createTheme({
  palette: {
    mode:darkMode?'dark':'light'
  },
});
  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <BrowserRouter>
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Mainpage darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/PremierLeague" element={<PremierLeague />} />
        <Route path = "/LaLiga" element = {<LaLiga/>}/>
        <Route path = "/ChampionsLeague" element = {<ChampionsLeague/>}/>
        <Route path = "/News" element = {<News/>}></Route>
        <Route path = "/Video" element = {<Video/>}></Route>
      </Routes>
      
      
      </div>
      </BrowserRouter>
    
      </ThemeProvider>
  );
}

export default App;
