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
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import FeedIcon from '@mui/icons-material/Feed';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LoginIcon from './LoginIcon';
import { Link, useLocation } from 'react-router-dom';


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
          <TemporaryDrawer />
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
          <Switch
            checked={check}
            onChange={change}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
