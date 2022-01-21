import React from 'react';
import ContentSection from './ContentSection/ContentSection';

const Content = () => {
  return (
    <div id='content-container'>
      <ContentSection title={'Released this week'} type='newReleases' />
      <ContentSection title={'Featured Playlists'} type='featuredPlaylists' />
      <ContentSection title={'Browse genres'} type='categories' />
    </div>
  );
};

export default Content;
