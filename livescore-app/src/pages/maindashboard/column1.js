import React, { useState } from 'react';
import SearchAppBar from '../../components/SearchAppbar';
import CountriesData from '../Countriespage';
import TeamsData from './Teamspage';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'




const Column1 = ({ showCountriesPage, setShowCountriesPage }) => {
  const [showTeamsPage, setShowTeamsPage] = useState(false);
  const [showCountries, setShowCountries] = useState(false);

  const handleNavigateBack = () => {
    setShowTeamsPage(false); // Set showTeamsPage to false to go back to the original page
  };

  const handleNavigateBackk = () => {
    setShowCountries(false); // Set showCountriesPage to false to go back to the original page
  };


  return (
    <div style={{ paddingTop: '20px' }}>
      <div style={{ borderBottom: '1px solid white', paddingBottom: '20px' }}>
        <SearchAppBar style={{ width: '100%' }} />
      </div>

      {showCountries ? (
        <CountriesData onNavigateBack={handleNavigateBackk} />
      ) : showTeamsPage ? (
        <TeamsData onNavigateBack={handleNavigateBack}/>
      ) : (
        <div>
          <div style={{ display: 'flex' }}>
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
              onClick={() => setShowCountries(true)}
            >
              Countries
            </h4>
            <KeyboardArrowRightIcon
              style={{ marginLeft: '1px', marginTop: '20px', marginBottom: '15px' }}
              onClick={() => setShowCountries(true)}
            />
          </div>

          <div style={{ display: 'flex' }}>
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
              onClick={() => setShowTeamsPage(true)}
            >
              Teams
            </h4>
            <KeyboardArrowRightIcon
              style={{ marginLeft: '1px', marginTop: '20px', marginBottom: '15px' }}
              onClick={() => setShowTeamsPage(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default Column1