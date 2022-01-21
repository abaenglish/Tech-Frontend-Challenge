import React from 'react';
import ContentSection from './ContentSection/ContentSection';

const Content = () => {
  return (
    <div id='content-container'>
      <ContentSection title={'Released this week'} />
      <ContentSection title={'Featured Playlists'} />
      <ContentSection title={'Browse genres'} />
    </div>
  );
};

export default Content;
