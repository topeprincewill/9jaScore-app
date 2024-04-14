import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useDarkMode } from '../DarkModeContext';

const Search = styled('div')(({ theme }) => ({
  
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'dark' ? "#1a1a1a" : "#ffffff", 
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? "#1a1a1a" : "#ffffff",
  },
  
  
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  border: 'none',
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  border: 'none',
}));

export default function SearchAppBar({ placeholder, width, type, onChange }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    
    
          <Search style={{background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222',}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             type={type || 'text'} 
              placeholder={placeholder || 'Search…'}
              onChange={onChange} 
              inputProps={{ 'aria-label': 'search' }}
              style={{ width: width || '200px',
              padding: '8px', }}
            />
          </Search>
        
       
  );
}