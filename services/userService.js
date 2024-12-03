import axios from '../utils/axios';
import { BASE_URL } from '@env';
const URL = `${BASE_URL}users`;
// Lấy danh sách giáo viên
export const getAllTeacher = async () => {
    try {
        const response = await axios.get(`${URL}/teachers`);
        return response; // Trả về danh sách giáo viên
    } catch (error) {
        console.error('Error fetching teachers:', error);
        throw new Error(error.response?.data || 'Something went wrong');
    }
};

export const findUserById = async (userId) => {
    try {
        const response = await axios.get(`${URL}/getUserById`, {
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
        console.log(URL);

        const response = await axios.post(`${URL}/login`, { email, password });
        // console.log('Login response:', response);
        return response;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

