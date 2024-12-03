import axios from '../utils/axios';
const BASE_URL = process.env.BASE_URL;
const URL = `${BASE_URL}courses`;


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
export const getCourseByName = async (nameCourse) => {
    try {
        const response = await axios.get(`${URL}/filterCourse`, { params: { nameCourse } });
        return response;
    } catch (error) {
        console.error('Error fetching inspires course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
