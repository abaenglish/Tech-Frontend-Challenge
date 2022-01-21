import config from '../config';

let accessToken;
let redirectURI = 'http://localhost:3000/callback/';

const Spotify = {

    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expirationTimeMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expirationTimeMatch[1]);
            window.setTimeout(() => accessToken='', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }

        window.location = `https://accounts.spotify.com/authorize?client_id=${config.api.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    },

    async getNewReleases() {
        const token = Spotify.getAccessToken();

        const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        if(!jsonResponse) {
            return [];
        };

        return jsonResponse.albums.items.map(album => ({
                name: album.name,
                cover: album.images[0].url 
            }));
    },

    async getFeaturedPlaylists() {
        const token = Spotify.getAccessToken();

        const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        if(!jsonResponse) {
            return [];
        };

        return jsonResponse.playlists.items.map((playlist) => {
            return ({
                name: playlist.name,
                cover: playlist.images[0].url
            });
        });
    },

    async getCategories() {
        let token = Spotify.getAccessToken();

        const response = await fetch('https://api.spotify.com/v1/browse/categories', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        if(!jsonResponse) {
            return [];
        };

        return jsonResponse.categories.items.map((category) => {
            return ({
                name: category.name,
                cover: category.icons[0].url
            });
        });
    }
};

export default Spotify;