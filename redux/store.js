import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Đường dẫn tới file userSlice

export const store = configureStore({
    reducer: {
        user: userReducer, // Thêm reducer từ userSlice
    },
});

export default store;
