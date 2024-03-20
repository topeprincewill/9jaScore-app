import React from 'react'
import SearchAppBar from '../../components/SearchAppbar';
import FootballData from '../Countriespage';
import TeamsData from './Teamspage';


const column1 = () => {
  return (
    
    <div style={{ paddingTop: '20px' }}>
      {/* Content for the first column */}
      <div style={{ borderBottom: '1px solid white', paddingBottom: '20px' }}>
        <SearchAppBar style={{ width: '100%' }}/>
      </div>
      <FootballData/>
    </div>
    
  )
}

export default column1