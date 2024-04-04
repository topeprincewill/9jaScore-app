import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponsiveAppBar from '../../components/Appbar';

const News = ({ darkMode, setDarkMode }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://newsapi.org/v2/top-headlines';
      const params = {
        country: 'gb',
        category: 'sports',
        apiKey: 'caf2234b7c854a4b9bb67d09674e6e29'
      };

      try {
        const response = await axios.get(url, { params });
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <div style={{backgroundImage: "linear-gradient(to bottom, #363db5,#bf933b, rgba(193, 193, 193,0 )"}}>
      <ResponsiveAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
      
      <h1 style = {{color: "white", fontFamily: "Open Sans"}}>Top Sports News</h1>
      {news.map((article, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', color: "blue", backgroundColor: "white", fontFamily: "Open Sans", borderRadius: "20px"  }}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default News;
