import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTeacher, findUserById, checkLogin } from '../../services/userService';

const initialState = {
    teachers: [],
    userDetails: null,
    loggedInUser: null,
    loading: false,
    error: null,
};

// Async Thunks
export const performLogin = createAsyncThunk(
    'user/checkLogin',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await checkLogin({ email, password });
            if (response.errCode !== 0) {
                // Nếu có lỗi, trả về thông báo lỗi
                return rejectWithValue(response.message || 'Invalid credentials');
            }
            return response.data; // Trả về dữ liệu người dùng nếu đăng nhập thành công
        } catch (error) {
            // Xử lý lỗi khi gọi API
            console.error('Login error:', error);
            return rejectWithValue(error.response?.data || 'An error occurred during login.');
        }
    }
);


export const fetchUserById = createAsyncThunk(
    'user/findUserById',
    async (id, { rejectWithValue }) => {
        try {
            const user = await findUserById(id); // Lấy thông tin người dùng
            return user; // Trả về dữ liệu người dùng
        } catch (error) {
            return rejectWithValue(error.message || 'Error fetching user');
        }
    }
);


export const fetchTeachers = createAsyncThunk('user/getAllTeacher', async (_, { rejectWithValue }) => {
    try {
        const response = await getAllTeacher();
        return response; // Trả về danh sách giáo viên
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Error fetching teachers');
    }
});

// Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.loggedInUser = null; // Đăng xuất người dùng
        },
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(performLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(performLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.loggedInUser = action.payload;
            })
            .addCase(performLogin.rejected, (state, action) => {
                state.loading = false;
                console.log(action.payload);

                state.error = action.payload;
            })
            // Fetch user by ID
            .addCase(fetchUserById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.loading = false;
                state.userDetails = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch teachers
            .addCase(fetchTeachers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTeachers.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);

                state.teachers = action.payload;
            })
            .addCase(fetchTeachers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

// Actions and Reducer
export const { logout } = userSlice.actions;
export default userSlice.reducer;
