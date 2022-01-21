import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ContentSection = (props) => {

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
        <div className='track'>
          <svg /> {/* MOCK TRACK */}
          <p>Track 01</p>
        </div>
      </div>

    </section>
  );
};

export default ContentSection;