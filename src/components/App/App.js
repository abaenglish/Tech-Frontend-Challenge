import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Player from '../Player/Player';
import Spotify from '../../util/Spotify';
import { addReleases, addPlaylists, addCategories } from '../Content/contentSlice';
import { useDispatch } from 'react-redux';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        Spotify.getAccessToken();
        dispatch(addReleases());
        dispatch(addPlaylists());
        dispatch(addCategories());
    });

    return (
        <div id="app-container">
            <Navbar />
            <div id='right-container'>
                <Header />
                <Content />
                <Player />
            </div>
        </div>
    )
};

export default App;
