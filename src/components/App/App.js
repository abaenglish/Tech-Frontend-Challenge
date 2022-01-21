import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Player from '../Player/Player';

const App = () => {
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
