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
import { Link } from 'react-router-dom';



const Logo = styled(Typography)({
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});



function ResponsiveAppBar({check, change}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [checked, setChecked] = React.useState(true);
const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [value, setValue] = React.useState('recents');

  const handleChanges = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TemporaryDrawer/>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h5"
            fontWeight={700}
            noWrap
            component="div"
            style={{marginRight:'auto'}}
          >
            9jaScore
            <SportsSoccerIcon/>
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);

  }}
  sx={{
    backgroundColor: 'transparent', // Set background to transparent
    justifyContent: 'space-between', // Space out the icons
  }}
>
  <BottomNavigationAction label="Scores" icon={<SportsVolleyballIcon />} sx={{ marginLeft: '20px', marginRight: '60px', fontWeight: 700, 
      '&.Mui-selected': {
        color: 'green', 
      }, }} />
  <BottomNavigationAction label="News" icon={<FeedIcon />} sx={{ marginLeft: '60px', marginRight: '60px', fontWeight: 700, // Change label's font weight
      '&.Mui-selected': {
        color: 'green', // Change color when selected
      }, }} />
  <BottomNavigationAction label="Marketplace" icon={<LocalGroceryStoreIcon />} sx={{ marginLeft: '60px', marginRight: '20px', fontWeight: 700, // Change label's font weight
      '&.Mui-selected': {
        color: 'green', // Change color when selected
      }, }} />
</BottomNavigation>
            </Box>
          </Box>
         <LoginIcon/>
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
