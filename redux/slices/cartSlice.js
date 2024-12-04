import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCartByUserId, addCourseToCart as addCourseToCartService, getAllCourseFromCart, removeCourseInCart } from '../../services/cartService';

const initialState = {
    userCart: {},
    loadingCart: false,
    errorCart: null,
    listCourse: [],
};

// Thunk để lấy cart theo userId
export const getCartByUser = createAsyncThunk(
    'cart/getCartByUser',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await getCartByUserId(userId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error finding cart');
        }
    }
);

// Thunk để thêm course vào cart
export const addCourse = createAsyncThunk(
    'cart/addCourse',
    async ({ cartId, courseId }, { rejectWithValue }) => {
        try {
            const response = await addCourseToCartService(cartId, courseId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error adding to cart');
        }
    }
);
export const handleGetAllCourseInCart = createAsyncThunk(
    'cart/getAllCourseInCart',
    async (cartId, { rejectWithValue }) => {
        try {
            const response = await getAllCourseFromCart(cartId);
            // Process response if needed
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error fetching courses');
        }
    }
);
export const handleRemoveCourseInCart = createAsyncThunk(
    'cart/handleRemoveCourseInCart',
    async ({ cartId, courseId }, { rejectWithValue }) => {
        try {
            console.log("check data in cartSlice:", cartId, courseId);

            const response = await removeCourseInCart(cartId, courseId);
            // Process response if needed
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Error delete course in cart');
        }
    }
);


// Slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Lấy cart
            .addCase(getCartByUser.pending, (state) => {
                state.loadingCart = true;
                state.errorCart = null; // Xóa lỗi trước đó
            })
            .addCase(getCartByUser.fulfilled, (state, action) => {
                state.loadingCart = false;
                state.userCart = action.payload;
            })
            .addCase(getCartByUser.rejected, (state, action) => {
                state.loadingCart = false;
                state.errorCart = action.payload;
            })
            // Thêm course vào cart
            .addCase(addCourse.pending, (state) => {
                state.loadingCart = true;
                state.errorCart = null; // Xóa lỗi trước đó
            })
            .addCase(addCourse.fulfilled, (state, action) => {
                state.loadingCart = false;
                // Thêm course mới vào listCourse
                state.listCourse = [...state.listCourse, action.payload];
            })
            .addCase(addCourse.rejected, (state, action) => {
                state.loadingCart = false;
                state.errorCart = action.payload;
            })
            // Xóa course khỏi cart
            .addCase(handleRemoveCourseInCart.pending, (state) => {
                state.loadingCart = true;
                state.errorCart = null; // Xóa lỗi trước đó
            })
            .addCase(handleRemoveCourseInCart.fulfilled, (state, action) => {
                state.loadingCart = false;
                // Xóa course khỏi listCourse dựa trên courseId
                state.listCourse = state.listCourse.filter(course => course.id !== action.payload.courseId);
            })
            .addCase(handleRemoveCourseInCart.rejected, (state, action) => {
                state.loadingCart = false;
                state.errorCart = action.payload;
            })
            // Lấy toàn bộ course
            .addCase(handleGetAllCourseInCart.pending, (state) => {
                state.loadingCart = true;
                state.errorCart = null;
            })
            .addCase(handleGetAllCourseInCart.fulfilled, (state, action) => {
                state.loadingCart = false;
                // Cập nhật listCourse với các course mới
                state.listCourse = action.payload;
            })
            .addCase(handleGetAllCourseInCart.rejected, (state, action) => {
                state.loadingCart = false;
                state.errorCart = action.payload;
            });
    },
});

export default cartSlice.reducer;
