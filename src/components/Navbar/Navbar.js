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
    const iconSize = { fontSize: 18 }

    return (
        <nav>
            <div id='profile-picture'>
                <img src={avatar} alt='Profile avatar' />
            </div>
            <div id='nav-links'>
                <ul>
                    <li><HeadphonesIcon sx={iconSize} /></li>
                    <li><SearchIcon sx={iconSize} /></li>
                    <li><FavoriteIcon sx={iconSize} /></li>
                    <li><PlayCircleIcon sx={iconSize} /></li>
                    <li><PlaylistPlayIcon sx={iconSize} /></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;