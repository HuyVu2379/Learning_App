import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Đường dẫn tới file userSlice
import categoryReducer from "./slices/categorySlice"
import courseReducer from "./slices/courseSlice"
export const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
        course: courseReducer
    },
});

export default store;
