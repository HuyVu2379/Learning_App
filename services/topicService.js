import axios from '../utils/axios';
import { BASE_URL } from '@env'
const URL = `${BASE_URL}/topic`;


export const findCourseByTopic = async (topicName) => {
    try {
        const response = await axios.get(`${URL}/findCourse`, { params: topicName });
        return response;
    } catch (error) {
        console.error('Error find course by topic:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
export const getTopics = async (limit) => {
    try {
        const response = await axios.get(`${URL}/getTopics`, { params: { limit } });
        return response;
    } catch (error) {
        console.error('Error fetching topics:', error);
        throw new Error(error.response?.message || 'Something went wrong');
    }
};
