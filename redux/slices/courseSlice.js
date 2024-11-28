import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularCourse } from '../../services/courseService';

const initialState = {
    popularCourse: [],
    allCourse: [],
    inspiresCourse: [],
    loadingCourse: false,
    errorCourse: null
};


export const fetchPopularCourse = createAsyncThunk('course/getPopularCourse', async (_, { rejectWithValue }) => {
    try {
        const response = await getPopularCourse();
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error fetching popular course');
    }
});

// Slice
const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // Fetch popular course
            .addCase(fetchPopularCourse.pending, (state) => {
                state.loadingCourse = true
            })
            .addCase(fetchPopularCourse.fulfilled, (state, action) => {
                state.loadingCourse = false
                state.popularCourse = action.payload;
            })
            .addCase(fetchPopularCourse.rejected, (state, action) => {
                state.loading = false;
                state.errorCourse = action.payload;
            });
    },
});
export default courseSlice.reducer;
