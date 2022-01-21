import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';

const ContentSection = ({ title , type}) => {

  let tracks = useSelector(state => state.content[type]);

  return (
    <section id='content-section-container'>

      <div id='top-container'>
        <h3>{title.toUpperCase()}</h3>
        <hr />
        <div id='arrow-buttons'>
          <svg><ArrowBackIosIcon /></svg>
          <svg><ArrowForwardIosIcon /></svg>
        </div>
      </div>

      <div id='bottom-container'>
        {tracks.map((track) => {
          if(tracks.indexOf(track) === tracks.length - 1) {
            return (
              <div className='last-track' key={tracks.length -1}>
                <img src={track.cover} alt='' />
                <p>{track.name}</p>
              </div>
            )
          };

          return (
            <div className='track' key={tracks.indexOf(track)}>
              <img src={track.cover} alt='' />
              <p>{track.name}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default ContentSection;