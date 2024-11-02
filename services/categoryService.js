import axios from '../utils/axios';

const getAllCategory = () => {
    return axios.get('/api/category');
}
export {
    getAllCategory
}