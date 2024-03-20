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
      </Routes>
      
      
      </div>
      </BrowserRouter>
    
      </ThemeProvider>
  );
}

export default App;
