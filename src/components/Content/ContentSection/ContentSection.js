import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ContentSection = (props) => {

  return (
    <section>
      <div id='top-container'>
        <h3>{props.title.toUpperCase()}</h3>
        <hr />
        <div id='arrow-buttons'>
          <svg><ArrowBackIosIcon /></svg>
          <svg><ArrowForwardIosIcon /></svg>
        </div>
      </div>
      <div id='bottom-container'>
      </div>
    </section>
  );
};

export default ContentSection;