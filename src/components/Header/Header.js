import React from 'react';
import hero from '../../assets/images/hero.svg';

const Header = () => {
  return (
    <header>
        <img src={hero} alt='' />
        <div id='header-text'>
          <h1>Your favourite tunes</h1>
          <h2>All <span role='img' aria-label='Sun emoji'>☀️</span> and all <span role='img' aria-label='Moon emoji'>🌙</span></h2>
        </div>
    </header>
  );
};

export default Header;

