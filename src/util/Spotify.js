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
    }
};

export default Spotify;