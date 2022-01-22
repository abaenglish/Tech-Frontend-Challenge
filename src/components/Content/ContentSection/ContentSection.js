import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';

const ContentSection = ({ title , type}) => {

  let tracks = useSelector(state => state.content[type]);
  const bottomContainer = useRef();

  const clickHandler = (direction) => {
    return () => {
      const container = bottomContainer.current;
      let scrollNumber = container.clientWidth;
      direction === 'right'? container.scrollLeft += scrollNumber : container.scrollLeft -= scrollNumber;
    };
  };

  return (
    <section id='content-section-container'>

      <div id='top-container'>
        <h3>{title.toUpperCase()}</h3>
        <hr />
        <div id='arrow-buttons'>
          <svg onClick={clickHandler('left')}><ArrowBackIosIcon /></svg>
          <svg onClick={clickHandler('right')}><ArrowForwardIosIcon /></svg>
        </div>
      </div>

      <div id='bottom-container' ref={bottomContainer}>
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