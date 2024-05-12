
import axios from 'axios';
const API_URL = 'https://www.mecallapi.com/api/';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Adjust timeout as needed
});

// Interceptors for handling authorization header
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
