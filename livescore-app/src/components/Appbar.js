import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import TemporaryDrawer from './Drawer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import FeedIcon from '@mui/icons-material/Feed';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LoginIcon from './LoginIcon';
import { Link, useLocation } from 'react-router-dom';
import Settings from './Settings';


const Logo = styled(Typography)({
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

function ResponsiveAppBar({ check, change }) {
  const location = useLocation(); // Get the current location using useLocation hook

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography
                variant="h5"
                fontWeight={700}
                noWrap
                component="div"
                style={{ marginRight: 'auto', fontFamily: 'Open Sans' }}
              >
                9jaScore
                <SportsSoccerIcon />
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <BottomNavigation
                showLabels
                value={location.pathname}
                onChange={() => {}}
                sx={{
                  backgroundColor: 'transparent',
                  justifyContent: 'space-between',
                }}
              >
                <Link to="/">
                  <BottomNavigationAction
                    label="Scores"
                    icon={<SportsVolleyballIcon />}
                    sx={{
                      marginLeft: '20px',
                      marginRight: '60px',
                      fontWeight: 700,
                      color: location.pathname === '/' ? 'green' : '',
                    }}
                  />
                </Link>

                <Link to="/News">
                  <BottomNavigationAction
                    label="News"
                    icon={<FeedIcon />}
                    sx={{
                      marginLeft: '60px',
                      marginRight: '60px',
                      fontWeight: 700,
                      color: location.pathname === '/News' ? 'green' : '',
                    }}
                  />
                </Link>
                <Link to="/Video">
                  <BottomNavigationAction
                    label="Video"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                  </svg>}
                    sx={{
                      marginLeft: '60px',
                      marginRight: '20px',
                      fontWeight: 700,
                      color: location.pathname === '/Video' ? 'green' : '',
                    }}
                  />
                </Link>
              </BottomNavigation>
            </Box>
          </Box>
          <LoginIcon />
          <Link to = "/Settings"><svg style = {{marginTop: '1vh', marginLeft: '2vh'}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg></Link>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
