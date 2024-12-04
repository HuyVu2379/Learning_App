import axios from '../utils/axios';
import { BASE_URL } from '@env';
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
export const findCourseByPK = async (courseId) => {
    try {
        const response = await axios.get(`${URL}/findCourseById`, { params: { courseId } });
        return response;
    } catch (error) {
        console.error('Error find course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
export const saveCourse = async (courseId, userId) => {
    try {
        const response = await axios.post(`${URL}/save`, { courseId, userId });
        return response;
    } catch (error) {
        console.error('Error save course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
export const registerCourse = async (courseId, userId) => {
    try {
        const response = await axios.post(`${URL}/register`, { courseId, userId });
        return response;
    } catch (error) {
        console.error('Error register course:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
export const getMyCourses = async (userId) => {
    try {
        console.log("userId from courseService: ", userId);
        const response = await axios.get(`${URL}/getAllMyCourse`, {
            params: { userId }, // Truyền userId vào query string
        });
        return response;
    } catch (error) {
        console.error('Error get My course:', error);
        throw new Error(error.response?.data?.message || error.message || 'Something went wrong');
    }
};
