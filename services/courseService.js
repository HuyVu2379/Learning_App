import axios from '../utils/axios';

const BASE_URL = 'http://192.168.2.9:8080/api/courses';


export const getPopularCourse = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/popular`);
        return response;
    } catch (error) {
        console.error('Error fetching popular course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
