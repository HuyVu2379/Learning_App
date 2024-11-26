import axios from '../utils/axios';

const BASE_URL = 'http://192.168.2.9:8080/api/users';

// Lấy danh sách giáo viên
export const getAllTeacher = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/teachers`);
        return response; // Trả về danh sách giáo viên
    } catch (error) {
        console.error('Error fetching teachers:', error);
        throw new Error(error.response?.data || 'Something went wrong');
    }
};

export const findUserById = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/getUserById`, {
            params: { userId }, // Truyền userId qua query parameters
        });
        return response;
    } catch (error) {
        console.error(`Error fetching user with ID ${userId}:`, error);
        throw new Error(error.response?.data || 'Something went wrong');
    }
};


// Đăng nhập
export const checkLogin = async ({ email, password }) => {
    try {
        // console.log('Email:', email, 'Password:', password);
        const response = await axios.post(`${BASE_URL}/login`, { email, password });
        // console.log('Login response:', response);
        return response;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

