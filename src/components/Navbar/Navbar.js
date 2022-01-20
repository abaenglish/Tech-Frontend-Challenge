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
    return (
        <nav>
            <div id='profile-picture'>
                <img src={avatar} alt='Profile avatar' />
            </div>
            <div id='nav-links'>
                <ul>
                    <li><HeadphonesIcon sx={{ fontSize: 20 }} /></li>
                    <li><SearchIcon sx={{ fontSize: 20 }} /></li>
                    <li><FavoriteIcon sx={{ fontSize: 20 }} /></li>
                    <li><PlayCircleIcon sx={{ fontSize: 20 }} /></li>
                    <li><PlaylistPlayIcon sx={{ fontSize: 20 }} /></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;