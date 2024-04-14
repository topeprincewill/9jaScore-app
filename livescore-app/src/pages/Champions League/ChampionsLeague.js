import React, { useState, useEffect } from 'react';
import championsleague from './champsleague.png';
import KeyboardNavigation from '../../components/Tabs';
import ResponsiveAppBar from '../../components/Appbar';
import { useDarkMode } from '../../DarkModeContext';

const ChampionsLeague = ({ darkMode, setDarkMode }) => {
    const [fixtures, setFixtures] = useState([]);
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        fetchFixtures();
    }, []);

    const fetchFixtures = async () => {
        try {
            const response = await fetch('https://livescore-api.com/api-client/fixtures/matches.json?key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv&competition_id=244 ');
            const data = await response.json();
            const fixturesData = data?.data?.fixtures ?? [];
            setFixtures(fixturesData);
        } catch (error) {
            console.error('Error fetching fixtures:', error);
        }
    };

    return (
        <div style={{background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222', backgroundColor: "#363db5", color: "white" }}>
            <ResponsiveAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
            <KeyboardNavigation />
            <center><img src={championsleague} alt="Champions League" style={{ width: '50vh' }} /></center>

            <div className="Fixtures" style={{ fontFamily: "Open Sans" }}>
                <center><h2>Fixtures</h2></center>
                <ul>
                    {fixtures.map((fixture) => (
                        <div key={fixture.id} style={{ fontFamily: "Open Sans", backgroundColor: "#bfd1f5", border: '1px solid #bfd1f5', borderRadius: '20px', marginBottom: '10px', padding: '10px' }}>
                            <div>
                                <center> <h3 style={{ fontSize: '30px' }}>{fixture.home_name} vs {fixture.away_name}</h3></center>
                                <center><p>Kickoff Time: {fixture.time}</p></center>
                                <center><p>Date: {fixture.date}</p></center>
                                
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChampionsLeague;
