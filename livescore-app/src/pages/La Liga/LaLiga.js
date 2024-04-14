import React, { useState, useEffect } from 'react';
import laligalogo from './laliga.png';
import KeyboardNavigation from '../../components/Tabs';
import ResponsiveAppBar from '../../components/Appbar';
import { useDarkMode } from '../../DarkModeContext';

const LaLiga = ({ darkMode, setDarkMode }) => {
    const [fixtures, setFixtures] = useState([]);
    const [standings, setStandings] = useState([]);

    const { isDarkMode, toggleDarkMode } = useDarkMode();

    useEffect(() => {
        fetchFixtures();
        fetchStandings();
    }, []);

    const fetchFixtures = async () => {
        try {
            const response = await fetch('https://livescore-api.com/api-client/fixtures/matches.json?competition_id=3&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv');
            const data = await response.json();
            const fixturesData = data?.data?.fixtures ?? [];
            const categorizedFixtures = categorizeFixtures(fixturesData);
            setFixtures(categorizedFixtures);
        } catch (error) {
            console.error('Error fetching fixtures:', error);
        }
    };

    const fetchStandings = async () => {
        try {
            const response = await fetch('https://livescore-api.com/api-client/leagues/table.json?competition_id=3&key=SCovjgvsTZmo5KvM&secret=NzO5BEeccN7oRcEKO3f7jLAcKXBQI6Cv');
            const data = await response.json();
            const standingsData = data?.data?.table ?? [];
            setStandings(standingsData);
        } catch (error) {
            console.error('Error fetching standings:', error);
        }
    };

    const formatDate = (dateString) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const [year, month, day] = dateString.split('-');
        const date = new Date(year, month - 1, day);
        const dayOfWeek = daysOfWeek[date.getDay()];
        const monthName = months[date.getMonth()];
        return `${dayOfWeek} ${monthName} ${day}`;
    };

    const categorizeFixtures = (fixturesData) => {
        return fixturesData.map((fixture) => {
            return {
                ...fixture,
                formattedDate: formatDate(fixture.date),
                status: getStatus(fixture.date, fixture.time)
            };
        });
    };

    const getStatus = (dateString, timeString) => {
        const currentDate = new Date();
        const fixtureDate = new Date(dateString + 'T' + timeString);
        if (currentDate > fixtureDate) {
            return 'Finished';
        } else if (currentDate.getTime() === fixtureDate.getTime()) {
            return 'Ongoing';
        } else {
            return 'Scheduled';
        }
    };

    return (
        <div style={{background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222', backgroundColor: "#a38987" }}>
            <ResponsiveAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
            <KeyboardNavigation />
            <center><img src={laligalogo} alt="LaLiga" style={{ width: "20%" }}></img></center>
            <div style={{ display: 'flex' }}>
            <div className="Fixtures" style={{ flex: 1, overflowY: 'auto', maxHeight: '500px' }}>
                    <div style={{ position: 'sticky', top: 0, background: '', zIndex: 1 }}>
                        <center><h1 style={{ fontFamily: "Open Sans", color: "black" }}>Fixtures</h1></center>
                    </div>
                    <ul>
                        {fixtures.map((fixture) => (
                            <div key={fixture.id} style={{ fontFamily: "Open Sans", backgroundColor: "#ed3245", border: '1px solid red', borderRadius: '20px', marginBottom: '10px', padding: '10px' }}>
                                <div>
                                    <center> <h3 style={{ fontSize: '30px' }}>{fixture.home_name} vs {fixture.away_name}</h3></center>
                                    <center><p>Kickoff Time: {fixture.time}</p></center>
                                    <center><p> {fixture.formattedDate}</p></center>
                                    <p style={{ textAlign: 'right' }}>Status: {fixture.status}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="LaLigaStandings" style={{ flex: 1, overflowY: 'auto', maxHeight: '500px', fontFamily: "Open Sans" }}>
                    <div style={{ position: 'sticky', top: 0, background: '', zIndex: 1 }}>
                        <center><h1 style={{ fontFamily: "Open Sans", color: "black" }}>Standings</h1></center>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th style={{ textAlign: 'left', paddingLeft: '10px' }}>Team</th>
                                <th>PL</th>
                                <th>W</th>
                                <th>GD</th>
                                <th>PTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {standings.map((team, index) => (
                                <React.Fragment key={team.team_id}>
                                    <tr>
                                        <td>{team.rank}</td>
                                        <td style={{ textAlign: 'left', paddingLeft: '10px' }}>{team.name}</td>
                                        <td>{team.matches}</td>
                                        <td>{team.won}</td>
                                        <td>{team.goal_diff}</td>
                                        <td>{team.points}</td>
                                    </tr>
                                    {index < standings.length - 1 && (
                                        <tr style={{ height: '1px', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                                            <td colSpan="6"></td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LaLiga;
