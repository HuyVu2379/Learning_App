import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategory } from '../../services/categoryService';

const initialState = {
    categories: [],
    loadingCategory: false,
    errorCategory: null
};


export const fetchAllCategory = createAsyncThunk('category/getCategories', async (limit, { rejectWithValue }) => {
    try {
        const response = await getAllCategory(limit); // Gửi limit trực tiếp
        return response; // Trả về dữ liệu
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching categories');
    }
});

// Slice
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // Fetch categories
            .addCase(fetchAllCategory.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchAllCategory.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload;
            })
            .addCase(fetchAllCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});
export default categorySlice.reducer;
