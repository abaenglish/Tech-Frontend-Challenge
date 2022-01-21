import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ContentSection = (props) => {

  const mockTracks = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'];

  return (
    <section id='content-section-container'>

      <div id='top-container'>
        <h3>{props.title.toUpperCase()}</h3>
        <hr />
        <div id='arrow-buttons'>
          <svg><ArrowBackIosIcon /></svg>
          <svg><ArrowForwardIosIcon /></svg>
        </div>
      </div>

      <div id='bottom-container'>
        {mockTracks.map((track) => {
          if(mockTracks.indexOf(track) === mockTracks.length - 1) {
            return (
              <div className='last-track' key={track}>
                <svg />
                <p>Track {track}</p>
              </div>
            )
          };

          return (
            <div className='track' key={track}>
              <svg />
              <p>Track {track}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default ContentSection;