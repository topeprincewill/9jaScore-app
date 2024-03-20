import React, { useState, useEffect } from 'react';

function FootballData() {
  const [countries, setCountries] = useState([]);

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
        setCountries(responseData.response.slice(0, 25));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div >
      <h4 style={{
          marginTop: '15px',
          marginBottom: '15px', 
          textAlign: 'left',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          backgroundColor: 'transparent',
          padding: '5px',
          borderRadius: '5px',
          width: '80%',
          marginLeft: '13px'
          }}>Countries</h4>
      <ul style={{ listStyle: 'none', padding: 0}}>
        {countries.map(country => (
          <li key={country.code} style={{
          marginBottom: '15px', 
          display: 'flex', 
          alignItems: 'center',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          backgroundColor: '#2b2b2b',
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
  );
}

export default FootballData;