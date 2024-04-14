import React from 'react';
import DashboardBox from '../../DashBoardbox';
import { useDarkMode } from '../../DarkModeContext';

const Column2 = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    
    <div style = {{background: isDarkMode ? '#222' : '#fff', color: isDarkMode ? '#fff' : '#222',fontFamily: 'Open Sans'}}>
      <DashboardBox gridArea="b">
        <iframe
          src="https://www.scorebat.com/embed/livescore/?date=now&order=md&limit=10&leagues=8,7,15" // League IDs for Premier League, La Liga, and Champions League
          frameBorder="0"
          width="100%"
          height="760"
          allowFullScreen
          allow="autoplay; fullscreen"
          style={{ width: '100%', height: '760px', overflow: 'hidden', display: 'block' }}
          className="_scorebatEmbeddedPlayer_"
          title="ScoreBat Embedded Player"
        ></iframe>
        <script>
          {`
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'scorebat-jssdk'));
          `}
        </script>
      </DashboardBox>
    </div>
  );
}

export default Column2;
