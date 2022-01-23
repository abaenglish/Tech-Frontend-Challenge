import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Spotify from '../../util/Spotify';

// INITIAL STATE
const initialState = {
    newReleases: {
        results: [],
        isLoading: true,
        isRejected: false
    },
    featuredPlaylists: {
        results: [],
        isLoading: true,
        isRejected: false
    },
    categories: {
        results: [],
        isLoading: true,
        isRejected: false
    },
};

// MIDDLEWARE THUNKS
export const addReleases = createAsyncThunk('content/addReleases',
    async () => {
        const response = await Spotify.getNewReleases();
        return response;
    }
);

export const addPlaylists = createAsyncThunk('content/addPlaylists',
    async () => {
        const response = await Spotify.getFeaturedPlaylists();
        return response;
    }
);

export const addCategories = createAsyncThunk('content/addCategories',
    async () => {
        const response = await Spotify.getCategories();
        return response;
    }
)

// SLICE CREATOR
const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // NEW RELEASES
        builder.addCase(addReleases.pending, (state) => {
            state.newReleases.isLoading = true;
            state.newReleases.isRejected = false;
        });

        builder.addCase(addReleases.fulfilled, (state, action) => {
            state.newReleases.isLoading = false;
            state.newReleases.isRejected = false;
            state.newReleases.results = action.payload;
        });

        builder.addCase(addReleases.rejected, (state) => {
            state.newReleases.isLoading = false;
            state.newReleases.isRejected = true;
        });

        // FEATURED PLAYLISTS
        builder.addCase(addPlaylists.pending, (state) => {
            state.featuredPlaylists.isLoading = true;
            state.featuredPlaylists.isRejected = false;
        });

        builder.addCase(addPlaylists.fulfilled, (state, action) => {
            state.featuredPlaylists.isLoading = false;
            state.featuredPlaylists.isRejected = false;
            state.featuredPlaylists.results = action.payload;
        });

        builder.addCase(addPlaylists.rejected, (state) => {
            state.featuredPlaylists.isLoading = false;
            state.featuredPlaylists.isRejected = true;
        });

        // CATEGORIES
        builder.addCase(addCategories.pending, (state) => {
            state.categories.isLoading = true;
            state.categories.isRejected = false;
        });

        builder.addCase(addCategories.fulfilled, (state, action) => {
            state.categories.isLoading = false;
            state.categories.isRejected = false;
            state.categories.results = action.payload;
        });

        builder.addCase(addCategories.rejected, (state) => {
            state.categories.isLoading = false;
            state.categories.isRejected = true;
        });
    }
});

export default contentSlice.reducer;