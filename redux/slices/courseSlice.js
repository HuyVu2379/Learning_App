import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPopularCourse, getInspiresCourse, getCourseByName, saveCourse, findCourseByPK, registerCourse, getMyCourses } from '../../services/courseService';

const initialState = {
    popularCourse: [],
    allCourse: [],
    searchCourses: [],
    inspiresCourse: [],
    loadingCourse: false,
    myCourse: [],
    errorCourse: null,
    courseDetail: {}
};

// Async Thunks
export const fetchPopularCourse = createAsyncThunk('course/getPopularCourse', async (_, { rejectWithValue }) => {
    try {
        const response = await getPopularCourse();
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error fetching popular course');
    }
});

export const fetchInspiresCourse = createAsyncThunk('course/getInspiresCourse', async ({ categoryId, limit }, { rejectWithValue }) => {
    try {
        const response = await getInspiresCourse(categoryId, limit);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error fetching inspires course');
    }
});

export const searchCourseByName = createAsyncThunk('course/searchCourse', async ({ nameCourse }, { rejectWithValue }) => {
    try {
        const response = await getCourseByName(nameCourse);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error searching course by name');
    }
});

export const findCourseById = createAsyncThunk('course/findCourseById', async (courseId, { rejectWithValue }) => {
    try {
        const response = await findCourseByPK(courseId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error find course by ID');
    }
});

export const handleSaveCourse = createAsyncThunk('course/saveCourse', async ({ courseId, userId }, { rejectWithValue }) => {
    try {
        const response = await saveCourse(courseId, userId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error saving course');
    }
});

export const handleRegisterCourse = createAsyncThunk('course/registerCourse', async ({ courseId, userId }, { rejectWithValue }) => {
    try {
        const response = await registerCourse(courseId, userId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error registering course');
    }
});

export const fetchMyCourses = createAsyncThunk('course/getMyCourses', async (userId, { rejectWithValue }) => {
    try {
        console.log("userId from courseSlice: ", userId);
        const response = await getMyCourses(userId);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error fetching my courses');
    }
});

// Slice
const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch popular course
            .addCase(fetchPopularCourse.pending, (state) => {
                state.loadingCourse = true;
                state.errorCourse = null; // Clear previous error
            })
            .addCase(fetchPopularCourse.fulfilled, (state, action) => {
                state.loadingCourse = false;
                state.popularCourse = action.payload;
            })
            .addCase(fetchPopularCourse.rejected, (state, action) => {
                state.loadingCourse = false;
                state.errorCourse = action.payload; // Set error message
            })

            // Fetch inspires course
            .addCase(fetchInspiresCourse.pending, (state) => {
                state.loadingCourse = true;
                state.errorCourse = null; // Clear previous error
            })
            .addCase(fetchInspiresCourse.fulfilled, (state, action) => {
                state.loadingCourse = false;
                state.inspiresCourse = action.payload;
            })
            .addCase(fetchInspiresCourse.rejected, (state, action) => {
                state.loadingCourse = false;
                state.errorCourse = action.payload; // Set error message
            })

            // Find course by ID
            .addCase(findCourseById.pending, (state) => {
                state.loadingCourse = true;
                state.errorCourse = null;
            })
            .addCase(findCourseById.fulfilled, (state, action) => {
                state.loadingCourse = false;
                state.courseDetail = action.payload;
            })
            .addCase(findCourseById.rejected, (state, action) => {
                state.loadingCourse = false;
                state.errorCourse = action.payload;
            })

            // Save course
            .addCase(handleSaveCourse.pending, (state) => {
                state.loadingCourse = true;
                state.errorCourse = null; // Clear previous error
            })
            .addCase(handleSaveCourse.fulfilled, (state, action) => {
                state.loadingCourse = false;
            })
            .addCase(handleSaveCourse.rejected, (state, action) => {
                state.loadingCourse = false;
                state.errorCourse = action.payload; // Set error message
            })

            // Register course
            .addCase(handleRegisterCourse.pending, (state) => {
                state.loadingCourse = true;
                state.errorCourse = null; // Clear previous error
            })
            .addCase(handleRegisterCourse.fulfilled, (state, action) => {
                state.loadingCourse = false;
                state.myCourse = [...state.myCourse, action.payload];
            })
            .addCase(handleRegisterCourse.rejected, (state, action) => {
                state.loadingCourse = false;
                state.errorCourse = action.payload;
            })

            // Fetch My Courses
            .addCase(fetchMyCourses.pending, (state) => {
                state.loadingCourse = true;
                state.errorCourse = null; // Clear previous error
            })
            .addCase(fetchMyCourses.fulfilled, (state, action) => {
                state.loadingCourse = false;
                state.myCourse = action.payload;
            })
            .addCase(fetchMyCourses.rejected, (state, action) => {
                state.loadingCourse = false;
                state.errorCourse = action.payload;
            });
    },
});

export default courseSlice.reducer;
