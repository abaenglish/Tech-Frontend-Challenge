import React from 'react';
import avatar from '../../assets/images/avatar.svg';
// MUI ICONS
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const Navbar = () => {

    return (
        <nav>
            <div id='profile-picture'>
                <img src={avatar} alt='Profile avatar' />
                <p>Bob Smith</p>
            </div>
            <div id='nav-links'>
                <ul>
                    <li><svg><HeadphonesIcon /></svg><p>Discover</p></li>
                    <li><svg><SearchIcon /></svg><p>Search</p></li>
                    <li><svg><FavoriteIcon /></svg><p>Favourites</p></li>
                    <li><svg><PlayCircleIcon /></svg><p>Playlists</p></li>
                    <li><svg><PlaylistPlayIcon /></svg><p>Charts</p></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;