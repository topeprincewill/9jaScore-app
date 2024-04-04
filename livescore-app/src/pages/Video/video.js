import React, { useEffect, useState } from 'react';
import SearchAppBar from '../../components/SearchAppbar';
import ResponsiveAppBar from '../../components/Appbar';

const ScoreBatEmbed = ({ darkMode, setDarkMode }) => {
    

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div >
         <ResponsiveAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <SearchAppBar  placeholder="Search Latest Football Highlights" width = "200px"/></div>
    <div
    
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.scorebat.com/embed/" frameborder="0" width="600" height="760" allowfullscreen allow='autoplay; fullscreen' style="width:100%;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe>
        `,
      }}
    />
    </div>
  );
};

export default ScoreBatEmbed;
