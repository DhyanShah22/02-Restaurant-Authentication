import axios from 'axios';

const API = axios.create({ baseURL: 'http://18.118.110.8:8000/api/user' });

export const login = async (data) => {
    try {
        const response = await API.post('/login', data);
        console.log('Login Response:', response);
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

export const signup = async (data) => {
    try {
        const response = await API.post('/signup', data);
        console.log('Signup Response:', response);
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

const handleAxiosError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
};
