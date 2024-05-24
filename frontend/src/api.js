import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/api/user' });

export const login = (data) => API.post('/login', data);
export const signup = (data) => API.post('/signup', data);
