
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponsiveAppBar from '../../components/Appbar';
import SearchAppBar from '../../components/SearchAppbar';
import { useDarkMode } from '../../DarkModeContext';

const VideoComponent = () => {
  const [videos, setVideos] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode, toggleDarkMode } = useDarkMode();


  useEffect(() => {
    const fetchData = async () => {
      const endpoint = 'https://www.scorebat.com/video-api/v3/feed/?token=MTQ5MDE1XzE3MTI4NTUxNDZfMmU1Y2RiMTUyYjlmZWNiOWI2NTIzMDQ0ZTc2ZGU3NjNjZGQ5MjY3Ng==';
      try {
        const response = await axios.get(endpoint);
        const relevantVideos = response.data.response.filter(match => {
          const competition = match.competition.toLowerCase();
          return (
            competition.includes('england: premier league') ||
            competition.includes('spain: la liga santander') ||
            competition.includes('champions league')
          );
        });
        setVideos(relevantVideos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = searchValue => {
    setSearchTerm(searchValue);
    if (searchValue !== "") {
      const filteredVideos = videos.filter(match =>
        match.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredVideos);
    } else {
      setFilteredResults(videos);
    }
  };

  return (
    <div style={{background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222', fontFamily: 'Open Sans' }}>

      <ResponsiveAppBar />
      <SearchAppBar
        type="text"
        placeholder="Search Highlights"
        onChange={(inputString) => handleSearch(inputString.target.value)} />
      <h1>Football Highlights</h1>
      {
        searchTerm.length > 0 ? (
          filteredResults.map((match) => (
            <div style={{ textAlign: 'left', padding: '5vh' }} key={match.title}>
              <h2>{match.title}</h2>
              <h3>{formatCompetition(match.competition)}</h3>
              <h4>{formatDate(new Date(match.date).toLocaleString())}</h4>
              <div>
                {match.videos.map((video) => (
                  <div key={video.title}>
                    <div dangerouslySetInnerHTML={{ __html: video.embed }} />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          videos &&
          videos.map((match) => (
            <div style={{ textAlign: 'left', padding: '5vh' }} key={match.title}>
              <h2>{match.title}</h2>
              <h3>{formatCompetition(match.competition)}</h3>
              <h4>{formatDate(new Date(match.date).toLocaleString())}</h4>
              <div>
                {match.videos.map((video) => (
                  <div key={video.title}>
                    <div dangerouslySetInnerHTML={{ __html: video.embed }} />
                  </div>
                ))}
              </div>
            </div>
          ))
        )
      }
    </div>
  );
};
const formatCompetition = (fullCompetition) => {
  const parts = fullCompetition.split(':');
  if (parts.length > 1) {
    return parts[1].trim();
  }
  return fullCompetition;
};
const formatDate = (dateUpdate) => {
  const partdate = dateUpdate.split(',');
  if (partdate.length > 1) {
    return partdate[0].trim();
  }
  return formatDate;
};

export default VideoComponent;




