import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { findCourseByTopic, getTopics } from '../../services/topicService';

const initialState = {
    courses: [],
    allTopic: [],
    loadingFilter: false,
    errorFilter: null
};


export const fetchTopics = createAsyncThunk('topic/getTopics', async (limit, { rejectWithValue }) => {
    try {
        const response = await getTopics(limit);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error fetching topics');
    }
});
export const fetchCourseFilter = createAsyncThunk('topic/findCourseByTopic', async (topicName, { rejectWithValue }) => {
    try {
        const response = await findCourseByTopic(topicName);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error filter course');
    }
});

// Slice
const courseSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // Fetch topics
            .addCase(fetchTopics.pending, (state) => {
                state.loadingFilter = true
            })
            .addCase(fetchTopics.fulfilled, (state, action) => {
                state.loadingFilter = false
                state.allTopic = action.payload;
            })
            .addCase(fetchTopics.rejected, (state, action) => {
                state.loadingFilter = false;
                state.errorFilter = action.payload;
            })

            // filter course
            .addCase(fetchCourseFilter.pending, (state) => {
                state.loadingFilter = true
            })
            .addCase(fetchCourseFilter.fulfilled, (state, action) => {
                state.loadingCourse = false
                state.courses = action.payload;
            })
            .addCase(fetchCourseFilter.rejected, (state, action) => {
                state.loading = false;
                state.errorFilter = action.payload;
            })

            ;
    },
});
export default courseSlice.reducer;
