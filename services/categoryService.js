import axios from '../utils/axios';

const BASE_URL = 'http://192.168.2.9:8080/api';

// Lấy danh sách danh mục
export const getAllCategory = async (limit) => {
    try {
        // Sử dụng params để gửi limit qua query string
        const response = await axios.get(`${BASE_URL}/categories`, { params: { limit } });
        return response; // Trả về dữ liệu danh sách danh mục
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw new Error(error.response?.data || 'Something went wrong');
    }
};
