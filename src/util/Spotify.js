let accessToken;
let redirectUri = 'https://tech-frontend-challenge.netlify.app';
let clientId = process.env.REACT_APP_CLIENT_ID;

const Spotify = {

    async getAccessToken() {
        
        if (accessToken) {
            return accessToken;
        };

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

        if (!accessTokenMatch) {
            // REDIRECTS TO REDIRECT URI AND RUNS METHOD AGAIN
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`;
        };

        if (accessTokenMatch) {
            accessToken = accessTokenMatch[1];
            return accessToken;
        };
    },

    async getNewReleases() {
        const token = await Spotify.getAccessToken();

        const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        return jsonResponse.albums.items.map(album => ({
            name: album.name,
            cover: album.images[0].url 
        }));
    },

    async getFeaturedPlaylists() {
        const token = await Spotify.getAccessToken();

        const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        return jsonResponse.playlists.items.map(playlist => ({
            name: playlist.name,
            cover: playlist.images[0].url
        }));
    },

    async getCategories() {
        let token = await Spotify.getAccessToken();

        const response = await fetch('https://api.spotify.com/v1/browse/categories', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jsonResponse = await response.json();

        return jsonResponse.categories.items.map((category) => ({
            name: category.name,
            cover: category.icons[0].url
        }));
    }
};

export default Spotify;