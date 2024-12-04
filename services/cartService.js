import axios from '../utils/axios';
import { BASE_URL } from '@env';
const URL = `${BASE_URL}cart`
export const getCartByUserId = async (userId) => {
    try {
        const response = await axios.get(`${URL}/findCartByUserId`, { params: { userId } });
        return response;
    } catch (error) {
        console.error('Error finding cart:', error);
        throw new Error(error.response?.data || 'Something went wrong');
    }
};

export const addCourseToCart = async (cartId, courseId) => {
    try {
        const response = await axios.post(`${URL}/addCourseToCart`, { cartId, courseId });
        return response;
    } catch (error) {
        console.error('Error add Course to cart:', error);
        throw new Error(error.response?.data || 'Something went wrong');
    }
};
export const getAllCourseFromCart = async (cartId) => {
    try {
        const response = await axios.get(`${URL}/getAllCourseInCart`, { params: { cartId } });
        return response;
    } catch (error) {
        console.error('Error get All Course to cart:', error);
        throw new Error(error.response?.data || 'Something went wrong');
    }
};
