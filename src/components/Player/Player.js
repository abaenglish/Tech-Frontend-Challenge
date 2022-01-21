import React from 'react';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Player = () => {
  return (
    <section id='player-container'>
      <div id='player-controls'>
        <svg><SkipPreviousIcon /></svg>
        <svg id='play-icon'><PlayCircleIcon /></svg>
        <svg><SkipNextIcon /></svg>
      </div>
      <div id='player-slider'>
        <hr />
      </div>
      <div id='player-actions'>
        <svg><MoreHorizIcon /></svg>
      </div>
    </section>
  );
};

export default Player;
