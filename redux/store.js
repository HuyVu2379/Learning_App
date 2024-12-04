import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Đường dẫn tới file userSlice
import categoryReducer from "./slices/categorySlice"
import courseReducer from "./slices/courseSlice"
import topicReducer from "./slices/topicSlice"
import cartReducer from "./slices/cartSlice"
export const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
        course: courseReducer,
        topic: topicReducer,
        cart: cartReducer
    },
});

export default store;
