import axios from '../utils/axios';
import { BASE_URL } from '@env'
const URL = `${BASE_URL}/courses`;


export const getPopularCourse = async () => {
    try {
        const response = await axios.get(`${URL}/popular`);
        return response;
    } catch (error) {
        console.error('Error fetching popular course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
export const getInspiresCourse = async (categoryId, limit) => {
    try {
        const response = await axios.get(`${URL}/inspires`, { params: { categoryId, limit } });
        return response;
    } catch (error) {
        console.error('Error fetching inspires course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
