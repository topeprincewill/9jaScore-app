import React, { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useTheme } from '@mui/material/styles';

function TeamsData({ limit,  onNavigateBack }) {
  const [teams, setTeams] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://v3.football.api-sports.io/teams?league=39&season=2021', {
          headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': 'e97ca1780bd4e9c6fb7a7cb50d086b3a',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log('API Response:', responseData); // Log the entire response
      console.log('Teams Data:', responseData.response);
        setTeams(responseData.response.slice(0, 25));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },  [limit]);

  return (
    <div>
    <div style={{display: 'flex'}}>
    <KeyboardArrowLeftIcon style={{ marginRight: '1px',
    marginTop: '20px',
    marginBottom: '15px'}}
    onClick={onNavigateBack} />
      <h4 style={{
          marginTop: '15px',
          marginBottom: '15px', 
          textAlign: 'left',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          backgroundColor: 'transparent',
          padding: '5px',
          borderRadius: '5px',
          width: '80%',
          marginLeft: '5px'
          }}>
            Teams
            </h4>
          </div>

          <div>
      <ul style={{ listStyle: 'none', padding: 0}}>
        {teams.map(team => (
          <li key={team.team.id} style={{
          marginBottom: '15px', 
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
            
            <img src={team.team.logo} alt={team.team.name} style={{ maxWidth: '20px', marginLeft: '10px' }} />
            <span style={{ marginLeft: '5px' }}>{team.team.name}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default TeamsData;