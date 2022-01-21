import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Spotify from '../../util/Spotify';

// INITIAL STATE
const initialState = {
    newReleases: [],
    featuredPlaylists: [],
    categories: []
};

// MIDDLEWRE
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
        builder.addCase(addReleases.fulfilled, (state, action) => {
            state.newReleases.push(action.payload);
        });

        builder.addCase(addPlaylists.fulfilled, (state, action) => {
            state.featuredPlaylists.push(action.payload);
        });

        builder.addCase(addCategories.fulfilled, (state, action) => {
            state.categories.push(action.payload);
        });
    }
});

export default contentSlice.reducer;