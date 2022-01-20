import React from 'react';
import avatar from '../../assets/images/avatar.svg';
import '../../assets/css/main.css';
// MUI ICONS
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

const Navbar = () => {
    const iconSize = { fontSize: 18 };

    return (
        <nav>
            <div id='profile-picture'>
                <img src={avatar} alt='Profile avatar' />
                <p>Bob Smith</p>
            </div>
            <div id='nav-links'>
                <ul>
                    <li><HeadphonesIcon sx={iconSize} /><p>Discover</p></li>
                    <li><SearchIcon sx={iconSize} /><p>Search</p></li>
                    <li><FavoriteIcon sx={iconSize} /><p>Favourites</p></li>
                    <li><PlayCircleIcon sx={iconSize} /><p>Playlists</p></li>
                    <li><PlaylistPlayIcon sx={iconSize} /><p>Charts</p></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;