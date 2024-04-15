import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchAppBar from '../../components/SearchAppbar';
import { useDarkMode } from '../../DarkModeContext';

const Column1 = () => {
  const [premierLeagueTopScorer, setPremierLeagueTopScorer] = useState(null);
  const [premierLeagueTopScorerImage, setPremierLeagueTopScorerImage] = useState(null);
  const [laLigaTopScorer, setLaLigaTopScorer] = useState(null);
  const [laLigaTopScorerImage, setLaLigaTopScorerImage] = useState(null);
  const [championsLeagueTopScorer, setChampionsLeagueTopScorer] = useState(null);
  const [championsLeagueTopScorerImage, setChampionsLeagueTopScorerImage] = useState(null);
  const [premierLeagueTopAssist, setPremierLeagueTopAssist] = useState(null);
  const [laLigaTopAssist, setLaLigaTopAssist] = useState(null);
  const [championsLeagueTopAssist, setChampionsLeagueTopAssist] = useState(null);

  const [searchInput, setSearchInput] = useState('');
  const [playerStats, setPlayerStats] = useState(null);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Premier League top scorer
        const premierLeagueResponse = await axios.get('https://livescore-api.com/api-client/competitions/topscorers.json?competition_id=2&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv');
        const premierLeagueData = premierLeagueResponse.data.data;
        const premierLeagueTopScorerData = premierLeagueData.topscorers[0];
        setPremierLeagueTopScorer(`${premierLeagueTopScorerData.player.name} (${premierLeagueTopScorerData.goals} goals)`);
        setPremierLeagueTopScorerImage(premierLeagueTopScorerData.team.logo);

        // Fetch La Liga top scorer
        const laLigaResponse = await axios.get('https://livescore-api.com/api-client/competitions/topscorers.json?competition_id=4&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv');
        const laLigaData = laLigaResponse.data.data;
        const laLigaTopScorerData = laLigaData.topscorers[0];
        setLaLigaTopScorer(`${laLigaTopScorerData.player.name} (${laLigaTopScorerData.goals} goals)`);
        setLaLigaTopScorerImage(laLigaTopScorerData.team.logo);

        // Fetch Champions League top scorer
        const championsLeagueResponse = await axios.get('https://livescore-api.com/api-client/competitions/topscorers.json?competition_id=8&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv');
        const championsLeagueData = championsLeagueResponse.data.data;
        const championsLeagueTopScorerData = championsLeagueData.topscorers[0];
        setChampionsLeagueTopScorer(`${championsLeagueTopScorerData.player.name} (${championsLeagueTopScorerData.goals} goals)`);
        setChampionsLeagueTopScorerImage(championsLeagueTopScorerData.team.logo);

        // Fetch Premier League top assist
        const premierLeagueResponseAssist = await axios.get('https://livescore-api.com/api-client/competitions/topscorers.json?competition_id=2&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv');
        const premierLeagueDataAssist = premierLeagueResponseAssist.data.data;
        const premierLeagueTopAssistData = premierLeagueDataAssist.topscorers[0];
        setPremierLeagueTopAssist(`${premierLeagueTopAssistData.player.name} (${premierLeagueTopAssistData.assists} assists)`);

        // Fetch La Liga top assist
        const laLigaResponseAssist = await axios.get('https://livescore-api.com/api-client/competitions/topscorers.json?competition_id=4&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv');
        const laLigaDataAssist = laLigaResponseAssist.data.data;
        const laLigaTopAssistData = laLigaDataAssist.topscorers[0];
        setLaLigaTopAssist(`${laLigaTopAssistData.player.name} (${laLigaTopAssistData.assists} assists)`);

        // Fetch Champions League top assist
        const championsLeagueResponseAssist = await axios.get('https://livescore-api.com/api-client/competitions/topscorers.json?competition_id=8&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv');
        const championsLeagueDataAssist = championsLeagueResponseAssist.data.data;
        const championsLeagueTopAssistData = championsLeagueDataAssist.topscorers[0];
        setChampionsLeagueTopAssist(`${championsLeagueTopAssistData.player.name} (${championsLeagueTopAssistData.assists} assists)`);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      if (searchInput.trim() !== '') {
        const playerStatsResponse = await axios.get(`https://livescore-api.com/api-client/players/stats.json?name=${searchInput}&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv`);
        const playerStatsData = playerStatsResponse.data.data;
        setPlayerStats(playerStatsData);
      }
    } catch (error) {
      console.error('Error fetching player stats:', error);
    }
  };

  return (
    <div style={{background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222', paddingTop: '1vh', paddingRight: '0', fontFamily: 'Open Sans' }}>
      {/* <div style={{ borderBottom: '1px solid white', paddingBottom: '20px' }}>
        <SearchAppBar
          style={{ width: '100%' }}
          placeholder="Search Players"
          value={searchInput}
          onChange={handleSearchInputChange}
          onSubmit={handleSearchSubmit}
        />
      </div> */}
      <h3 style={{ fontFamily: 'Open Sans', textAlign: 'left', padding: '2vh', marginTop: '3.5vh' }}>2023/24 Top Stats</h3>
      
      <div style={{ display: 'flex', paddingLeft: '0.5vh' }}>
        <div style={{
          background: 'linear-gradient(to bottom, #3256a8, #f0f0f0)',
          width: '20vh',
          height: '25vh',
          marginRight: '1vh',
          borderRadius: '10px',
        }}>
          <h5 style={{ marginTop: '1vh' }}>Premier League</h5>
          <img src={premierLeagueTopScorerImage} alt="Premier League Top Scorer" style={{ height: '12vh', width: 'auto', marginTop: '-1.5vh' }} />
          <h6 style={{ marginTop: '0.5vh' }}>{premierLeagueTopScorer}</h6>
        </div>

        <div style={{ background: 'linear-gradient(to bottom, #3256a8, #f0f0f0)', width: '20vh', height: '25vh', borderRadius: '10px' }}>
          <h5 style={{ marginTop: '1vh' }}>La Liga</h5>
          <img src={laLigaTopScorerImage} alt="La Liga Top Scorer" style={{ height: '12vh', width: 'auto', marginTop: '-1.5vh' }} />
          <h6 style={{ marginTop: '0.5vh' }}>{laLigaTopScorer}</h6>
        </div>
      </div>
      <div style={{ display: 'flex', paddingLeft: '0.5vh' }}>
        <div style={{ background: 'linear-gradient(to bottom, #3256a8, #f0f0f0)', width: '20vh', height: '25vh', marginRight: '1vh', marginTop: '1vh', borderRadius: '10px' }}>
          <h5 style={{ marginTop: '1vh' }}>Champions League</h5>
          <img src={championsLeagueTopScorerImage} alt="Champions League Top Scorer" style={{ height: '12vh', width: 'auto', marginTop: '-1.5vh' }} />
          <h6 style={{ marginTop: '0.5vh' }}>{championsLeagueTopScorer}</h6>
        </div>
        <div style={{ background: 'linear-gradient(to bottom, #3256a8, #f0f0f0)', width: '20vh', height: '25vh', marginTop: '1vh', borderRadius: '10px' }}>
          <h5 style = {{marginTop:'1vh'}}>Top Assists</h5>
          <h6 style = {{marginTop: '-3.5vh'}}>Premier League: {premierLeagueTopAssist}</h6>
          <h6 style = {{marginTop: '-3.5vh'}}>La Liga: {laLigaTopAssist}</h6>
          <h6 style = {{marginTop: '-3.5vh'}}>Champions League: {championsLeagueTopAssist}</h6>
        </div>
      </div>

      {playerStats && (
        <div>
          <h3>{playerStats.name}</h3>
          <p>Goals: {playerStats.goals}</p>
          <p>Assists: {playerStats.assists}</p>
          {/* Add more stats as needed */}
        </div>
      )}
    </div>
  );
};

export default Column1;
