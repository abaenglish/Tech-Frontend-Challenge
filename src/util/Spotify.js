import queryString from 'query-string';

let accessToken;
let clientId = process.env.REACT_APP_CLIENT_ID;
let clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const Spotify = {

    async getAccessToken() {
        if (accessToken) {
            return accessToken;
        };

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            body: queryString.stringify({
                grant_type: 'client_credentials',
            }),
            headers: {
                Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded'	
            }
        });

        try {
            if (!response.ok) {
                throw Error('Unsuccesful API request');
            };
            const jsonResponse = await response.json();
            accessToken = jsonResponse.access_token;
            return accessToken;
        } catch (error) {
            console.error(error);
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