import React, { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useTheme } from '@mui/material/styles';

function CountriesData({ limit,  onNavigateBack }) {
  const [countries, setCountries] = useState([]);
  const theme = useTheme();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v3.football.api-sports.io/countries', {
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': 'e97ca1780bd4e9c6fb7a7cb50d086b3a',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log(responseData.response);
        setCountries(responseData.response.slice(0, 25));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [ limit ]);

  return (
    <div>
    <div style={{display: 'flex'}}>
      <KeyboardArrowLeftIcon style={{ marginRight: '1px',
    marginTop: '20px',
    marginBottom: '15px'}}
    onClick={onNavigateBack}
     />
    <h4
      style={{
        marginTop: '15px',
        marginBottom: '15px',
        textAlign: 'left',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        backgroundColor: 'transparent',
        padding: '5px',
        borderRadius: '5px',
        width: '80%',
        marginLeft: '5px',
        cursor: 'pointer',
        
      }}
    >
      
      Countries
    </h4>
    </div>
    <div>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {countries.map(country => (
        <li
          key={country.code}
          style={{
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            backgroundColor: theme.palette.mode === 'dark' ? '#2b2b2b' : '#ffffff',
            padding: '5px',
            borderRadius: '5px',
            width: '80%',
            margin: '0 auto',
          }}
        >
          <img src={country.flag} alt={country.name} style={{ maxWidth: '20px', marginLeft: '10px' }} />
          <span style={{ marginLeft: '5px' }}>{country.name}</span>
        </li>
      ))}
    </ul>
  </div>
  </div>
  );
}

export default CountriesData;