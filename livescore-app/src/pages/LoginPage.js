import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import loginPic from './loginPagePic.png';

export default function SignIn() {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     
    const navigate = useNavigate();
    
    const logInUser = (event) => {
        event.preventDefault();

        if (email.trim() === '') {
            alert("Email is left Blank!");
        } else if (password.trim() === '') {
            alert("Password is left Blank!");
        } else {
            axios.post('http://127.0.0.1:5000/login',{
                email: email,
                password: password
            })
            .then(function (response){
                console.log(response);
                navigate("/");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401){
                    alert("Invalid credentials");
                }
            });
        }
    };

  return (
    
    <div style={{ display: 'flex', backgroundImage: "linear-gradient(to bottom, #003A75, rgba(193, 193, 193, 0))" }}>
      <div style={{ flex: 1 , width: "", fontFamily: "Poppins", color: "white"}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            noWrap
            component="div"
            style={{alignItems:'center', cursor: 'pointer'}}
            onClick={() => navigate("/")}
            paddingBottom="20px"
          >
            
          </Typography>
          <h1 style={{fontFamily: "Poppins"}}>Hello, Welcome Back!</h1>
          <Typography component="h1" variant="h5" style = {{fontFamily: "Poppins"}}>
            Happy to see you again, please sign in
          </Typography>
          <Box component="form" onSubmit={logInUser} noValidate sx={{ mt: 1 }}>
            
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            /> 

            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <br></br>
            <Button style ={{width: "30%", backgroundColor: "#17497C"}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
    <div style={{ flex: 1 , width: ''}}>
    <SportsSoccerIcon style = {{marginTop: "10px", marginRight: "-0vh", width : "70px", height: "70px", color: "white"}}/>
    <img src={loginPic} alt="loginPic" style={{marginTop: '20%', marginRight: '-0vh', width: '100vh', maskImage: 'linear-gradient(to top, transparent, white)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, white)' // For Safari support
  }}
/>


      
        
    </div>
    </div>
  );
}