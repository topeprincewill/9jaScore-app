import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponsiveAppBar from '../../components/Appbar';
import DashboardBox from "../../components/DashBoardbox";

const Column3 = ({ darkMode, setDarkMode }) => {
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
    <DashboardBox gridArea="c" style = {{backgroundColor: "black"}}>
    
      
      
      <h3 style = {{color: "white", fontFamily: "Open Sans"}}>Breaking News</h3>
      {news.slice(0, 5).map((article, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', color: "blue", backgroundColor: "white", fontFamily: "Open Sans", borderRadius: "20px"  }}>
          <h5>{article.title}</h5>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
  
    </DashboardBox>
  );
};

export default Column3;
