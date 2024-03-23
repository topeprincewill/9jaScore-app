import * as React from 'react';
import { styled } from '@mui/system';
import { buttonClasses } from '@mui/base/Button';
import { Tabs } from '@mui/base/Tabs';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import premlogo from '../pages/Premier League/premlogo.png'
import laliga from '../pages/La Liga/laliga.png'
import champsleague from '../pages/Champions League/champsleague.png'
import { Link } from 'react-router-dom';



export default function KeyboardNavigation() {
  return (
    <div>
      <Tabs
        defaultValue={1}
        aria-label="Tabs where selection follows focus"
        
        selectionFollowsFocus
        
      >
        <TabsList>
          <Tab value={1}>
            <Link to = "PremierLeague"> <img src={premlogo} alt="Premier League Logo" style={{ background: '', width: "35%", color: "" }} /><br></br></Link>
          </Tab>
          
          <Tab value={2}>
            <img src = {laliga} alt = "LaLiga" style = {{width: "30%"}} ></img>
            </Tab>
          <Tab value={3}>
            <img src = {champsleague} alt = "Champions League" style = {{width: "25%"}}></img>
            </Tab>
        </TabsList>
      </Tabs>

     
    </div>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${
    theme.palette.mode === 'dark' ? 'transparent' : blue[400]
  };
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);