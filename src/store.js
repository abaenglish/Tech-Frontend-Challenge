import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './components/Content/contentSlice';

const store = configureStore({
    reducer: {
        content: contentReducer
    }
});

export default store;